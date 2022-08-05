import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/home/home';
import Posts from './pages/posts/posts';
import { PATHS } from './utils/constants/paths';

export default function RoutesComponent() {
    return (
        <Routes>
            <Route exact path={PATHS.root} element={<Home />} />
            <Route path={PATHS.posts} element={<Posts />} />
        </Routes>
    );
}