import React, { useState } from 'react';
import InputWithPlace from '../components/InputWithPlace';

const EducationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    activities: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="bg-slate-100 flex text-left  justify-center h-screen max-w-md  " >
      <form onSubmit={handleSubmit} className="bg-white flex-col rounded-lg p-4 max-w-md w-full  h-screen">
        <h2 className="text-2xl font-semibold mb-4"> Add Education </h2>

        <p className='text-xs'>(*indicates required)</p>

        <InputWithPlace
          label="School*"
          name="school"
          placeholder="Ex: IIITMDJ"
          type="text"
          value={formData.school}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Degree"
          name="degree"
          placeholder="Ex: Bachelor's"
          type="text"
          value={formData.degree}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Field of study"
          name="fieldOfStudy"
          placeholder="Ex: opthomology"
          type="text"
          value={formData.fieldOfStudy}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Start date"
          name="startDate"
          placeholder=""
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />

        <InputWithPlace
          label="End date (or expected)"
          name="endDate"
          placeholder=""
          type="date"
          value={formData.endDate}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Activities and societies"
          name="activities"
          placeholder="Club Organiser etc.."
          type="text"
          value={formData.activities}
          onChange={handleChange}
        />



        <div className="mb-4">
          <label className="block text-sm font-medium m-1">Description</label>
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
          className="w-full bg-main text-white py-2 rounded-3xl hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-buttonhover"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EducationForm;
