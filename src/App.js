import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Container from '@mui/material/Box';
import Home from './pages/home/home';
import Posts from './pages/posts/posts';
import NavBar from './components/navbar';
import { PATHS } from './utils/constants/paths';

export default function App() {

  return (
    <>
      <NavBar />

      <Container
        sx={{marginTop:'70px'}}
      >
        <Routes>

          <Route exact path={PATHS.root} element={<Home />} />
          <Route path={PATHS.posts} element={<Posts />} />

        </Routes>
      </Container>

    </>
  );
}

