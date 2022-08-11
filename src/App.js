import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import UserSettingsProvider from './components/common/userSettingsProvider';
import GeneralAppLayout from './components/common/generalAppLayout';

export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserSettingsProvider>
          <GeneralAppLayout />
        </UserSettingsProvider>
      </BrowserRouter>
    </Provider>
  );
}

