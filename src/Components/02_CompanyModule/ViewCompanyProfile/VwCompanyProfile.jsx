import React, { useState } from 'react'
import './VwCompanyProfile.css'
import { Col, Row } from 'react-bootstrap'
import { PiSuitcaseSimpleFill, PiBuildingOfficeBold } from "react-icons/pi";
import PostedJobs from './PostedJobs/PostedJobs';
import AboutUs from '../../01_JobSeekerModule/CompanyProfile(User)/AboutCompany/AboutUs';
import { BsFillCameraFill } from "react-icons/bs";
import UpdateCompanyProfile from './UpdateCompProfile/UpdateCompanyProfile';

function VwCompanyProfile() {

    const [compName, setCompName] = useState('AboutCompany')

    const compBtnStyle = {
        backgroundColor: "#f9f9f9"
    }

    return (
        <div className='px-3 pb-3'>
            <Row>
                <Col className='col-9'>
                    <div>
                        <img className='w-100' height='180' src="https://cognizant.scene7.com/is/image/cognizant/about-us-banner-desktop-1" alt="" /><br />
                        <img className='border ms-5 bg-white p-2' height='100' style={{ marginTop: "-50px" }} src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                        <div className='d-flex justify-content-end align-items-start'>
                            <button className='btn btn-light me-3 px-2 py-0' style={{ marginTop: "-95px", fontSize: "20px" }}><b><BsFillCameraFill /></b></button>
                        </div>
                    </div>
                    <div className='m-3 border-bottom p-2'>
                        <h2 style={{ fontFamily: "Jost", fontWeight: "700" }}>Cognizant Technology Solutions</h2>
                        <p style={{ fontSize: "15px" }}><b>Information Technology Support Services</b></p>
                        <p style={{ fontSize: "15px" }} className=' mb-1'><PiSuitcaseSimpleFill className='mb-1 me-1' /> Total <b>356</b> Posted Jobs</p>
                        <p style={{ fontSize: "15px" }} className=''><PiBuildingOfficeBold className='mb-1 me-1' /> <b>10000+</b> Employees work here</p>
                        <p style={{ fontSize: "14px" }} className='text-secondary'>40 office locations across India</p>
                    </div>
                    <div className='px-3'>
                        <button className='btn btn-white border-0 me-2 px-4 py-2' style={(compName == 'AboutCompany') ? compBtnStyle : {}} onClick={() => { setCompName('AboutCompany') }}><b>About Company</b></button>
                        <button className='btn btn-white border-0 mx-2 px-4 py-2 text-primary' style={(compName == 'PostedJobs') ? compBtnStyle : {}} onClick={() => { setCompName('PostedJobs') }}><b>Posted Jobs</b></button>
                    </div>
                    {
                        compName == 'AboutCompany' &&
                        <AboutUs />
                    }

                    {
                        compName == 'PostedJobs' &&
                        <PostedJobs />
                    }

                </Col>
                <Col className='col-3 border rounded pt-3'>
                    <UpdateCompanyProfile />
                </Col>
            </Row>
        </div>
    )
}

export default VwCompanyProfile