import React, { useState } from 'react'
import './AllApplications.css'
import { Col, Form, Row } from 'react-bootstrap'
// import { IoMdStar } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import { FaRegEye } from "react-icons/fa6";
import ApplicationList from './ApplicationList/ApplicationList';
import ShortlistedApps from './ShortlistedApps/ShortlistedApps';

function AllApplications() {

    const sampleData = [
        {
            "jobTitle": "MERN Full Stack Developer",
            "location": "Kochi, India",
            "postedDate": "17-07-2023"
        },
        {
            "jobTitle": "MERN Full Stack Developer",
            "location": "Calicut, India",
            "postedDate": "17-12-2023"
        },
        {
            "jobTitle": "Web Developer",
            "location": "Calicut, India",
            "postedDate": "10-10-2023"
        },
        {
            "jobTitle": "Flutter Developer",
            "location": "Trivandrum, India",
            "postedDate": "25-01-2024"
        }
    ]

    // View Job modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState(sampleData);

    const [applicRadio, setApplicRadio] = useState(true)

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredData = sampleData.filter(item =>
            item.jobTitle.toLowerCase().includes(query)
        );

        setFilteredResults(filteredData);
    };

    return (
        <div className='px-5 mb-5'>
            {/* Company details */}
            <div className='py-3 border-0 border-bottom text-center'>
                <div>
                    <span className='me-2'><img className='mb-2' height='20px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" /></span>
                    <span className='fs-4 me-3' style={{ fontFamily: "Jost", fontWeight: "800" }}>Cognizant Technology Solutions</span>
                    {/* <span style={{ fontSize: "15px" }}>4.7 <IoMdStar className='mb-1' /></span> */}
                </div>
                <div className=''>
                    <span className='text-secondary'><b>Information Technology Support Services</b></span><br />
                </div>
            </div>

            <Row className='py-3'>

                <Col className='col-3 border p-4 rounded' id='allApplicFilter'>
                    <p>Showing <b className='text-success'>135</b> job applications filtered by relevancy.</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label className='ms-1'><b>Job Title</b></Form.Label>
                            <Form.Control type="text" value={searchQuery} onChange={handleSearch} placeholder="Search by job title" />
                        </Form.Group>
                    </Form>

                    {
                        searchQuery &&
                        <ul className='bg-light p-3' style={{ position: "absolute", zIndex: "1", listStyle: "none", width: "auto", minWidth: "270px" }}>
                            {filteredResults.map((item, index) => (
                                <li key={index} className='bg-white px-3 py-1 rounded mb-2' style={{ cursor: "pointer" }}>
                                    <span className='mb-0'><b>{item.jobTitle}</b></span><br />
                                    <span style={{ fontSize: "12px" }}>{item.location}</span>
                                </li>
                            ))}
                        </ul>
                    }
                    <div className="legend-container border border-black mt-4 rounded">
                        <span className="legend bg-white">Job details</span>
                        <div>
                            <p className='mb-0' style={{ fontSize: "10px" }}>Job ID: <b>JOB66532</b></p>
                            <p className='mb-0 text-success'><b>MERN Full Stack Developer</b></p>
                            <p className='mb-0 text-secondary' style={{ fontSize: "13px" }}><b>Kochi, India</b></p>
                            <p className='mb-0' style={{ fontSize: "11px" }}>Posted date: <b>17-08-2023</b></p>
                            <button className='btn py-1 mt-2' id='btnStyle' style={{ fontSize: "13px" }}>View Job</button>

                            {/* View job modal */}
                            <Modal show={show} animation={false} size='xl'>
                                <Modal.Body className='p-4' id="jobDescModal">

                                </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn btn-dark' onClick={handleClose}>Close</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </Col>

                <Col className='col-9'>
                    <Form.Group controlId="formBasicSL">
                        <div className='d-flex ms-2 mb-2'>
                            <label htmlFor="" className='d-flex me-5'>
                                <Form.Check type="radio" name='shorlist' onChange={() => { setApplicRadio(true) }} className='me-2' defaultChecked />
                                <b>All applications</b>
                            </label>
                            <label htmlFor="" className='d-flex'>
                                <Form.Check type="radio" name='shorlist' onChange={() => { setApplicRadio(false) }} className='me-2' />
                                <b>Shortlisted applications</b>
                            </label>
                        </div>
                    </Form.Group>
                    {
                        applicRadio &&
                        <ApplicationList />
                    }

                    {
                        !applicRadio &&
                        <ShortlistedApps />
                    }
                </Col>
            </Row>
        </div>
    )
}

export default AllApplications