import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import UserSettingsProvider from './components/common/userSettingsProvider';
import GeneralAppLayout from './components/common/generalAppLayout';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {

  console.log(process.env);
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_APP_CLIENT_ID}>
        <BrowserRouter>
          <UserSettingsProvider>
            <GeneralAppLayout />
          </UserSettingsProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

