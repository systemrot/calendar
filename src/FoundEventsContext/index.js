import React, {useState, useContext, createContext} from "react";
import {EventListContext} from "../EventListContext";

export const FoundEventsContext = createContext();

export const FoundEventsProvider = (props) => {
	const [events] = useContext(EventListContext);
	const [found, setFound] = useState(events);

	return(
		<FoundEventsContext.Provider value={[found, setFound]}>
			{props.children}
		</FoundEventsContext.Provider>
	);
}