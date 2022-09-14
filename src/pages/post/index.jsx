import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import CircularProgress from '@mui/material/CircularProgress';

import { postRequest } from '../../services/bloggerService';
import './post.css';
import { Box, Typography } from '@mui/material';
import Localize from '../../components/common/localize';

export default function Post() {

    let { blogId, postId } = useParams();

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        postRequest(blogId, postId)
            .then((response) => {
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
        return (
            <Box sx={{textAlign:'center', mt:20}}>
                <CircularProgress />
            </Box>
        );
    }
    if (isLoadingError) {
        return (<Localize input="Loading error..."/>);
    }

    return (
        <div className="post">
            <Typography variant="h4">{data.title}</Typography>
            {data.content === undefined ? null : <>{parse(data.content)}</>}
        </div>
    );
}