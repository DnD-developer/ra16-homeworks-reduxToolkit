//styles
import styles from "./StarWarsItem.module.css"

export default function StarWarsItem({ text }) {
	return <li className={styles.item}>{text} </li>
}
