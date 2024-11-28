import React from 'react'
import './SvJobOverview.css'
import { Col, Row } from 'react-bootstrap'
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
import Dropdown from 'react-bootstrap/Dropdown';
import { IoFlagOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function SvJobOverview() {

    const navigate = useNavigate()

    return (
        <div className='text-black p-4'>
            <Row>

                {/* Company details */}
                <Col>
                    <div>
                        <span className='me-2'><img className='mb-1' height='18px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" /></span>
                        <span className='me-3' id='companyName'>Cognizant Technology Solutions</span>
                        <span style={{ fontSize: "15px" }}>4.7 <IoMdStar className='mb-1' /></span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-success'><b>Programmer Trainee</b></span><br />
                        <span className='text-secondary' style={{ fontSize: "15px" }}><b>Kochi, India</b></span>
                        <p className='mt-1 mb-0' style={{ fontSize: "13px" }}><MdOutlinePayments /> Provided salary: <b><MdOutlineCurrencyRupee />18000 - <MdOutlineCurrencyRupee />21000/Month</b></p>
                    </div>
                </Col>

                {/* Apply button, etc. */}
                <Col className='d-flex justify-content-end h-50'>
                    <button className='btn mx-1' id='btnStyle' onClick={() => { navigate('/Apply') }}><AiFillThunderbolt /> Easy Apply</button>
                    <button className='btn mx-1 btn-success'><TiBookmark /> Remove</button>
                </Col>
            </Row>
            <div className='pt-3 mt-2 border-0 border-bottom border-top'>

                {/* Job description */}
                <div className='mb-3'>
                    <h6 style={{ fontWeight: "800" }}>Job Description:</h6>
                    <p style={{fontSize:"14px"}}>ATeam Soft Solutions is seeking a highly skilled ReactJS Developer with a minimum of 4 years of experience to join our dynamic team. The ideal candidate will be proficient in developing and implementing user interface components using ReactJS concepts and workflows such as Redux, Flux, and Webpack.<br /><br />

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
                    <Row className='px-3' style={{fontSize:"14px"}}>
                        <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' />HTML</p>
                        <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' />CSS</p>
                        <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' />Javascript</p>
                        <p className='py-1 me-3 rounded' id='skills'><TiTick className='mb-1' />ReactJs</p>
                    </Row>
                </div>

                {/* Education, etc. */}
                <div id='educationEtc'>
                    <p className='my-3'><b><FaGraduationCap className='mb-1' /> Education </b><br /><span>Bachelor's Degree</span></p>
                    <p className='my-3'><b><MdWork className='mb-1' /> Work Experience </b><br /><span>1 - 2 Year(s) of experience as a Programmer Trainee</span></p>
                    <p className='my-3'><b><FaUserTie className='mb-1' /> Employement Type </b><br /><span>Full-time</span></p>
                    {/* <p className='my-3'><b><MdOutlinePayments className='mb-1' /> Salary </b><br /><span><MdOutlineCurrencyRupee />18000 - <MdOutlineCurrencyRupee />21000/Month</span></p> */}
                    <p className='my-3'><b><MdLocationCity className='mb-1' /> Mode of Work </b><br /><span>On-site</span></p>
                </div>

                {/* Other details */}
                <div className='py-3'>
                    <h6 style={{ fontWeight: "800" }}>Other Details</h6>
                    <p style={{fontSize:"14px"}}>If you aspire to work in the dynamic world of IT development and digital marketing, Ginger Technologies is your best bet. We take pride in offering promising opportunities to seasoned professionals as well as passionate newcomers looking to make a mark. With our commitment to providing a healthy and nurturing work environment, we aim to pave the way for your professional success. Join us on a journey towards achieving your dreams in a space that fosters growth and excellence.</p>
                </div>
            </div>
        </div>
    )
}

export default SvJobOverview