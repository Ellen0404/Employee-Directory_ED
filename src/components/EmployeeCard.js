import React from "react";
import faker from "faker";

const EmployeeCard = (props) => {
    return (
        <div className="red card">
            <div className="circular">
                <img alt="avatar" className="ui centered medium image" src={props.smallimage} />

            </div>
            <div className="content">
                <div className="header">{props.name}</div>
                <div className="meta">
                    {/* <span>{props.department}</span><br></br> */}
                    <span>{props.location}</span>
                </div>
            </div>
            <div className="extra content">
                <span>
                    <i className="icon-envelope"></i>
                    {props.email}
                </span><br></br>
                <span>
                    <i className="phone icon"></i>
                    {props.phone}
                </span>
                <button onClick={() => {
                    props.setEmployee({
                        name: props.name,
                        location: props.location,
                        image: props.image,
                        email: props.email,
                        phone: props.phone,
                        department: faker.commerce.department(),
                        finance: faker.finance.amount(),
                        title: faker.name.jobTitle()

                    }


                    )
                    props.handleShow()

                }}>Show more info</button>

            </div>
        </div>

    )
}

export default EmployeeCard;