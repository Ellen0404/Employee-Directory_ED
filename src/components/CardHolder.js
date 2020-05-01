import React from "react";

const CardHolder = (props) => {

    return (
        <div className="ui four cards">
            {props.children}
        </div>
    )
}

export default CardHolder;