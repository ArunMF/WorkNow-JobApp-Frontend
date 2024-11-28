import './Login.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Images/mainLogo.gif'
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../baseurl';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginErr, setLoginErr] = useState('')
    const [resMessage, setResMessage] = useState('')
    const [pendingMsg, setPendMsg] = useState('')

    const [toastView, setToastView] = useState(false)

    const [pendingReqVw, setPendingView] = useState(false)

    const login = async () => {
        if (email && password) {
            const loginData = { email, password }
            await axios.post(`${baseUrl}/login`, loginData)
                .then((response) => {
                    setLoginErr('')
                    setResMessage(response.data.message)
                    setToastView(true)
                    setTimeout(() => {
                        if (response.data.data.role == "jobseeker") {
                            navigate('/Home')
                        } else if (response.data.data.role == "company") {
                            navigate('/Company-Home')
                        } else {
                            navigate('/Admin-Home')
                        }
                    }, 3000)
                })
                .catch((error) => {
                    if (error.response.status == 404) {
                        setLoginErr(error.response.data.message)
                    } else if (error.response.status == 401) {
                        setPendMsg(error.response.data.message)
                        setPendingView(true)
                    } else {
                        console.log(error);
                    }

                })
        } else {
            setLoginErr('Please enter all the mandatory(*) fields!')
        }
    }

    return (
        <div className='d-flex justify-content-center py-5' id='loginMainDiv'>
            <Row className='border w-75'>
                <Col className='col-4' id='loginBgDiv'>
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
                </Col>
                <Col className='col-8 px-5 pt-3 pb-4 bg-white'>
                    <h3 className='mt-3 mb-3 px-3' style={{ fontFamily: "Playwrite NG Modern" }}>Welcome Back :<span className='mt-2'>)</span></h3>
                    {
                        !pendingReqVw ?
                            <div>
                                <p className='mb-4 px-3'>To keep connected with us please login with your personal information by email address and password.</p>
                                <Form className='px-3'>
                                    <p className='text-danger ms-1' style={{ fontSize: "14px" }}>{loginErr}</p>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='ms-1'><b>Email address</b> <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formBasicPwd">
                                        <Form.Label className='ms-1'><b>Password</b> <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                                    </Form.Group>

                                    <div className="mb-3 text-end">
                                        <Link to="/ForgotPassword" style={{ textDecoration: "none" }}><b>Forgot password?</b></Link>
                                    </div>

                                    <button className='btn mb-4 w-100' id='btnStyle' onClick={login} type='button'>Login</button>

                                    <div className='text-center'>
                                        <p><b>Don't have an account?</b> <Link to="/SignUp" style={{ textDecoration: "none" }}><b>Sign Up</b></Link></p>
                                    </div>
                                </Form>
                            </div> :
                            <div className='d-flex align-items-center'>
                                <p className='p-3 border rounded shadow' style={{color:"rgb(0, 87, 82)"}}>{pendingMsg}</p>
                            </div>
                    }

                    {
                        toastView &&

                        <ToastContainer
                            className="px-3 py-5"
                            position='top-end'
                            style={{ position: "fixed", zIndex: "1" }}
                        >
                            <Toast>
                                <Toast.Header className='py-0' closeButton={false}>
                                    <img
                                        className='me-1'
                                        src={logo}
                                        height='25'
                                        alt=''
                                        loading='lazy'
                                    />
                                    <p className='pt-2 m-0' id='toastTitle'><span style={{ fontFamily: "Lilita One" }}>Work</span><span className='text-primary' style={{ fontFamily: "Playwrite NG Modern" }}>Now</span></p>
                                </Toast.Header>
                                <Toast.Body className='text-success py-3'><b>{resMessage}</b></Toast.Body>
                            </Toast>
                        </ToastContainer>
                    }

                </Col>
            </Row>

        </div>
    )
}

export default Login