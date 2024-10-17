import React from 'react'

function MessageOverview() {
    return (
        <div className='bg-white rounded p-4 h-100'>
            <h5 className='mb-3'><b>Reason for un-approval the company from WorkNow</b></h5>
            <div className='d-flex py-3 border-bottom border-top'>
                <div className='w-75 d-flex'>
                    <img
                        className='me-2'
                        src='https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png'
                        height='40'
                        width='40'
                        alt=''
                        loading='lazy'
                        style={{ borderRadius: "40px" }}
                    />
                    <div className=''>
                        <p className='mb-0'><b>WorkNow Admin</b></p>
                        <p className='mb-0 text-secondary' style={{ fontSize: "12px", marginTop: "-6px" }}>[adminworknow@gmail.com]</p>
                        <p className='mb-0' style={{ fontSize: "12px" }}>
                            <span className='text-secondary'>to: </span>
                            <span><b>Cognizant Technology Solutions</b></span>
                        </p>
                    </div>
                </div>
                <div className='w-25'>
                    <p className='text-secondary text-end' style={{ fontSize: "10px" }}>25-10-2024</p>
                </div>
            </div>
            <div className='p-3'>
                <p style={{ fontSize: "14px", fontWeight:"500" }}>Dear HR,<br /><br />

                    My name is Arun M F, and I'm reaching out to express my interest in the Full Stack Developer position at RadicalStart that I noticed on LinkedIn. <br /><br />

                    I am eager to learn more about the role and believe my background in Full Stack Development could be a good fit for your team. <br /><br />

                    Looking forward to your response. <br /><br />

                    Best Regards,<br /> Arun M F
                </p>
            </div>
        </div>
    )
}

export default MessageOverview