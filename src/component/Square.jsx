import React from "react";

const Square = (props) => {
    return (
        <div onClick={props.onClick} className="square-container" >
            <h1>{props.value}</h1>
        </div>
    )
}

export default Square;