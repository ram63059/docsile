import React, { useState } from "react";
import InputWithPlace from "../components/InputWithPlace";

const Certifications: React.FC = () => {
  const [formData, setFormData] = useState({
    certificationName: "",
    issuingOrganization: "",
    issueDate: "",
    urlToCredential: "",
    description: "",
    certificateImage: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      certificateImage: file,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Form Data:', formData);
  };

  return (

    <div className="bg-slate-100 flex items-center justify-center h-screen">

      <div className="bg-white flex-col rounded-lg p-8 max-w-md w-full  h-screen ">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          
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
       

          <h2 className="text-xl font-semibold mb-4 ml-1">
            Add Certifications
          </h2>

          <InputWithPlace
            label="Certification Name"
            name="certificationName"
            placeholder="Ex: Certified Medical Assistant (Cma)"
            value={formData.certificationName}
            onChange={handleChange}
            required
          />
          <InputWithPlace
            label="Issuing Organization"
            name="issuingOrganization"
            placeholder="Ex: Association of Indian Medical Device Industry (AIMED)"
            value={formData.issuingOrganization}
            onChange={handleChange}
            required
          />
          <InputWithPlace
            label="Issue Date"
            name="issueDate"
            placeholder="Ex: 2024-01-01"
            type="date"
            value={formData.issueDate}
            onChange={handleChange}
            required
          />

          <InputWithPlace
            label="URL to Credential (if applicable)"
            name="urlToCredential"
            placeholder="Ex: https://www.credential.com"
            value={formData.urlToCredential}
            onChange={handleChange}
          />
          <div className="w-full max-w-md min-w-[200px] mt-4  ">
            <label className="text-md font-semibold mb-1 max-w-md w-full pl-2">
              Upload Certificate Image
            </label>
            {formData.certificateImage ? (
              <div className="flex items-center border border-main rounded-2xl p-3">
                <span className="text-slate-700">
                  {formData.certificateImage.name}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, certificateImage: null })
                  }
                  className="ml-4 text-blue-500 hover:underline rounded-3xl "
                >
                  Remove
                </button>
              </div>
            ) : (
                <div className="flex flex-row justify-end">

              
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full bg-transparent text-lg  placeholder:text-slate-400 text-slate-700 border border-main rounded-2xl px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md mt-3 font-medium m-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="A brief description of what the certification entails or its relevance"
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

    </div>



   
  );
};

export default Certifications;
