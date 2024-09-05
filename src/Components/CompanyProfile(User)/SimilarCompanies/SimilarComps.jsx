import React, { useState } from 'react'
import './SimilarComps.css'
import { Col, Row } from 'react-bootstrap'
import { FaEye } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SimilarComps() {

    const [lgShow, setLgShow] = useState(false);

    return (
        <div id='similarComps'>
            <div className='pt-3 px-3'>
                <h5 className='mb-3 text-center' id='mainHeading'>Similar Industry Companies</h5>
                <Row className='py-3 my-2' style={{ borderBottom: "1px solid rgba(163, 163, 163, 0.308)" }}>
                    <Col className='col-3 d-flex justify-content-center'>
                        <img height='40' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                    </Col>
                    <Col className='py-1'>
                        <h6 className='mb-1'>Cognizant Technology Solutions</h6>
                        <p className='mb-2' style={{ fontSize: '12px' }}>Information Technology Support Services</p>
                        <button className='btn btn-white text-success border pt-1 pb-0' style={{ fontSize: '13px' }}><FaEye className='fs-6' /> View profile</button>
                    </Col>
                </Row>
                <Row className='py-3 my-2' style={{ borderBottom: "1px solid rgba(163, 163, 163, 0.308)" }}>
                    <Col className='col-3 d-flex justify-content-center'>
                        <img height='40' src="https://media.licdn.com/dms/image/C4D0BAQHYoeL7WTXXNw/company-logo_200_200/0/1631303647521?e=1731542400&v=beta&t=pH5Q4SZIkA7QontphfSNf-MohHEs88TaSD-UicqhvCY" alt="" />
                    </Col>
                    <Col className='py-1'>
                        <h6 className='mb-1'>Adaptra</h6>
                        <p className='mb-2' style={{ fontSize: '12px' }}>IT Services and IT Consulting</p>
                        <button className='btn btn-white text-success border pt-1 pb-0' style={{ fontSize: '13px' }}><FaEye className='fs-6' /> View profile</button>
                    </Col>
                </Row>
                <Row className='py-3 my-2' style={{ borderBottom: "1px solid rgba(163, 163, 163, 0.308)" }}>
                    <Col className='col-3 d-flex justify-content-center'>
                        <img height='40' src="https://media.licdn.com/dms/image/v2/C560BAQFVX7kkziO5PA/company-logo_200_200/company-logo_200_200/0/1656678447961/collaborative_solutions_llc_logo?e=1731542400&v=beta&t=o7fKcGyUUWtSXlGSfsJIoVfJGEgx5N5G-h6NmRCBnLc" alt="" />
                    </Col>
                    <Col className='py-1'>
                        <h6 className='mb-1'>Collaborative Solutions, LLC</h6>
                        <p className='mb-2' style={{ fontSize: '12px' }}>IT Services and IT Consulting</p>
                        <button className='btn btn-white text-success border pt-1 pb-0' style={{ fontSize: '13px' }}><FaEye className='fs-6' /> View profile</button>
                    </Col>
                </Row>
            </div>
            <button className='btn btn-white text-success w-100 py-3' onClick={() => setLgShow(true)}><b>Show All Comapnies <FaArrowRightLong /></b></button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
                id='similarCompModal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="mainHeading" className='px-3'>
                        Similar Industry Companies
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='similarModalBody'>
                    <Row className='px-2'>
                        <div className='col-6 px-2 bg-white'>
                            <div className='py-3 my-2 d-flex bg-light rounded'>
                                <Col className='col-3 d-flex justify-content-center'>
                                    <img height='40' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                                </Col>
                                <Col className='py-1'>
                                    <h6 className='mb-1'>Cognizant Technology Solutions</h6>
                                    <p className='mb-2' style={{ fontSize: '12px' }}>Information Technology Support Services</p>
                                    <button className='btn btn-white text-success border pt-1 pb-0' style={{ fontSize: '13px' }}><FaEye className='fs-6' /> View profile</button>
                                </Col>
                            </div>
                        </div>
                        <div className='col-6 px-2 bg-white'>
                            <div className='py-3 my-2 d-flex bg-light rounded'>
                                <Col className='col-3 d-flex justify-content-center'>
                                    <img height='40' src="https://media.licdn.com/dms/image/C4D0BAQHYoeL7WTXXNw/company-logo_200_200/0/1631303647521?e=1731542400&v=beta&t=pH5Q4SZIkA7QontphfSNf-MohHEs88TaSD-UicqhvCY" alt="" />
                                </Col>
                                <Col className='py-1'>
                                    <h6 className='mb-1'>Adaptra</h6>
                                    <p className='mb-2' style={{ fontSize: '12px' }}>IT Services and IT Consulting</p>
                                    <button className='btn btn-white text-success border pt-1 pb-0' style={{ fontSize: '13px' }}><FaEye className='fs-6' /> View profile</button>
                                </Col>
                            </div>
                        </div>
                        <div className='col-6 px-2 bg-white'>
                            <div className='py-3 my-2 d-flex bg-light rounded'>
                                <Col className='col-3 d-flex justify-content-center'>
                                    <img height='40' src="https://media.licdn.com/dms/image/v2/C560BAQFVX7kkziO5PA/company-logo_200_200/company-logo_200_200/0/1656678447961/collaborative_solutions_llc_logo?e=1731542400&v=beta&t=o7fKcGyUUWtSXlGSfsJIoVfJGEgx5N5G-h6NmRCBnLc" alt="" />
                                </Col>
                                <Col className='py-1'>
                                    <h6 className='mb-1'>Collaborative Solutions, LLC</h6>
                                    <p className='mb-2' style={{ fontSize: '12px' }}>IT Services and IT Consulting</p>
                                    <button className='btn btn-white text-success border pt-1 pb-0' style={{ fontSize: '13px' }}><FaEye className='fs-6' /> View profile</button>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default SimilarComps