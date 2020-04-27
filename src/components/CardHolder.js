import React from "react";
import EmployeeCard from "./EmployeeCard"

const CardHolder = (props) => {

    return (
        <div className="ui three doubling cards">
            {props.children}
        </div>
    )
}

export default CardHolder;