import React from 'react'
import './AdminHomePage.css'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { RxActivityLog } from "react-icons/rx";
import { ImUserTie } from "react-icons/im";
import { MdStars } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdPostAdd } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {

    const navigate = useNavigate()

    return (
        <div>
            <Row className='w-100 ps-4 bg-white' style={{ height: "450px" }}>
                <div className='bg-light d-flex ps-5' id='AMGSdiv'>
                    <div className='ms-5'>
                        <h1>Centralized Control at <br />Your Fingertips!</h1>
                        <p className='text-secondary my-3'>Oversee Job Listings, Manage Users, and Optimize <br />Hiring Processes with Seamless Control!</p>
                        <button className='btn' id='btnStyle'><b>Get Started <FaArrowRight /></b></button>
                    </div>
                </div>
                <div className='p-0 bg-light' id='AMGSimgDiv'>
                    <div className='w-100 d-flex align-items-center'>
                        <img className='border border-white' src="https://i.postimg.cc/0y1FqTdG/The-Dev-Ops-Lifecycle-A-Simplified-Guide-for-IT-Leaders.jpg" alt="" />
                    </div>
                </div>
            </Row>
            <div className='d-flex justify-content-center py-4'>
                <div className='w-75 text-center'>
                    <h3 className='mb-2' style={{ fontFamily: "Jost", fontWeight: "1000" }}>Explore more</h3>
                    <Row className='w-100 ms-0 justify-content-center'>
                        <Col className='col-2 py-4'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4' onClick={()=>{navigate('/Company-Approval')}}><TbBuildingSkyscraper /></button>
                            <p className='mt-2 text-dark'><b>Approvals</b></p>
                        </Col>
                        {/* <Col className='col-2 py-4'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><MdPostAdd /></button>
                            <p className='mt-2 text-dark'><b>Post a Job</b></p>
                        </Col> */}
                        <Col className='col-2 py-4'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4' onClick={()=>{navigate('/AllMessages')}}><BiMessageAltDetail /></button>
                            <p className='mt-2 text-dark'><b>Messages</b></p>
                        </Col>
                        <Col className='col-2 py-4'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><FaBuildingUser /></button>
                            <p className='mt-2 text-dark'><b>Job seekers & Companies</b></p>
                        </Col>
                        <Col className='col-2 py-4'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><RxActivityLog /></button>
                            <p className='mt-2 text-dark'><b>Manage Jobs</b></p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default AdminHomePage