import React from "react";
import faker from "faker";

const EmployeeCard = (props) => {
    return (
        <div className="teal card">
            <div className="content">
                <img alt="avatar" className="right floated mini ui image" src={props.smallimage} />
                <div className="header">{props.name}</div>
                <div className="meta">
                    {/* <span>{props.department}</span><br></br> */}
                    <span>{props.location}</span>

                </div>

                <div className="description">

                    <i className="icon-envelope"></i>
                    {props.email}
                    <br></br>

                    <i className="phone icon"></i>
                    {props.phone}


                </div>
            </div>

            <div class="ui secondary inverted segment">
                <button className="ui inverted teal button" onClick={() => {
                    props.setEmployee({
                        name: props.name,
                        location: props.location,
                        image: props.image,
                        email: props.email,
                        phone: props.phone,
                        department: faker.commerce.department(),
                        finance: faker.finance.amount(),
                        title: faker.name.jobTitle()
                    })
                    props.handleShow()

                }}>Show more info</button>

            </div>
        </div >

    )
}

export default EmployeeCard;