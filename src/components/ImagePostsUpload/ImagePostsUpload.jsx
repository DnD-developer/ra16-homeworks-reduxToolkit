//utils
import { useRef, useState } from "react"
//styles
import styles from "./ImagePostsUpload.module.css"

export default function ImagePostsUpload({ onClick }) {
	const upload = useRef(null)

	const [nameFile, setNamefile] = useState("")

	const onUploadHanler = () => {
		upload.current.click()
	}

	const onClickHandler = () => {
		onClick(upload.current.files[0])
		upload.current.value = ""
		setNamefile("")
	}

	const onChangeHandler = ({ target }) => {
		const {
			files: [{ name }]
		} = target

		setNamefile(name.length > 14 ? `${name.slice(0, 14)}...` : name)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.fantom} onClick={onUploadHanler}>
				<p className={styles.fantom__text}>Выберите картинку</p>
				<p className={styles["fantom__file-name"]}>{nameFile || "нет файла"}</p>
			</div>
			<button className={styles.button} onClick={onClickHandler}>
				Добавить
			</button>
			<input ref={upload} className={styles.upload} type="file" accept=".jpg,.jpeg,.png" onChange={onChangeHandler} />
		</div>
	)
}
