//utils
import { configureStore } from "@reduxjs/toolkit"
//reducers
import starWarsInfoReducer from "./starWarsInfo.store"

export const storeIndex = configureStore({
	reducer: {
		starWarsInfo: starWarsInfoReducer
	}
})
