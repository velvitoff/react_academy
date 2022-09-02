import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { postsRequest } from '../../services/bloggerService';
import { selectActiveBlogId, selectActiveBlogName } from '../../store/slices/bloggerSettingsSlice';
import PostDisplay from './postDisplay';
import { Typography } from '@mui/material';
import Localize from '../../components/common/localize';

export default function Posts() {

    const blogId = useSelector(selectActiveBlogId);
    const blogName = useSelector(selectActiveBlogName);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingError, setIsLoadingError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (blogId !== '') {
            postsRequest(blogId)
                .then((response) => {
                    setItems(response.data.items);
                    console.log(response.data.items[0])
                    setIsLoadingError(false);
                })
                .catch((err) => {
                    setIsLoadingError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }, [blogId])

    if (blogId === '') {
        return (<p>No blog chosen</p>);
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
            mt={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2.5}
        >
            <Typography variant="h4">
                <Localize input="Posts for"/> {" " + blogName}
            </Typography>
            {items.map((item) => (
                <PostDisplay post={item} key={item.id} />
            ))}
        </Stack>
    );
}