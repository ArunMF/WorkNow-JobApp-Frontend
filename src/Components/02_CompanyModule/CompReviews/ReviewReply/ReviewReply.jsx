import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

function ReviewReply() {

    const [handleHide, setHandleHide] = useState(false)

    return (
        <div>
            {
                handleHide ?
                    <button style={{ fontSize: "13px" }} className='btn btn-white border-0 text-primary p-0' onClick={() => { setHandleHide(false) }}><b>Close</b></button> :
                    <button style={{ fontSize: "13px" }} className='btn btn-white border-0 text-primary p-0' onClick={() => { setHandleHide(true) }}><b>Reply</b></button>
            }
            {
                handleHide &&
                <div className='mt-2'>
                    <Form.Group controlId="formBasicReply">
                        <Form.Control as="textarea" rows={3} style={{ fontSize: "13px" }} />
                    </Form.Group>
                    <button className='btn btn-primary py-1 mt-2' style={{ fontSize: "13px" }}><b>Send</b></button>
                </div>
            }
        </div>
    )
}

export default ReviewReply