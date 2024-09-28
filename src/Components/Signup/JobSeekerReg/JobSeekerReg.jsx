import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

function JobSeekerReg() {

    const [verified, setVerified] = useState(false)

    return (
        <div>
            <Form className='px-3'>

                {
                    !verified &&
                    <div className='mt-5'>
                        <div className='d-flex'>
                            <Form.Group className="mb-3 w-50 me-1" controlId="formBasicFsName">
                                <Form.Label className='ms-1'><b>First name</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicLsName">
                                <Form.Label className='ms-1'><b>Last name</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ms-1'><b>Email address</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Password</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <button className='btn mb-4' id='btnStyle' type='button'>Get verification code</button>
                        <div className='d-flex mb-4'>
                            <Form.Group className="w-100" controlId="formBasicCode">
                                {/* <Form.Label className='ms-1'><b>Verification code</b></Form.Label> */}
                                <Form.Control type="text" placeholder="Enter verification code" />
                            </Form.Group>

                            {/* <button className='btn btn-dark w-25 ms-1' type='button'>Verify</button> */}
                        </div>
                        <button className='btn btn-dark w-100 py-2' type='button' onClick={() => { setVerified(true) }}>Verify code</button>
                    </div>
                }

                {
                    verified &&
                    <div>
                        <h4 className='mb-2 text-center text-success'><b>Hello, Arun!</b></h4>
                        <p className='text-center mb-4' style={{fontSize:"12px"}}><b>Fill up personal information and Start journey with us.</b></p>

                        <Form.Group className="mb-4" controlId="formBasicPhNo">
                            <Form.Label className='ms-1'><b>Phone number</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="number" placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPrlPhoto">
                            <Form.Label className='ms-1'><b>Upload profile photo</b></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Education Qualification</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select education qualification</option>
                                <option value="1">Master's Degree</option>
                                <option value="2">Bachelor's Degree</option>
                                <option value="3">Plus Two</option>
                                <option value="4">SSLC</option>
                            </Form.Select>
                        </Form.Group>
                        <button className='btn w-100 py-2' id='btnStyle' type='button'>Create Account</button>
                    </div>
                }
            </Form>
        </div>
    )
}

export default JobSeekerReg