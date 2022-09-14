import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { blogNameRequest, postSearchRequest, postsRequest } from '../../services/bloggerService';
import PostDisplay from './postDisplay';
import SkeletonPostDisplay from './skeletonPostDisplay';
import MainStackWrapper from './mainStackWrapper';
import PostsTitle from './postsTitle';
import Localize from '../../components/common/localize';
import PostSearchBar from './search/postSearchBar';
import { path } from '../../utils/constants/path';

export default function Posts() {

    let { blogId } = useParams();
    const [blogName, setBlogName] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [items, setItems] = useState([]);

    const performPostsRequest = () => {
        postsRequest(blogId)
            .then((response) => {
                setFilteredItems(response.data.items);
                setItems(response.data.items);
                setIsLoadingError(false);
            })
            .catch((err) => {
                setIsLoadingError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const performSearchRequest = (searchTerm) => {
        postSearchRequest(blogId, searchTerm)
            .then((response) => {
                if (response.data.items !== undefined) {
                    setFilteredItems(response.data.items);
                }
                else {
                    setItems([]);
                }
            })
            .catch((err) => {
                setFilteredItems([]);
            })
    }

    const performBlogNameRequest = () => {
        blogNameRequest(blogId)
            .then((response) => {
                setBlogName(response.data.name);
            })
    }

    const searchCallback = (term) => {
        if (term === "") {
            setFilteredItems(items);
        }
        else {
            performSearchRequest(term);
        }

    }

    useEffect(() => {
        setIsLoading(true);
        if (blogId !== '') {
            performPostsRequest();
            performBlogNameRequest();
        }
    }, [])

    const deletePostCallback = (postId) => {
        setItems(items.filter(item => item.id !== postId));
        setFilteredItems(filteredItems.filter(item => item.id !== postId));
    }


    if (isLoading) {
        return (
            <MainStackWrapper>
                <PostsTitle blogName={blogName} />
                <SkeletonPostDisplay />
                <SkeletonPostDisplay />
                <SkeletonPostDisplay />
            </MainStackWrapper>
        )
    }

    if (isLoadingError) {
        return (
            <>
                <PostsTitle blogName={blogName} />
                <Localize input={"Loading error"} />
            </>
        );
    }

    return (
        <MainStackWrapper>
            <PostsTitle blogName={blogName} />
            <PostSearchBar searchCallback={searchCallback} />

            <Link to={`${path.POST_CREATE}/${blogId}`} style={{ textDecoration: 'none' }}>
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <AddIcon sx={{color:"text.primary"}}/>
                    <Typography color="text.primary">
                        <Localize input="New article" />
                    </Typography>
                </Stack>
            </Link>

            {filteredItems.map((item) => (
                <PostDisplay blogId={blogId} post={item} key={item.id} deletePostCallback={deletePostCallback} />
            ))}
            {filteredItems.length === 0 &&
                <Box sx={{ mt: 2 }}>
                    <Localize input={"No posts to display"} />
                </Box>
            }
        </MainStackWrapper>
    );
}