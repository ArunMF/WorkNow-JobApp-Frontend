import React from 'react'
import './HomepageCompMod.css'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { RxActivityLog } from "react-icons/rx";
import { ImUserTie } from "react-icons/im";
import { MdStars } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdPostAdd } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { BiMessageAltDetail } from "react-icons/bi";

function HomepageCompMod() {

  return (
    <div>
      <Row className='w-100 ps-4 bg-white' style={{ height: "450px" }}>
        <div className='bg-light d-flex ps-5' id='CMGSdiv'>
          <div className='ms-5'>
            <h1>Empower Your Workforce<br />with the Right Talent!</h1>
            <p className='text-secondary my-3'>Job Listings, Track Applicants, and Streamline Hiring - All in One Place!</p>
            <button className='btn' id='btnStyle'><b>Get Started <FaArrowRight /></b></button>
          </div>
        </div>
        <div className='p-0 bg-light' id='CMGSimgDiv'>
          <div className='w-100 d-flex align-items-center'>
            <img className='border border-white' src="https://i.postimg.cc/q7ZsgJQV/Job-interview-with-two-interviewers-scaled.jpg" alt="" />
          </div>
        </div>
      </Row>
      <div className='d-flex justify-content-center py-4'>
        <div className='w-75 text-center'>
          <h3 className='mb-2' style={{ fontFamily: "Jost", fontWeight: "1000" }}>Explore more</h3>
          <Row className='w-100 ms-0 justify-content-center'>
            <Col className='col-2 py-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><TbBuildingSkyscraper /></button>
              <p className='mt-2 text-dark'><b>Company Profile</b></p>
            </Col>
            <Col className='col-2 py-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><MdPostAdd /></button>
              <p className='mt-2 text-dark'><b>Post a Job</b></p>
            </Col>
            <Col className='col-2 py-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><RxActivityLog /></button>
              <p className='mt-2 text-dark'><b>Job Applications</b></p>
            </Col>
            <Col className='col-2 py-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><BiMessageAltDetail /></button>
              <p className='mt-2 text-dark'><b>Messages</b></p>
            </Col>
            <Col className='col-2 py-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><MdStars /></button>
              <p className='mt-2 text-dark'><b>Reviews</b></p>
            </Col>
          </Row>
          <Row className='w-100 ms-0 justify-content-center'>
            {/* <Col className='col-2 pb-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><FaListCheck /></button>
              <p className='mt-2 text-dark'><b>Shortlisted Applications</b></p>
            </Col>
            <Col className='col-2 pb-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><MdStars /></button>
              <p className='mt-2 text-dark'><b>Reviews</b></p>
            </Col>
            <Col className='col-2 pb-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><BiMessageAltDetail /></button>
              <p className='mt-2 text-dark'><b>Messages</b></p>
            </Col> */}
            {/* <Col className='col-2 pb-4'>
              <button className='btn btn-white btn-outline-dark fs-2 px-4'><MdStars /></button>
              <p className='mt-2 text-dark'><b>Reviews</b></p>
            </Col> */}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default HomepageCompMod