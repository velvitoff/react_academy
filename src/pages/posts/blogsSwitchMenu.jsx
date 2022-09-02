import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { blogsRequest } from '../../services/bloggerService';
import { setActiveBlog } from '../../store/slices/bloggerSettingsSlice';
import BlogDisplay from './blogDisplay';
import { Stack } from '@mui/material';

export default function BlogsSwitchMenu({ blogId }) {
    const dispatch = useDispatch();

    const [chosenItem, setChosenItem] = useState({});
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

    const handleFetchedItems = (items) => {
        if (blogId === '') {
            dispatch(setActiveBlog(items[0].id))
            //memoize request
        }
        else {
            setChosenItem(items.filter((item) => item.id === blogId)[0]);
            setItems(items.filter((item) => item !== blogId));
        }
    }

    useEffect(() => {
        setIsLoading(true);
        blogsRequest()
            .then((response) => {
                handleFetchedItems(response.data.items);
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
        <Stack
            justifyContent="center"
            alignItems="center"
        >
            <BlogDisplay blogData={chosenItem} onClick={handleOpenNavMenu} />
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
                            scolor="text.primary"
                        >
                            {item.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Stack>
    );
}