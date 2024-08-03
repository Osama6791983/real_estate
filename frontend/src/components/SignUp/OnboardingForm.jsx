import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const OnboardingForm = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    agencyName: '',
    sellingAs: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
        <>
         <div className="bg-gray-600 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h4 className="text-2xl font-bold text-gray-800 text-center mb-6">Onboarding Form</h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Role</option>
              <option value="rental">Rental</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          {role === 'seller' && (
            <>
              <div>
                <label htmlFor="agencyName" className="block text-sm font-medium text-gray-700">Agency Name</label>
                <input
                  type="text"
                  id="agencyName"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="sellingAs" className="block text-sm font-medium text-gray-700">Selling as</label>
                <select
                  id="sellingAs"
                  name="sellingAs"
                  value={formData.sellingAs}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="owner">Owner (FSBO)</option>
                  <option value="agency">Agency</option>
                </select>
              </div>
            </>
          )}
          <div className='flex justify-center'>
            <button
              type="submit "
              className="w-2/3   bg-black text-white py-2 px-4 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
  );
};

export default OnboardingForm;
