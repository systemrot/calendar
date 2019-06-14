import React, {useState, createContext} from "react";

export const EventListContext = createContext();

export const EventListProvider = (props) => {
	const [events, setEvent] = useState([
		{
			name: "др",
			date:{
				day: "09",
				month: "6",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 123
		},
		{
			name: "Прогулка",
			date:{
				day: "09",
				month: "5",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 124
		},
		{
			name: "Отдых",
			date:{
				day: "11",
				month: "6",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 125
		},
		{
			name: "Работа",
			date:{
				day: "09",
				month: "7",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 126
		},
		{
			name: "Переезд",
			date:{
				day: "2",
				month: "9",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 127
		},
		{
			name: "Перелет",
			date:{
				day: "09",
				month: "1",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 128
		},
		{
			name: "Москва",
			date:{
				day: "3",
				month: "9",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 129
		},
		{
			name: "Море",
			date:{
				day: "14",
				month: "7",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 130
		},
				{
			name: "Дайвинг",
			date:{
				day: "15",
				month: "6",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 131
		},
		{
			name: "Прогулка на слонах",
			date:{
				day: "17",
				month: "5",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 132
		},
		{
			name: "Полет на воздушном шаре",
			date:{
				day: "22",
				month: "5",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 133
		},
		{
			name: "Прыгаю с моста в воду",
			date:{
				day: "23",
				month: "6",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 134
		},
		{
			name: "Снимаю фильм",
			date:{
				day: "2",
				month: "6",
				year: "2020"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 135
		},
		{
			name: "Лечу в космос",
			date:{
				day: "1",
				month: "1",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 136
		},
		{
			name: "Возвращаюсь из космоса",
			date:{
				day: "1",
				month: "6",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 137
		},
		{
			name: "Полет на солнце",
			date:{
				day: "8",
				month: "12",
				year: "2019"
			},
			namesOfParticipants: "Мэд, Илья",
			description: "Ничего интересного",
			id: 138
		},

	]);

	return(
		<EventListContext.Provider value={[events, setEvent]}>
			{props.children}
		</EventListContext.Provider>
	);
}