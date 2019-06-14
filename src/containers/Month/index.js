import React, {useContext} from "react";
import lifecycle from 'react-pure-lifecycle';
import Day from "../../components/Day";
import HeaderFunc from "../../components/HeaderFunc";
import CureDate from "../../components/CureDate";
import ChangeEventTool from "../../components/ChangeEventTool";
import AddInCurrentDayEvent from "../../components/AddInCurrentDayEvent";

import "./index.css"
import {DateContext} from "../../DateContext";
import {EventListContext} from "../../EventListContext";

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

const viewTools = target => target.style.display === 'none' ?  target.style.display = '' : target.style.display = 'none';
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

const methods = {
  componentDidMount(props){
    const listOfDays = document.getElementsByClassName("Day");
    const daysfield = document.getElementsByClassName("days")[0];
    // const addEventTool = document.getElementsByClassName("AddEventToll")[0];

    const changeEvents = document.getElementsByClassName("ChangeEventTool")[0];
    changeEvents.style = "display: none; position: absolute";

    const addEventToSelectedDay = document.getElementsByClassName("AddInCurrentDayEvent")[0];
    addEventToSelectedDay.style = "display: none; position: absolute";

    const hideChangeTool = document.getElementsByClassName("fa-times")[1];
    hideChangeTool.addEventListener('click', () =>  viewTools(changeEvents));

    const hideAddToSelected = document.getElementsByClassName("fa-times")[2];
    hideAddToSelected.addEventListener('click', () =>  viewTools(addEventToSelectedDay));

    const deleteSelectedEvent = document.getElementsByClassName("eventButtons-t-i-button")[1];
    deleteSelectedEvent.addEventListener('click', () => {
      const dayNumber = parseInt(document.getElementsByClassName("eventDate")[0].innerHTML);
      props.events[1](prevEvents => {
        let newEvents = [];
        for(let i = 0; i < prevEvents.length; i+=1){
          if(prevEvents[i]===undefined)prevEvents.splice(i,1)
        }
        for(let i = 0; i < prevEvents.length; i+=1){
          if(+prevEvents[i].date.day === dayNumber && +prevEvents[i].date.month - 1 === props.date[0][0].month && +prevEvents[i].date.year === props.date[0][0].year){
            prevEvents.splice(i,1);
          }
          newEvents.push(prevEvents[i]);
        }
        return newEvents;
      })
    });

    const pointer1 = document.getElementsByClassName("triangle-with-shadow")[2];
    let deg = 270;
    pointer1.style.webkitTransform = 'rotate('+deg+'deg)'; 
    pointer1.style.mozTransform    = 'rotate('+deg+'deg)'; 
    pointer1.style.msTransform     = 'rotate('+deg+'deg)'; 
    pointer1.style.oTransform      = 'rotate('+deg+'deg)'; 
    pointer1.style.transform       = 'rotate('+deg+'deg)'; 
    pointer1.style.top = "95px";
    pointer1.style.left = "-23px"; 

    const pointer2 = document.getElementsByClassName("triangle-with-shadow")[3];
    pointer2.style.webkitTransform = 'rotate('+deg+'deg)'; 
    pointer2.style.mozTransform    = 'rotate('+deg+'deg)'; 
    pointer2.style.msTransform     = 'rotate('+deg+'deg)'; 
    pointer2.style.oTransform      = 'rotate('+deg+'deg)'; 
    pointer2.style.transform       = 'rotate('+deg+'deg)'; 
    pointer2.style.top = "95px";
    pointer2.style.left = "-23px"; 

    let selectedDay = "";
    const rootField = document.getElementById("root");
    rootField.addEventListener("click", (e) => {
      // if (e.target.className !== 'Day' && e.target.className !== "change change-add"){
      //   !changeEvents.style.display && viewTools(changeEvents);
      //   !addEventToSelectedDay.style.display && viewTools(addEventToSelectedDay);
      //   !addEventTool.style.display && viewTools(addEventTool);
      // }
    })
    daysfield.addEventListener("click", (e) => {
      let nameOfSelectedEvent;
      if (e.target.className === 'Day'){
        changeEvents.style.left =`${e.clientX + 70}px`;
        changeEvents.style.top =`${e.clientY - 150}px`;
        addEventToSelectedDay.style.left =`${e.clientX + 70}px`;
        addEventToSelectedDay.style.top =`${e.clientY - 150}px`;
        props.day[1](e.target.childNodes[0].innerHTML); // add to state selected day (by mouse click)
        const numberOfSelectedDay = e.target.childNodes[0].innerHTML;
        if(props.events[0]===undefined)props.events.splice(0,1);
        try{
          nameOfSelectedEvent = e.target.childNodes[1].childNodes[0].innerHTML;
        }catch{}
        try {
          for(let i = 0; i<props.events[0].length; i+=1){
            if(+props.events[0][i].date.day === +numberOfSelectedDay && +props.events[0][i].date.month - 1 === props.date[0][0].month && +props.events[0][i].date.year === props.date[0][0].year){
              const eventDescr = document.getElementsByClassName("eventDescr")[0];
              const eventName = document.getElementsByClassName("eventName")[0];
              const eventDate = document.getElementsByClassName("eventDate")[0];
              const eventMates = document.getElementsByClassName("eventMates")[0];
              eventMates.innerHTML = props.events[0][i].namesOfParticipants;
              eventDate.innerHTML = props.events[0][i].date.day + " " + months[+props.events[0][i].date.month - 1];
              eventName.innerHTML = props.events[0][i].name;
              eventDescr.innerHTML = props.events[0][i].description;
            }
          }
        }catch{}
        
        
        if(!changeEvents.style.display){
          changeEvents.style.display = "none";
        }

        if(!addEventToSelectedDay.style.display){
          changeEvents.style.display = "none";
        }
        if(nameOfSelectedEvent){
          if( !addEventToSelectedDay.style.display )addEventToSelectedDay.style.display = "none";
          changeEvents.style.display = "";
        }else{
          if( !changeEvents.style.display )changeEvents.style.display = "none";
          addEventToSelectedDay.style.display = "";
        }
        for(let i=0;i<listOfDays.length;i+=1){
          if(selectedDay === listOfDays[i].childNodes[0].innerHTML)listOfDays[i].style.background = "";
        }
        selectedDay = e.target.childNodes[0].innerHTML;
        const css = e.target.style;
        css.background === "" ? css.background = "rgba(85, 136, 163, 0.25)" : css.background = "";
      }
    });
  }
};

const buildDays = (events, date) => {
  const days = [];
  const curMonth = date.month + 1;
  const curYear = date.year;
  let dayNumber = 1;
  let curEvent = undefined;
   for (let i = 1; i <= daysInMonth(curMonth, curYear); i++) {
    if(events.length){
      if(events[0]===undefined)events.splice(0,1);
      for(let j=0;j<events.length;j+=1){
          try{
            if(+events[j].date.day === dayNumber && +events[j].date.month === curMonth && +events[j].date.year === curYear){
                    curEvent = events[j];
                  }
          }catch{}
      }
    }
    days.push(<Day key={i} event={curEvent} day={dayNumber}/>);
    curEvent = undefined;
    dayNumber+=1;
  }

  return days;
};

const Month = (props) => {
  const [events] = useContext(EventListContext);
  const [date] = useContext(DateContext);
  try{
    if(events.length){
          for (let i = 0; i < events[0].length; i+=1){
            if(events[0][i] === undefined){
              events[0][i].splice(i, 1);
            }
          }
    }
  }catch{}
  const days = buildDays(events, date[0]);
  return (
    <div className="month">
      <HeaderFunc></HeaderFunc>
      <CureDate></CureDate>
      <ChangeEventTool></ChangeEventTool>
      <AddInCurrentDayEvent></AddInCurrentDayEvent>
      <section className="days">{days}</section>
    </div>
  );
}

export default lifecycle(methods)(Month);