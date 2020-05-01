import React, { useState, useEffect } from "react";
// import employees from "../employees.json";
import CardHolder from "./CardHolder";
import EmployeeCard from "./EmployeeCard";
import Filter from "./Filter";
import Search from "./Search";
import Wrapper from "./Wrapper";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";




const Main = () => {

    const [allEmployees, setAllEmployee] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [stateChange, setStateChange] = useState("none");
    const [show, setShow] = useState(false);
    const [firedMatch, setFiredMatch] = useState(false);
    const [employee, setEmployee] = useState(
        {
            name: "Sarah",
            image: "",
            location: "Colorado",
            email: "ex@email.com",
            phone: "",
            department: ""
        });

    const handleClose = () => {
        setFiredMatch(false);
        setShow(false);
    };
    const handleShow = () => setShow(true);

    // Handle FIRE button
    const handleFire = (email) => {
        const firedArray = allEmployees.filter(employee => employee.email !== email);
        setFiltered(firedArray);
        setFiredMatch(true);
        setTimeout(() => {
            handleClose();
        }, 1000);

    }

    useEffect(() => {
        API.searchTerms()
            .then(res => {
                console.log(res.data)
                const userData = res.data.results.map(
                    user => {
                        return ({
                            id: user.length,
                            name: `${user.name.first} ${user.name.last}`,
                            image: user.picture.large,
                            email: user.email,
                            location: user.location.state,
                            smallimage: user.picture.thumbnail,
                            phone: user.cell
                        })
                    })
                setFiltered(userData);
                // console.log("filtered: ");
                // console.log(filtered)
                setAllEmployee(userData);
                // console.log("sett employees : ");
                // console.log(allEmployees)

            })
            .catch(err => console.log(err))
    }, []);


    // SET a FILTER STATE
    const handleFilter = (event) => {
        const searchState = event.target.value

        console.log("state chossen stateChange : " + searchState);
        // setFiltered(filtered.filter(user => user.location === event.target.value));

        if (searchState !== 'none') {
            const values = allEmployees.filter(user => user.location === searchState)
            setFiltered(values);

        } else {
            setFiltered(allEmployees);

        }
        // update at last line of handleFilter function !
        setStateChange(searchState)
    }

    //SET AN EMPLOYEE  SEARCH 
    const handleInputChange = (event) => {

        console.log("search value : " + event.target.value);
        const newSearch = event.target.value;

        console.log("search :" + newSearch);
        setFiltered(allEmployees.filter(user => user.name.toLowerCase().includes(newSearch.toLowerCase())));
        console.log("filtered search: ");
        console.log(filtered)
        setSearch(newSearch);
    }

    return (
        <>
            <Wrapper>
                <h2>Employee Directory </h2>
                <Search
                    value={search}
                    handleInputChange={handleInputChange}
                    icon={"users"} />
            </Wrapper>
            <br></br>
            <div className="row mr-2 ml-2">
                <h2 className="mr-2 ml-2">Filter by State</h2>
                <Filter
                    value={stateChange}
                    onChange={handleFilter}
                />
            </div>
            <br></br>
            < CardHolder>
                {filtered.map(e => (
                    <EmployeeCard
                        key={e.email}
                        name={e.name}
                        smallimage={e.smallimage}
                        image={e.image}
                        location={e.location}
                        email={e.email}
                        phone={e.phone}
                        handleShow={handleShow}

                        setEmployee={setEmployee}
                    />
                ))}


                <Modal aria-labelledby="contained-modal-title-vcenter"
                    centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{employee.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row >
                                <Col md={4}>
                                    <span >
                                        <img src={employee.image} alt={employee.name} />

                                    </span>
                                </Col>
                                <Col md={8}>
                                    <span > Location: {employee.location}</span><br></br>
                                    {/* <span > Email: {employee.email}</span><br></br> */}
                                    <span > Mobile:  {employee.phone}</span><br></br>
                                    <span > Department:  {employee.department}</span><br></br>
                                    <span > Salary:  $ {employee.finance}</span><br></br>
                                    <span > Title:  {employee.title}</span><br></br>



                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Container>
                            <div className="alert alert-danger mr-2 ml-2" role="alert" style={{ opacity: firedMatch ? 1 : 0 }}>
                                This employee has been fired
                        </div>
                        </Container>
                        <Button variant="success" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => {
                            handleFire(employee.email)
                            console.log(employee.email)
                        }
                        }>
                            Fire
                        </Button>

                    </Modal.Footer>
                </Modal>
            </CardHolder>
        </>
    );
}

export default Main;
