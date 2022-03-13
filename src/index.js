import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Entry from './pages/Entry';
import NotFound from './pages/404';
import store from './store/app.store.js';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entry/:id" element={<Entry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
