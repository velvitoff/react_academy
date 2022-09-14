import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { addPostRequest, editPostRequest, postRequest } from '../../services/bloggerService';

import './postEditor.css';
import PostForm from './postForm';
import { path } from '../../utils/constants/path';

export default function PostEditor() {

    let { blogId, postId } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const isEdit = !!postId;

    useEffect(() => {
        if (isEdit) {
            setIsLoading(true);
            postRequest(blogId, postId)
                .then((response) => {
                    setInitialData(response.data);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }, [])

    const publishCallback = (data) => {
        if (isEdit) {
            editPostRequest(blogId, initialData, data)
                .then((response) => {
                    navigate(`${path.POST}/${blogId}/${postId}`);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            addPostRequest(blogId, data)
                .then((response) => {
                    navigate(`${path.POSTS}/${blogId}`)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    if (isLoading) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <PostForm
            isEdit={isEdit}
            publishCallback={publishCallback}
            initialData={initialData}
        />
    );
}