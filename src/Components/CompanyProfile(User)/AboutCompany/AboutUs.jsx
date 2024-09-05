import React from 'react'

function AboutUs() {
    return (
        <div className='bg-light mx-3 p-4'>
            <div className='mb-4'>
                <h5 className='mb-2' style={{ fontWeight: "800" }}>Overview</h5>
                <p style={{fontSize:"14px"}}>Cognizant (Nasdaq-100: CTSH) engineers modern businesses. We help our clients modernize technology, reimagine processes and transform experiences so they can stay ahead in our fast-changing world. Together, we’re improving everyday life. See how at www.cognizant.com or @cognizant.</p>
            </div>
            <div className='mb-4'>
                <h6 className='mb-1' style={{ fontWeight: "800" }}>Website</h6>
                <a href='' style={{textDecoration:"none", fontSize:"14px"}}>https://www.cognizant.com</a>
            </div>
            <div className='mb-4'>
                <h6 className='mb-1' style={{ fontWeight: "800" }}>Industry</h6>
                <p style={{fontSize:"14px"}}>Information Technology Support Services</p>
            </div>
            <div className='mb-4'>
                <h6 className='mb-1' style={{ fontWeight: "800" }}>Company size</h6>
                <p style={{fontSize:"14px"}}>10000+ Employess work here</p>
            </div>
            <div className='mb-4'>
                <h6 className='mb-1' style={{ fontWeight: "800" }}>Specialties</h6>
                <p style={{fontSize:"14px"}}>Interactive, Intelligent Process Automation, Digital Engineering, Industry & Platform Solutions, Internet of Things, Artificial Intelligence, Cloud, Data , Healthcare, Banking, Finance , Fintech, Manufacturing, Retail, Technology , and Salesforce</p>
            </div>
        </div>
    )
}

export default AboutUs