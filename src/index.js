import React from 'react'
import ReactDOM from 'react-dom'

//import App Module 
import RouteApp from './components/App.js'

import "./../node_modules/bootstrap/dist/css/bootstrap.css"

import { Provider } from "react-redux"
import Store from "./Store/index"


ReactDOM.render(<Provider store={Store}>
    <RouteApp/>
</Provider>, document.getElementById('root'))
