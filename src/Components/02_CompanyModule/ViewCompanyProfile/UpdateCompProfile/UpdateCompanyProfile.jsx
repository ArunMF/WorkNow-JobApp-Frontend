import React from 'react'
import Form from 'react-bootstrap/Form';

function UpdateCompanyProfile() {
    return (
        <div className='border-bottom rounded pb-3'>
            <h4 style={{ fontFamily: "Jost", fontWeight: "700" }}>Update company profile</h4>
            <p className='mb-3 text-secondary' style={{ fontSize: "14px" }}>You can update company profile here.</p>
            <Form>
                <Form.Group className="mb-3 w-100 me-1" controlId="formBasicFsName">
                    <Form.Label className='ms-1 text-success'><b>Company name</b></Form.Label>
                    <Form.Control type="text" value={"Cognizant Technology Solutions"} style={{ fontSize: "14px" }} />
                </Form.Group>

                <Form.Group className="mb-3 w-100 me-1" controlId="formBasicFsName">
                    <Form.Label className='ms-1 text-success'><b>Industry</b></Form.Label>
                    <Form.Control type="text" value={"Information Technology Support Services"} style={{ fontSize: "14px" }} />
                </Form.Group>

                <Form.Group className="mb-3 w-100 me-1" controlId="formBasicFsName">
                    <Form.Label className='ms-1 text-success'><b>About company</b></Form.Label>
                    <Form.Control as="textarea" rows={5} value={"Cognizant (Nasdaq-100: CTSH) engineers modern businesses. We help our clients modernize technology, reimagine processes and transform experiences so they can stay ahead in our fast-changing world. Together, we’re improving everyday life. See how at www.cognizant.com or @cognizant."} style={{ fontSize: "14px" }} />
                </Form.Group>

                <Form.Group className="mb-3 w-100 me-1" controlId="formBasicFsName">
                    <Form.Label className='ms-1 text-success'><b>Company size</b></Form.Label>
                    <Form.Control type="number" placeholder='Enter Number of Employees' value={"12355"} style={{ fontSize: "14px" }} />
                </Form.Group>

                <Form.Group className="mb-3 w-100 me-1" controlId="formBasicFsName">
                    <Form.Label className='ms-1 text-success'><b>Website</b></Form.Label>
                    <Form.Control type="text" placeholder='Company website' value={"https://www.cognizant.com"} style={{ fontSize: "14px" }} />
                </Form.Group>

                <Form.Group className="mb-3 w-100 me-1" controlId="formBasicFsName">
                    <Form.Label className='ms-1 text-success'><b>Specialities</b></Form.Label>
                    <Form.Control as="textarea" rows={5} value={"Interactive, Intelligent Process Automation, Digital Engineering, Industry & Platform Solutions, Internet of Things, Artificial Intelligence, Cloud, Data , Healthcare, Banking, Finance , Fintech, Manufacturing, Retail, Technology , and Salesforce."} style={{ fontSize: "14px" }} />
                </Form.Group>

                <button className='btn w-100' id='btnStyle'>Update</button>
            </Form>
        </div>
    )
}

export default UpdateCompanyProfile