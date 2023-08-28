//utils
import { createSlice } from "@reduxjs/toolkit"
//reducers
import { addImageReducer } from "../reducers/ImagePosts.reducer"

const initialState = {
	images: []
}

export const imagePosts = createSlice({
	name: "imagePosts",
	initialState,
	reducers: {
		addImageAction: (state, action) => addImageReducer(state, action)
	}
})

export const { addImageAction } = imagePosts.actions
export default imagePosts.reducer
