import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

function CompanyReg() {

    const [verified, setVerified] = useState(false)

    return (
        <div>
            <Form className='px-3'>
                {
                    !verified &&
                    <div className='mt-5'>
                        <Form.Group className="mb-3" controlId="formBasicComName">
                            <Form.Label className='ms-1'><b>Company name</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter Company/Organization name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ms-1'><b>Email address</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Password</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <button className='btn btn-success mb-4' type='button'>Get verification code</button>

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
                        <p className='text-center mb-4 text-dark' style={{fontSize:"15px"}}>Fill up company information to get approval from <b className='text-success'>Admin</b>.</p>

                        <Form.Group className="mb-3" controlId="formBasicComPhoto">
                            <Form.Label className='ms-1'><b>Upload Company logo</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAbout">
                            <Form.Label className='ms-1'><b>About Company</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-4 w-50" controlId="formBasicIndus">
                            <Form.Label className='ms-1'><b>Industry</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select Industry</option>
                                <option value="1">IT Services and IT Consulting</option>
                                <option value="2">Business Consulting and Services</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDoc">
                            <Form.Label className='ms-1'><b>Upload document for Admin verification</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <button className='btn btn-success w-100 py-2' type='button'>Submit</button>
                    </div>
                }
            </Form>
        </div>
    )
}

export default CompanyReg