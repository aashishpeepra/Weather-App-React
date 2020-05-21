import React from "react"
import "./button.css"

const button = (props)=>{
    return (
        <div onClick={props.click} className="btn">
            <h1> {props.value} </h1>
            
        </div>
    )
}
export default button