import React, { useState } from 'react'
import './CompanyRevs.css'
import { Col, Row } from 'react-bootstrap'
import { FaRegStar, FaStar, FaUserGroup } from 'react-icons/fa6'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ViewReviewReply from '../../../02_CompanyModule/CompReviews/ViewReviewReply/ViewReviewReply';

function CompanyRevs() {

    const [rev1Status, setRev1Status] = useState('replied')

    return (
        <div className='bg-white mx-3 p-4'>
            <Row className='pt-2 py-3' style={{ borderBottom: "1px solid rgba(163, 163, 163, 0.308)" }}>
                <Col>
                    <p className='text-center' style={{ fontSize: "20px", fontWeight: "800", fontFamily: "Jost" }}>Cognizant Technology Solutions<br />Reviews and Ratings</p>
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
            <Row className='py-5' id='compProfRev'>
                <div className='mb-3 text-center'>
                    <h3 style={{ fontFamily: "Jost", fontWeight: "700" }}>What they says about us</h3>
                    <p className='text-secondary'><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</b></p>
                    <div className='d-flex justify-content-start'>
                        <Form>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Latest Reviews</option>
                                <option value="2">Earliest Reviews</option>
                                <option value="2">Rating Low to High</option>
                                <option value="2">Rating Low to High</option>
                            </Form.Select>
                        </Form>
                    </div>
                </div>
                <Row id='compProfRevRow' className='pt-4'>

                    {/* Reviews */}
                    <div className='p-4 mb-3 shadow'>
                        <div className='d-flex'>
                            <img src="https://i.postimg.cc/zfZzKgC3/arun-mynatty1-1.jpg" height='40' width='40' style={{ borderRadius: "20px" }} alt="" />
                            <div className='ps-2 w-100'>
                                <div className='d-flex'>
                                    <p className='w-75 mb-0'><b>Arun Francis</b></p>
                                    <p className='w-25 mb-0 text-end text-secondary' style={{ fontSize: "10px" }}><b>13 Jul 2024</b></p>
                                </div>
                                <p className='text-warning mb-2' style={{ fontSize: "13px", marginTop: "-3px" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p style={{ fontSize: "13px" }} className='mb-2'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt in pariatur commodi perferendis! Blanditiis impedit illo, enim atque commodi natus fugit et molestiae odio voluptates porro magnam asperiores eum."</p>

                                {
                                    rev1Status == 'replied' &&
                                    <ViewReviewReply />
                                }
                            </div>
                        </div>
                    </div>

                </Row>
            </Row>
        </div>
    )
}

export default CompanyRevs