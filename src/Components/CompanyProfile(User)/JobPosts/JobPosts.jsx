import React, { useState } from 'react'
import './JobPosts.css'
import Card from 'react-bootstrap/Card';
import { LuDot } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
// import { SiTicktick } from "react-icons/si";
import { TiBookmark } from "react-icons/ti";
import { Col, Form, Row } from 'react-bootstrap';
import { PiBuildingOfficeFill } from "react-icons/pi";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JobPostOVmodal from './JobPostOVmodal/JobPostOVmodal';

function JobPosts() {

    // Job card overview modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='bg-white mx-3 py-4'>
            <h5 className='px-4' style={{ fontFamily: "Jost", fontWeight: "700" }}>Showing 356 posted jobs</h5>
            <div className='d-flex justify-content-center py-3 px-4 mx-5'>
                <input type="text" list='searchJob' className='w-75 bg-light me-1 border-0' id='jobSearchInput' placeholder='Search for a company' />
                <datalist id='searchJob'>
                    <option>Full Stack Web Developer</option>
                    <option>Software Engineer</option>
                    <option>Programmer Trainee</option>
                </datalist>
                <button className='btn btn-dark' id='searchBtn'>Search</button>
            </div>
            <Row className='mt-2 px-2'>

                {/* Filter jobs */}
                <Col className='col-4 border p-4 rounded' id='filterJobs'>
                    {/* <h3 className='fs-5'>Filter Jobs</h3> */}
                    <p>Showing <b className='text-success'>135</b> posted jobs filtered by relevancy.</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label className='ms-1'><b>Location</b></Form.Label>
                            <Form.Control type="text" placeholder="Select a Location" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicJobtitle">
                            <Form.Label className='ms-1'><b>Job title</b></Form.Label>
                            <Form.Control type="text" placeholder="Select a Job Title" />
                        </Form.Group>

                        <button className='btn w-100' type='button' id='btnStyle'>Apply</button>
                    </Form>
                </Col>

                <Col className='col-8'>
                    <div className=''>

                        {/* Job card */}
                        <Card className='px-2 border w-100 mb-3' id='jobCard' onClick={handleShow}>
                            <Card.Body>
                                <Card.Title className='mb-2 d-flex'>
                                    <div className='w-75 pe-3'>
                                        <div className='mb-1'>
                                            <img className='me-1' height='14' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                                            <span style={{ fontSize: "14px" }}>Cognizant Technology Solutions</span><LuDot className='mx-1' />
                                            <span className='text-secondary' style={{ fontSize: "13px" }}>Banglore, India</span>
                                        </div>
                                        <span id='jobTitle'>Full Stack Web Developer - Graduate</span>
                                    </div>

                                    <div className='w-25 d-flex justify-content-end align-items-start'>
                                        <button className='btn btn-light text-success'><TiBookmark /></button>
                                    </div>
                                </Card.Title>
                                <div className='d-flex mt-3' style={{ fontSize: "13px" }}>
                                    <div className='w-75'>
                                        <span className='text-success px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 255, 195)" }}><AiFillThunderbolt /> Easy Apply</span><LuDot className='mx-1' />
                                        <span className='bg-light px-2 py-1 rounded'>Hybrid</span><LuDot className='mx-1' />
                                        <span className='rounded bg-light px-2 py-1'>Internship</span>
                                    </div>
                                    <span className='w-25 d-flex justify-content-end mt-2 text-secondary' style={{ float: "right" }}>15 days ago</span>
                                </div>
                            </Card.Body>
                        </Card>


                        {/* Job overview modal */}
                        <Modal show={show} animation={false} size='xl'>
                            <Modal.Body className='p-4' id="jobDescModal">
                                <JobPostOVmodal />
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn btn-dark' onClick={handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal>

                        <Card className='px-2 border w-100 mb-3' id='jobCard'>
                            <Card.Body>
                                <Card.Title className='mb-2 d-flex'>
                                    <div className='w-75 pe-3'>
                                        <div className='mb-1'>
                                            <img className='me-1' height='14' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                                            <span style={{ fontSize: "14px" }}>Cognizant Technology Solutions</span><LuDot className='mx-1' />
                                            <span className='text-secondary' style={{ fontSize: "13px" }}>Kochi, India</span>
                                        </div>
                                        <span id='jobTitle'>Senior Front End Engineer - Javascript with React</span>
                                    </div>

                                    <div className='w-25 d-flex justify-content-end align-items-start'>
                                        <button className='btn btn-light text-success'><TiBookmark /></button>
                                    </div>
                                </Card.Title>
                                <div className='d-flex mt-3' style={{ fontSize: "13px" }}>
                                    <div className='w-75'>
                                        <span className='text-primary px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 236, 255)" }}><PiBuildingOfficeFill className='mb-1' /> Apply</span><LuDot className='mx-1' />
                                        <span className='bg-light px-2 py-1 rounded'>On-site</span><LuDot className='mx-1' />
                                        <span className='rounded bg-light px-2 py-1'>Full-time</span>
                                    </div>
                                    <span className='w-25 d-flex justify-content-end mt-2 text-secondary' style={{ float: "right" }}>6 days ago</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default JobPosts