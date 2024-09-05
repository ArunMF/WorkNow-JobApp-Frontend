import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home';
import ApplyJob from './Components/ApplyJob/ApplyJob';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import ForgotPwd from './Components/ForgotPassword/ForgotPwd';
import AllCompanies from './Components/AllCompanies/AllCompanies';
import CompanyProfileUs from './Components/CompanyProfile(User)/CompanyProfileUs';
import YourActivity from './Components/YourActivity/YourActivity';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import DeleteAccount from './Components/DeleteAccount/DeleteAccount';
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
        <Route path='/Apply' element={<ApplyJob/>} />
        <Route path='/ForgotPassword' element={<ForgotPwd/>} />
        <Route path='/AllCompanies' element={<AllCompanies/>} />
        <Route path='/CompanyProfile' element={<CompanyProfileUs/>} />
        <Route path='/YourActivities' element={<YourActivity/>} />
        <Route path='/ChangePassword' element={<ChangePassword/>} />
        <Route path='/DeleteAccount' element={<DeleteAccount/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
