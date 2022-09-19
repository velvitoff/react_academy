import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Stack } from '@mui/material';

import { postRequest } from '../../services/bloggerService';
import './post.css';
import Localize from '../../components/common/localize';
import { path } from '../../utils/constants/path';


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
            <Box sx={{ textAlign: 'center', mt: 20 }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isLoadingError) {
        return (<Localize input="Loading error..." />);
    }

    return (
        <Box className="post" sx={{ backgroundColor: "primary.articleBackground" }}>
            <Stack direction="row" spacing={2} alignItems='center' justifyContent='center'>
                <Typography variant="h4">{data.title}</Typography>
                <Link to={`${path.POST_EDIT}/${blogId}/${postId}`} style={{textDecoration:''}}>
                    <EditIcon sx={{ color: "background.iconColor" }}/>
                </Link>
            </Stack>
            {data.content === undefined ? null : <>{parse(data.content)}</>}
        </Box>
    );
}