import React, { useContext, useState } from 'react'
import './PostAJob.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Images/mainLogo.gif'
import { RxCross2 } from "react-icons/rx";
import { IoIosEye } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import PrevJobPost from './PrevJobPost/PrevJobPost';
import { DataContext } from '../../../Context/DataContext';
import axios from 'axios';
import { baseUrl } from '../../baseurl';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function PostAJob() {

    const { data, token } = useContext(DataContext)
    const navigate = useNavigate()
    const currentDate = new Date()


    const [expRadio, setExpRadio] = useState(false)
    const [applyRadio, setApplyRadio] = useState(false)

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const [jobData, setJobData] = useState({
        companyId: `${data.companyId}`,
        companyName: `${data.companyName}`,
        companyLogo: `${data.logo}`,
        jobTitle: "",
        jobDesc: "",
        modeOfWork: "",
        empType: "",
        location: "",
        qualification: "",
        experience: "",
        otherDetails: "",
        applyLink: "",
        lastDateToApply: "",
        date: `${currentDate.toLocaleDateString()}`,
        skills: [],
        status: "posted"
    })

    const [errors, setErrors] = useState({
        mandatoryError: "",
        skillError: ""
    })

    const [skill, setSkill] = useState('')
    const [resMessage, setResMessage] = useState('')
    const [toastView, setToastView] = useState(false)

    // Preview Job Post modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        jobData.location = `${city}, ${country}`
        setShow(true)
    };

    const skillDisplay = {
        width: "auto",
        borderRadius: "10px",
        backgroundColor: "rgb(224, 224, 224)",
        fontSize: "13px"
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (event) => {
        const inputDate = event.target.value;
        const [year, month, day] = inputDate.split("-"); 
        const formatted = `${month}/${day}/${year}`;
        jobData.lastDateToApply = formatted; 
    };

    function handleSkillArr() {
        if (skill) {
            jobData.skills.push(skill)
            setSkill('')
            errors.skillError = ''
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                skillError: 'Enter a skill'
            }));
        }
    }

    function handleSkillRemove(index, item) {
        setJobData((prevData) => ({
            ...prevData,
            skills: prevData.skills.filter((_, i) => i !== index),
        }));
    }

    function formValidation() {
        if (jobData.jobTitle && jobData.jobDesc && jobData.modeOfWork && jobData.empType && jobData.location &&
            jobData.qualification && jobData.skills.length != 0 && jobData.experience && jobData.salaryFrom &&
            jobData.salaryTo && jobData.applyLink) {
            setErrors(prevErrors => ({
                ...prevErrors,
                mandatoryError: ''
            }));
            return true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                mandatoryError: 'Please enter all the mandatory(*) fields!'
            }));
        }
    }

    const postJob = async () => {
        jobData.location = `${city}, ${country}`
        if (formValidation()) {
            await axios.post(`${baseUrl}/postAJob`, jobData, {
                headers: {
                    'Authorization': `${token}`
                }
            }).then((response) => {
                setResMessage(response.data.message)
                setToastView(true)
                setTimeout(() => {
                    navigate('/Company-Home')
                }, 3000)
            }).catch((error) => {
                console.log(error);
            })
        }
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
                    <p className='text-danger ms-3' style={{ fontSize: "14px" }}><b>{errors.mandatoryError}</b></p>
                    <Form className='px-3'>
                        <Form.Group className="mb-4" controlId="formBasicJobTT">
                            <Form.Label className='ms-1'><b>Job Title</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='jobTitle' onChange={handleChange} placeholder="Enter job title" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicJobDesc">
                            <Form.Label className='ms-1'><b>Job Description</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control as="textarea" name='jobDesc' onChange={handleChange} rows={10} />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-4 w-50 me-1" controlId="formBasicFsMode">
                                <Form.Label className='ms-1'><b>Mode of Work</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Select name='modeOfWork' onChange={handleChange} aria-label="Default select example">
                                    <option>Select Mode of Work</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Remote">Remote</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4 w-50 me-1" controlId="formBasicEmpType">
                                <Form.Label className='ms-1'><b>Employement Type</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Select name='empType' onChange={handleChange} aria-label="Default select example">
                                    <option>Select Employement Type</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Trainee">Trainee</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLoc">
                            <Form.Label className='ms-1'><b>Location</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex bg-light rounded p-3'>
                                <Form.Group className="w-50 me-1 mb-4" controlId="formBasicLoc">
                                    <Form.Label className='ms-1'><b>City</b> <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" onChange={(e) => { setCity(e.target.value) }} placeholder="Enter job location" />
                                </Form.Group>

                                <Form.Group className="w-50 ms-1 mb-4" controlId="formBasicLoc">
                                    <Form.Label className='ms-1'><b>Country</b> <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" onChange={(e) => { setCountry(e.target.value) }} placeholder="Enter job location" />
                                </Form.Group>
                            </div>
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLoc">
                            <Form.Label className='ms-1'><b>Educational Qualification</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='qualification' onChange={handleChange} placeholder="Enter educational qualification" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicExp">
                            <Form.Label className='ms-1'><b>Looking for?</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex ms-2 mb-2'>
                                <Form.Check type="radio" onChange={() => { setExpRadio(false); jobData.experience = "Fresher"; }} name='experience' label="Fresher" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setExpRadio(true) }} name='experience' label="Experienced" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setExpRadio(false); jobData.experience = "Fresher/Experienced"; }} name='experience' label="Fresher/Experienced" className='me-4' />
                            </div>
                            {
                                expRadio &&
                                <div>
                                    <Form.Group className="w-100 me-1 mb-4" controlId="formBasicWoEx">
                                        <Form.Label className='ms-1'><b>Work experience</b></Form.Label>
                                        <Form.Control type="text" placeholder="Enter work experience" name='experience' onChange={handleChange} />
                                    </Form.Group>
                                </div>
                            }
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicSkills">
                            <Form.Label className='ms-1'><b>Skills</b> <span className='text-danger'>*</span></Form.Label>
                            <p className='text-danger ms-1 mb-1' style={{ fontSize: "14px" }}><b>{errors.skillError}</b></p>
                            <div className='d-flex mb-3'>
                                <Form.Control type="text" value={skill} onChange={(e) => { setSkill(e.target.value) }} placeholder="Enter skills" />
                                <button className='btn btn-dark w-25 ms-1' onClick={handleSkillArr} type='button'>Add</button>
                            </div>
                            <Row className='mx-1'>
                                {
                                    jobData.skills.map((item, index) => (
                                        <p key={index} className='pt-1 mx-1' style={skillDisplay}><b>{item}</b> <span style={{ cursor: "pointer" }} onClick={() => { handleSkillRemove(index, item) }}><RxCross2 className='mb-1' /></span></p>
                                    ))
                                }
                            </Row>
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicSalary">
                            <Form.Label className='ms-1 mb-0'><b>Salary</b> (per month) <span className='text-danger'>*</span></Form.Label>
                            <p className='ms-1 text-secondary mb-1' style={{ fontSize: "13px" }}>If it's a fixed salary, fill the same amount on both <b>From</b> and <b>To</b> inputs.</p>
                            <div className='d-flex'>
                                <Form.Group className="mb-3 w-50 me-1" controlId="formBasicFsSalFrom">
                                    <Form.Label className='ms-1'><b>From</b></Form.Label>
                                    <Form.Control type="number" name='salaryFrom' onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicLsSalTo">
                                    <Form.Label className='ms-1'><b>To</b></Form.Label>
                                    <Form.Control type="number" name='salaryTo' onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicOthDet">
                            <Form.Label className='ms-1'><b>Other details</b></Form.Label>
                            <Form.Control as="textarea" name='otherDetails' onChange={handleChange} rows={5} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicAppMet">
                            <Form.Label className='ms-1'><b>Job applying method</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex ms-2 mb-2'>
                                <Form.Check type="radio" onChange={() => { setApplyRadio(false); jobData.applyLink = "--" }} name='applyLink' label="Apply through WorkNow" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setApplyRadio(true) }} name='applyLink' label="Apply through provided link" className='me-4' />
                            </div>
                            {
                                applyRadio &&
                                <div>
                                    <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLink">
                                        <Form.Label className='ms-1'><b>Link to Apply</b></Form.Label>
                                        <Form.Control type="text" name='applyLink' onChange={handleChange} />
                                    </Form.Group>
                                </div>
                            }
                        </Form.Group>

                        <Form.Group className="w-100 me-1 mb-4" controlId="formBasicLast">
                            <Form.Label className='ms-1'><b>Last date to apply</b></Form.Label>
                            <Form.Control type="date" name='lastDateToApply' onChange={handleDateChange} />
                        </Form.Group>

                        <div className='m-3 d-flex justify-content-end'>
                            <a style={{ textDecoration: "none", cursor: "pointer" }} onClick={handleShow} className='text-primary'><FaRegEye /> Preview job post</a>
                        </div>

                        {/* Preview job post modal */}
                        <Modal show={show} animation={false} size='xl'>
                            <Modal.Body className='p-4' id="jobDescModal">
                                <PrevJobPost data={jobData} />
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn btn-dark' onClick={handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal>

                        <button className='btn w-100 ms-1' type='button' id='btnStyle' onClick={postJob}>Post now</button>
                    </Form>
                </Col>
                {
                    toastView &&

                    <ToastContainer
                        className="px-3 py-5"
                        position='top-end'
                        style={{ position: "fixed", zIndex: "1" }}
                    >
                        <Toast>
                            <Toast.Header className='py-0' closeButton={false}>
                                <img
                                    className='me-1'
                                    src={logo}
                                    height='25'
                                    alt=''
                                    loading='lazy'
                                />
                                <p className='pt-2 m-0' id='toastTitle'><span style={{ fontFamily: "Lilita One" }}>Work</span><span className='text-primary' style={{ fontFamily: "Playwrite NG Modern" }}>Now</span></p>
                            </Toast.Header>
                            <Toast.Body className='text-success py-3'><b>{resMessage}</b></Toast.Body>
                        </Toast>
                    </ToastContainer>
                }
            </Row>
        </div>
    )
}

export default PostAJob