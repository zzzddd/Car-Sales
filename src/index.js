import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from "redux";
// import titleReducer from "./reducers";
import { reducer } from "./reducers";

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


