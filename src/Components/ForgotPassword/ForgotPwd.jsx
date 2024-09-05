import React, { useState } from 'react';
import './ForgotPwd.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from '../../Images/mainLogo.gif'

function ForgotPwd() {

    const [verify, setVerify] = useState(false)

    return (
        <div className='d-flex justify-content-center py-5 bg-light' id='forgMainDiv'>
            <Row className='border w-50'>
                <Col className='px-5 pt-3 pb-4 bg-white'>
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
                    <h1 className='mt-4 mb-4 px-3'>Forgot your password?</h1>
                    <p className='mb-3 px-3'>You can reset your password here.</p>
                    <Form className='px-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ms-1'><b>Enter the email address associated with your account</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
                        </Form.Group>

                        <button className='btn btn-primary mb-4' type='button'>Get verification code</button>

                        <Form.Group className="w-75 me-1 mb-5" controlId="formBasicCode">
                            <Form.Label className='ms-1'><b>Verification code</b></Form.Label>
                            <div className='d-flex'>
                                <Form.Control type="text" placeholder="Enter verification code" />
                                <button className='btn btn-dark w-50 ms-1' type='button' onClick={() => setVerify(true)}>Verify code</button>
                            </div>
                        </Form.Group>

                        {
                            verify &&
                            <div className='mb-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='ms-1'><b>New Password</b></Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label className='ms-1'><b>Confirm Password</b></Form.Label>
                                    <Form.Control type="password" placeholder="Enter confirm password" />
                                </Form.Group>

                                <button className='btn btn-primary w-100' type='button'>Confirm</button>
                            </div>

                        }

                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default ForgotPwd