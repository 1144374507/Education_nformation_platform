import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
ReactDOM.render(
  // 用于解决 BrowserRouter 打包后 2级路由刷新 404 ！！！！巨坑！！！！
  <HashRouter>
    <Provider store={store}>
      < App />
    </Provider>
  </HashRouter>
  , document.getElementById('root'));