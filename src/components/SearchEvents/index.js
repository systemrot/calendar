import React, {useContext} from "react";
import "./index.css";
import lifecycle from "react-pure-lifecycle";
import {EventListContext} from "../../EventListContext";
import {SearchContext} from "../../SearchContext";
import SearchedEvent from "./SearchedEvent";
import {FoundEventsContext} from "../../FoundEventsContext";


const methods = {
	componentDidMount(){
		const searchTools = document.getElementById("search-tool-container");
		searchTools.style.display = "none";
		const searchInput = document.getElementsByClassName("search-text")[0];
		const searchView = document.getElementsByClassName("SearchEvents")[0];
		searchView.style.opacity = "0";

		searchInput.addEventListener('focus', e => {
			searchTools.style.display = "";
			searchView.style.opacity = "1";
		})

		searchInput.addEventListener('blur', e => {
			searchView.style.opacity = "0";
			window.setTimeout(()=>{searchTools.style.display = "none";},300)
		})
	}
}

const SeatchEvents = () => {
	const [found] = useContext(FoundEventsContext);
	const [query] = useContext(SearchContext);
	const [events] = useContext(EventListContext);
	const empty = () => <h4 className="empty">Пусто</h4>;
	const nothingFound = () => <h4 className="empty">Ничего не найдено</h4>;
	let flag = false;
	return(
		<div className="SearchEvents">
			<div className="triangle-with-shadow searchEvents-t-w-s"></div>
			<div className="SearchEvents-list">
				{!events.length && empty()}
				{found.map((elem) => {
					if (elem.name.toLowerCase().includes(query.toLowerCase())){
						flag = true
						return <SearchedEvent query={query} name={elem.name} date={elem.date} year={elem.year} key={elem.id} />;
					}else{
						return "";
					}

				})}
				{!!events.length && !flag && nothingFound()}
			</div>
		</div>

	);
}

export default lifecycle(methods)(SeatchEvents)