import React, { useRef } from 'react';
import './CompanyApprove.css';
import NewRequests from './NewRequests/NewRequests';
import ApprovedReqs from './Approved/ApprovedReqs';
import { Form } from 'react-bootstrap';

function CompanyApprove() {
    const newReqDiv = useRef(null);
    const apprReqDiv = useRef(null);

    const handleFocusDiv = (divName) => {
        if (divName === 'newReq') {
            if (newReqDiv.current) {
                newReqDiv.current.focus();
            }
        } else {
            if (apprReqDiv.current) {
                apprReqDiv.current.focus();
            }
        }
    };

    return (
        <div className='px-5 py-3'>
            <div className='px-3 mb-4 d-flex'>
                <div className='col-8'>
                    <h3 className='mb-2' style={{ fontFamily: "Jost", fontWeight: "1000" }}>Company Requests & Approvals</h3>
                    <p className='text-black' style={{ fontSize: "15px" }}>Check the document carefully before approve.</p>
                </div>
                <div className='col-4 d-flex text-black justify-content-end align-items-end pb-3'>
                    <label htmlFor="" className='d-flex me-4'>
                        <Form.Check type="radio" name='requests' onChange={() => handleFocusDiv('newReq')} className='me-2' />
                        <b>New requests</b>
                    </label>
                    <label htmlFor="" className='d-flex'>
                        <Form.Check type="radio" name='requests' onChange={() => handleFocusDiv('apprReq')} className='me-2' />
                        <b>Approved requests</b>
                    </label>
                </div>
            </div>

            <div className='mb-5' ref={newReqDiv} tabIndex={-1}>
                <NewRequests />
            </div>

            <div className='mb-5' ref={apprReqDiv} tabIndex={-1}>
                <ApprovedReqs />
            </div>
        </div>
    );
}

export default CompanyApprove;