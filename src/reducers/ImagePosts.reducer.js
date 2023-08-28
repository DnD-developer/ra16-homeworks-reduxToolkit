export function addImageReducer(state, action) {
	state = state.images.push(action.payload)
}
