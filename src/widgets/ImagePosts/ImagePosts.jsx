//ustils
import { useDispatch, useSelector } from "react-redux"
import uuid4 from "uuid4"
//styles
import styles from "./ImagePosts.module.css"
//services
import getImage from "../../service/getImage"
//selectors
import { getImagePosts } from "../../selectors/ImagePosts.selector"
//actions
import { addImageAction } from "../../store/imagePosts.store"
//components
import ImagePostsUpload from "../../components/ImagePostsUpload/ImagePostsUpload"
import List from "../../components/List/List"
import ImagePostsItem from "../../components/ImagePostsItem/ImagePostsItem"

export default function ImagePosts() {
	const dispatch = useDispatch()
	const { images: data } = useSelector(getImagePosts)

	const onAddImageHandler = async img => {
		const url = await getImage(img)

		const imgItem = { img: url, id: uuid4() }
		dispatch(addImageAction(imgItem))
	}

	return (
		<div className={styles.widjet}>
			<List data={data}>{({ id, img }) => <ImagePostsItem key={id} img={img} />}</List>
			<ImagePostsUpload onClick={onAddImageHandler} />
		</div>
	)
}
