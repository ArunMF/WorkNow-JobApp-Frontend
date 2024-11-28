import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { baseUrl } from '../../../baseurl';

function JobSeekerReg() {
    const [verified, setVerified] = useState(false);
    const [data, setUserdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "jobseeker",
        phoneNo: "",
        imageURL: "--",
        qualification: "",
        resumeURL: ""
    });

    const [verificationCode, setVerifyCode] = useState('');
    const [enteredCode, setEnterCode] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [resumeFile, setResumeFile] = useState(null);

    const [formErrors, setFormErrors] = useState({
        mandatoryError: "",
        passwordErr: "",
        validCodeErr: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function for verification page form validation
    function verifyPageValidation() {
        if (data.firstName && data.lastName && data.email && data.password) {
            formErrors.mandatoryError = ''
            if (data.password.length < 8) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    passwordErr: 'Password must be at least 8 characters'
                }));
            } else {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    passwordErr: ''
                }));
                return true;
            }
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                mandatoryError: 'Please enter all the mandatory(*) fields!'
            }));
        }
    }

    // Functin for Job seeker profile form validation
    function profileFormValidation() {
        if (data.phoneNo && data.qualification && data.resumeURL) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                mandatoryError: ''
            }));
            return true;
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                mandatoryError: 'Please enter all the mandatory(*) fields!'
            }));
        }
    }

    // API Integration to get verification code
    const getVerificationCode = async (e) => {
        e.preventDefault();
        if (verifyPageValidation()) {
            const newData = { name: data.firstName, email: data.email, role: data.role };
            await axios.post(`${baseUrl}/getVerificationCode`, newData)
                .then((response) => {
                    setVerifyCode(response.data.verificationCode);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    // API Integration for profile image uploading and get URL
    if (imageFile) {

        const formData = new FormData();
        formData.append('image', imageFile);

        axios.post(`${baseUrl}/imageUpload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response) => {
                data.imageURL = response.data.imageUrl;
            })
            .catch((error) => {
                console.log("Image upload error:", error);
            });
    }

    // API Integration for resume uploading and get URL
    if (resumeFile) {

        const formData = new FormData()
        formData.append('pdf', resumeFile)

        axios.post(`${baseUrl}/pdfUpload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response) => {
                data.resumeURL = response.data.url;
            })
            .catch((error) => {
                console.log("PDF upload error:", error);
            });

    }

    // API for password hashing
    const passwordHashing = async () => {
        await axios.post(`${baseUrl}/passwordHashing`, { password: data.password })
            .then((response) => {
                data.password = response.data.hashedPassword;
            })
            .catch((error) => {
                console.log(error);
            });
    }


    // API Integration for SignUp
    const signUp = async () => {
        if (profileFormValidation()) {
            // Password hashing
            if (data.password) {
                await passwordHashing()
            }

            await axios.post(`${baseUrl}/signUp`, data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);

                })
        }
    };

    // Function for Verifying code
    const verifyEmail = () => {
        if (verifyPageValidation()) {
            if (enteredCode != '') {
                if (enteredCode == verificationCode) {
                    setFormErrors(prevErrors => ({
                        ...prevErrors,
                        validCodeErr: ''
                    }));
                    setVerified(true);
                } else {
                    setFormErrors(prevErrors => ({
                        ...prevErrors,
                        validCodeErr: 'Invalid verification code!'
                    }));
                }
            }
            else {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    validCodeErr: 'Please enter verification code!'
                }));
            }
        }
    };

    return (
        <div>
            <Form className='px-3'>
                {
                    !verified &&
                    <div className='mt-5'>
                        <p className='text-danger ms-1' style={{ fontSize: "15px" }}><b>{formErrors.mandatoryError}</b></p>
                        {/* Registration fields */}
                        <div className='d-flex'>
                            <Form.Group className="mb-3 w-50 me-1" controlId="formBasicFsName">
                                <Form.Label className='ms-1'><b>First name</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Control type="text" name='firstName' onChange={handleChange} placeholder="Enter first name" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicLsName">
                                <Form.Label className='ms-1'><b>Last name</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Control type="text" name='lastName' value={data.lastName} onChange={handleChange} placeholder="Enter last name" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ms-1'><b>Email address</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" name='email' onChange={handleChange} placeholder="Enter email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Password</b> <span className='text-danger'>*</span></Form.Label>
                            <p className='text-danger ms-1 mb-1' style={{ fontSize: "15px" }}><b>{formErrors.passwordErr}</b></p>
                            <Form.Control type="password" name='password' onChange={handleChange} placeholder="Enter password" />
                        </Form.Group>
                        <button className='btn mb-4' id='btnStyle' onClick={getVerificationCode} type='button'>Get verification code</button>
                        <div className='d-flex mb-4'>
                            <Form.Group className="w-100" controlId="formBasicCode">
                                <p className='text-danger ms-1 mb-1' style={{ fontSize: "15px" }}><b>{formErrors.validCodeErr}</b></p>
                                <Form.Control type="text" onChange={(e) => { setEnterCode(e.target.value) }} placeholder="Enter verification code" />
                            </Form.Group>
                        </div>
                        <button className='btn btn-dark w-100 py-2' onClick={verifyEmail} type='button'>Verify code</button>
                    </div>
                }

                {
                    verified &&
                    <div>
                        <h4 className='mb-2 text-center text-success'><b>Hello, Arun!</b></h4>
                        <p className='text-center mb-4' style={{ fontSize: "12px" }}><b>Fill up personal information and Start journey with us.</b></p>

                        <p className='text-danger ms-1' style={{ fontSize: "15px" }}><b>{formErrors.mandatoryError}</b></p>
                        <Form.Group className="mb-4" controlId="formBasicPhNo">
                            <Form.Label className='ms-1'><b>Phone number</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="number" name='phoneNo' onChange={handleChange} placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPrlPhoto">
                            <Form.Label className='ms-1'><b>Upload profile photo</b></Form.Label>
                            <Form.Control type="file" onChange={(e) => { setImageFile(e.target.files[0]) }} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Education Qualification</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Select aria-label="Default select example" name='qualification' onChange={handleChange}>
                                <option>Select education qualification</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Plus Two">Plus Two</option>
                                <option value="SSLC">SSLC</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicResume">
                            <Form.Label className='ms-1'><b>Upload Resume</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="file" onChange={(e) => { setResumeFile(e.target.files[0]) }} />
                        </Form.Group>

                        <button className='btn w-100 py-2' id='btnStyle' type='button' onClick={signUp}>Create Account</button>
                    </div>
                }
            </Form>
        </div>
    );
}

export default JobSeekerReg;
