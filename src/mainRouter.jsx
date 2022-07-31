import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/home';
import Blogs from './pages/blogs/blogs';
import Blog from './pages/blog/blog';
import Posts from './pages/posts/posts';
import Post from './pages/post/post';

export default function MainRouter(props){
  return(
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/post" element={<Post/>} />

      </Routes>
    </BrowserRouter>
  )
  
}