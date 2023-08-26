//styles
import style from "./List.module.css"

export default function List({ data, children }) {
	return <ul className={style.list}>{data.map(({ id, text }) => children(id, text))}</ul>
}
