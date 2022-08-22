import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import UserSettingsProvider from './components/common/userSettingsProvider';
import GeneralAppLayout from './components/common/generalAppLayout';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {


  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="188827934663-74rg170epr01st83bvbd82t9nmcevvjf.apps.googleusercontent.com">
        <BrowserRouter>
          <UserSettingsProvider>
            <GeneralAppLayout />
          </UserSettingsProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

