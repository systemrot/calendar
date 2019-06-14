import React, {useContext} from "react";
import lifecycle from 'react-pure-lifecycle';
import {DateContext} from "../../DateContext";


const methods = {
  componentDidMount(props){
    // const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    // const selectedMonthYear = document.getElementsByClassName("Cure-month")[0].childNodes[0].innerHTML.split(" ");
    // const currentMonthYear = {
    // 	day: new Date().getDate(),
    //   month: months[new Date().getMonth()],
    //   year: new Date().getFullYear()
    // }
    // const curDayElem = document.getElementsByClassName("Day")[curDay()-1];
    // // props.day === currentMonthYear.day && selectedMonthYear[0] === currentMonthYear.month && +selectedMonthYear[1] === currentMonthYear.year
    // if(!curDayElem.style.background){
    //   	curDayElem.style.background = "rgba(85, 136, 163, 0.5)";
    // }
    // console.log(selectedMonthYear[0])
    // if(selectedMonthYear[0] === currentMonthYear.month && +selectedMonthYear[1] === currentMonthYear.year){console.log(true)}


    // const listOfDays = document.getElementsByClassName("Day");
    // const daysfield = document.getElementsByClassName("days")[0];
    // let selectedDay = "";
    // daysfield.addEventListener("click", (e) => {
    //   if (e.target.className === 'Day'){
    //     if(true){
    //       for(let i=0;i<listOfDays.length;i+=1){
    //         if(selectedDay === listOfDays[i].childNodes[0].innerHTML)listOfDays[i].style.background = "";
    //       }
    //       selectedDay = e.target.childNodes[0].innerHTML;
    //       const css = e.target.style;
    //       css.background === "" ? css.background = "rgba(85, 136, 163, 0.25)" : css.background = "";
    //     }
    //   }
    // });
  }
};

const Day = (props) =>  {

    const [date] = useContext(DateContext);
    const currentDate = new Date();
    // console.log(date[0].month+1, date[0].year);
    // console.log(new Date().getMonth())
    
    const getStyle = () => {
        if(props.day === currentDate.getDate() && date[0].month === currentDate.getMonth() && date[0].year === currentDate.getFullYear()){
            return {
                background: "rgba(85, 136, 163, 0.5)"
            };
        }else{

            return {};
        }
    }

	if(props.event){
		return (
		  <div className={"Day"} style={getStyle()}>
		    <header className="numbeerOfDay">{props.day}</header>
		    <div className="day-box-item EventInBox">
				<div className="day-box-item event-title">
					{props.event.name}
				</div>
				<div className="day-box-item eventParticipants">
					{props.event.namesOfParticipants}
				</div>
		    </div>
		  </div>
		);
	}else{
		return (
		  <div className={"Day"} style={getStyle()}>
		    <header className="numbeerOfDay">{props.day}</header>
		  </div>
		);
	}
}


export default lifecycle(methods)(Day);