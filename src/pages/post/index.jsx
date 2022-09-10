import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { postRequest } from '../../services/bloggerService';
import PostTitle from './postTitle';
import './post.css';

export default function Post() {

    let { blogId, postId } = useParams();

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        postRequest(blogId, postId)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setIsLoadingError(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoadingError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return (<p>is loading</p>);
    }
    if (isLoadingError) {
        return (<p>is loading error</p>);
    }

    return (
        <>
            <PostTitle text={data.title} />
            {data.content === undefined ? null : <div className="post">{parse(data.content)}</div>}
        </>
    );
}