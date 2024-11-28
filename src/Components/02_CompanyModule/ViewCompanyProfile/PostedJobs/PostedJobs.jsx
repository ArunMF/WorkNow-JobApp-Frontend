import React, { useState } from 'react'
import './PostedJobs.css'
import Card from 'react-bootstrap/Card';
import { LuDot } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
// import { SiTicktick } from "react-icons/si";
import { TiBookmark } from "react-icons/ti";
import { Col, Form, Row } from 'react-bootstrap';
import { PiBuildingOfficeFill } from "react-icons/pi";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

function PostedJobs() {

    // Job card overview modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='bg-white mx-3 py-4'>
            <h5 className='px-4' style={{ fontFamily: "Jost", fontWeight: "700" }}>Showing 356 posted jobs</h5>
            <div className='d-flex justify-content-center py-3 px-4 mx-5'>
                <input type="text" list='searchJob' className='w-50 bg-light me-1 border-0' id='jobSearchInput' placeholder='Search for a job' />
                <datalist id='searchJob'>
                    <option>Full Stack Web Developer</option>
                    <option>Software Engineer</option>
                    <option>Programmer Trainee</option>
                </datalist>
                <button className='btn me-2' id='btnStyle'>Search</button>
                <Form>
                    <Form.Group controlId="formBasicPwd">
                        {/* <Form.Label className='ms-1'><b>Education Qualification</b> <span className='text-danger'>*</span></Form.Label> */}
                        <Form.Select aria-label="Default select example">
                            <option>Sort jobs by</option>
                            <option value="1">- Latest posts -</option>
                            <option value="2">- Earliest posts -</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
            <Row className='mt-2 px-2 justify-content-center'>

                {/* Filter jobs */}
                {/* <Col className='col-4 border p-4 rounded' id='filterJobs'>
                    <h3 className='fs-5'>Filter Jobs</h3>
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
                </Col> */}

                <div className='w-100'>
                    <div className='' id='PostedJobCardsDiv'>

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

                                    <div className='w-25'>
                                        <p className='text-end mb-0 mt-2' style={{ fontSize: "13px" }}><b className='bg-light p-1 rounded px-2 text-danger'>0 Applicants</b></p>
                                    </div>
                                </Card.Title>
                                <div className='d-flex' style={{ fontSize: "13px" }}>
                                    <div className='w-50 mt-2 align-items-end'>
                                        <div className='d-flex'>
                                            <p className='mb-2'><span className='text-success px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 255, 195)" }}><AiFillThunderbolt /> Easy Apply</span><LuDot className='mx-1' /></p>
                                            <p className='mb-2'><span className='bg-light px-2 py-1 rounded'>Hybrid</span><LuDot className='mx-1' /></p>
                                            <p className='mb-2'><span className='rounded bg-light px-2 py-1'>Internship</span></p>
                                        </div>
                                        <p className='mb-0 text-secondary'>Last date to apply: <b className='text-black'>12-10-2024</b></p>
                                    </div>
                                    {/* <span className='w-25 d-flex justify-content-end mt-2 text-secondary' style={{ float: "right" }}>15 days ago</span> */}
                                    <div className='w-50 d-flex align-items-end'>
                                        <p className='w-100 text-end mb-0 text-secondary'>Posted <b className='text-black'>15 days ago</b></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>


                        {/* Job overview modal */}
                        <Modal show={show} animation={false} size='xl'>
                            <Modal.Body className='p-4' id="jobDescModal">
                                
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn btn-dark' onClick={handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal>

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

                                    <div className='w-25'>
                                        <p className='text-end mb-0 mt-2' style={{ fontSize: "13px" }}><b className='bg-light p-1 rounded px-2 text-success'>23 Applicants</b></p>
                                    </div>
                                </Card.Title>
                                <div className='d-flex' style={{ fontSize: "13px" }}>
                                    <div className='w-50 mt-2 align-items-end'>
                                        <div className='d-flex'>
                                            <p className='mb-2'><span className='text-success px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 255, 195)" }}><AiFillThunderbolt /> Easy Apply</span><LuDot className='mx-1' /></p>
                                            <p className='mb-2'><span className='bg-light px-2 py-1 rounded'>Hybrid</span><LuDot className='mx-1' /></p>
                                            <p className='mb-2'><span className='rounded bg-light px-2 py-1'>Internship</span></p>
                                        </div>
                                        <p className='mb-0 text-secondary'>Last date to apply: <b className='text-danger'>Expired</b></p>
                                    </div>
                                    {/* <span className='w-25 d-flex justify-content-end mt-2 text-secondary' style={{ float: "right" }}>15 days ago</span> */}
                                    <div className='w-50 d-flex align-items-end'>
                                        <p className='w-100 text-end mb-0 text-secondary'>Posted <b className='text-black'>15 days ago</b></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default PostedJobs