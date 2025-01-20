import React from 'react'
import './JobOverview.css'
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
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

function JobOverview(props) {

    const navigate = useNavigate()
    const { job } = props;

    return (
        <div className='p-3 rounded border-0 border-bottom'>
            <Row className='border-0'>

                {/* Company details */}
                <Col>
                    <div>
                        <span className='me-2'><img className='mb-1' height='18px' src={job.companyLogo} alt="" /></span>
                        <span className='me-3' id='companyName'>{job.companyName}</span>
                        <span style={{ fontSize: "15px" }}>4.7 <IoMdStar className='mb-1' /></span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-success'><b>{job.jobTitle}</b></span><br />
                        <span className='text-secondary' style={{ fontSize: "13px" }}><b>{job.location}</b></span>
                    </div>
                </Col>

                {/* Apply button, etc. */}
                <Col className=''>
                    <div className='d-flex justify-content-end h-50'>
                        <Dropdown className='me-2'>
                            <Dropdown.Toggle variant="light" key={'start'} id="dropdown-button-drop-start" drop="start">
                                <BsThreeDots />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='p-0'>
                                <Dropdown.Item className='text-danger'><IoFlagOutline /> Report</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className='btn btn-light text-success me-2'><TiBookmark /></button>
                        {
                            job.applyLink === "--" ?
                                <Link to="/Apply" state={{job}}>
                                    <button className='btn' id='btnStyle'><AiFillThunderbolt /> Easy Apply</button>
                                </Link> :
                                <button className='btn btn-primary' onClick={() => { window.location.href = `${job.applyLink}` }}>Apply Now</button>

                        }
                    </div>
                    {
                        job.lastDateToApply &&
                        <p className='text-end mt-4 mb-0' style={{ fontSize: "13px" }}><b>Last date to apply: </b><span className='text-success'>{job.lastDateToApply}</span></p>
                    }

                </Col>
            </Row>
            <div className='pt-3 mt-2 border-0 border-bottom border-top'>

                {/* Job description */}
                <div className='mb-3'>
                    <h6 style={{ fontWeight: "800" }}>Job Description:</h6>
                    <p style={{ whiteSpace: 'pre-line', fontSize: "15px" }}>{job.jobDesc}</p>
                </div>

                {/* Skills */}
                <div className='py-2'>
                    <h6 style={{ fontWeight: "800" }}><HiLightBulb className='mb-1' /> Skills</h6>
                    <Row className='px-3'>
                        {
                            job.skills.map((item, index) => (
                                <p key={index} className='pt-1 me-3 rounded' style={{ fontSize: "15px" }} id='skills'><TiTick className='mb-1' />{item}</p>
                            ))
                        }
                    </Row>
                </div>

                {/* Education, etc. */}
                <div id='educationEtc'>
                    <p className='my-3'><b><FaGraduationCap className='mb-1' /> Education </b><br /><span>{job.qualification}</span></p>
                    <p className='my-3'><b><MdWork className='mb-1' /> Work Experience </b><br /><span>{job.experience}</span></p>
                    <p className='my-3'><b><FaUserTie className='mb-1' /> Employement Type </b><br /><span>{job.empType}</span></p>
                    <p className='my-3'><b><MdOutlinePayments className='mb-1' /> Salary </b><br /><span><MdOutlineCurrencyRupee />{job.salaryFrom} - <MdOutlineCurrencyRupee />{job.salaryTo}/Month</span></p>
                    <p className='my-3'><b><MdLocationCity className='mb-1' /> Mode of Work </b><br /><span>{job.modeOfWork}</span></p>
                </div>

                {/* Other details */}
                {
                    job.otherDetails &&
                    <div className='py-3'>
                        <h6 style={{ fontWeight: "800" }}>Other Details</h6>
                        <p>{job.otherDetails}</p>
                    </div>
                }
            </div>

            {/* Rating */}
            <Row className='py-3' style={{ borderBottom: "1px solid rgba(163, 163, 163, 0.308)" }}>
                <Col>
                    <p className='text-center' id='companyName'>Cognizant Technology Solutions Ratings</p>
                    <div className='d-flex justify-content-center align-items-center fs-3'>
                        <span className='me-2'><b>4.7</b></span>
                        <span className='me-3' style={{ fontSize: "10px" }}><b>Out of<br />5 Stars</b></span>
                        <span className='text-warning fs-4 d-flex mb-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span>
                    </div>
                    <p className='text-center'><b>Overall rating of 1000 reviews</b></p>
                    <div className='d-flex justify-content-center py-3'>
                        <span className='col-3 text-center me-4'>
                            <p className='bg-light fs-5 mb-2 py-4' style={{ borderRadius: "50px" }}><b>86%</b></p>
                            <b>Recommand to a friend</b>
                        </span>
                        <span className='col-3 text-center'>
                            <p className='bg-light fs-5 mb-2 py-4' style={{ borderRadius: "50px" }}><FaUserGroup /></p>
                            <b>1000 Ratings</b>
                        </span>
                    </div>
                </Col>
                <Col>
                    <div className='text-end mb-5'>
                        <button className='btn btn-dark px-4 me-2'><FaStar className='mb-1' /> Reviews</button>
                        <button className='btn btn-outline-success px-4'>Rate this company</button>
                    </div>
                    <div>
                        <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>5 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={42} /></span><span className='col-2'><b>420</b></span></p>
                        <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>4 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={25} /></span><span className='col-2'><b>250</b></span></p>
                        <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>3 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={20} /></span><span className='col-2'><b>200</b></span></p>
                        <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>2 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={8} /></span><span className='col-2'><b>80</b></span></p>
                        <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>1 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={5} /></span><span className='col-2'><b>50</b></span></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default JobOverview