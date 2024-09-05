import React, { useState } from 'react'
import './ChangePassword.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from '../../Images/mainLogo.gif'

function ChangePassword() {
    return (
        <div className='d-flex justify-content-center py-5 bg-light' id='ChangePwdMainDiv'>
            <Row className='border w-50 pb-4'>
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
                    <h1 className='mt-4 mb-4 px-3'>Change your password</h1>
                    <p className='mb-3 px-3'>You can change your password here.</p>
                    <Form className='px-3'>
                        <Form.Group className="mb-4" controlId="formBasicCurPwd">
                            <Form.Label className='ms-1 text-success'><b>Enter your current Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter new password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNewPwd">
                            <Form.Label className='ms-1'><b>New Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter new password" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicCnfPwd">
                            <Form.Label className='ms-1'><b>Confirm Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter confirm password" />
                        </Form.Group>

                        <button className='btn btn-primary w-100' type='button'>Confirm</button>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default ChangePassword