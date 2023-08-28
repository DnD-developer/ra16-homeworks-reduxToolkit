//styles
import styles from "./ImagePostsItem.module.css"

export default function ImagePostsItem({ img }) {
	return <img src={img} className={styles.item} alt="аватар" />
}
