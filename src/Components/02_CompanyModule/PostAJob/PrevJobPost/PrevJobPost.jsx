import React from 'react'
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

function PrevJobPost({data}) {
    
    return (
        <div>
            <Row className='border-0 text-black'>

                {/* Company details */}
                <Col>
                    <div>
                        <span className='me-2'><img className='mb-1' height='18px' src={data.companyLogo} alt="" /></span>
                        <span className='me-3' id='companyName'>{data.companyName}</span>
                        <span style={{ fontSize: "15px" }}>4.7 <IoMdStar className='mb-1' /></span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-success'><b>{data.jobTitle}</b></span><br />
                        <span className='text-secondary' style={{ fontSize: "14px" }}><b>{data.location}</b></span>
                        <p className='mt-1 mb-0' style={{ fontSize: "13px" }}><MdOutlinePayments /> Provided salary: <b><MdOutlineCurrencyRupee />{data.salaryFrom} - <MdOutlineCurrencyRupee />{data.salaryTo}/Month</b></p>
                    </div>
                </Col>

                {/* Apply button, etc. */}
                <Col className='d-flex justify-content-end h-50'>
                    <button className='btn' id='btnStyle'><AiFillThunderbolt /> Easy Apply</button>
                </Col>
            </Row>
            <div className='pt-3 mt-2 border-0 border-bottom border-top'>

                {/* Job description */}
                <div className='mb-3'>
                    <h6 style={{ fontWeight: "800" }}>Job Description:</h6>
                    <p style={{ whiteSpace: 'pre-line',fontSize:"15px" }}>{data.jobDesc}</p>
                </div>

                {/* Skills */}
                <div className='py-2'>
                    <h6 style={{ fontWeight: "800" }}><HiLightBulb className='mb-1' /> Skills</h6>
                    <Row className='px-3'>
                        {
                            data.skills.map((item, index)=>(
                                <p key={index} className='py-1 me-3 rounded' style={{fontSize:"15px"}} id='skills'><TiTick className='mb-1' />{item}</p>
                            ))
                        }
                    </Row>
                </div>

                {/* Education, etc. */}
                <div>
                    <p className='my-3'><b><FaGraduationCap className='mb-1' /> Education </b><br />{data.qualification}</p>
                    <p className='my-3'><b><MdWork className='mb-1' /> Work Experience </b><br />{data.experience}</p>
                    <p className='my-3'><b><FaUserTie className='mb-1' /> Employement Type </b><br />{data.empType}</p>
                    {/* <p className='my-3'><b><MdOutlinePayments className='mb-1' /> Salary </b><br/><MdOutlineCurrencyRupee />18000 - <MdOutlineCurrencyRupee />21000/Month</p> */}
                    <p className='my-3'><b><MdLocationCity className='mb-1' /> Mode of Work </b><br />{data.modeOfWork}</p>
                </div>

                {/* Other details */}
                <div className='py-3'>
                    <h6 style={{ fontWeight: "800" }}>Other Details</h6>
                    <p style={{fontSize:"15px"}}>{data.otherDetails}</p>
                </div>
            </div>
        </div>
    )
}

export default PrevJobPost