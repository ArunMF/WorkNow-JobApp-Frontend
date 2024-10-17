import React from 'react'
import './AllCompanies.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function AllCompanies() {

    const navigate = useNavigate()

    return (
        <div className='bg-light'>
            <div className='py-3 bg-light text-center'>
                <h3 className='mb-2 fs-2' style={{ fontFamily: "Lilita One" }}>Find a workplace that works for you</h3>
                <p className='' style={{ fontFamily: "Playwrite NG Modern" }}>"The greatest thing in the world is not so much where we stand as in what direction we are moving."<br />- Oliver Wendell Holmes -</p>
            </div>

            <div className='bg-white d-flex justify-content-center'>
                <div className='d-flex justify-content-center py-4 w-75' style={{borderBottom:"1px solid gray"}}>
                    <input type="text" list='searchJob' className='w-50 bg-light me-1' id='searchInput' placeholder='Search for a company' />
                    <datalist id='searchJob'>
                        <option>Cognizant Technology Solutions</option>
                        <option>Tata Consultancy Services</option>
                        <option>Luminar Technohub</option>
                    </datalist>
                    <button className='btn' style={{ borderRadius: "10px" }} id='btnStyle'>Go</button>
                </div>
            </div>

            <Row className='m-4 bg-light'>
                <Col className='col-4 border p-4 rounded bg-white' id='filterCompanies'>
                    <h3 className='fs-4'>Filter Companies</h3>
                    <p>Showing <b className='text-success'>135</b> Companies filtered by relevancy</p>

                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicLocation">
                            <Form.Label className='ms-1'><b>Location</b></Form.Label>
                            <Form.Control type="text" placeholder="Select a Location" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicIndustry">
                            <Form.Label className='ms-1'><b>Industry</b></Form.Label>
                            <Form.Control type="text" placeholder="Eg. Health care, Business consulting" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicJobtitle">
                            <Form.Label className='ms-1'><b>Job title</b></Form.Label>
                            <Form.Control type="text" placeholder="Select a Job Title" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicIndus">
                            <Form.Label className='ms-1'><b>Company ratings</b></Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option >Select one</option>
                                <option value="1">Greater than 4.5</option>
                                <option value="2">Greater than 3.5</option>
                                <option value="1">Greater than 2.5</option>
                                <option value="2">Greater than 1.5</option>
                            </Form.Select>
                        </Form.Group>

                        <button className='btn w-100' type='button' id='btnStyle'>Apply</button>
                    </Form>
                </Col>
                <Col className='col-8 px-3 border-0 border-end border-secondary'>
                    <h3 className='mb-3 ps-2 fs-3' id='exploreHead'>Explore Companies</h3>
                    <Card className='mb-3 px-2 shadow rounded' id='companyCard' onClick={() => { navigate('/CompanyProfileForUser') }}>
                        <Card.Body>
                            <Row>
                                <Col className='col-9 d-flex'>
                                    <img
                                        className='me-2 p-2'
                                        src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true"
                                        height='60'
                                        width='65'
                                        alt=''
                                        loading='lazy'
                                    />
                                    <div>
                                        <h5 className='pt-2 mb-1'>Cognizant Technology Solutions</h5>
                                        <p className=''><b>4.3</b> <FaStar className='mb-1 text-warning' /></p>
                                    </div>
                                </Col>
                                <Col className='col-3 d-flex justify-content-start'>
                                    <div className='me-4'>
                                        <h6 className='pt-2 text-center mb-0'>1.5L</h6>
                                        <p className='text-primary text-center'><b>Reviews</b></p>
                                    </div>
                                    <div className='mx-4'>
                                        <h6 className='pt-2 text-center mb-0'>294</h6>
                                        <p className='text-primary text-center'><b>Jobs</b></p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='col-5'>
                                    <h6 className='pt-2 mb-0'>Industry</h6>
                                    <p className='mb-0 text-secondary' style={{fontSize:"13px"}}><b>Information Technology Support Services</b></p>
                                </Col>
                                {/* <Col className='col-1'></Col> */}
                                <Col className='col-4'>
                                    <h6 className='pt-2 mb-0'>Global company size</h6>
                                    <p className='mb-0 text-secondary' style={{fontSize:"13px"}}><b>10000+ Employees</b></p>
                                </Col>
                                <Col className='col-3'>
                                    <h6 className='pt-2 mb-0'>Locations</h6>
                                    <p className='text-secondary mb-0' style={{fontSize:"13px"}}><b>40 office locations</b></p>
                                </Col>
                            </Row>
                            {/* <Row className='mt-2'>
                                <div className='w-100'>
                                    <h6 className='pt-2 mb-0'>Description</h6>
                                    <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus nesciunt magni quos voluptas libero ducimus velit vero pariatur. Nisi sed architecto neque inventore eius! Vel temporibus accusantium voluptate ...</p>
                                </div>
                            </Row> */}
                        </Card.Body>
                    </Card>
                    <Card className='mb-3 px-2 shadow rounded' id='companyCard'>
                        <Card.Body>
                            <Row>
                                <Col className='col-9 d-flex'>
                                    <img
                                        className='me-2 p-2'
                                        src="https://th.bing.com/th/id/OIP.jelNQlhvt5JOQeR1nyWL1gAAAA?rs=1&pid=ImgDetMain"
                                        height='60'
                                        width='65'
                                        alt=''
                                        loading='lazy'
                                    />
                                    <div>
                                        <h5 className='pt-2 mb-1'>Tata Consultancy Services</h5>
                                        <p className=''><b>4.8</b> <FaStar className='mb-1 text-warning' /></p>
                                    </div>
                                </Col>
                                <Col className='col-3 d-flex justify-content-start'>
                                    <div className='me-4'>
                                        <h6 className='pt-2 text-center mb-0'>5.5L</h6>
                                        <p className='text-primary text-center'><b>Reviews</b></p>
                                    </div>
                                    <div className='mx-4'>
                                        <h6 className='pt-2 text-center mb-0'>934</h6>
                                        <p className='text-primary text-center'><b>Jobs</b></p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='col-5'>
                                    <h6 className='pt-2 mb-0'>Industry</h6>
                                    <p className='mb-0 text-secondary' style={{fontSize:"13px"}}><b>Software Development</b></p>
                                </Col>
                                {/* <Col className='col-1'></Col> */}
                                <Col className='col-4'>
                                    <h6 className='pt-2 mb-0'>Global company size</h6>
                                    <p className='mb-0 text-secondary' style={{fontSize:"13px"}}><b>1000+ Employees</b></p>
                                </Col>
                                <Col className='col-3'>
                                    <h6 className='pt-2 mb-0'>Locations</h6>
                                    <p className='text-secondary mb-0' style={{fontSize:"13px"}}><b>28 office locations</b></p>
                                </Col>
                            </Row>
                            {/* <Row className='mt-2'>
                                <div className='w-100'>
                                    <h6 className='pt-2 mb-0'>Description</h6>
                                    <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus nesciunt magni quos voluptas libero ducimus velit vero pariatur. Nisi sed architecto neque inventore eius! Vel temporibus accusantium voluptate ...</p>
                                </div>
                            </Row> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AllCompanies