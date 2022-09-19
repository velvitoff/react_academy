import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import SkeletonPostDisplay from './skeletonPostDisplay';
import MainStackWrapper from './mainStackWrapper';
import PostsTitle from './postsTitle';
import Localize from '../../components/common/localize';
import PostSearchBar from './search/postSearchBar';
import { blogNameRequest, postSearchRequest, postsNextPageRequest, postsRequest } from '../../services/bloggerService';
import NewArticleButton from './newArticleButton';
import PostsList from './postsList';
import { Box, Typography } from '@mui/material';
import { useRef } from 'react';

export default function Posts() {

    let { blogId } = useParams();
    const [blogName, setBlogName] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const items = useRef([]);
    const nextPageToken = useRef("");
    const nextSearchPageToken = useRef("");
    const searchTerm = useRef("");

    const handleNextPageToken = (response) => {
        if (response.data.nextPageToken)
            nextPageToken.current = response.data.nextPageToken;
        else
            nextPageToken.current = "";
    }

    const handleNextSearchPageToken = (response) => {
        if (response.data.nextPageToken)
            nextSearchPageToken.current = response.data.nextPageToken;
        else
            nextSearchPageToken.current = "";
    }

    const performPostsRequest = () => {
        postsRequest(blogId)
            .then((response) => {
                setFilteredItems(response.data.items);
                items.current = response.data.items;

                setIsLoadingError(false);
                handleNextPageToken(response);
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
                    handleNextSearchPageToken(response);
                }
                else {
                    setFilteredItems([]);
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

    useEffect(() => {
        setIsLoading(true);
        if (blogId !== '') {
            performPostsRequest();
            performBlogNameRequest();
        }
    }, [])

    const searchCallback = (term) => {
        searchTerm.current = term;
        if (term === "") {
            setFilteredItems(items.current);
        }
        else {
            performSearchRequest(term);
        }

    }

    const deletePostCallback = (postId) => {
        items.current = items.current.filter(item => item.id !== postId);
        setFilteredItems(items.current.filter(item => item.id !== postId))
    }

    const fetchNextItems = () => {
        if (!!searchTerm.current && !!nextSearchPageToken.current) {
            postsNextPageRequest(blogId, nextSearchPageToken.current)
                .then((response) => {
                    setFilteredItems(filteredItems.concat(response.data.items));
                    handleNextSearchPageToken(response);
                })
        }
        else if (!searchTerm.current && !!nextPageToken.current) {
            postsNextPageRequest(blogId, nextPageToken.current)
                .then((response) => {
                    const result = items.current.concat(response.data.items);
                    items.current = result;
                    setFilteredItems(result);
                    handleNextPageToken(response);
                })
        }
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
        <Box sx={{ mb: 7 }}>
            <MainStackWrapper>
                <PostsTitle blogName={blogName} />
                <PostSearchBar searchCallback={searchCallback} />
                <NewArticleButton blogId={blogId} />
                <InfiniteScroll
                    dataLength={filteredItems.length}
                    hasMore={!!searchTerm.current ? !!nextSearchPageToken.current : !!nextPageToken.current}
                    loader={
                        <Typography textAlign='center'>
                            <Localize input="Loading..." />
                        </Typography>
                    }
                    next={fetchNextItems}
                    endMessage={""}
                >
                    <PostsList items={filteredItems} blogId={blogId} deletePostCallback={deletePostCallback} />
                </InfiniteScroll>
            </MainStackWrapper>
        </Box>
    );
}