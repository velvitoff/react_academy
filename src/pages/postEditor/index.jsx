import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

import { addPostRequest, postRequest } from '../../services/bloggerService';

import './postEditor.css';
import PostEditorLayout from './postEditorLayout';

export default function PostEditor() {

    let { blogId, postId } = useParams();
    const navigate = useNavigate();
    const isEdit = !!postId;

    useEffect(() => {
        if (postId) {
            postRequest(blogId, postId)
                .then((response) => {
                    console.log(response.data);
                })
        }
    }, [])

    const publishCallback = (data) => {
        addPostRequest(blogId, data)
        .then((response) => {
            navigate(`/posts/${blogId}`)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <PostEditorLayout isEdit={isEdit} publishCallback={publishCallback}/>
    );
}