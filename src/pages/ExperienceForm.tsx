import React, { useState } from 'react';
import InputWithPlace from '../components/InputWithPlace';

const ExperienceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    employmentType: '',
    InstitutionName: '',
    location: '',
    locationType: '',
    currentlyWorking: false,
    startDate: '',
    endDate: '',
    description: '',

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked; 
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <div className="bg-slate-100 flex text-left  justify-center h-screen max-w-md  ">
      
   
    <form onSubmit={handleSubmit} className="bg-white flex-col rounded-lg p-2 max-w-md w-full  h-screen">
    <button 
      className="text-gray-600 mb-3 hover:text-gray-800 bg-white-100 hover:bg-gray-100 rounded-xl p-1 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white-400"
      aria-label="Close"
    >
      <svg
        className="w-5 h-5"
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
    </button>
      
      <h2 className="text-xl font-semibold mb-4 ml-1">Add experience</h2>

      <InputWithPlace
        label="Title"
        name="title"
        placeholder="Ex: Senior surgeon "
        required
        onChange={handleChange}
        value={formData.title}
      />

      <div className=" mt-4">
        <label className="text-md font-medium mb-1 max-w-md w-full pl-2">Employment type</label>
        <select
          name="employmentType"
          className="w-full  bg-transparent max-w-md text-lg placeholder:text-slate-400 text-slate-700  border border-main rounded-2xl px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          value={formData.employmentType}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        <p className="text-blue-600 text-sm mt-1 cursor-pointer">Learn more about employment types.</p>
      </div>

      <InputWithPlace
        label="Institution name"
        name="InstitutuinName"
        placeholder="Ex: Apollo"
        required
        onChange={handleChange}
        value={formData.InstitutionName}
      />

      <InputWithPlace
        label="Location"
        name="location"
        placeholder="Ex: telangana, India"
        onChange={handleChange}
        value={formData.location}
      />

      <div className="mb-3 mt-3">
        <label className="text-md font-medium mb-1 max-w-md w-full pl-2">Location type</label>
        <select
          name="locationType"
          className="w-full  bg-transparent max-w-md text-lg placeholder:text-slate-400 text-slate-700  border border-main rounded-2xl px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          value={formData.locationType}
          onChange={handleChange}
        >
          <option value="">Please select</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <p className="text-gray-500 text-sm mt-1">Pick a location type (ex: remote)</p>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="currentlyWorking"
          className="mr-2 h-4 w-4 text-main border-gray-300 rounded focus:ring-main"
          checked={formData.currentlyWorking}
          onChange={handleChange}
        />
        <label className="text-gray-700 text-sm">I am currently working in this role</label>
      </div>

      <InputWithPlace
        label="Start date"
        name="startDate"
        placeholder="Start date*"
        type="date"
        required
        onChange={handleChange}
        value={formData.startDate}
      />

      <InputWithPlace
        label="End date"
        name="endDate"
        placeholder="Present"
        type="date"
        onChange={handleChange}
        value={formData.endDate}
        disabled={formData.currentlyWorking}
      />

        <div className="mb-4 mt-4">
          <label className="block text-md font-medium m-1">Description</label>
          <textarea
            name="description"
            placeholder="Additional details about your education..."
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-main"
            rows={3}
          ></textarea>
        </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-main text-white font-semibold rounded-3xl hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-buttonhover"
      >
        Save
      </button>
    </form>
    </div>
  );
};

export default ExperienceForm;
