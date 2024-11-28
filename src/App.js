import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ApplyJob from './Components/01_JobSeekerModule/ApplyJob/ApplyJob';
import Signup from './Components/Pages/Signup/Signup';
import Login from './Components/Pages/Login/Login';
import ForgotPwd from './Components/Pages/ForgotPassword/ForgotPwd';
import AllCompanies from './Components/01_JobSeekerModule/AllCompanies/AllCompanies';
import CompanyProfileUs from './Components/01_JobSeekerModule/CompanyProfile(User)/CompanyProfileUs';
import YourActivity from './Components/01_JobSeekerModule/YourActivity/YourActivity';
import ChangePassword from './Components/Pages/ChangePassword/ChangePassword';
import DeleteAccount from './Components/Pages/DeleteAccount/DeleteAccount';
import PostAJob from './Components/02_CompanyModule/PostAJob/PostAJob';
import AllApplications from './Components/02_CompanyModule/AllApplications/AllApplications';
import HomepageCompMod from './Components/02_CompanyModule/HomepageCompMod/HomepageCompMod';
import AllJobs from './Components/01_JobSeekerModule/AllJobs/AllJobs';
import Home from './Components/01_JobSeekerModule/HomePage/Home';
import VwCompanyProfile from './Components/02_CompanyModule/ViewCompanyProfile/VwCompanyProfile';
import AllMessages from './Components/Pages/AllMessages/AllMessages';
import CompanyReview from './Components/02_CompanyModule/CompReviews/CompanyReview';
import AdminHomePage from './Components/03_AdminModule/AdminHomePage/AdminHomePage';
import AllUsers from './Components/03_AdminModule/AllUsers/AllUsers';
import CompanyApprove from './Components/03_AdminModule/CompApprovals/CompanyApprove';

function App() {

  const location = useLocation()
  const pathname = location.pathname.substring(1);

  return (
    <div className="App">
      <Header pathname={pathname} />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/SignUp' element={<Signup/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/AllJobs' element={<AllJobs/>} />
        <Route path='/Apply' element={<ApplyJob/>} />
        <Route path='/ForgotPassword' element={<ForgotPwd/>} />
        <Route path='/AllCompanies' element={<AllCompanies/>} />
        <Route path='/CompanyProfileForUser' element={<CompanyProfileUs/>} />
        <Route path='/YourActivities' element={<YourActivity/>} />
        <Route path='/ChangePassword' element={<ChangePassword/>} />
        <Route path='/DeleteAccount' element={<DeleteAccount/>} />
        <Route path='/Company-Home' element={<HomepageCompMod/>} />
        <Route path='/PostAJob' element={<PostAJob/>} />
        <Route path='/AllApplications' element={<AllApplications/>} />
        <Route path='/CompanyProfile' element={<VwCompanyProfile/>} />
        <Route path='/AllMessages' element={<AllMessages/>} />
        <Route path='/CompanyReviews' element={<CompanyReview/>} />
        <Route path='/Admin-Home' element={<AdminHomePage/>} />
        <Route path='/Companies-and-JobSeekers' element={<AllUsers/>} />
        <Route path='/Company-Approval' element={<CompanyApprove/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
