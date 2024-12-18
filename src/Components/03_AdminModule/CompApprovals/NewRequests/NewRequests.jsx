import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import resume from '../../../../Images/Arun M F Resume (MERN).pdf'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { Row } from 'react-bootstrap';
import { TbBuildingSkyscraper } from "react-icons/tb";

function NewRequests() {

    // Document modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Locations offcanvas
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Reject reason modal
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div className='px-3'>
            <div className='border border-primary rounded shadow'>
                <h4 className='bg-primary py-4 px-4 text-white border border-primary' style={{ fontFamily: "Jost", fontWeight: "800" }}>New Requests</h4>
                <div className='px-4 py-3 bg-light'>

                    {/* New Request */}
                    <div className='p-4 mb-3 bg-white border-0 border-bottom border-top border-secondary shadow'>
                        <div className='d-flex' style={{ fontSize: "13px" }}>
                            <p className='w-50'>Request ID: <b className='text-primary'>REQ0001</b></p>
                            <p className='w-50 text-end'>Requested on <b className='text-success'>20-10-2024</b></p>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex pe-3 col-8'>
                                <img className='me-2' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" height='45' alt="" />
                                <div>
                                    <p className='fs-5 mb-0' style={{ fontFamily: "Jost", fontWeight: "800" }}>Cognizant Technology Solutions</p>
                                    <p className='text-secondary' style={{ fontSize: "14px" }}><b>Information Technology Support Services</b></p>
                                </div>
                            </div>
                            <div className='ps-3 col-4' style={{ fontSize: "14px" }}>
                                <p className='text-primary mb-0 text-end'><b><MdEmail className='me-1 text-black' />arunmynatty1723@gmail.com</b></p>
                                <p className='text-black text-end'><b><IoCall className='mb-1 me-1' />0480-2735461, 0480-2738273</b></p>
                            </div>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            <p className='text-black mb-1' style={{ fontSize: "16px" }}><b>About company</b></p>
                            <p className='text-black'>Cognizant (Nasdaq-100: CTSH) engineers modern businesses. We help our clients modernize technology, reimagine processes and transform experiences so they can stay ahead in our fast-changing world. Together, we’re improving everyday life. See how at www.cognizant.com or @cognizant.</p>
                        </div>

                        <div className='d-flex mb-3 align-items-center' style={{ fontSize: "15px" }}>
                            <div className='col-6'>
                                <p className='text-black mb-0' style={{ fontSize: "16px" }}><b>Document submitted for verification</b></p>
                                <p className='text-primary mb-0' style={{ cursor: "pointer" }} onClick={handleShow}><b>Check document <MdKeyboardArrowRight /></b></p>
                                {/* Check document modal */}
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    size='lg'
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ fontFamily: "Jost", fontWeight: "800" }}>Document Preview</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                                            <Viewer fileUrl={resume} />
                                        </Worker>
                                    </Modal.Body>
                                    <Modal.Footer>

                                    </Modal.Footer>
                                </Modal>

                            </div>
                            <div className='px-3 col-3 border-end border-black'>
                                <p className='text-black mb-0 text-end'><b>40 office locations across India</b></p>
                                <p className='text-primary mb-0 text-end' onClick={handleShow1} style={{ fontSize: "14px", cursor: "pointer" }}><b>See locations <MdKeyboardArrowRight /></b></p>
                                {/* See locations offcanvas */}
                                <Offcanvas show={show1} placement='end' onHide={handleClose1}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title style={{ fontFamily: "Jost", fontWeight: "800" }}>Office Locations</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <h5 className='px-1 text-black' style={{fontFamily: "Jost"}}>Total <span style={{fontWeight: "800"}}>40</span> Office Locations across <span style={{fontWeight: "800"}}>India</span></h5>
                                        <Row className='p-2 text-black border rounded m-1'>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Kochi, Kerala, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Chennai, Tamilnadu, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Coimbatore, Tamilnadu, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Bengluru, Karnataka, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Hyderabad, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Jaipur, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Trivandrum, Kerala, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Mumbai, India</p>
                                            <p className='pt-2 pb-1 me-3 rounded' style={{ width: "auto", backgroundColor:"rgb(230, 230, 230)", fontSize:"14px" }}><TbBuildingSkyscraper className='mb-1' /> Ahamedabad, Gujarat, India</p>
                                        </Row>
                                    </Offcanvas.Body>
                                </Offcanvas>

                            </div>
                            <div className='px-3 col-3'>
                                <p className='text-black mb-0'><b><HiUsers className='mb-1 me-2' />10000+</b> Employees work here</p>
                                <p className='mb-0'>
                                    <TbWorldSearch className='mb-1 me-2 text-black' />
                                    <a href="https://www.cognizant.com" className='text-primary' style={{ textDecoration: "none" }}><b>https://www.cognizant.com</b></a>
                                </p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <button className='btn btn-primary me-2 px-4'>Approve</button>
                            <button className='btn btn-danger px-4' onClick={handleShow2}>Reject</button>
                            {/* Reject Reason modal */}
                            <Modal
                                show={show2}
                                onHide={handleClose2}
                                backdrop="static"
                                keyboard={false}
                                size='md'
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    I will not close if you click outside me. Do not even try to press
                                    escape key.
                                </Modal.Body>
                                <Modal.Footer>

                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewRequests