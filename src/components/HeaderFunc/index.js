import React from "react";
import AddEventToll from "../../components/AddEventToll";


class HeaderFunc extends React.Component {

  render() {
    return (
      <div className={"HeaderFunc"}>
      	<div className="functions">
  			<button className="change">Добавить</button>
  			<button className="change">Обновить</button>
  			<button className="search-icon"></button>
  			<input className="search-text" type="text"/>
      	</div>
      	<AddEventToll></AddEventToll>
      </div>
    );
  }
}


export default HeaderFunc;