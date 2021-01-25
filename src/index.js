import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HooksBelanja from './HooksBelanja';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <HooksBelanja />
  </BrowserRouter>,
  document.getElementById('root')
);


