import './App.css';
import React, {useContext} from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Calendar from "./hoc/Calendar";
import Month from "./containers/Month";
import {EventListContext} from "./EventListContext";
import {DateContext} from "./DateContext";


const App = () => {
  const [events, setEvents] = useContext(EventListContext);
  const [date, setDate] = useContext(DateContext);
  const getMonth = () => <Month events={[events, setEvents]} date={[date, setDate]}/>
  return (
    <Calendar>
      <HashRouter>
        <Switch>
          {/*<Route path="/:year/:month" component={Month} />*/}
          <Route path="/" exact component={getMonth} />
        </Switch>
      </HashRouter>
    </Calendar>
  );
}

export default App;