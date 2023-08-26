// utils
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
//style
import style from "./StarWarsInfo.module.css"
//services
import validateStarWarsInput from "../../service/validateStarWarsInput"
//hooks
import useInput from "../../hooks/useInput"
//actions
import { init, filter } from "../../store/starWarsInfo.store"
//selectors
import { getStarWarsInfo } from "../../selectors/StarWarsInfo.selector"
//components
import StarWarsInput from "../../components/StarWarsInput/StarWarsInput"
import List from "../../components/List/List"
import StarWarsItem from "../../components/StarWarsItem/StarWarsItem"

export function StarWarsInfo() {
	const dispatch = useDispatch()
	const { preview: starWarsInfo } = useSelector(getStarWarsInfo)

	const filterStarWarsInfo = count => {
		if (count) {
			dispatch(filter(count))
		} else {
			dispatch(init())
		}
	}

	useEffect(() => {
		dispatch(init())
	}, [])

	const [starWarsInpuValue, starWarsOnInput] = useInput("", validateStarWarsInput, filterStarWarsInfo)

	return (
		<div className={style.widjet}>
			<StarWarsInput value={starWarsInpuValue} onChange={starWarsOnInput} />
			<List data={starWarsInfo}>{(id, text) => <StarWarsItem key={id} text={text} />}</List>
		</div>
	)
}
