export function initReducer(state) {
	state.preview = [...state.data]
}

export function filterReducer(state, action) {
	state.preview = [...state.data].slice(0, +action.payload)
}
