import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { blogsRequest } from '../../services/bloggerService';
import { selectThemeObject } from '../../store/slices/userSettingsSlice';
import { setActiveBlog } from '../../store/slices/bloggerSettingsSlice';

export default function BlogsSwitchMenu({ blogId }) {
    const dispatch = useDispatch();
    const theme = useSelector(selectThemeObject);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingError, setIsLoadingError] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    useEffect(() => {
        setIsLoading(true);
        blogsRequest()
            .then((response) => {
                setItems(response.data.items
                    .filter((item) => item.id !== blogId));
                setIsLoadingError(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoadingError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [blogId])

    const changeActiveBlog = (newBlogId) => {
        console.log(`old blog id: ${blogId}, new: ${newBlogId}`)
        if (blogId !== newBlogId) {
            dispatch(setActiveBlog(newBlogId));
        }
    }

    if (isLoading) {
        return (<p>Is loading..</p>);
    }
    if (isLoadingError) {
        return (<p>Error loading...</p>);
    }
    if (items.length === 0) {
        return (<p>No items</p>);
    }

    return (
        <Box>
            <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {items.map((item) => (
                    <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                        <Typography
                            onClick={() => changeActiveBlog(item.id)}
                            textAlign="center"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            {item.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}