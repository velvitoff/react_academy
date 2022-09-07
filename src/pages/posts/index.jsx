import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { blogNameRequest, postSearchRequest, postsRequest } from '../../services/bloggerService';
import PostDisplay from './postDisplay';

import SkeletonPostDisplay from './skeletonPostDisplay';
import MainStackWrapper from './mainStackWrapper';
import PostsTitle from './postsTitle';
import Localize from '../../components/common/localize';
import PostSearchBar from './search/postSearchBar';
import { Box } from '@mui/system';

export default function Posts() {

    let { blogId } = useParams();
    const [blogName, setBlogName] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);

    const performPostsRequest = () => {
        postsRequest(blogId)
            .then((response) => {
                setItems(response.data.items);
                setAllItems(response.data.items);
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
                    setItems(response.data.items);
                }
                else {
                    setItems([]);
                }
            })
            .catch((err) => {
                setItems([]);
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
            setItems(allItems);
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

    if (blogId === '') {
        return (<p>No blog chosen</p>);
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
            {items.map((item) => (
                <PostDisplay post={item} key={item.id} />
            ))}
            {items.length === 0 &&
                <Box sx={{ mt: 2 }}>
                    <Localize input={"No posts to display"} />
                </Box>
            }
        </MainStackWrapper>
    );
}