import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { PiSuitcaseSimpleFill, PiBuildingOfficeBold } from "react-icons/pi";
import AboutUs from './AboutCompany/AboutUs';
import JobPosts from './JobPosts/JobPosts';
import CompanyRevs from './CompanyReviews/CompanyRevs';
import SimilarComps from './SimilarCompanies/SimilarComps';

function CompanyProfileUs() {

    const [compName, setCompName] = useState('AboutUs')

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
                    </div>
                    <div className='m-3 border-bottom p-2'>
                        <h2 style={{ fontFamily: "Jost", fontWeight: "700" }}>Cognizant Technology Solutions</h2>
                        <p style={{ fontSize: "15px" }}><b>Information Technology Support Services</b></p>
                        <p style={{ fontSize: "15px" }} className=' mb-1'><PiSuitcaseSimpleFill className='mb-1 me-1' /> Total <b>356</b> Posted Jobs</p>
                        <p style={{ fontSize: "15px" }} className=''><PiBuildingOfficeBold className='mb-1 me-1' /> <b>10000+</b> Employees work here</p>
                        <p style={{ fontSize: "14px" }} className='text-secondary'>40 office locations across India</p>
                    </div>
                    <div className='px-3'>
                        <button className='btn btn-white border-0 me-2 px-4 py-2' style={(compName=='AboutUs') ? compBtnStyle : {}} onClick={() => { setCompName('AboutUs') }}><b>About Company</b></button>
                        <button className='btn btn-white border-0 mx-2 px-4 py-2' style={(compName=='JobPosts') ? compBtnStyle : {}} onClick={() => { setCompName('JobPosts') }}><b>Jobs</b></button>
                        {/* <button className='btn btn-white border-0 mx-2 px-4'><b>Locations</b></button> */}
                        <button className='btn btn-white border-0 mx-2 px-4 py-2' style={(compName=='CompanyReviews') ? compBtnStyle : {}} onClick={() => { setCompName('CompanyReviews') }} ><b>Reviews</b></button>
                    </div>
                    {
                        compName == 'AboutUs' &&
                        <AboutUs />
                    }

                    {
                        compName == 'JobPosts' &&
                        <JobPosts />
                    }
                    {
                        compName == 'CompanyReviews' &&
                        <CompanyRevs />
                    }

                </Col>
                <Col className='col-3 border rounded border-bottom-0'>
                    <SimilarComps />
                </Col>
            </Row>

        </div>
    )
}

export default CompanyProfileUs