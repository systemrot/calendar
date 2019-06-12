import React, {useContext, useState} from "react";

import lifecycle from 'react-pure-lifecycle';



const methods = {

};

const ChangeEventTooll = () => {

  return (
    <div className="AddEventToll ChangeEventTool">
      <div className="triangle-with-shadow pointer"></div>
      <button className="fas fa-times"></button>
      <div className="tools">
        <h3 className="eventDate">10 декабря</h3>
        <h2 className="eventName">секретная информация</h2>
        <div className="eventMatesData">
          <h5 className="eventMatesData-mates">Участники</h5>
          <p className="eventMates">Ваня Петя Вася</p>
        </div>
        <p className="eventDescr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eos!</p>
        <div className="eventButtons">
          <button className="eventButtons-t-i-button t-i-button">Изменить</button>
          <button className="eventButtons-t-i-button t-i-button">Удалить</button>
        </div>
      </div>
    </div>
  )

}

export default lifecycle(methods)(ChangeEventTooll);