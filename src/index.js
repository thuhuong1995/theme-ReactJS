import React from 'react';
import ReactDOM from 'react-dom';
import 'boxicons';

import './assets/css/grid.css';
import './assets/css/index.css';
import './assets/css/theme.css';

import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

import Layout from './components/Layout';

document.title = 'GhostFury';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

