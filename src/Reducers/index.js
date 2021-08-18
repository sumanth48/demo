import {combineReducers} from "redux"


import Reducer1 from "./Reducer1"
import Reducer2 from "./Reducer2"
import Reducer3 from "./Reducer3"

var reducers= combineReducers({Reducer1, Reducer2, Reducer3})

export default reducers