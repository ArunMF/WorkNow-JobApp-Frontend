import React from 'react'
import './AppliedJobs.css'
import { Col, Row } from 'react-bootstrap'
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { IoMdStar } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import AppJobOverview from './AppliedJobOverview/AppJobOverview';

function AppliedJobs() {
  return (
    <div className='w-100'>
            <h5 className='ms-3 mb-0' style={{ fontFamily: "Jost", fontWeight: "700" }}>Showing all applied jobs through <span className='text-success px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 255, 195)", fontSize: "14px" }}><AiFillThunderbolt /> Easy Apply</span></h5>
            <Row>
                <Col className='col-4 border-0 p-2'>
                    <MDBCard className='my-2 px-1 border-0 border-bottom border-top' id='AppJobCards'>
                        <MDBCardBody>
                            <div>
                                <span className='me-2'><img height='13px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" /></span>
                                <span className='me-3' style={{ fontSize: "13px", fontWeight: "600" }}>Cognizant Technology Solutions</span>
                                <span style={{ fontSize: "13px" }}>4.7 <IoMdStar className='mb-1' /></span>
                            </div>
                            <div className='mt-1'>
                                <span className='text-primary' style={{ fontSize: "16px", fontWeight: "1000" }}>Programmer Trainee</span><br />
                                <span style={{ fontSize: "14px" }} className='text-secondary'><b>Kochi, India</b></span><br />
                                {/* <span style={{ fontSize: "14px" }}><MdOutlineCurrencyRupee />18K - <MdOutlineCurrencyRupee />21K/M</span> */}
                            </div>
                            <div className='mt-1'>
                                <p className='mb-0' style={{ fontSize: "13px" }}>Applied on <b className='text-success'>25 May 2024</b></p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className='my-2 px-1 border-0 border-bottom border-top' id='AppJobCards'>
                        <MDBCardBody>
                            <div>
                                <span className='me-2'><img height='13px' src="https://th.bing.com/th/id/OIP.jelNQlhvt5JOQeR1nyWL1gAAAA?rs=1&pid=ImgDetMain" alt="" /></span>
                                <span className='me-3' style={{ fontSize: "13px", fontWeight: "600" }}>Tata Consultancy Services</span>
                                <span style={{ fontSize: "13px" }}>3.9 <IoMdStar className='mb-1' /></span>
                            </div>
                            <div className='mt-1'>
                                <span className='text-primary' style={{ fontSize: "16px", fontWeight: "1000" }}>Software Engineer</span><br />
                                <span style={{ fontSize: "14px" }} className='text-secondary'><b>Chennai, India</b></span><br />
                                {/* <span style={{ fontSize: "14px" }}><MdOutlineCurrencyRupee />18K - <MdOutlineCurrencyRupee />21K/M</span> */}
                            </div>
                            <div className='mt-1'>
                                <p className='mb-0' style={{ fontSize: "13px" }}>Applied on <b className='text-success'>17 Aug 2024</b></p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </Col>
                <Col className='col-8' id='AppJobOverviewDiv'><AppJobOverview/></Col>
            </Row>
        </div>
  )
}

export default AppliedJobs