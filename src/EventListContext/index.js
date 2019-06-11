import React, {useState, createContext} from "react";

export const EventListContext = createContext();

export const EventListProvider = (props) => {
	const [events, setEvent] = useState([
		{
			name: "Др",
			date:{
				day: "23",
				month: "06",
				year: "2019"
			},
			namesOfParticipants: "Дмитрий Иванов",
			description: "Отмечаем день рождением Димы, нужно отложить 5000р. И Заказать автобус.",
			id: 161
		},
		{
			name: "DeadLine",
			date:{
				day: "10",
				month: "06",
				year: "2019"
			},
			namesOfParticipants: "Я и работодатели",
			description: "Нужно доделать календарь, чем быстрее тем лучше, но дедлайн указан ( правда он выдуман, правда как и всё это!)",
			id: 6121
		},
		{
			name: "Новоселье",
			date:{
				day: "11",
				month: "07",
				year: "2019"
			},
			namesOfParticipants: "Ростислав",
			description: "Переселяюсь в новый дом на холме, или в лесу, да точно! В хижину в лесу!",
			id: 161
		},
		{
			name: "Встреча с другом",
			date:{
				day: "17",
				month: "05",
				year: "2019"
			},
			namesOfParticipants: "Вася Пупкин",
			description: "Встретиться и передать ssd диск ( должен вернуть через пару недель )",
			id: 161
		}
		]);

	return(
		<EventListContext.Provider value={[events, setEvent]}>
			{props.children}
		</EventListContext.Provider>
	);
}