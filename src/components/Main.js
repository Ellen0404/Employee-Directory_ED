import React, { useState, useEffect } from "react";
import employees from "../employees.json";
import CardHolder from "./CardHolder";
import EmployeeCard from "./EmployeeCard";

const Main = () => {

    const [search, setSearch] = useState("");
    // const [allEmployees, setAllEmployee] = useState({ employees });
    const [department, useDepartment] = useState("");

    // useEffect(() => {
    //     // searchEmployee();
    //     employees.
    // }, []);

    const searchEmployee = () => {
        console.log("Hello word!!!")
    }
    return (
        <>
            < CardHolder>
                {employees.map(e => (
                    <EmployeeCard
                        key={e.id}
                        id={e.id}
                        firstName={e.firstName}
                        lastName={e.lastName}
                        image={e.image}
                        department={e.department}
                        location={e.location}

                    />

                ))}
            </CardHolder>
        </>
    );
}

export default Main;
