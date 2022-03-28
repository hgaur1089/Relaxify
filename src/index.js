import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

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
  console.log('action type ', action.type);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log(store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });

// console.log(store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById("root"));
