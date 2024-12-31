import { Component } from "react";
import App from "./App.jsx"
import propsType from 'prop-types'
function Dog({name}){
    return(
        <div>
        <h1>dog name is {name} </h1>
        </div>
    )
}
export default Dog