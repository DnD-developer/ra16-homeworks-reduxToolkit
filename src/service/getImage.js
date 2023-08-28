export default function getImage(img) {
	const reader = new FileReader()

	reader.readAsDataURL(img)

	return new Promise(function (resolve) {
		reader.onload = e => {
			resolve(e.target.result)
		}
	})
}
