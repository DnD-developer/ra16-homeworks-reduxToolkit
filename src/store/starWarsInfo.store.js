//utils
import { createSlice } from "@reduxjs/toolkit"
import uuid4 from "uuid4"
//reducers
import { filterReducer, initReducer } from "../reducers/StarWarsInfo.reducer"

const data = [
	{
		id: uuid4(),
		text: "Прообразом Чубакки стал пёс режиссёра;"
	},
	{
		id: uuid4(),
		text: "Актёрам разрешили подобрать любимый цвет для своих световых мече;"
	},
	{
		id: uuid4(),
		text: "В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;"
	},
	{
		id: uuid4(),
		text: "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;"
	},
	{
		id: uuid4(),
		text: "Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок;"
	}
]

const initialState = {
	data,
	preview: []
}

export const starWarsInfo = createSlice({
	name: "starWarsInfo",
	initialState,
	reducers: {
		init: state => initReducer(state),
		filter: (state, action) => filterReducer(state, action)
	}
})

export const { init, filter } = starWarsInfo.actions
export default starWarsInfo.reducer
