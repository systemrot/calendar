import React, {useContext} from "react";
import {DateContext} from "../../../DateContext";
import lifecycle from "react-pure-lifecycle";
import {FoundEventsContext} from "../../../FoundEventsContext";
import {EventListContext} from "../../../EventListContext";

const methods = {

}



const SearchedEvent = (props) => {
	const [date, setDate] = useContext(DateContext);
	const [events] = useContext(EventListContext)
	const [found, setFound] = useContext(FoundEventsContext);
	if(false && date && found){}
	const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
	const jumpToSelectedEvent = () => {
		setDate(() => [{month: props.date.month-1, year: +props.date.year}])
		setFound(events);
	}
	return(
		<div className="searchedEvents-item" onClick={jumpToSelectedEvent}>
			<h4>{props.name}</h4>
			<span>{+props.date.day} {months[props.date.month-1]}</span>
		</div>
	);
}

export default lifecycle(methods)(SearchedEvent);