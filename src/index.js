import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import './index.css';
import {EventListProvider} from "./EventListContext";
import {DateProvider} from "./DateContext";
import {DayProvider} from "./DateContext";
import {SearchProvider} from "./SearchContext";
import {FoundEventsProvider} from "./FoundEventsContext/";
import App from './App';

const appShell = (
	<DateProvider>
		<DayProvider>
			<SearchProvider>
				  <EventListProvider>
				  	<FoundEventsProvider>
				  		<BrowserRouter>
				  		  <App />
				  		</BrowserRouter>
				  	</FoundEventsProvider>
				  </EventListProvider>
			</SearchProvider>
		</DayProvider>
	</DateProvider>
);

ReactDOM.render(appShell, document.getElementById("root"));