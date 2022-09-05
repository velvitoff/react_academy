import axios from 'axios';
import { getAccessTokenWithBearer } from '../services/authService';

const address = 'https://www.googleapis.com/blogger/v3';

export const blogRequest = (blogId) => {
    return axios.get(`${address}/blogs/${blogId}`, {
        params: {
            key: process.env.REACT_APP_BLOGGER_API_KEY,
        }
    });
}

export const blogNameRequest = (blogId) => {
    return axios.get(`${address}/blogs/${blogId}`, {
        params: {
            key: process.env.REACT_APP_BLOGGER_API_KEY,
            fields: 'name'
        }
    });
}

export const postsRequest = (blogId) => {
    return axios.get(`${address}/blogs/${blogId}/posts`, {
        params: {
            key: process.env.REACT_APP_BLOGGER_API_KEY,
            fields: 'kind,items(kind,id,url,title,author,replies,published,updated)'
        }
    });
}

export const blogsRequest = () => {
    return axios.get(`${address}/users/self/blogs`, {
        params: {
            key: process.env.REACT_APP_BLOGGER_API_KEY,
        },
        headers: {
            Authorization: getAccessTokenWithBearer()
        }
    })
}