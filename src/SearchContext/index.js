import React, {useState, createContext} from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
	const [query, setQuery] = useState("");

	return(
		<SearchContext.Provider value={[query, setQuery]}>
			{props.children}
		</SearchContext.Provider>
	);
}