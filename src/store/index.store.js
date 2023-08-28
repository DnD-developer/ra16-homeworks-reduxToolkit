//utils
import { configureStore } from "@reduxjs/toolkit"
//slices
import starWarsInfoReducer from "./starWarsInfo.store"
import imagePostsReducer from "./imagePosts.store"

export const storeIndex = configureStore({
	reducer: {
		starWarsInfo: starWarsInfoReducer,
		imagePosts: imagePostsReducer
	}
})
