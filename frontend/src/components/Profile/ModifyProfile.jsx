import React, { useState } from 'react';
import DataProfile from './profileData';

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        matricule: '',
        name: '',
        dob: '',
        gender: '',
        civility: '',
        address: '',
        mobile: '',
        fixed: '',
        email: '',
        servicePublicDate: '',
        chuDate: '',
        contractType: '',
        grade: '',
        employment: '',
        direction: '',
        subDirection: '',
        service: '',
        function: '',
        supervisorN1: '',
        supervisorN2: '',
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="w-full bg-blue-700 py-4">
                <h1 className="text-center text-white text-2xl font-bold">My Profile</h1>
            </div>
            <div className="container mx-auto p-6">
                <form className="max-w-4xl mx-auto bg-white shadow-md rounded">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 p-6">
                        <div>
                            <label className="block text-gray-700">Employee Id <span className='text-red-500 font-bold'>*</span></label>
                            <input
                                type="text"
                                name="matricule"
                                value={formData.matricule}
                                disabled
                                className="w-full mt-1 p-2 border border-gray-400 rounded "
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Name <span className='text-red-500 font-bold'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                className="w-full mt-1 p-2 border border-gray-300 rounded "
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Date of Birth <span className='text-red-500 font-bold'>*</span></label>
                            <input
                                type="date"
                                name="birthdate"
                                value={formData.dob}
                               
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            >
                               {DataProfile.gender && DataProfile.gender.map(option=>(
                                <option key={option.value} value={option.value}>{option.label}</option>
                                ))};
                                
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Civility</label>
                            <select
                                name="civility"
                                value={formData.civility}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            >
                                {DataProfile.civility && DataProfile.civility.map(option =>(
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Mobile Number <span className='text-red-500 font-bold'>*</span></label>
                            <input
                                type="text"
                                name="fixed"
                                value={formData.fixed}
                                onChange={handleChange}
                                disabled
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Fixed Number</label>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Public Service Start Date <span className='text-red-500 font-bold'>*</span></label>
                            <input
                                type="date"
                                name="servicePublicDate"
                                value={formData.servicePublicDate}
                                
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">CHU de COCODY Start Date <span className='text-red-500 font-bold'>*</span></label>
                            <input
                                type="date"
                                name="chuDate"
                                value={formData.chuDate}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Contract Nature</label>
                            <select
                                name="contractType"
                                value={formData.contractType}
                                disabled
                                className="w-full mt-1 p-2 border border-gray-300 rounded "
                            >
                                <option value="Location Main d'oeuvre (L.M.O)">Location Main d'oeuvre (L.M.O)</option>
                                <option value="CDD">CDD</option>
                                <option value="CDI">CDI</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Grade <span className='text-red-500 font-bold'>*</span></label>
                            <select
                                name="grade"
                                value={formData.grade}
                                disabled
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            >
                                <option value="">Choisir...</option>
                                <option value="Grade 1">Grade 1</option>
                                <option value="Grade 2">Grade 2</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Job</label>
                            <select
                                name="employment"
                                value={formData.employment}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                >
                                <option value="Auxiliaire en pharmacie">Auxiliaire en pharmacie</option>
                                {/* Add other options here */}
                                </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Function</label>
                            <select
                                    name="function"
                                    value={formData.function}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    >
                                    <option value="Auxiliaire en pharmacie">Auxiliaire en pharmacie</option>
                                    {/* Add other options here */}
                                    </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Direction</label>
                            <select
                                    name="direction"
                                    value={formData.direction}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    >
                                    <option value="Direction de l'Administration et des Finances">Direction de l'Administration et des Finances</option>
                                    {/* Add other options here */}
                                    </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Sub-Direction</label>
                            <select
                                    name="subDirection"
                                    value={formData.subDirection}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    >
                                    <option value="S/Direction du Budget et des Finances">S/Direction du Budget et des Finances</option>
                                    {/* Add other options here */}
                                    </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Service</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                >
                                <option value="Pharmacie">Pharmacie</option>
                                {/* Add other options here */}
                                </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Responsable Supervisor N+1 *</label>
                            <select
                                name="supervisorN1"
                                value={formData.supervisorN1}
                                onChange={handleChange}
                                disabled
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                >
                                <option value="239987X-NAYE BI Irie Honore">239987X-NAYE BI Irie Honore</option>
                                {/* Add other options here */}
                                </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Responsable Supervisor N+2</label>
                            <select
                                    name="supervisorN2"
                                    value={formData.supervisorN2}
                                    onChange={handleChange}
                                    disabled
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    >
                                    <option value="283802T-NGUE Bli Irie Honore">283802T-NGUE Bli Irie Honore</option>
                                    {/* Add other options here */}
                                    </select>
                        </div>

                        <div>
                    <label className="block text-gray-700">Photo (avatar)</label>
                    <input
                        type="file"
                        name="avatar"
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>

                        
                    </div>
                        <div className='pb-6 px-8' >
                            <button className='bg-black text-white py-1 px-2 rounded'>Modify Profile</button>
                        </div>
                    
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
