import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import App from "./components/App";
import "./index.css";
import rootReducer from './reducers';

// const logger = function({ dispatch, getState}) {
//   return function (next) {
//     return function (action){
//       console.log('action type ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action !== 'function')
  console.log('action type ', action.type);
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });

// console.log(store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById("root"));
