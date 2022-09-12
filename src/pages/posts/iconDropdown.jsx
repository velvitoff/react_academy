import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import Localize from '../../components/common/localize';
import DeletePostModal from './search/deletePostModal';
import { deletePostRequest } from '../../services/bloggerService';
import { Alert, Snackbar } from '@mui/material';

export default function IconDropdown({ blogId, postId, deletePostCallback}) {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleDeleteClick = () => {
        setDeleteModalOpen(true);
    }

    const menuItems = [
        { text: 'Delete', func: handleDeleteClick }
    ];

    const deleteModalCloseCallback = (resultBool) => {
        setDeleteModalOpen(false);
        if (resultBool) {
            deletePostRequest(blogId, postId)
                .then((response) => {
                    deletePostCallback(postId);
                })
                .catch((err) => {
                    setShowErrorSnackbar(true);
                    window.setTimeout(() => setShowErrorSnackbar(false), 5000);
                })
        }
    }

    return (
        <>
            <MoreHorizIcon onClick={handleOpenNavMenu} />
            <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.text} onClick={handleCloseNavMenu}>
                        <Typography onClick={item.func}>
                            <Localize input={item.text} />
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>

            <DeletePostModal open={deleteModalOpen} closeCallback={deleteModalCloseCallback} />

            <Snackbar open={showErrorSnackbar} >
                <Alert severity="error" sx={{ width: '100%' }}>
                    <Localize input={"Failed to delete an article"} />
                </Alert>
            </Snackbar>
        </>
    );
}