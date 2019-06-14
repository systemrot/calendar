import React, {useContext, useState} from "react";
import {EventListContext} from "../../EventListContext";
import lifecycle from 'react-pure-lifecycle';
import {DayContext} from "../../DateContext";
import {DateContext} from "../../DateContext";


const methods = {
  componentDidMount() {

  }
};

const AddInCurrentDayEvent = () => {

  const [name, setName] = useState("");
  const [namesOfParticipants, setNamesOfParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [events, setEvent] = useContext(EventListContext);
  if(events){}//tmp solution do not show console-warning about not using "events" 
  const [day] = useContext(DayContext);
  const [date] = useContext(DateContext);

  const updateName = e => {setName(e.target.value)};
  const updateNamesOfParticipants = e => setNamesOfParticipants(e.target.value);
  const updateDescription = e => setDescription(e.target.value);
  const AddEvent = e => {
    e.preventDefault();
    setEvent(prevEvents => {
      if(name && date && namesOfParticipants && description){
        setName("");
        setNamesOfParticipants("");
        setDescription("");
        const DayMonthYear = {
          day: day,
          month: date[0].month+1,
          year: date[0].year
        };
        return [...prevEvents, {name: name, date: DayMonthYear, namesOfParticipants: namesOfParticipants, description: description, id: Math.floor(999999999 * Math.random())}]
      }else{
        alert("Не достаточно данных или они не верны = )");
        return prevEvents;
      }
    });
  }


  return (
    <div className="AddInCurrentDayEvent AddEventToll">
      <div className="triangle-with-shadow pointer"></div>
      <button className="fas fa-times"></button>
      <div className="tools">
        <form onSubmit={AddEvent}>
          <input className="Toll-item" type="text" value={name} placeholder="Событие"onChange={updateName}/>
          <input className="Toll-item" type="text" value={namesOfParticipants} placeholder="Имена участников"onChange={updateNamesOfParticipants}/>
          <textarea className="t-i-text-area" value={description} placeholder="Описание" name="" id="" cols="30" rows="10"onChange={updateDescription}></textarea>
          <button className="t-i-button">Создать</button>
        </form>
      </div>
    </div>
  )

}

export default lifecycle(methods)(AddInCurrentDayEvent);