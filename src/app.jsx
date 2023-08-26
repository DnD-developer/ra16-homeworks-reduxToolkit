//utils
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
//store
import { storeIndex } from "./store/index.store"
//Components
import { StarWarsInfo } from "./widgets/StarWarsInfo/StarWarsInfo"

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Provider store={storeIndex}>
			<StarWarsInfo />
		</Provider>
	</>
)
