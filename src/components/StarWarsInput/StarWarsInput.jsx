// style
import style from "./StarWarsInput.module.css"

export default function StarWarsInput({ value, onChange }) {
	const onChangeHandler = ({ target }) => {
		const { value } = target
		onChange(value)
	}

	return (
		<div className={style.wrapper}>
			<input type="text" className={style.input} value={value} onChange={onChangeHandler} />
		</div>
	)
}
