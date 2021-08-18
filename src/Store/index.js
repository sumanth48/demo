import {createStore} from "redux"

import reducers from "../Reducers/index"

var store= createStore(reducers)
export default store