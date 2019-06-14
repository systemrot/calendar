import React, {useState, createContext} from "react";

export const DateContext = createContext();

export const DateProvider = (props) => {
	const [date, setDate] = useState([
	{
		month: new Date().getMonth(),
		year: new Date().getFullYear()
	}
	]);

	return(
		<DateContext.Provider value={[date, setDate]}>
			{props.children}
		</DateContext.Provider>
	);
}

///////////////////////////////////////////

export const DayContext = createContext();

export const DayProvider = (props) => {
	const [day, setDay] = useState([
	{
		selectedDay: "",
	}
	]);

	return(
		<DayContext.Provider value={[day, setDay]}>
			{props.children}
		</DayContext.Provider>
	);
}