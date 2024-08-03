import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import HomePage from './components/Dashboard/HomePage';
import ModifyProfile from './components/Profile/ModifyProfile';
import ProductDetails from './components/Products/ProductDetail';
import FilterMap from './components/Products/FilterMap';
import RentDashboard from './components/RentDashboard/Dashboard/RentDashboardData';
import EditProfile from './components/RentDashboard/Dashboard/EditProfile';
import Dashboard from './components/RentDashboard/Dashboard/Dashboard';
import Address from './components/RentDashboard/Dashboard/Address';
import Notification from './components/RentDashboard/Dashboard/Notification';
import ChangePassword from './components/RentDashboard/Dashboard/ChangePassword';
import Otp from './components/RentDashboard/Dashboard/Otp';
import NewPassword from './components/RentDashboard/Dashboard/NewPassword';
import SupportPage from './components/RentDashboard/ProfileSetting/SupportPage';
import UploadDoc from './components/RentDashboard/ProfileSetting/UploadDoc';
import FsboDashboardData from './components/FSBODashboard/Databoard/Dashboard';
import List2 from './components/FSBODashboard/Listing/List2';
import List1 from './components/FSBODashboard/Listing/List1';


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
        <Route path='/rental-dashboard' element={<Dashboard/>} />
        <Route path= '/rental/settings/edit-profile' element={ <EditProfile />} />
        <Route path= '/rental/settings/address' element={<Address /> } />
        <Route path='/rental/settings/notification' element={<Notification /> } />
        <Route path='/rental/settings/change-password' element={<ChangePassword /> } />
        <Route path='/rental/settings/otp' element={<Otp /> } />
        <Route path='/rental/settings/edit-profile' element={<ModifyProfile />} />
        <Route path='/rental/settings/newpassword' element={<NewPassword /> } />
        <Route path='/rental/settings/success' element={<NewPassword />} />
        <Route path='/rental/support-page' element={<SupportPage /> } />
        <Route path='/rental/upload-document' element={<UploadDoc />} />

        <Route path='/fsbo-dashboard' element={<FsboDashboardData /> } />
        <Route path= '/fsbo/settings/edit-profile' element={ <EditProfile />} />
        <Route path= '/fsbo/settings/address' element={<Address /> } />
        <Route path='/fsbo/settings/notification' element={<Notification /> } />
        <Route path='/fsbo/settings/change-password' element={<ChangePassword /> } />
        <Route path='/fsbo/settings/otp' element={<Otp /> } />
        <Route path='/fsbo/settings/edit-profile' element={<ModifyProfile />} />
        <Route path='/fsbo/settings/newpassword' element={<NewPassword /> } />
        <Route path='/fsbo/settings/success' element={<NewPassword />} />
        <Route path='/fsbo/support-page' element={<SupportPage /> } />
        <Route path='/fsbo/upload-document' element={<UploadDoc />} />
        <Route path='/fsbo/listing' element={<List2 /> } />
    </Routes>
       
    </>
  );
}

export default App;
