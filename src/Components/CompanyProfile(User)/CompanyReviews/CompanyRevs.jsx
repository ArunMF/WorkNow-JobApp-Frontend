import React from 'react'
import './CompanyRevs.css'
import { Col, Row } from 'react-bootstrap'
import { FaRegStar, FaStar, FaUserGroup } from 'react-icons/fa6'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CompanyRevs() {
    return (
        <div className='bg-white mx-3 p-4'>
            <Row className='pt-2 py-3' style={{ borderBottom: "1px solid rgba(163, 163, 163, 0.308)" }}>
                <Col>
                    <p className='text-center' id='companyName'>Cognizant Technology Solutions Ratings</p>
                    <div className='d-flex justify-content-center text-success fs-3'>
                        <span className='me-2'><b>4.7</b></span>
                        <span><FaStar className='mb-2' /><FaStar className='mb-2' /><FaStar className='mb-2' /><FaStar className='mb-2' /><FaRegStar className='mb-2' /></span>
                    </div>
                    <div className='d-flex justify-content-center py-3'>
                        <span className='col-3 text-center me-4'>
                            <p className='bg-light fs-5 mb-2 py-4' style={{ borderRadius: "50px" }}><b>86%</b></p>
                            <b>Recommand to a friend</b>
                        </span>
                        <span className='col-3 text-center'>
                            <p className='bg-light fs-5 mb-2 py-4' style={{ borderRadius: "50px" }}><FaUserGroup /></p>
                            <b>10 Ratings</b>
                        </span>
                    </div>
                </Col>
                <Col>
                    <div className='text-end mb-5'>
                        <button className='btn btn-white border-success text-success px-4'>Rate this company</button>
                    </div>
                    <Col className='justify-content-center text-center'>
                        <div className='d-flex my-2'><span className='col-6'>Career opportunities</span><span className='col-4'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span><span className='col-1'>4.2</span></div>
                        <div className='d-flex my-2'><span className='col-6'>Comp and Benefits</span><span className='col-4'><FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar /></span><span className='col-1'>3.9</span></div>
                        <div className='d-flex my-2'><span className='col-6'>Culture and values</span><span className='col-4'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span><span className='col-1'>4.1</span></div>
                        <div className='d-flex my-2'><span className='col-6'>Senior management</span><span className='col-4'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span><span className='col-1'>4.7</span></div>
                        <div className='d-flex my-2'><span className='col-6'>Work/Life Balance</span><span className='col-4'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span><span className='col-1'>5.0</span></div>
                    </Col>
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
                <Row id='compProfRevRow'>

                    <Card className='col-4 my-2 border-0'>
                        <div className='py-3 px-2 border rounded' id='revCard'>
                            <Card.Body className=''>
                                <span className='d-flex justify-content-center text-warning'><FaStar className='mb-2' /><FaStar className='mb-2' /><FaStar className='mb-2' /><FaStar className='mb-2' /><FaRegStar className='mb-2' /></span>
                                <div className='text-center mt-4'>
                                    <img id='userImg' className='border border-secondary' src="https://i.postimg.cc/VvXcfGnT/arun-mynatty1-1.jpg" height='50px' width='50px' alt="" />
                                    <p className='mb-0 mt-1'><b>Arun Francis</b></p>
                                    <p className='text-secondary mb-0' style={{ fontSize: "10px" }}>10 July 2024</p>
                                </div>
                                <div className='mt-2 mb-3 text-center'>
                                    <img height='20px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                                </div>
                                <p className='text-black' style={{ fontSize: "13px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione obcaecati deleniti iure sunt, beatae quos expedita voluptas quod."</p>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className='col-4 my-2 border-0'>
                        <div className='py-3 px-2 border rounded' id='revCard'>
                            <Card.Body className=''>
                                <span className='d-flex justify-content-center text-warning'><FaStar className='mb-2' /><FaStar className='mb-2' /><FaStar className='mb-2' /><FaStar className='mb-2' /><FaRegStar className='mb-2' /></span>
                                <div className='text-center mt-4'>
                                    <img id='userImg' className='border border-secondary' src="https://i.postimg.cc/VvXcfGnT/arun-mynatty1-1.jpg" height='50px' width='50px' alt="" />
                                    <p className='mb-0 mt-1'><b>Arun Francis</b></p>
                                    <p className='text-secondary mb-0' style={{ fontSize: "10px" }}>10 July 2024</p>
                                </div>
                                <div className='mt-2 mb-3 text-center'>
                                    <img height='20px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                                </div>
                                <p className='text-black' style={{ fontSize: "13px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione obcaecati deleniti iure sunt, beatae quos expedita voluptas quod."</p>
                            </Card.Body>
                        </div>
                    </Card>
                </Row>
            </Row>
        </div>
    )
}

export default CompanyRevs