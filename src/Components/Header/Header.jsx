import React, { useContext, useEffect, useMemo, useState } from 'react';
import './Header.css'
import { MDBNavbar } from 'mdb-react-ui-kit';
import { MdNotificationsActive } from "react-icons/md";
import logo from '../../Images/mainLogo.gif'
import Dropdown from 'react-bootstrap/Dropdown';
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { BsStars } from "react-icons/bs";
import { DataContext } from '../../Context/DataContext';
import defaultProfImg from '../../Images/defaultProfileImg.jpg'

function Header({ pathname, logout }) {

  const {data} = useContext(DataContext)
  // console.log(data);

  const navigate = useNavigate();

  const role = useMemo(() => data?.role || 'jobseeker', [data?.role]);
  const image = useMemo(() => {
    if (role === 'jobseeker') return data?.imageURL || defaultProfImg;
    if (role === 'company') return data.logo;
    if (role === 'admin') return data.imageURL;
    return defaultProfImg;
  }, [role, data]);

  const name = useMemo(() => {
    if (role === 'jobseeker') return `${data.firstName} ${data.lastName}`;
    if (role === 'company') return data.abbreviatedName;
    if (role === 'admin') return data.name;
    return '';
  }, [role, data]);

  const liStyle = {
    borderBottom: "2px solid black"
  }

  const navDisableStyle = {
    pointerEvents: "none"
  }

  function navbarDisableFunc() {
    if (pathname === '' || pathname === 'SignUp' || pathname === 'ForgotPassword') {
      return navDisableStyle;
    }
  }

  useEffect(() => {
    if (pathname === '' || pathname === 'SignUp' || pathname === 'ForgotPassword') {
      logout()
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
                role === "jobseeker" &&
                <nav>
                  <ul className='d-flex'>
                    <li className='mx-4' style={(pathname === 'Home') ? liStyle : {}}>
                      <a href={role ? "/Home" : "#"}>Home</a>
                    </li>
                    <li className='mx-4' style={(pathname === 'AllJobs') ? liStyle : {}}>
                      <a href={role ? "/AllJobs" : "#"}>All Jobs</a>
                    </li>
                    <li className='mx-4' style={(pathname === 'AllCompanies') ? liStyle : {}}>
                      <a href={role ? "/AllCompanies" : "#"}>Companies</a>
                    </li>
                  </ul>
                </nav>
              }

              {/* Navbar for Company */}
              {
                role === "company" &&
                <nav>
                  <ul className='d-flex'>
                    <li className='mx-4' style={(pathname === 'Company-Home') ? liStyle : {}}><a href="/Company-Home">Home</a></li>
                    <li className='mx-4' style={(pathname === 'PostAJob') ? liStyle : {}}><a href="/PostAJob"><BsStars /> Post a Job</a></li>
                    <li className='mx-4' style={(pathname === 'AllApplications') ? liStyle : {}}><a href="/AllApplications">Applications</a></li>
                  </ul>
                </nav>
              }

              {/* Navbar for Admin */}
              {
                role === "admin" &&
                <nav>
                  <ul className='d-flex'>
                    <li className='mx-4' style={(pathname === 'Home') ? liStyle : {}}><a href="/Home">Home</a></li>
                    <li className='mx-4' style={(pathname === 'AllCompanies') ? liStyle : {}}><a href="/AllCompanies">Manage Jobs</a></li>
                    <li className='mx-4' style={(pathname === 'Company-Approval') ? liStyle : {}}><a href="/Company-Approval">Approvals</a></li>
                  </ul>
                </nav>
              }

              {/* Common settings */}
              <div className='mx-4 pt-2 border-0'>
                <Dropdown id='settingsDropdown'>
                  <Dropdown.Toggle variant="white" id="dropdown-basic" className='border-0 px-0 pt-1'>
                    <span>Settings</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='shadow' id='settingsOpts'>
                    <button className='btn btn-white w-100 text-start text-primary' onClick={() => { navigate('/ChangePassword') }}>Change password</button>
                    <button className='btn btn-white w-100 text-start text-danger' onClick={() => { navigate('/DeleteAccount') }}>Delete account</button>
                    <button className='btn btn-white w-100 text-start text-danger' onClick={logout}><TbLogout2 /> Logout</button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          {
            data.role &&
            <div className='w-25 d-flex justify-content-end'>
              {/* <div className='me-3 pt-2'>
              <button className='btn btn-white border-0 fs-4 mt-4'><MdNotificationsActive className='text-primary' /></button>
            </div> */}
              <div className='d-flex mt-3 align-items-center'>
                <img
                  className='border'
                  style={{ borderRadius: "15px" }}
                  src={image}
                  alt=""
                  height="30"
                  width='30' />
                <p className='ms-1 my-0' style={{ fontSize: "14px" }}><b>{name}</b></p>
              </div>
            </div>
          }
        </div>
      </MDBNavbar>
    </div>
  )
}

export default Header