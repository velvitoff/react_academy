import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { postsRequest } from '../../services/bloggerService';
import { selectActiveBlogId, selectActiveBlogName } from '../../store/slices/bloggerSettingsSlice';
import PostDisplay from './postDisplay';

import SkeletonPostDisplay from './skeletonPostDisplay';
import MainStackWrap from './mainStackWrap';
import PostsTitle from './postsTitle';
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
        return (
            <MainStackWrap>
                <PostsTitle blogName={blogName} />
                <SkeletonPostDisplay />
                <SkeletonPostDisplay />
                <SkeletonPostDisplay />
            </MainStackWrap>
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

    if (items.length === 0) {
        return (<Localize input={"This blog doesn't have any posts yet"} />);
    }

    return (
        <MainStackWrap>
            <PostsTitle blogName={blogName} />
            {items.map((item) => (
                <PostDisplay post={item} key={item.id} />
            ))}
        </MainStackWrap>
    );
}