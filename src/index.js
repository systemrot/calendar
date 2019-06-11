import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import './index.css';
import {EventListProvider} from "./EventListContext";
import {DateProvider} from "./DateContext";
import App from './App';

const appShell = (
	<DateProvider>
	  <EventListProvider>
		<BrowserRouter>
		  <App />
		</BrowserRouter>
	  </EventListProvider>
	</DateProvider>
);

ReactDOM.render(appShell, document.getElementById("root"));