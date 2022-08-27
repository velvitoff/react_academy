import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectActiveBlogId } from '../../store/slices/bloggerSettingsSlice';
import PostsList from './postsList';
import { postsRequest } from './../../services/bloggerService';

export default function Posts(){

    const blogId = useSelector(selectActiveBlogId);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingError, setIsLoadingError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        postsRequest(blogId)
        .then((response) => {
            setData(response.data);
            setIsLoadingError(false);
        })
        .catch((err) => {
            setIsLoadingError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })

    }, [])

    return(
        <>
            <p>Posts</p>
            {isLoading ? <p>Loading...</p> : <PostsList items={data.items}/>}
            {isLoadingError && <p>Loading error</p>}
        </>
    );
}