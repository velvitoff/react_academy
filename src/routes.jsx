import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Posts from './pages/posts';
import Blogs from './pages/blogs';
import Post from './pages/post';
import { path } from './utils/constants/path';

export default function RoutesComponent() {
    return (
        <Routes>
            <Route exact path={path.ROOT} element={<Home />} />
            <Route path={path.BLOGS} element={<Blogs />} />
            <Route path={`${path.POSTS}/:blogId`} element={<Posts />} />
            <Route path={`${path.POST}/:blogId/:postId`} element={<Post />} />
        </Routes>
    );
}