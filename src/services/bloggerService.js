import axios from 'axios';

const address = 'https://www.googleapis.com/blogger/v3';

export const blogRequest = (blogId) => {
    return axios.get(`${address}/blogs/${blogId}`, {
        params: {
            key: process.env.REACT_APP_BLOGGER_API_KEY,
        }
    });
}

export const postsRequest = (blogId) => {
    return axios.get(`${address}/blogs/${blogId}/posts`, {
        params: {
            key: process.env.REACT_APP_BLOGGER_API_KEY,
            fields: 'kind,items(kind,id,url,title,author,replies)'
        }
    });
}