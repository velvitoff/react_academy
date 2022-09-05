import React, { useState, useEffect } from 'react';

import { blogsRequest } from '../../services/bloggerService';
import BlogDisplay from './blogDisplay';
import MainGridWrapper from './mainGridWrapper';
import SkeletonBlogDisplay from './skeletonBlogDisplay';

export default function Blogs() {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        blogsRequest()
            .then((response) => {
                setItems(response.data.items);
                setIsLoadingError(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoadingError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return (
            <MainGridWrapper>
                <SkeletonBlogDisplay />
                <SkeletonBlogDisplay />
            </MainGridWrapper>
        );
    }
    if (isLoadingError) {
        return (<p>Error loading...</p>);
    }
    if (items.length === 0) {
        return (<p>No blogs</p>);
    }

    return (
        <MainGridWrapper>
            {items.map((item) => (
                <BlogDisplay blog={item} key={item.id}/>
            ))}
        </MainGridWrapper>
    );
}