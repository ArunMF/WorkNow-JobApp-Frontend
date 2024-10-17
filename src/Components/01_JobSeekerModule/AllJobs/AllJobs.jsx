import React from 'react'
import './AllJobs.css'
import { Row, Col } from 'react-bootstrap'
import { ImSearch } from "react-icons/im";
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { IoMdStar } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import JobOverview from './JobOverview/JobOverview';
import { PiBuildingOfficeFill } from "react-icons/pi";

function AllJobs() {
  return (
    <div className='bg-light'>
      <div className='d-flex justify-content-center pt-3 pb-4 px-5 bg-white'>
        <input type="text" list='searchJob' className='w-25 bg-light border' id='jobInput' placeholder='Find your perfect job' />
        <datalist id='searchJob'>
          <option>Web Developer</option>
          <option>Flutter Developer</option>
          <option>MERN Stack Developer</option>
        </datalist>
        <input type='text' className='mx-1 bg-light border' placeholder='Location' id='locationInput' />
        <button className='btn btn-success' style={{borderRadius:"10px"}} id='btnStyle'><ImSearch /></button>
      </div>

      <Row className='m-2'>
        <Col className='col-4 ps-4 pe-3 py-2'>
          <MDBCard className='mb-2 px-1 shadow' id='allJobsJobCard'>
            <MDBCardBody>
              <div>
                <span className='me-2'><img height='13px' src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339&download=true" alt="" /></span>
                <span className='me-3' style={{ fontSize: "13px", fontWeight: "600" }}>Cognizant Technology Solutions</span>
                <span style={{ fontSize: "13px" }}>4.7 <IoMdStar className='mb-1' /></span>
              </div>
              <div className='mt-1'>
                <span className='text-primary' style={{ fontSize: "16px", fontWeight: "1000" }}>Programmer Trainee</span><br />
                <span style={{ fontSize: "14px" }}><b>Kochi, India</b></span><br />
                <span style={{ fontSize: "14px" }}><MdOutlineCurrencyRupee />18K - <MdOutlineCurrencyRupee />21K/M</span>
              </div>
              <div className='d-flex mt-1'>
                <div className='w-50'><span className='text-success px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 255, 195)", fontSize: "14px" }}><AiFillThunderbolt /> Easy Apply</span></div>
                <span className='w-50 d-flex justify-content-end align-items-end text-secondary' style={{ float: "right", fontSize: "13px" }}>Today</span>
              </div>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className='mb-2 px-1 shadow' id='allJobsJobCard'>
            <MDBCardBody>
              <div>
                <span className='me-2'><img height='13px' src="https://th.bing.com/th/id/OIP.jelNQlhvt5JOQeR1nyWL1gAAAA?rs=1&pid=ImgDetMain" alt="" /></span>
                <span className='me-3' style={{ fontSize: "13px", fontWeight: "600" }}>Tata Consultancy Services</span>
                <span style={{ fontSize: "13px" }}>4.3 <IoMdStar className='mb-1' /></span>
              </div>
              <div className='mt-1'>
                <span className='text-primary' style={{ fontSize: "16px", fontWeight: "1000" }}>Software Engineer</span><br />
                <span style={{ fontSize: "14px" }}><b>Kochi, India</b></span><br />
                <span style={{ fontSize: "14px" }}><MdOutlineCurrencyRupee />15K - <MdOutlineCurrencyRupee />17K/M</span>
              </div>
              <div className='d-flex mt-1'>
                <div className='w-50'><span className='text-primary px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 236, 255)", fontSize: "14px" }}><PiBuildingOfficeFill /> Apply</span></div>
                <span className='w-50 d-flex justify-content-end align-items-end text-secondary' style={{ float: "right", fontSize: "13px" }}>7 days ago</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col className='col-8 pe-4 py-2 bg-white border rounded shadow' id='jobOverviewDiv'>
          <JobOverview />
        </Col>
      </Row>
    </div>
  )
}

export default AllJobs