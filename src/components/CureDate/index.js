import React, {useContext} from "react";
import {DateContext} from "../../DateContext";


const CureDate = () => {
  const [date, setDate] = useContext(DateContext);
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
  const prevMonth = () => {
    setDate(() => {
      if(date[0].month === 0){
        return [{month: 11, year: +date[0].year - 1}]
      }else{
        return [{month: +date[0].month - 1, year: date[0].year}]
      }
    });
  }
  const nextMonth = () => {
    setDate(() => {
      if(date[0].month === 11){
        return [{month: 0, year: +date[0].year + 1}]
      }else{
        return [{month: +date[0].month + 1, year: date[0].year}]
      }
    });
  };

  const jumpToCurrentDate = () => {
    const currentDate = new Date();
    setDate(() => [{month: currentDate.getMonth(), year: currentDate.getFullYear()}])
  };

  return (
    <div className={"CureDate"}>
      <button className="fas fa-caret-left CureDate-item" onClick={prevMonth}></button>
      <div className="Cure-month CureDate-item"><h3>{months[date[0].month]} {date[0].year}</h3></div>
      <button className="fas fa-caret-right CureDate-item" onClick={nextMonth}></button>
      <button className="today CureDate-item" onClick={jumpToCurrentDate}>сегодня</button>
    </div>
  );
}


export default CureDate;
