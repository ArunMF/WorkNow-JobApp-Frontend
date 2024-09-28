import React from 'react'
import './Home.css'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { RxActivityLog } from "react-icons/rx";
import { ImUserTie } from "react-icons/im";

function Home() {
    return (
        <div>
            <Row className='w-100 ps-4 bg-white' style={{ height: "450px" }}>
                <div className='bg-light d-flex ps-5' id='GSdiv'>
                    <div className='ms-5'>
                        <h1>Browse, Apply, and <br /> Kickstart Your Career!</h1>
                        <p className='text-secondary my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Hic adipisci dolore explicabo dolorum doloribus.</p>
                        <button className='btn'><b>Get Started <FaArrowRight /></b></button>
                    </div>
                </div>
                <div className='p-0 bg-light' id='GSimgDiv'>
                    <div className='w-100 d-flex align-items-center'>
                        <img className='border border-white' src="https://i.postimg.cc/8z4bGXnx/Adobe-Stock-360465349.jpg" alt="" />
                    </div>
                </div>
            </Row>
            <div className='d-flex justify-content-center py-4'>
                <div className='w-50 text-center'>
                    <h3 className='mb-3' style={{fontFamily:"Jost", fontWeight:"1000"}}>Explore more</h3>
                    <Row className='w-100 ms-0 justify-content-center'>
                        <Col className='col-2  py-4 mx-3'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><PiSuitcaseSimpleFill /></button>
                            <p className='mt-3 text-dark'><b>Jobs</b></p>
                        </Col>
                        <Col className='col-2  py-4 mx-3'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><PiBuildingOfficeFill /></button>
                            <p className='mt-3 text-dark'><b>Companies</b></p>
                        </Col>
                        <Col className='col-2  py-4 mx-3'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><RxActivityLog /></button>
                            <p className='mt-3 text-dark'><b>Your Activities</b></p>
                        </Col>
                        <Col className='col-2  py-4 mx-3'>
                            <button className='btn btn-white btn-outline-dark fs-2 px-4'><ImUserTie /></button>
                            <p className='mt-3 text-dark'><b>Profile</b></p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='d-flex justify-content-center py-4'>
                <div className='w-50 text-center'>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ipsum aspernatur libero, quidem iure animi tempore vel culpa ipsa qui.</p>
                    <h3 className='mb-0' style={{fontFamily:"Jost", fontWeight:"1000"}}>Top 5 Companies</h3>
                    <p className='text-secondary' style={{fontSize:"15px"}}>Based on Rating</p>
                    <Row className='w-100 ms-0 justify-content-center'>
                        <Col className='col-2  py-4 mx-2'>
                            <img height='50px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                            <p className='mt-3 text-dark'><b>4.7 <FaStar className='mb-1' /></b></p>
                        </Col>
                        <Col className='col-2 py-4 mx-2'>
                            <img height='50px' src="https://f4s-uploads.s3-eu-west-1.amazonaws.com/referrers/generic/2023/03/13/TCS-Stacked-Logo-Colour-CMYK_4_1.png" alt="" />
                            <p className='mt-3 text-dark'><b>4.5 <FaStar className='mb-1' /></b></p>
                        </Col>
                        <Col className='col-2 py-4 mx-2'>
                            <img height='50px' src="https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png" alt="" />
                            <p className='mt-3 text-dark'><b>4.2 <FaStar className='mb-1' /></b></p>
                        </Col>
                        <Col className='col-2 py-4 mx-2'>
                            <img height='50px' src="https://www.pngall.com/wp-content/uploads/15/Accenture-Logo-PNG-Images.png" alt="" />
                            <p className='mt-3 text-dark'><b>4.2 <FaStar className='mb-1' /></b></p>
                        </Col>
                        <Col className='col-2 py-4 mx-2'>
                            <img height='50px' src="https://logodownload.org/wp-content/uploads/2019/10/deloitte-logo-0.png" alt="" />
                            <p className='mt-3 text-dark'><b>4.0 <FaStar className='mb-1' /></b></p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home