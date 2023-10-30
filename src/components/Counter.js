import React from "react";

function Counter(props) {

    return(
        <div id="counter-container">
            <h1 className="counter">{props.counter}</h1>
            <p className="counter-description">{props.counterDescription}</p>
        </div>
    )
}

export default Counter;