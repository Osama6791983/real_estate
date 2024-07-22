import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import HomePage from './components/Dashboard/HomePage';
import ModifyProfile from './components/Profile/ModifyProfile';
import ProductDetails from './components/Products/ProductDetail';
import FilterMap from './components/Products/FilterMap';
import RentDashboard from './components/RentDashboard/Dashboard/RentDashboard';
import EditProfile from './components/RentDashboard/Dashboard/EditProfile';
import Dashboard from './components/RentDashboard/Dashboard/Dashboard';
import Address from './components/RentDashboard/Dashboard/Address';
import Notification from './components/RentDashboard/Dashboard/Notification';
import ChangePassword from './components/RentDashboard/Dashboard/ChangePassword';
import Otp from './components/RentDashboard/Dashboard/Otp';
import NewPassword from './components/RentDashboard/Dashboard/NewPassword';
import SupportPage from './components/RentDashboard/ProfileSetting/SupportPage';
import UploadDoc from './components/RentDashboard/ProfileSetting/UploadDoc';



function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/product/productdetails' element={<ProductDetails />} />
        <Route path='/product/searchbymap' element={<FilterMap />} />
        <Route path='/rentdashboard' element={<Dashboard/>} />
        <Route path= '/rental/settings/edit-profile' element={ <EditProfile />} />
        <Route path= '/rental/settings/address' element={<Address /> } />
        <Route path='/rental/settings/notification' element={<Notification /> } />
        <Route path='/rental/settings/change-password' element={<ChangePassword /> } />
        <Route path='/rental/settings/otp' element={<Otp /> } />
        <Route path='/rental/settings/edit-profile' element={<ModifyProfile />} />
        <Route path='/rental/settings/newpassword' element={<NewPassword /> } />
        <Route path='/rental/settings/success' element={<NewPassword />} />
        <Route path='/support-page' element={<SupportPage /> } />
        <Route path='/upload-document' element={<UploadDoc />} />
    </Routes>
       
    </>
  );
}

export default App;
