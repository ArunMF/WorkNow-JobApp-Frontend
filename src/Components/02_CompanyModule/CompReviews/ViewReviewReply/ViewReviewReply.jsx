import React, { useState } from 'react'

function ViewReviewReply() {

    const [handleHide, setHandleHide] = useState(false)

    return (
        <div>
            {
                handleHide ?
                    <button style={{ fontSize: "13px" }} className='btn btn-white border-0 text-primary p-0' onClick={() => { setHandleHide(false) }}><b>Hide reply</b></button> :
                    <button style={{ fontSize: "13px" }} className='btn btn-white border-0 text-primary p-0' onClick={() => { setHandleHide(true) }}><b>View reply</b></button>
            }

            {
                handleHide &&
                <div className='bg-light rounded py-2 px-3 mt-2'>
                    <div className='d-flex mb-2'>
                        <img className='me-1' height='16' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" />
                        <p className='mb-0' style={{ fontSize: "14px" }}><b>Cognizant Technology Solutions</b></p>
                    </div>
                    <p style={{ fontSize: "13px" }} className='mb-0' >"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae, in fugit omnis provident natus optio ullam dignissimos dolore repudiandae quo atque incidunt facilis totam numquam modi iure laborum tenetur."</p>
                </div>
            }
        </div>
    )
}

export default ViewReviewReply