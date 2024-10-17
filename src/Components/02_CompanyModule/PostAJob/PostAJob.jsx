import React, { useState } from 'react'
import './PostAJob.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from '../../../Images/mainLogo.gif'
import { RxCross2 } from "react-icons/rx";
import { IoIosEye } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import PrevJobPost from './PrevJobPost/PrevJobPost';

function PostAJob() {

    const [expRadio, setExpRadio] = useState(false)
    const [applyRadio, setApplyRadio] = useState(false)

    // Preview Job Post modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const skillDisplay = {
        width: "auto",
        borderRadius: "10px",
        backgroundColor: "rgb(224, 224, 224)"
    }

    return (
        <div className='d-flex justify-content-center py-5 bg-light' id='PostJobMainDiv'>
            <Row className='border w-75 pb-4'>
                <Col className='px-5 pt-3 pb-4 bg-white'>
                    <div className='w-25 mt-3 mx-2 d-flex'>
                        <img
                            className='me-2'
                            src={logo}
                            height='35'
                            alt=''
                            loading='lazy'
                        />
                        <h5 className='pt-2'><span style={{ fontFamily: "Lilita One" }}>Work</span><span className='text-primary' style={{ fontFamily: "Playwrite NG Modern" }}>Now</span></h5>
                    </div>
                    <h1 className='mt-4 mb-4 px-3'>Post a Job</h1>
                    <p className='mb-3 px-3'>You can post a job here.</p>
                    <Form className='px-3'>
                        <Form.Group className="mb-4" controlId="formBasicJobTT">
                            <Form.Label className='ms-1'><b>Job Title</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" placeholder="Enter job title" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicJobDesc">
                            <Form.Label className='ms-1'><b>Job Description</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control as="textarea" rows={10} />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-4 w-50 me-1" controlId="formBasicFsMode">
                                <Form.Label className='ms-1'><b>Mode of Work</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Mode of Work</option>
                                    <option value="1">Hybrid</option>
                                    <option value="2">On-site</option>
                                    <option value="2">Remote</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4 w-50 me-1" controlId="formBasicEmpType">
                                <Form.Label className='ms-1'><b>Employement Type</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Employement Type</option>
                                    <option value="1">Full-Time</option>
                                    <option value="1">Part-Time</option>
                                    <option value="1">Internship</option>
                                    <option value="2">Trainee</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLoc">
                            <Form.Label className='ms-1'><b>Location</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter job location" />
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLoc">
                            <Form.Label className='ms-1'><b>Educational Qualification</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter educational qualification" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicExp">
                            <Form.Label className='ms-1'><b>Looking for?</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex ms-2 mb-2'>
                                <Form.Check type="radio" onChange={() => { setExpRadio(false) }} name='experience' label="Fresher" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setExpRadio(true) }} name='experience' label="Experienced" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setExpRadio(false) }} name='experience' label="Fresher/Experienced" className='me-4' />
                            </div>
                            {
                                expRadio &&
                                <div>
                                    <Form.Group className="w-100 me-1 mb-4" controlId="formBasicWoEx">
                                        <Form.Label className='ms-1'><b>Work experience</b></Form.Label>
                                        <Form.Control type="text" placeholder="Enter work experience" />
                                    </Form.Group>
                                </div>
                            }
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicSkills">
                            <Form.Label className='ms-1'><b>Skills</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex mb-3'>
                                <Form.Control type="text" placeholder="Enter skills" />
                                <button className='btn btn-dark w-25 ms-1' type='button'>Add</button>
                            </div>
                            <Row className='mx-1'>
                                <p className='pt-1 mx-1' style={skillDisplay}><b>HTML5</b> <span style={{ cursor: "pointer" }}><RxCross2 className='mb-1' /></span></p>
                                <p className='pt-1 mx-1' style={skillDisplay}><b>CSS3</b> <span style={{ cursor: "pointer" }}><RxCross2 className='mb-1' /></span></p>
                                <p className='pt-1 mx-1' style={skillDisplay}><b>JavaScript</b> <span style={{ cursor: "pointer" }}><RxCross2 className='mb-1' /></span></p>
                            </Row>
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicSalary">
                            <Form.Label className='ms-1 mb-0'><b>Salary</b> (per month) <span className='text-danger'>*</span></Form.Label>
                            <p className='ms-1 text-secondary mb-1' style={{ fontSize: "13px" }}>If it's a fixed salary, fill the same amount on both <b>From</b> and <b>To</b> inputs.</p>
                            <div className='d-flex'>
                                <Form.Group className="mb-3 w-50 me-1" controlId="formBasicFsSalFrom">
                                    <Form.Label className='ms-1'><b>From</b></Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>

                                <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicLsSalTo">
                                    <Form.Label className='ms-1'><b>To</b></Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicOthDet">
                            <Form.Label className='ms-1'><b>Other details</b></Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicAppMet">
                            <Form.Label className='ms-1'><b>Job applying method</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex ms-2 mb-2'>
                                <Form.Check type="radio" onChange={() => { setApplyRadio(false) }} name='applyingMeth' label="Apply through WorkNow" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setApplyRadio(true) }} name='applyingMeth' label="Apply through provided link" className='me-4' />
                            </div>
                            {
                                applyRadio &&
                                <div>
                                    <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLink">
                                        <Form.Label className='ms-1'><b>Link to Apply</b></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>
                            }
                        </Form.Group>

                        <div className='m-3 d-flex justify-content-end'>
                            <a style={{ textDecoration: "none", cursor: "pointer" }} onClick={handleShow} className='text-primary'><FaRegEye /> Preview job post</a>
                        </div>

                        {/* Preview job post modal */}
                        <Modal show={show} animation={false} size='xl'>
                            <Modal.Body className='p-4' id="jobDescModal">
                                <PrevJobPost />
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn btn-dark' onClick={handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal>

                        <button className='btn w-100 ms-1' type='button' id='btnStyle'>Post now</button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default PostAJob