import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import AppBase from './AppBase';

ReactDOM.render(
  <BrowserRouter>
    <AppBase />
  </BrowserRouter>,
  document.getElementById('root')
);