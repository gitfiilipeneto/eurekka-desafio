import React from 'react';
import ReactDOM from 'react-dom';
import Controllers from './api/Controllers';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Controllers/>
  </React.StrictMode>,
  document.getElementById('root')
);

