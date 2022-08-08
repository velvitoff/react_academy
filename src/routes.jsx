import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Posts from './pages/posts';
import { PATH } from './utils/constants/path';

export default function RoutesComponent() {
    return (
        <Routes>
            <Route exact path={PATH.ROOT} element={<Home />} />
            <Route path={PATH.POSTS} element={<Posts />} />
        </Routes>
    );
}