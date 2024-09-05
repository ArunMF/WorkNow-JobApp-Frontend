import './Login.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/mainLogo.gif'

function Login() {

    const navigate = useNavigate()

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
                    <p className='mb-4 px-3'>To keep connected with us please login with your personal information by email address and password.</p>
                    <Form className='px-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ms-1'><b>Email address</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPwd">
                            <Form.Label className='ms-1'><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <div className="mb-3 text-end">
                            <Link to="/ForgotPassword" style={{ textDecoration: "none" }}><b>Forgot password?</b></Link>
                        </div>

                        <button className='btn btn-success mb-4 w-100' type='button'>Login</button>

                        <div className='text-center'>
                            <p><b>Don't have an account?</b> <Link to="/SignUp" style={{ textDecoration: "none" }}><b>Sign Up</b></Link></p>
                        </div>

                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default Login