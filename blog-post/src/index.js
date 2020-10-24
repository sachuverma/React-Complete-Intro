import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(req => {
  console.log("request configuration: ", req);
  // edit req config
  return req;
}, err => {
  console.log("request configuration error: ", err);
  return Promise.reject(err);
});

axios.interceptors.response.use(req => {
  console.log("response configuration: ", req);
  return req;
}, err => {
  console.log("response configuration error: ", err);
  return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
