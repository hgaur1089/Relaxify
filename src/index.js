import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./components/App";
import "./index.css";
import movies from './reducers';

const store = createStore(movies);
// console.log(store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });

// console.log(store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById("root"));
