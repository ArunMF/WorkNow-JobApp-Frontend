import React, { useContext, useEffect, useState } from 'react'
import './AllJobs.css'
import { ImSearch } from "react-icons/im";
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { IoMdStar } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import JobOverview from './JobOverview/JobOverview';
import { PiBuildingOfficeFill } from "react-icons/pi";
import Card from 'react-bootstrap/Card';
import { LuDot } from "react-icons/lu";
// import { SiTicktick } from "react-icons/si";
import { TiBookmark } from "react-icons/ti";
import { Col, Form, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { baseUrl } from '../../baseurl';
import { DataContext } from '../../../Context/DataContext';
import { IoMdRefresh } from "react-icons/io";

function AllJobs() {

    const { token } = useContext(DataContext)

    const [allJobs, setAllJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState({})    

    // Job card overview modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);  
    }

    const cardStyle = {
        border: "1px solid rgb(0, 87, 82)"
    }

    const [filterData, setFilterData] = useState({
        modeOfWork: "",
        empType: "",
        salaryFrom: "",
        salaryTo: ""
    })

    const [searchJob, setSearchJob] = useState('')
    const [searchLocation, setSearchLoc] = useState('')

    const getAllJobs = async () => {
        await axios.get(`${baseUrl}/getAllJobs`, {
            headers: {
                "Authorization": `${token}`
            }
        }).then((response) => {
            setAllJobs(response.data.jobs)
            setFilteredJobs(response.data.jobs);
        }).catch((error) => {
            console.log(error);
        })
    }

    const filterJobs = () => {
        let jobs = [...allJobs];
        if (filterData.modeOfWork) {
            jobs = jobs.filter((job) => job.modeOfWork === filterData.modeOfWork);
        }
        if (filterData.empType) {
            jobs = jobs.filter((job) => job.empType === filterData.empType);
        }
        if (filterData.salaryFrom) {
            jobs = jobs.filter((job) => job.salaryFrom >= filterData.salaryFrom);
        }
        if (filterData.salaryTo) {
            jobs = jobs.filter((job) => job.salaryTo <= filterData.salaryTo);
        }
        setFilteredJobs(jobs)
    }

    const resetFilter = () => {
        setFilterData({
            modeOfWork: "",
            empType: "",
            salaryFrom: "",
            salaryTo: "",
        });
        setFilteredJobs(allJobs)
    }

    function dateDifference(jobDate) {
        const currentDate = new Date()
        const newDate = new Date(jobDate)

        const timeDiff = Math.abs(currentDate - newDate)
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

        if (dayDiff == 0) {
            return 'Today'
        } else if (dayDiff == 1) {
            return '1 day ago'
        } else if (dayDiff > 30) {
            return '30+ days ago'
        } else {
            return `${dayDiff} days ago`
        }
    }

    function jobSearch() {
        let jobs = [...filteredJobs]
        if (searchJob) {
            jobs = jobs.filter((job) => job.jobTitle === searchJob);
        }
        if (searchLocation) {
            jobs = jobs.filter((job) => job.location === searchLocation);
        }
        setFilteredJobs(jobs)
    }

    function refresh() {
        resetFilter();
        setSearchJob('')
        setSearchLoc('')
    }

    useEffect(() => {
        getAllJobs()
    }, [])

    return (
        <div className='bg-white mx-3 py-4 text-black'>
            {/* <h5 className='px-4' style={{ fontFamily: "Jost", fontWeight: "700" }}>Showing 356 posted jobs</h5> */}
            <div className='d-flex justify-content-center pt-3 mx-5 pb-4 bg-white border-0 border-bottom'>
                <input type="text" list='searchJob' value={searchJob} onChange={(e) => { setSearchJob(e.target.value) }} className='w-25 bg-white border' id='jobInput' placeholder='Find your perfect job' />
                <datalist id='searchJob'>
                    {
                        allJobs.map((job) => (
                            <option key={job.jobId}>{job.jobTitle}</option>
                        ))
                    }
                </datalist>
                <input type='text' className='mx-1 bg-white border' value={searchLocation} onChange={(e) => { setSearchLoc(e.target.value) }} list='searchLoc' placeholder='Location' id='locationInput' />
                <datalist id='searchLoc'>
                    {
                        allJobs.map((job) => (
                            <option key={job.jobId}>{job.location}</option>
                        ))
                    }
                </datalist>
                <button onClick={jobSearch} className='btn btn-success' style={{ borderRadius: "10px" }} id='btnStyle'><ImSearch /></button>
                <button onClick={refresh} className='btn btn-white border-0'><IoMdRefresh /></button>
            </div>

            <Row className='mt-3 px-5 d-flex justify-content-center'>

                {/* Filter jobs */}
                <Col className='col-4 border p-4 rounded' id='filterJobs'>
                    <h3 className='fs-5'>Filter jobs</h3>
                    <p>Showing <b className='text-success'>{filteredJobs.length}</b> posted jobs filtered by relevancy.</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label className='ms-1'><b>Mode of Work</b></Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) =>
                                setFilterData((prev) => ({
                                    ...prev,
                                    modeOfWork: e.target.value,
                                }))}
                                value={filterData.modeOfWork}
                            >
                                <option value=''>Select Mode of Work</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="On-site">On-site</option>
                                <option value="Remote">Remote</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicJobtitle">
                            <Form.Label className='ms-1'><b>Employement Type</b></Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) =>
                                setFilterData((prev) => ({
                                    ...prev,
                                    empType: e.target.value,
                                }))}
                                value={filterData.empType}
                            >
                                <option value=''>Select Employement Type</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Internship">Internship</option>
                                <option value="Trainee">Trainee</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicJobtitle">
                            <Form.Label className='ms-1'><b>Salary Range</b></Form.Label>
                            <div className='d-flex'>
                                <Form.Group className="mb-3 w-50 me-1" controlId="formBasicFrom">
                                    <Form.Label className='ms-1'><b>From</b></Form.Label>
                                    <Form.Control type="number" value={filterData.salaryFrom}
                                        onChange={(e) =>
                                            setFilterData((prev) => ({
                                                ...prev,
                                                salaryFrom: e.target.value,
                                            }))
                                        } />
                                </Form.Group>

                                <Form.Group className="mb-3 w-50 ms-1" controlId="formBasicTo">
                                    <Form.Label className='ms-1'><b>To</b></Form.Label>
                                    <Form.Control type="number" value={filterData.salaryTo}
                                        onChange={(e) =>
                                            setFilterData((prev) => ({
                                                ...prev,
                                                salaryTo: e.target.value,
                                            }))
                                        } />
                                </Form.Group>
                            </div>
                        </Form.Group>

                        <button className='btn w-100' type='button' id='btnStyle' onClick={filterJobs}>Apply</button>
                        <p className='text-primary text-end my-2' onClick={resetFilter} style={{ cursor: "pointer" }}><b>Reset Filter</b></p>
                    </Form>
                </Col>

                <Col className='col-8 ps-3'>

                    {/* Job card */}
                    {
                        filteredJobs.slice().reverse().map((job) => (
                            <Card key={job.jobId} className='px-2 w-100 mb-3 shadow' style={ (job.jobId === selectedJob.jobId) ? cardStyle : {} } id='allJobsCard' onClick={() => { handleShow(job); setSelectedJob(job); }}>
                                <Card.Body>
                                    <Card.Title className='mb-2 d-flex'>
                                        <div className='w-75 pe-3'>
                                            <div className='mb-1'>
                                                <img className='me-1' height='14' src={job.companyLogo} alt="" />
                                                <span style={{ fontSize: "14px" }}><b>{job.companyName}</b></span><LuDot className='mx-1' />
                                                <span className='text-secondary' style={{ fontSize: "13px" }}>{job.location}</span>
                                            </div>
                                            <span id='jobTitle' className='text-primary'>{job.jobTitle}</span>
                                        </div>

                                        <div className='w-25 d-flex justify-content-end align-items-start'>
                                            <button className='btn btn-light text-success'><TiBookmark /></button>
                                        </div>
                                    </Card.Title>
                                    <div className='d-flex mt-3' style={{ fontSize: "13px" }}>
                                        <div className='w-75'>
                                            {
                                                job.applyLink === "--" ?
                                                    <><span className='text-success px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 255, 195)" }}><AiFillThunderbolt /> Easy Apply</span><LuDot className='mx-1' /></> :
                                                    <><span className='text-primary px-2 py-1 rounded' style={{ backgroundColor: "rgb(175, 236, 255)" }}><PiBuildingOfficeFill className='mb-1' /> Apply</span><LuDot className='mx-1' /></>
                                            }
                                            <span className='bg-light px-2 py-1 rounded'>{job.modeOfWork}</span><LuDot className='mx-1' />
                                            <span className='rounded bg-light px-2 py-1'>{job.empType}</span>
                                        </div>
                                        <span className='w-25 d-flex justify-content-end mt-2 text-secondary' style={{ float: "right" }}>{dateDifference(job.date)}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }

                    {/* Job overview modal */}
                    <Modal show={show} animation={false} size='xl'>
                        <Modal.Body className='p-4' id="jobDescModal">
                            <JobOverview job={selectedJob} />
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn btn-dark' onClick={handleClose}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </div>
    )
}

export default AllJobs