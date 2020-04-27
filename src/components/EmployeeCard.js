import React from "react";
import faker from "faker";

const EmployeeCard = (props) => {
    return (
        <div className="ui red card">
            <div className="circular">
                <img alt="avatar" className="ui centered medium image" src={faker.image.avatar()} />

            </div>
            <div className="content">
                <div className="header">{props.firstName}  {props.lastName}</div>
                <div className="meta">
                    <span>{props.department}</span><br></br>
                    <span>{props.location}</span>
                </div>
            </div>
            <div className="extra content">
                <span>
                    <i className="icon-envelope"></i>
                    email@example.com
                </span><br></br>
                <span>
                    <i className="phone icon"></i>
                    {faker.phone.phoneNumberFormat()}
                </span>
            </div>
        </div>

    )
}

export default EmployeeCard;