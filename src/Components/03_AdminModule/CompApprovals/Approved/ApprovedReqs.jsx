import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import resume from '../../../../Images/AbinFrancisResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdfjs-dist/build/pdf.worker.min.js`;

function ApprovedReqs() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className='px-3'>
            <div className='border border-success rounded shadow'>
                <h4 className='bg-success py-4 px-4 text-white border border-success' style={{ fontFamily: "Jost", fontWeight: "800" }}>Approved Requests</h4>
                <div className='px-4 py-3 bg-light'>

                    {/* Approved Request */}
                    <div className='p-4 mb-3 bg-white border-0 border-bottom border-top border-secondary shadow'>
                        <div className='d-flex' style={{ fontSize: "13px" }}>
                            <p className='w-50'>Request ID: <b className='text-success'>REQ0001</b></p>
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
                                <p className='text-success mb-0 text-end'><b><MdEmail className='me-1 text-black' />arunmynatty1723@gmail.com</b></p>
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
                                <p className='text-success mb-0'><b>View document <MdKeyboardArrowRight /></b></p>
                            </div>
                            <div className='px-3 col-3 border-end border-black'>
                                <p className='text-black mb-0 text-end'><b>40 office locations across India</b></p>
                                <p className='text-success mb-0 text-end' style={{ fontSize: "14px" }}><b>See locations <MdKeyboardArrowRight /></b></p>
                            </div>
                            <div className='px-3 col-3'>
                                <p className='text-black mb-0'><b><HiUsers className='mb-1 me-2' />10000+</b> Employees work here</p>
                                <p className='mb-0'>
                                    <TbWorldSearch className='mb-1 me-2 text-black' />
                                    <a href="https://www.cognizant.com" className='text-success' style={{ textDecoration: "none" }}><b>https://www.cognizant.com</b></a>
                                </p>
                            </div>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            <p className='text-black mb-0'>Approved on <b className='text-success'>21-10-2024</b></p>
                            <p className='text-black mb-0'>Checked & Approved by <b className='text-success'>Arun M F (ADM108)</b></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ApprovedReqs