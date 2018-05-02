import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { Provider } from 'react-redux'
// import { newPost } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const loggerMiddleware = createLogger();
// console.log('mi reducer', reducer)
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  )
);

// console.log('mi store', store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
