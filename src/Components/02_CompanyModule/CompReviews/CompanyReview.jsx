import React, { useState } from 'react'
import './CompanyReview.css'
import { Col, Row } from 'react-bootstrap'
import { FaUserTie, FaStar } from "react-icons/fa";
import { FaGraduationCap, FaUserGroup, FaRegStar } from "react-icons/fa6";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ReviewReply from './ReviewReply/ReviewReply';
import ViewReviewReply from './ViewReviewReply/ViewReviewReply';

function CompanyReview() {

  const [rev1Status, setRev1Status] = useState('replied')
  const [rev2Status, setRev2Status] = useState('replied')

  const [handleHide, setHandleHide] = useState(false)

  return (
    <div className='w-100 p-3 ps-5 bg-light'>
      <Row className='w-100 shadow'>

        {/* Overall rating column */}
        <Col className='col-5 bg-white py-5 ps-3 pe-0 rounded'>
          <div>
            <p className='text-center' id='compRevHead'>Cognizant Technology Solutions<br />Reviews and Ratings</p>
            <div className='d-flex justify-content-center align-items-center fs-3'>
              <span className='me-2'><b>4.7</b></span>
              <span className='me-3' style={{ fontSize: "10px" }}><b>Out of<br />5 Stars</b></span>
              <span className='text-warning fs-4 d-flex mb-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span>
            </div>
            <p className='text-center'><b>Overall rating of 1000 reviews</b></p>
            <div className='d-flex justify-content-center py-3'>
              <span className='col-3 text-center me-4'>
                <p className='bg-light fs-5 mb-2 py-4' style={{ borderRadius: "50px" }}><b>86%</b></p>
                <b>Recommand to a friend</b>
              </span>
              <span className='col-3 text-center'>
                <p className='bg-light fs-5 mb-2 py-4' style={{ borderRadius: "50px" }}><FaUserGroup /></p>
                <b>1000 Ratings</b>
              </span>
            </div>
          </div>

          {/* Count of reviews based on ratings */}
          <div className=''>
            <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>5 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={42} /></span><span className='col-2'><b>420</b></span></p>
            <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>4 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={25} /></span><span className='col-2'><b>250</b></span></p>
            <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>3 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={20} /></span><span className='col-2'><b>200</b></span></p>
            <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>2 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={8} /></span><span className='col-2'><b>80</b></span></p>
            <p className='d-flex align-items-center my-2'><span className='col-2 text-end'><b>1 <FaStar className='mb-1 text-warning' /></b></span><span className='col-8 px-3'><ProgressBar style={{ height: "10px" }} variant="primary" now={5} /></span><span className='col-2'><b>50</b></span></p>
          </div>
        </Col>

        {/* All reviews column */}
        <Col className='col-7 bg-white py-5 px-3 rounded'>
          <div className='w-100 px-3 d-flex align-item-center'>
            <h4 id='compRevHead' className='w-50'>All Reviews</h4>
            <div className='w-50 d-flex justify-content-end'>

              {/* Filter reviews */}
              <Dropdown className='me-2'>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className='border-0 px-4 pt-2'>
                  <span style={{ fontSize: "15px" }}><b>Filter reviews</b></span>
                </Dropdown.Toggle>

                <Dropdown.Menu className='mt-2 shadow bg-white p-4' style={{ width: "400px", marginLeft: "-85px" }}>
                  <Form className='rounded bg-white'>
                    <Form.Group controlId="formBasicFilt">
                      <Form.Label><b>Filter reviews</b></Form.Label>
                      <div style={{ fontSize: "14px" }}>
                        <Form.Check type="radio" name='filterReview' label="All reviews" />
                        <div className='d-flex mt-2'>
                          <Form.Check type="radio" name='filterReview' label="1⭐" className='me-3' />
                          <Form.Check type="radio" name='filterReview' label="2⭐" className='me-3' />
                          <Form.Check type="radio" name='filterReview' label="3⭐" className='me-3' />
                          <Form.Check type="radio" name='filterReview' label="4⭐" className='me-3' />
                          <Form.Check type="radio" name='filterReview' label="5⭐" className='me-3' />
                        </div>
                      </div>
                    </Form.Group>
                    <button className='btn btn-dark mt-2 py-1' style={{ fontSize: "13px" }}><b>Apply Filter</b></button>
                  </Form>
                </Dropdown.Menu>
              </Dropdown>

              {/* Sort reviews */}
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className='border-0 px-4 pt-2'>
                  <span style={{ fontSize: "15px" }}><b>Sort by</b></span>
                </Dropdown.Toggle>

                <Dropdown.Menu className='mt-2 shadow bg-white p-4' style={{ width: "300px", marginLeft: "-85px" }}>
                  <Form className='rounded bg-white'>
                    <Form.Group controlId="formBasicFilt">
                      <Form.Label><b>Sort by</b></Form.Label>
                      <div style={{ fontSize: "14px" }}>
                        <Form.Check type="radio" name='SortReview' label="- Latest -" />
                        <Form.Check type="radio" name='SortReview' label="- Earliest -" />
                        <Form.Check type="radio" name='SortReview' label="- Rating Higher to Lower -" />
                        <Form.Check type="radio" name='SortReview' label="- Rating Lower to Higher -" />
                      </div>
                    </Form.Group>
                    <button className='btn btn-dark mt-2 py-1' style={{ fontSize: "13px" }}><b>Apply Sort</b></button>
                  </Form>
                </Dropdown.Menu>
              </Dropdown>

            </div>
          </div>

          <div className='py-4 px-3' id='allReviewDiv'>

            {/* Reviews */}
            <div className='p-4 mb-3 shadow'>
              <div className='d-flex'>
                <img src="https://i.postimg.cc/zfZzKgC3/arun-mynatty1-1.jpg" height='40' width='40' style={{ borderRadius: "20px" }} alt="" />
                <div className='ps-2 w-100'>
                  <div className='d-flex'>
                    <p className='w-75 mb-0'><b>Arun Francis</b></p>
                    <p className='w-25 mb-0 text-end text-secondary' style={{ fontSize: "10px" }}><b>13 Jul 2024</b></p>
                  </div>
                  <p className='text-warning mb-2' style={{ fontSize: "13px", marginTop: "-3px" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                  <p style={{ fontSize: "13px" }} className='mb-2'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt in pariatur commodi perferendis! Blanditiis impedit illo, enim atque commodi natus fugit et molestiae odio voluptates porro magnam asperiores eum."</p>

                  {
                    rev1Status == 'replied' ?
                      <ViewReviewReply /> :
                      <ReviewReply />
                  }
                </div>
              </div>
            </div>

            <div className='p-4 mb-3 shadow'>
              <div className='d-flex'>
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGB8V1vGzZuEw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697715129966?e=1733356800&v=beta&t=AvYGfea3JhIxRr34_BCJnb-_KDyoMwK7HwdtlXYUh-E" height='40' width='40' style={{ borderRadius: "20px" }} alt="" />
                <div className='ps-2 w-100'>
                  <div className='d-flex'>
                    <p className='w-75 mb-0'><b>Albert Jose M</b></p>
                    <p className='w-25 mb-0 text-end text-secondary' style={{ fontSize: "10px" }}><b>13 Jul 2024</b></p>
                  </div>
                  <p className='text-warning mb-2' style={{ fontSize: "13px", marginTop: "-3px" }}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></p>
                  <p style={{ fontSize: "13px" }} className='mb-2'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo maxime laudantium, enim quasi odit voluptatum quis, libero, deserunt similique a ut ullam laborum distinctio dolores accusamus perspiciatis tempore quam aliquid."</p>

                  {
                    rev2Status == 'replied' ?
                      <ViewReviewReply /> :
                      <ReviewReply />
                  }
                </div>
              </div>
            </div>

          </div>
        </Col>

      </Row>
    </div>
  )
}

export default CompanyReview