import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { baseUrl } from '../../../baseurl';

function CompanyReg() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [verified, setVerified] = useState(false)

    const [compCity, setCompCity] = useState('')
    const [compState, setCompState] = useState('')
    const [compCountry, setCompCountry] = useState('')

    const [companyData, setCompanyData] = useState({
        companyName: "",
        abbreviatedName: "",
        email: "",
        password: "",
        role: "company",
        phoneNo: "",
        logo: "",
        headquaters: "",
        industry: "",
        aboutCompany: "",
        companySize: "--",
        website: "--",
        documentForVerification: "",
        coverPicture: "--",
        specialties: "--",
        empDetails: {
            empName: "",
            empPosition: "",
            empID: "",
            empEmail: ""
        },
        statusOfRequest: "pending"
    })


    const [verificationCode, setVerifyCode] = useState('');
    const [enteredCode, setEnterCode] = useState('');
    const [logoImage, setLogoImage] = useState(null);
    const [documentFile, setDocumentFile] = useState(null);

    const [formErrors, setFormErrors] = useState({
        mandatoryError: "",
        passwordErr: "",
        validCodeErr: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function for verification page form validation
    function verifyPageValidation() {
        if (companyData.companyName && companyData.abbreviatedName && companyData.email && companyData.password) {
            formErrors.mandatoryError = ''
            if (companyData.password.length < 8) {
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

    // Function for Company profile data validation
    function compProfileValidation() {
        if (companyData.phoneNo && companyData.logo && compCity && compCountry && compState &&
            companyData.aboutCompany && companyData.industry && companyData.documentForVerification) {
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

    // Function for Employee data validation
    function empDataValidation() {
        const emp = companyData.empDetails;
        if (emp.empEmail && emp.empID && emp.empName && emp.empPosition) {
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

    // Function for show modal
    const handleShow = () => {
        if (compProfileValidation()) {
            setShow(true)
        }
    };

    // API Integration to get verification code
    const getVerificationCode = async (e) => {
        e.preventDefault();

        if (verifyPageValidation()) {
            const newData = { name: companyData.abbreviatedName, email: companyData.email, role: companyData.role };
            await axios.post(`${baseUrl}/getVerificationCode`, newData)
                .then((response) => {
                    setVerifyCode(response.data.verificationCode);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    // API Integration for logo image uploading and get URL
    if (logoImage) {
        const formData = new FormData();
        formData.append('image', logoImage);

        axios.post(`${baseUrl}/imageUpload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response) => {
                companyData.logo = response.data.imageUrl;
            })
            .catch((error) => {
                console.log("Image upload error:", error);
            });

    }

    // API Integration for pdf uploading and get URL
    if (documentFile) {
        const formData1 = new FormData()
        formData1.append('pdf', documentFile)

        axios.post(`${baseUrl}/pdfUpload`, formData1, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response) => {
                companyData.documentForVerification = response.data.url;
            })
            .catch((error) => {
                console.log("PDF upload error:", error);
            });
    }

    // API for password hashing
    const passwordHashing = async () => {
        await axios.post(`${baseUrl}/passwordHashing`, { password: companyData.password })
            .then((response) => {
                companyData.password = response.data.hashedPassword;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // API integration for company registration
    const signUp = async () => {
        companyData.headquaters = `${compCity}, ${compState}, ${compCountry}`
        if (empDataValidation()) {
            // Password hashing
            if (companyData.password) {
                await passwordHashing()
            }

            await axios.post(`${baseUrl}/registerCompany`, companyData)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

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
                        <Form.Group className="mb-3" controlId="formBasicComName">
                            <Form.Label className='ms-1'><b>Company name</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='companyName' onChange={handleChange} placeholder="Enter Company/Organization name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAbbrName">
                            <Form.Label className='ms-1'><b>Abbreviated Company name</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='abbreviatedName' onChange={handleChange} placeholder="Enter Abbreviated Company name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ms-1'><b>Company Email Address</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" name='email' onChange={handleChange} placeholder="Enter Company email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Password</b> <span className='text-danger'>*</span></Form.Label>
                            <p className='text-danger ms-1 mb-1' style={{ fontSize: "15px" }}><b>{formErrors.passwordErr}</b></p>
                            <Form.Control type="password" name='password' onChange={handleChange} placeholder="Enter password" />
                        </Form.Group>

                        <button className='btn mb-4' id='btnStyle' onClick={getVerificationCode} type='button'>Get verification code</button>

                        <div className='d-flex mb-4'>
                            <Form.Group className="w-100" controlId="formBasicCode">
                                {/* <Form.Label className='ms-1'><b>Verification code</b></Form.Label> */}
                                <p className='text-danger ms-1 mb-1' style={{ fontSize: "15px" }}><b>{formErrors.validCodeErr}</b></p>
                                <Form.Control type="text" onChange={(e) => { setEnterCode(e.target.value) }} placeholder="Enter verification code" />
                            </Form.Group>

                            {/* <button className='btn btn-dark w-25 ms-1' type='button'>Verify</button> */}
                        </div>
                        <button className='btn btn-dark w-100 py-2' type='button' onClick={verifyEmail}>Verify code</button>
                    </div>
                }

                {
                    verified &&
                    <div>
                        <p className='text-center mb-4 text-dark' style={{ fontSize: "15px" }}>Fill up company information to get approval from <b className='text-success'>Admin</b>.</p>

                        <p className='text-danger ms-1' style={{ fontSize: "15px" }}><b>{formErrors.mandatoryError}</b></p>
                        <Form.Group className="mb-3" controlId="formBasicPhNo">
                            <Form.Label className='ms-1'><b>Phone number</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="number" name='phoneNo' onChange={handleChange} placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicComPhoto">
                            <Form.Label className='ms-1'><b>Upload Company logo</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="file" onChange={(e) => { setLogoImage(e.target.files[0]) }} />
                        </Form.Group>

                        <Form.Group className="mb-4 border rounded px-3 py-4 bg-light" controlId="formBasicHeadQ">
                            <Form.Label className='ms-1'><b>Headquarters</b> <span className='text-danger'>*</span></Form.Label>
                            <p className='mb-3 ms-1 text-black' style={{ fontSize: "13px" }}>Provide the correct details of company Headquarters.</p>
                            <div className='d-flex mb-3'>
                                <Form.Group className="w-50 me-1" controlId="formBasicCity">
                                    <Form.Label className='ms-1'><b>City</b> <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" onChange={(e) => { setCompCity(e.target.value) }} placeholder="Enter city" />
                                </Form.Group>

                                <Form.Group className="w-50 ms-1" controlId="formBasicState">
                                    <Form.Label className='ms-1'><b>State/Province/Region</b> <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" onChange={(e) => { setCompState(e.target.value) }} placeholder="Enter State/Province/Region" />
                                </Form.Group>
                            </div>
                            <Form.Group className="w-100" controlId="formBasicCountry">
                                <Form.Label className='ms-1'><b>Country</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Select onChange={(e) => { setCompCountry(e.target.value) }} aria-label="Default select example">
                                    <option>Select Country</option>
                                    <option value="India">India</option>
                                    <option value="Germany">Germany</option>
                                </Form.Select>
                            </Form.Group>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAbout">
                            <Form.Label className='ms-1'><b>About Company</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control as="textarea" name='aboutCompany' onChange={handleChange} rows={3} />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 w-50 me-1" controlId="formBasicIndus">
                                <Form.Label className='ms-1'><b>Industry</b> <span className='text-danger'>*</span></Form.Label>
                                <Form.Select name='industry' onChange={handleChange} aria-label="Default select example">
                                    <option>Select Industry</option>
                                    <option value="IT Services and IT Consulting">IT Services and IT Consulting</option>
                                    <option value="Business Consulting and Services">Business Consulting and Services</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicCmSize">
                                <Form.Label className='ms-1'><b>Company size</b></Form.Label>
                                <Form.Control type="number" name='companySize' onChange={handleChange} placeholder="Enter number of Employees" />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3 w-100" controlId="formBasicWebsite">
                            <Form.Label className='ms-1'><b>Company Website</b></Form.Label>
                            <Form.Control type="text" name='website' onChange={handleChange} placeholder="Enter company website" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicSpec">
                            <Form.Label className='ms-1'><b>Specialties</b></Form.Label>
                            <Form.Control as="textarea" name='specialties' onChange={handleChange} rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDoc">
                            <Form.Label className='ms-1'><b>Upload document for Admin verification</b> <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="file" onChange={(e) => { setDocumentFile(e.target.files[0]) }} />
                        </Form.Group>

                        <button onClick={handleShow} className='btn w-100 py-2' id='btnStyle' type='button'>Submit</button>

                        {/* Employee details modal */}
                        <Modal show={show} onHide={handleClose} size='lg' backdrop='static' centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='px-3'>
                                    <h3 className='mb-1 ms-1' style={{ fontFamily: "Jost", fontWeight: "1000" }}>Employer details</h3>
                                    <p className='mb-0 ms-1 text-black' style={{ fontSize: "13px" }}>Enter the details of Employer who creating company account.</p>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className='text-danger ms-1' style={{ fontSize: "15px" }}><b>{formErrors.mandatoryError}</b></p>
                                <Form className='p-3'>
                                    <Form.Group className="mb-3 w-100" controlId="formBasicEmpName">
                                        <Form.Label className='ms-1'><b>Employer Name</b> <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control type="text" onChange={(e) => { companyData.empDetails.empName = e.target.value }} placeholder="Enter Employer Name" />
                                    </Form.Group>

                                    <div className='d-flex mb-3'>
                                        <Form.Group className="w-50 me-1" controlId="formBasicJobT">
                                            <Form.Label className='ms-1'><b>Position/Job title</b> <span className='text-danger'>*</span></Form.Label>
                                            <Form.Control type="text" onChange={(e) => { companyData.empDetails.empPosition = e.target.value }} placeholder="Enter Position/Job title" />
                                        </Form.Group>

                                        <Form.Group className="w-50 ms-1" controlId="formBasicEmpId">
                                            <Form.Label className='ms-1'><b>Employer ID/Number</b> <span className='text-danger'>*</span></Form.Label>
                                            <Form.Control type="text" onChange={(e) => { companyData.empDetails.empID = e.target.value }} placeholder="Enter Employer ID/Number" />
                                        </Form.Group>
                                    </div>

                                    <Form.Group className="mb-3 w-100" controlId="formBasicContEmail">
                                        <Form.Label className='ms-1'><b>Contact Email</b> <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control type="email" onChange={(e) => { companyData.empDetails.empEmail = e.target.value }} placeholder="Enter Contact Email" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn w-25 mx-3' id='btnStyle' onClick={signUp}>Submit</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                }
            </Form>
        </div>
    )
}

export default CompanyReg