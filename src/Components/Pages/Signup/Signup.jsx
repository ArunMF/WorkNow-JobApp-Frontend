import React, { useState } from 'react'
import './Signup.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import logo from '../../../Images/mainLogo.gif'
import { useNavigate } from 'react-router-dom';
import JobSeekerReg from './JobSeekerReg/JobSeekerReg';
import CompanyReg from './CompanyReg/CompanyReg';
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { PiBuildingOfficeFill } from "react-icons/pi";

function Signup() {

    const navigate = useNavigate()
    const [role, setRole] = useState('')

    return (
        <div className='d-flex justify-content-center py-5' id='signupMainDiv'>
            <Row className='border w-75'>
                <Col className='col-4' id='signupBgDiv'>
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
                    <div className='mt-5 pt-5 px-3 text-center'>
                        <h3 className='mb-3' style={{ fontFamily: "Playwrite NG Modern" }}>Welcome Back !</h3>
                        <p>To keep connected with us please login with your personal info.</p>
                        <button className='btn btn-outline-info w-50' onClick={() => navigate('/')}>Login</button>
                    </div>
                </Col>
                <Col className='col-8 p-5 bg-white'>
                    <h3 className='mt-3 text-center fw-3 mb-4' style={{ fontFamily: "Playwrite NG Modern" }}>Create An Account</h3>

                    {
                        !role &&
                        <div className='pt-3'>
                            <p className='text-center text-secondary mb-2' style={{ fontSize: "15px" }}><b className='text-success'>SignUp</b> to use all features of the application.</p>
                            <h5 className='text-center text-dark mb-4' style={{ fontFamily: "Jost" }}><b>Select your role</b></h5>
                            <div className='d-flex justify-content-center'>
                                <div className='text-center mx-3'>
                                    <button className='btn fs-1 px-5' id='btnStyle1' onClick={() => { setRole('Jobseeker') }}><PiSuitcaseSimpleFill /></button>
                                    <p className='mt-2' style={{color:"rgb(0, 87, 82)"}}><b>Job seeker</b></p>
                                </div>
                                <div className='text-center mx-3'>
                                    <button className='btn fs-1 px-5' id='btnStyle1' onClick={() => { setRole('company') }}><PiBuildingOfficeFill /></button>
                                    <p className='mt-2' style={{color:"rgb(0, 87, 82)"}}><b>Company</b></p>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        role == "Jobseeker" &&
                        <JobSeekerReg />
                    }

                    {
                        role == "company" &&
                        <CompanyReg />
                    }
                </Col>
            </Row>

        </div>
    )
}

export default Signup