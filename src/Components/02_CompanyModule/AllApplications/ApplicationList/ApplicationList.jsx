import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { IoMdDoneAll } from "react-icons/io";

function ApplicationList() {
    return (
        <div className='pb-4'>
            <p className='text-end mb-2' style={{ fontSize: "13px" }}>
                Job ID: <b className='text-success'>JOB66532</b>
            </p>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col' className='col-3 text-secondary'>
                            <b>Name & Email address</b>
                        </th>
                        <th scope='col' className='col-2 text-secondary text-center'>
                            <b>Phone number</b>
                        </th>
                        <th scope='col' className='col-4 text-secondary text-center'>
                            <b>Relevant Experience</b>
                        </th>
                        <th scope='col' className='col-2 text-secondary'></th>
                        <th scope='col' className='col-1 text-secondary text-center'>
                            <b>Shortlist</b>
                        </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td style={{paddingTop:"20px", paddingBottom:"20px"}}>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='mb-0 pe-1'><b>Arun M F</b></p>
                                    <p className='mb-0 pe-1' style={{ fontSize: "13px" }}>arunmynatty1723@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>
                            <p className='mb-1 px-1' style={{ fontSize: "14px" }}><b>+91 85930 51971</b></p>
                        </td>
                        <td className='text-center'>
                            <p className='mb-0 px-1'><b>Cognizant Technology Solutions</b></p>
                            <p className='mb-0 px-1 text-success' style={{ fontSize: "14px" }}>Programmer Trainee</p>
                        </td>
                        <td className='text-center'>
                            <a style={{ textDecoration: "none", cursor: "pointer" }} className='text-primary'>Resume</a>
                        </td>
                        <td className='text-center'>
                            <button className='btn' id='btnStyle'><b><IoMdDoneAll /></b></button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingTop:"20px", paddingBottom:"20px"}}>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://i.postimg.cc/zfZzKgC3/arun-mynatty1-1.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='mb-0 pe-1'><b>Albin Babu</b></p>
                                    <p className='mb-0 pe-1' style={{ fontSize: "13px" }}>albinbabu@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td className='text-center'>
                            <p className='mb-1 px-1' style={{ fontSize: "14px" }}><b>+91 94573 76453</b></p>
                        </td>
                        <td className='text-center'>
                            <p className='mb-0 px-1'><b>_ _</b></p>
                            {/* <p className='mb-0 px-1 text-success' style={{ fontSize: "14px" }}>Software Developer</p> */}
                        </td>
                        <td className='text-center'>
                            <a style={{ textDecoration: "none", cursor: "pointer" }} className='text-primary'>Resume</a>
                        </td>
                        <td className='text-center'>
                            <button className='btn' id='btnStyle'><b><IoMdDoneAll /></b></button>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </div>
    );
}

export default ApplicationList;