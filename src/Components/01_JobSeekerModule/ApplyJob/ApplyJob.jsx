import React, { useState } from 'react'
import './ApplyJob.css'
import { IoMdStar } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { TiBookmark } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { FaGraduationCap, FaUserGroup, FaRegStar } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { MdOutlinePayments, MdOutlineCurrencyRupee, MdLocationCity } from "react-icons/md";
import { FaUserTie, FaStar } from "react-icons/fa";
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

function ApplyJob() {

    const navigate = useNavigate()
    const [expRadio, setExpRadio] = useState(false)

    const expFalseStyle = {
        height: '400px'
    };

    const expTrueStyle = {
        height: '700px'
    };

    const location = useLocation()
    const { job } = location.state;
    console.log(job);

    return (
        <div className='p-5 bg-light d-flex'>
            <div className='border p-5 bg-white rounded' id='jobForm'>
                <div>
                    <span style={{ float: "right" }}>
                        <button className='btn btn-white text-primary border-0' onClick={() => navigate('/AllJobs')}><b>Exit</b></button>
                    </span>
                    <span className='me-2'><img className='mb-1' height='18px' src={job.companyLogo} alt="" /></span>
                    <span className='me-3' id='companyName'>{job.companyName}</span>
                </div>
                <div className='mt-2'>
                    <span className='text-success'><b>{job.jobTitle}</b></span><br />
                    <span className='text-secondary' style={{ fontSize: "13px" }}><b>{job.location}</b></span>
                </div>
                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                <div className='mt-3'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className='ms-1'><b>Name</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <div className='d-flex'>
                            <Form.Group className="mb-3 w-50 me-1" controlId="formBasicEmail">
                                <Form.Label className='ms-1'><b>Email address</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter email address" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicPhone">
                                <Form.Label className='ms-1'><b>Phone number</b></Form.Label>
                                <Form.Control type="number" placeholder="Enter phone number" />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicExp">
                            <Form.Label className='ms-1'><b>Do you have any relevant experience?</b> <span className='text-danger'>*</span></Form.Label>
                            <div className='d-flex ms-2'>
                                <Form.Check type="radio" onChange={() => { setExpRadio(true) }} name='experience' label="Yes" className='me-4' />
                                <Form.Check type="radio" onChange={() => { setExpRadio(false) }} name='experience' label="No" />
                            </div>
                        </Form.Group>
                    </Form>
                    {
                        expRadio &&
                        <div className='border p-4'>
                            <p>Enter a past job that shows relevant experience</p>
                            <h5 className='mb-3'><b>Relevant Experience</b> <span className='fs-6 text-secondary'>(optional)</span></h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicJobT">
                                    <Form.Label className='ms-1'><b>Job title</b></Form.Label>
                                    <Form.Control type="email" placeholder="Enter job title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCompany">
                                    <Form.Label className='ms-1'><b>Company</b></Form.Label>
                                    <Form.Control type="email" placeholder="Enter company" />
                                </Form.Group>
                            </Form>
                        </div>
                    }
                    <button className='btn w-100 mt-3' id='btnStyle'>Continue</button>
                </div>
            </div>

            {/* About Job */}
            <div className='bg-white m-5 py-3 px-4 rounded' id='JobDescription' style={expRadio ? expTrueStyle : expFalseStyle}>
                <div className='border-bottom pt-2'>
                    <span><b>Programmer Trainee</b></span>
                    <p>Cognizant Technology Solutions - Kochi, India</p>
                </div>
                <div id='jobDetails' className='pt-4'>
                    <span><b>Position</b>: Programmer Trainee</span><br />
                    <span><b>Location</b>: Kochi, India</span><br />
                    <span><b>Salary</b>: <MdOutlineCurrencyRupee />18000 - <MdOutlineCurrencyRupee />21000/Month</span>

                    {/* Job description */}
                    <div className='my-3'>
                        <h6 style={{ fontWeight: "800" }}>Job Description:</h6>
                        <p>ATeam Soft Solutions is seeking a highly skilled ReactJS Developer with a minimum of 4 years of experience to join our dynamic team. The ideal candidate will be proficient in developing and implementing user interface components using ReactJS concepts and workflows such as Redux, Flux, and Webpack.<br /><br />

                            Key Responsibilities:<br />

                            Develop and maintain web applications using ReactJS.
                            Collaborate with cross-functional teams to define, design, and ship new features.
                            Ensure the performance, quality, and responsiveness of applications.
                            Identify and correct bottlenecks and fix bugs.
                            Help maintain code quality, organization, and automation.
                            Participate in code reviews and provide constructive feedback.
                            Stay updated with emerging technologies and apply them into operations and activities.<br /><br />
                            Requirements:<br />

                            Minimum 4 years of professional experience in ReactJS development.
                            Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.
                            Thorough understanding of ReactJS and its core principles.
                            Experience with popular ReactJS workflows (such as Flux or Redux).
                            Familiarity with newer specifications of EcmaScript.
                            Experience with data structure libraries (e.g., Immutable.js).
                            Knowledge of isomorphic React is a plus.
                            Familiarity with RESTful APIs.
                            Knowledge of modern authorization mechanisms, such as JSON Web Token.<br /><br />
                            Familiarity with modern front-end build pipelines and tools.
                            Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
                            Ability to understand business requirements and translate them into technical requirements.
                            A knack for benchmarking and optimization.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className='py-2'>
                        <h6 style={{ fontWeight: "800" }}><HiLightBulb className='mb-1' /> Skills</h6>
                        <Row className='px-3'>
                            <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' /> HTML</p>
                            <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' /> CSS</p>
                            <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' /> Javascript</p>
                            <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' /> ReactJs</p>
                        </Row>
                    </div>

                    {/* Education, etc. */}
                    <div>
                        <p className='my-3'><b><FaGraduationCap className='mb-1' /> Education </b><br />Bachelor's Degree</p>
                        <p className='my-3'><b><MdWork className='mb-1' /> Work Experience </b><br />1 - 2 Year(s)</p>
                        <p className='my-3'><b><FaUserTie className='mb-1' /> Employement Type </b><br />Full-time</p>
                        {/* <p className='my-3'><b><MdOutlinePayments className='mb-1' /> Salary </b><br/><MdOutlineCurrencyRupee />18000 - <MdOutlineCurrencyRupee />21000/Month</p> */}
                        <p className='my-3'><b><MdLocationCity className='mb-1' /> Mode of Work </b><br />On-site</p>
                    </div>

                    {/* Other details */}
                    <div className='py-3'>
                        <h6 style={{ fontWeight: "800" }}>Other Details</h6>
                        <p>If you aspire to work in the dynamic world of IT development and digital marketing, Ginger Technologies is your best bet. We take pride in offering promising opportunities to seasoned professionals as well as passionate newcomers looking to make a mark. With our commitment to providing a healthy and nurturing work environment, we aim to pave the way for your professional success. Join us on a journey towards achieving your dreams in a space that fosters growth and excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyJob