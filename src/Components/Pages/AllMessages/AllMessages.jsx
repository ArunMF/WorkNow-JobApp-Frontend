import React, { useState } from 'react'
import './AllMessages.css'
import { Col, Row } from 'react-bootstrap'
import { FaPenSquare } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import MessageOverview from './MessageOverview/MessageOverview';
import { MdOutlineMessage } from "react-icons/md";
import { BsSendArrowUp } from "react-icons/bs";
import { BsEnvelopeArrowDown } from "react-icons/bs";

function AllMessages() {

    const [compName, setCompName] = useState('Inbox')

    const selectBgStyle = {
        color: "rgb(0, 128, 122)",
        backgroundColor: "rgb(247, 255, 255)",
        borderBottom: "1px solid rgb(200, 255, 255)"
    }

    return (
        <div className='p-2 ps-4 w-100 bg-light'>
            <Row className='w-100'>
                <Col className='col-4 py-2 border rounded bg-white' id='allmsgsDiv'>
                    <div className='border-bottom py-2 d-flex justify-content-end'>
                        <button className='btn w-50' id='btnStyle'><b>Message <FaPen /></b></button>
                    </div>
                    <div className='d-flex text-center mb-2'>
                        <p className='w-50 py-2 rounded' style={(compName == 'Inbox') ? selectBgStyle : {}} onClick={() => { setCompName('Inbox') }}><b><BsEnvelopeArrowDown /> Inbox</b></p>
                        <p className='w-50 py-2 rounded' style={(compName == 'Sent') ? selectBgStyle : {}} onClick={() => { setCompName('Sent') }}><b><BsSendArrowUp /> Sent</b></p>
                    </div>


                    {
                        compName == "Inbox" &&
                        <div>
                            <div className='d-flex justify-content-center'>
                                <input type="text" className='w-75 bg-light me-1 border-0' id='msgSearchInput' placeholder='Search for a message' />
                                <button className='btn me-2'><b><FaSearch /></b></button>
                            </div>
                            <div className='py-3 px-2'>
                                <div className='border-bottom rounded px-1 py-3 mb-1'>
                                    <div className='d-flex'>
                                        <img
                                            className='me-2 p-1'
                                            src='https://files.codingninjas.in/company-short-logo-url/841/90c29fb8e0b9ac9c35cb527aac3d990d.png'
                                            height='50'
                                            width='50'
                                            alt=''
                                            loading='lazy'
                                            style={{ borderRadius: "40px" }}
                                        />
                                        <div className='w-100'>
                                            <div className='pt-1 w-100 d-flex align-items-center'>
                                                <p className='w-75 mb-0' style={{ fontWeight: "800" }}><b>Cognizant Technology Soluti...</b></p>
                                                <p className='w-25 text-end text-secondary mb-0' style={{ fontSize: "10px" }}><b>25-10-2024</b></p>
                                            </div>
                                            <p className='text-dark mb-0' style={{ fontSize: "13px" }}><b>Reason for un-approval the company from WorkNo...</b></p>
                                            <p className='text-secondary mb-0' style={{ fontSize: "12px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elitte...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-bottom rounded px-1 py-3 mb-1'>
                                    <div className='d-flex'>
                                        <img
                                            className='me-2 p-1'
                                            src='https://th.bing.com/th/id/OIP.J-UWEEp6tnF6gCnC9Wt6UAAAAA?rs=1&pid=ImgDetMain'
                                            height='50'
                                            width='50'
                                            alt=''
                                            loading='lazy'
                                            style={{ borderRadius: "40px" }}
                                        />
                                        <div className='w-100'>
                                            <div className='pt-1 w-100 d-flex align-items-center'>
                                                <p className='w-75 mb-0' style={{ fontWeight: "800" }}><b>Tata Consultancy Services</b></p>
                                                <p className='w-25 text-end text-secondary mb-0' style={{ fontSize: "10px" }}><b>25-10-2024</b></p>
                                            </div>
                                            <p className='text-dark mb-0' style={{ fontSize: "13px" }}><b>Reason for un-approval the company from WorkNo...</b></p>
                                            <p className='text-secondary mb-0' style={{ fontSize: "12px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elitte...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        compName == "Sent" &&
                        <div>
                            <div className='d-flex justify-content-center'>
                                <input type="text" className='w-75 bg-light me-1 border-0' id='msgSearchInput' placeholder='Search for a message' />
                                <button className='btn me-2'><b><FaSearch /></b></button>
                            </div>
                            <div className='py-3 px-2'>
                                <div className='border-bottom rounded px-1 py-3 mb-1'>
                                    <div className='d-flex'>
                                        <img
                                            className='me-2 p-1'
                                            src='https://files.codingninjas.in/company-short-logo-url/841/90c29fb8e0b9ac9c35cb527aac3d990d.png'
                                            height='50'
                                            width='50'
                                            alt=''
                                            loading='lazy'
                                            style={{ borderRadius: "40px" }}
                                        />
                                        <div className='w-100'>
                                            <div className='pt-1 w-100 d-flex align-items-center'>
                                                <p className='w-75 mb-0'>To: <span style={{ fontWeight: "800" }}>Cognizant Technology Solu...</span></p>
                                                <p className='w-25 text-end text-secondary mb-0' style={{ fontSize: "10px" }}><b>25-10-2024</b></p>
                                            </div>
                                            <p className='text-secondary mb-0' style={{ fontSize: "13px" }}><b>Reason for un-approval the company from WorkNo...</b></p>
                                            <p className='text-secondary mb-0' style={{ fontSize: "12px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elitte...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-bottom rounded px-1 py-3 mb-1'>
                                    <div className='d-flex'>
                                        <img
                                            className='me-2 p-1'
                                            src='https://th.bing.com/th/id/OIP.J-UWEEp6tnF6gCnC9Wt6UAAAAA?rs=1&pid=ImgDetMain'
                                            height='50'
                                            width='50'
                                            alt=''
                                            loading='lazy'
                                            style={{ borderRadius: "40px" }}
                                        />
                                        <div className='w-100'>
                                            <div className='pt-1 w-100 d-flex align-items-center'>
                                                <p className='w-75 mb-0'>To: <span style={{ fontWeight: "800" }}>Tata Consultancy Services</span></p>
                                                <p className='w-25 text-end text-secondary mb-0' style={{ fontSize: "10px" }}><b>25-10-2024</b></p>
                                            </div>
                                            <p className='text-secondary mb-0' style={{ fontSize: "13px" }}><b>Reason for un-approval the company from WorkNo...</b></p>
                                            <p className='text-secondary mb-0' style={{ fontSize: "12px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elitte...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </Col>
                <Col className='col-8' id='msgOverviewCol'>
                    <MessageOverview />
                </Col>
            </Row>
        </div>
    )
}

export default AllMessages