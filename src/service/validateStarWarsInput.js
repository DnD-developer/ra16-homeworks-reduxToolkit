export default function validateStarWarsInput(text) {
	return (/[1-5]/.test(text) && text.length < 2) || text.length == 0
}
