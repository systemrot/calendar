import React from "react";

import lifecycle from 'react-pure-lifecycle';



const methods = {
  componentDidMount(){
    const changeEventTooll = document.getElementsByClassName("ChangeEventTool")[0];
    const addInCurrentDayEvent = document.getElementsByClassName("AddInCurrentDayEvent")[0];
    const change = document.getElementsByClassName("eventButtons-t-i-button")[0];
    change.addEventListener('click', () => {
      changeEventTooll.style.display = "none";
      addInCurrentDayEvent.style.display = "";
    });
  }
};

const ChangeEventTooll = () => {

  return (
    <div className="AddEventToll ChangeEventTool">
      <div className="triangle-with-shadow pointer"></div>
      <button className="fas fa-times"></button>
      <div className="tools">
        <h3 className="eventDate">32 Декабря</h3>
        <h2 className="ChangeEventTool-item eventName">Выберите Еще раз!</h2>
        <div className="eventMatesData">
          <h5 className="eventMatesData-mates">Участники</h5>
          <p className="ChangeEventTool-item eventMates">...</p>
        </div>
        <p className="ChangeEventTool-item eventDescr">...</p>
        <div className="eventButtons">
          <button className="eventButtons-t-i-button t-i-button">Изменить</button>
          <button className="eventButtons-t-i-button t-i-button">Удалить</button>
        </div>
      </div>
    </div>
  )

}

export default lifecycle(methods)(ChangeEventTooll);