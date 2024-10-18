import React, { useState } from 'react';
import InputWithPlace from '../components/InputWithPlace';

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    mobileNumber: '',
    dateOfBirth: '',
    professionalTitle: '',
    bio: '',
    location: '',
    education: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Job Application Submitted:', formData);
  };

  return (
    <div className="bg-slate-100 flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white flex-col rounded-lg p-8 max-w-md w-full h-screen">

      <svg
              className="w-5 h-5 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
       


        <h2 className="text-2xl font-semibold mb-4">Job Application</h2>

        <InputWithPlace
          label="Full Name*"
          name="fullName"
          placeholder="Enter your full name"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Email*"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* <div className="mb-4">
          <label className="block text-md  font-semibold m-1 mt-3 pl-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-main"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div> */}

        <InputWithPlace
          label="Mobile Number*"
          name="mobileNumber"
          placeholder="Enter your mobile number"
          type="tel"
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Date of Birth*"
          name="dateOfBirth"
          placeholder=''
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Professional Title*"
          name="professionalTitle"
          placeholder="Ex: Physiotherapists"
          type="text"
          value={formData.professionalTitle}
          onChange={handleChange}
        />

        <div className=" mt-5">
          {/* <label className="block text-md font-semibold m-1 pl-1">About You (Bio)</label> */}
          <textarea
            name="bio"
            placeholder="Tell us about yourself"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-main"
            rows={3}
          ></textarea>
        </div>

        <InputWithPlace
          label="Location*"
          name="location"
          placeholder="Enter your location"
          type="text"
          value={formData.location}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Education*"
          name="education"
          placeholder="Enter your highest qualification"
          type="text"
          value={formData.education}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-main my-8 text-white py-2 rounded-3xl hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-buttonhover"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
