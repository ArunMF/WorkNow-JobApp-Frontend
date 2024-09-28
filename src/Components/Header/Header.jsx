import React, { useEffect, useState } from 'react';
import './Header.css'
import { MDBNavbar } from 'mdb-react-ui-kit';
import { MdNotificationsActive } from "react-icons/md";
import logo from '../../Images/mainLogo.gif'
import Dropdown from 'react-bootstrap/Dropdown';
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { BsStars } from "react-icons/bs";

function Header({ pathname }) {

  const navigate = useNavigate();
  const sampRole = "Company";

  const [role, setRole] = useState('JobSeeker')

  const liStyle = {
    borderBottom: "2px solid black"
  }

  const navDisableStyle = {
    pointerEvents: "none"
  }

  function navbarDisableFunc() {
    if (pathname == '' || pathname == 'SignUp' || pathname == 'ForgotPassword') {
      return navDisableStyle;
    }
  }

  useEffect(() => {
    if (sampRole) {
      setRole(sampRole)
    }
  }, [])

  return (
    <div>
      <MDBNavbar className='border-0'>
        <div className='w-100 d-flex px-5' id='mainDiv'>
          {/* <MDBNavbarBrand className='w-25'> */}
          <div className='w-25 mt-3 mb-1 d-flex'>
            <img
              className='me-2'
              src={logo}
              height='60'
              alt=''
              loading='lazy'
            />
            <h1 className='pt-2'><span style={{ fontFamily: "Lilita One" }}>Work</span><span className='text-primary' style={{ fontFamily: "Playwrite NG Modern" }}>Now</span></h1>
          </div>
          {/* </MDBNavbarBrand> */}
          <div className='w-50 pt-4 mt-2' style={navbarDisableFunc()}>
            <div className='d-flex justify-content-center'>

              {/* Navbar for Job seeker */}
              {
                role == "JobSeeker" &&
                <nav>
                  <ul className='d-flex'>
                    <li className='mx-4' style={(pathname == 'Home') ? liStyle : {}}>
                      <a href={ sampRole ? "/Home" : "#" }>Home</a>
                    </li>
                    <li className='mx-4' style={(pathname == 'AllJobs') ? liStyle : {}}>
                      <a href={ sampRole ? "/AllJobs" : "#" }>All Jobs</a>
                    </li>
                    <li className='mx-4' style={(pathname == 'AllCompanies') ? liStyle : {}}>
                      <a href={ sampRole ? "/AllCompanies" : "#" }>Companies</a>
                    </li>
                  </ul>
                </nav>
              }

              {/* Navbar for Company */}
              {
                role == "Company" &&
                <nav>
                  <ul className='d-flex'>
                    <li className='mx-4' style={(pathname == 'CompanyHomePage') ? liStyle : {}}><a href="/CompanyHomePage">Home</a></li>
                    <li className='mx-4' style={(pathname == 'PostAJob') ? liStyle : {}}><a href="/PostAJob"><BsStars /> Post a Job</a></li>
                    <li className='mx-4' style={(pathname == 'AllApplications') ? liStyle : {}}><a href="/AllApplications">Applications</a></li>
                  </ul>
                </nav>
              }

              {/* Navbar for Admin */}
              {
                role == "Admin" &&
                <nav>
                  <ul className='d-flex'>
                    <li className='mx-4' style={(pathname == 'Home') ? liStyle : {}}><a href="/Home">Home</a></li>
                    <li className='mx-4' style={(pathname == 'AllCompanies') ? liStyle : {}}><a href="/AllCompanies">Job Reports</a></li>
                    <li className='mx-4' style={(pathname == 'YourActivities') ? liStyle : {}}><a href="/YourActivities">Approvals</a></li>
                  </ul>
                </nav>
              }

              {/* Common settings */}
              <div className='mx-4 pt-2 border-0'>
                <Dropdown id='settingsDropdown'>
                  <Dropdown.Toggle variant="white" id="dropdown-basic" className='border-0 px-0 pt-1'>
                    <span>Settings</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu id='settingsOpts'>
                    <button className='btn btn-white w-100 text-start text-primary' onClick={() => { navigate('/ChangePassword') }}>Change password</button>
                    <button className='btn btn-white w-100 text-start text-danger' onClick={() => { navigate('/DeleteAccount') }}>Delete account</button>
                    <button className='btn btn-white w-100 text-start text-danger'><TbLogout2 /> Logout</button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className='w-25 d-flex justify-content-end'>
            <div className='me-3 pt-2'>
              <button className='btn btn-white border-0 fs-4 mt-4'><MdNotificationsActive className='text-primary' /></button>
            </div>
            <div className='d-flex pt-4 mt-3'>
              <img
                className='border'
                style={{ borderRadius: "15px" }}
                src="https://i.postimg.cc/zfZzKgC3/arun-mynatty1-1.jpg"
                alt=""
                height="30px" />
              <p className='ms-1 pt-1'><b>Arun M F</b></p>
            </div>
          </div>
        </div>
      </MDBNavbar>
    </div>
  )
}

export default Header