import React, {useContext} from "react";
// import ReactDOM from "react-dom";
import AddEventToll from "../../components/AddEventToll";
import SearchEvents from "../../components/SearchEvents";
import lifecycle from "react-pure-lifecycle";
import {SearchContext} from "../../SearchContext";
import {EventListContext} from "../../EventListContext";
import {FoundEventsContext} from "../../FoundEventsContext";

const methods = {
  componentDidMount(){
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // Code below does't let work the state [querey, serQuery]
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    // const searchInput = document.getElementsByClassName("search-text")[0];
    // searchInput.addEventListener('focus', e => {
    //   ReactDOM.render(<SearchEvents/>, document.getElementById("search-tool-container"));
    // })

    // searchInput.addEventListener('blur', e => {
    //   ReactDOM.unmountComponentAtNode(document.getElementById("search-tool-container"));
    // })
  }
}

const HeaderFunc = () => {
  const [events, setEvents] = useContext(EventListContext);
  const [query, setQuery] = useContext(SearchContext);
  const [found, setFound] = useContext(FoundEventsContext);
  if(!found){}
  const updateQuery = (e) => {
    setQuery(e.target.value);
    setFound(events.map(event => {
      if(event.name.toLowerCase().includes(e.target.value.toLowerCase())){
        return event;
      }else{return undefined;}
    }))
    setFound((elements) => {
      let newArr = [];
      for(let i=0; i<elements.length; i+=1){
        if(elements[i] !== undefined) newArr.push(elements[i]);
      }
      return newArr;
    });
  }
  if(!events){};
  const clearEvents = () => {
    if (!window.confirm("Это дейсвтие удалит все записи! Хотите продолжить ?")) return;
    setEvents(() => []);
  }

  const blur = () => {
    setQuery("");
    // setFound(events);
    // ТРАБЛ ТУТ, если раскоментить - будет баг, при поиск не будет редиректтить на дату события!!!!!!!!!!!!
  }
  return (
    <div className={"HeaderFunc"}>
    	<div className="functions">
			<button className="change change-add">Добавить</button>
			<button className="change change-refresh" onClick={clearEvents}>Обновить</button>
			<button className="search-icon"></button>
			<input className="search-text" type="text" value={query} onChange={updateQuery} onBlur={blur}/>
    	</div>
    	<AddEventToll></AddEventToll>
      <div id="search-tool-container">
        <SearchEvents></SearchEvents>
      </div>
    </div>
  );
}

export default lifecycle(methods)(HeaderFunc);