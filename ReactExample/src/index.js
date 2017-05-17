import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducer.js';

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
