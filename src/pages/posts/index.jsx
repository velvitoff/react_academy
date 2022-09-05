import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { blogNameRequest, postsRequest } from '../../services/bloggerService';
import PostDisplay from './postDisplay';

import SkeletonPostDisplay from './skeletonPostDisplay';
import MainStackWrapper from './mainStackWrapper';
import PostsTitle from './postsTitle';
import Localize from '../../components/common/localize';

export default function Posts() {

    let {blogId} = useParams();
    const [blogName, setBlogName] = useState("");

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
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

            blogNameRequest(blogId)
                .then((response) => {
                    setBlogName(response.data.name);
                })
        }
    }, [blogId])


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

    if (items.length === 0) {
        return (<Localize input={"This blog doesn't have any posts yet"} />);
    }

    return (
        <MainStackWrapper>
            <PostsTitle blogName={blogName} />
            {items.map((item) => (
                <PostDisplay post={item} key={item.id} />
            ))}
        </MainStackWrapper>
    );
}