import React, {useContext, useState} from "react";
import {EventListContext} from "../../EventListContext";
import lifecycle from 'react-pure-lifecycle';

const viewTools = target => target.style.display === 'none' ?  target.style.display = '' : target.style.display = 'none';

const methods = {
  componentDidMount() {
    const addButton = document.getElementsByClassName("change")[0];
    const tools = document.getElementsByClassName('AddEventToll')[0];
    const exit = document.getElementsByClassName("fa-times")[0];
    exit.addEventListener('click', () =>  viewTools(tools));
    tools.style.display = 'none';
    addButton.addEventListener('click', () => viewTools(tools))
  }
};

const AddEventTool = () => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [namesOfParticipants, setNamesOfParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [events, setEvent] = useContext(EventListContext);

  const updateName = e => {setName(e.target.value)};
  const updateDate = e => setDate(e.target.value);
  const updateNamesOfParticipants = e => setNamesOfParticipants(e.target.value);
  const updateDescription = e => setDescription(e.target.value);
  const AddEvent = e => {
    e.preventDefault();
    setEvent(prevEvents => {
      if(name && date && namesOfParticipants && description){
        setName("");
        setDate("");
        setNamesOfParticipants("");
        setDescription("");
        const DayMonthYear = {
          day: date.split(',')[0],
          month: date.split(',')[1],
          year: date.split(',')[2]
        };
        return [...prevEvents, {name: name, date: DayMonthYear, namesOfParticipants: namesOfParticipants, description: description, id: Math.floor(999999999 * Math.random())}]
      }else{
        alert("Не достаточно данных или они не верны = )");
        return prevEvents;
      }
    });
    if(false)console.log(events);
  }


  return (
    <div className="AddEventToll">
      <div className="triangle-with-shadow pointer"></div>
      <button className="fas fa-times"></button>
      <div className="tools">
        <form onSubmit={AddEvent}>
          <input className="Toll-item" type="text" value={name} placeholder="Событие"onChange={updateName}/>
          <input className="Toll-item" type="text" value={date} placeholder="День, месяц, год"onChange={updateDate}/>
          <input className="Toll-item" type="text" value={namesOfParticipants} placeholder="Имена участников"onChange={updateNamesOfParticipants}/>
          <textarea className="t-i-text-area" value={description} placeholder="Описание" name="" id="" cols="30" rows="10"onChange={updateDescription}></textarea>
          <button className="t-i-button">Создать</button>
        </form>
      </div>
    </div>
  )

}

export default lifecycle(methods)(AddEventTool);