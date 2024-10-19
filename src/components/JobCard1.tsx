import React from "react";
import { BsHeart } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbMail } from "react-icons/tb";

import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { CgOrganisation } from "react-icons/cg";
// import { GiWallet } from "react-icons/gi";
import shareicon from "../assets/shareicon.svg";

interface JobCard1Props {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
  updatedOn: string;
  appliedCount: number;
  eligibility: string;
  jobLocations: string[];
  experience: string;
  salary: string;
  workingDays: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  mailId:string;
}

const JobCard1: React.FC<JobCard1Props> = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
  updatedOn,
  appliedCount,
  eligibility,
  jobLocations,
  experience,
  salary,
  workingDays,
  responsibilities,
  requirements,
  benefits,
  mailId,
}) => {
  return (
    <div className="bg-slate-100 flex items-center justify-center h-screen p-4">
      <div className="bg-white  rounded-lg p-2 pt-6 max-w-md w-full h-screen">

      <svg
        className="w-6 h-6 ml-2 mb-2"
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

        {/* Top Section with Logo, Job Title, and Company Info */}
        <div className="flex items-start mb-4 text-left p-2">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-14 h-14 rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold pb-2">{jobTitle}</h2>
            <div className="flex">
              <div>
                <CgOrganisation />
              </div>
              <div>
                <p className="text-gray-600 text-sm pl-1 pb-1">{companyName}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <FaLocationDot />
              </div>
              <div>
                <p className="text-gray-600 text-sm pl-1  pb-1">{location}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CiCalendarDate />
              </div>
              <div>
                <p className="pl-1 text-gray-500 text-sm">
                  Updated On:{updatedOn}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Icons and Apply Button */}
        <div className="flex justify-between items-center mb-4 ">
          {/* Left Side: Heart and Calendar Icons */}
          <div className="flex space-x-3">
           
          </div>
          
          {/* Center: Apply Button */}
          <button className="bg-main text-white font-semibold py-2 px-10 shadow-md rounded-full w-80 hover:bg-buttonhover">
            Apply
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 ">
              <BsHeart />
            </button>

          {/* Right Side: Share Icon */}
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src={shareicon} alt="" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex rounded-lg bg-white justify-between p-2 shadow-lg text-gray-600 mb-2 border border-main">
          <div className="flex pl-2 items-center space-x-1 ">
            <MdOutlinePeopleAlt />

            <span className="px-1">{appliedCount} Applied</span>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="bg-white flex-col rounded-lg p-1 text-left max-w-md w-full shadow-lg border border-main">
          <h4 className="font-semibold mx-2 my-1">Eligibility</h4>
          <p className="text-gray-600 text-sm mx-2 my-1">{eligibility}</p>
        </div>

        <div className="bg-white rounded-lg  my-2 py-2 px-2 flex justify-between text-sm shadow-lg border border-main">
         <a href="#dates" className="text-gray-800 "> <button className="border rounded-3xl">Dates & Deadlines</button></a>
         <a href="#details" className="text-gray-800 "> <button className="border rounded-3xl">Job Description</button></a>
          <a href="#contact" className="text-gray-800 " > <button className="border rounded-3xl">Contact Info</button> </a> 
        </div>

        <div className="bg-white  rounded-lg mx-1 my-2 px-2 py-2 text-left flex-col shadow-lg border border-main" id="dates">
          <div>
            <h2 className="font-medium pl-1" > Additional Information</h2>
          </div>

          <div className="grid grid-cols-12  " >
            {/* Job Locations */}

            <div className="grid col-span-6">
              <div className=" flex flex-col  justify-between bg-gray-100 p-4 rounded-lg m-2 ">

                <div className="text-main items-center flex flex-col pb-2">
                  {/* Location Icon */}
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 7 13 7 13s7-8.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                  </svg>
                </div>
                <div className="">
                  <h3 className="font-medium">Job Location(s)</h3>
                  {jobLocations.map((location, index) => (
                    <p key={index} className="text-gray-600">
                      {location}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid col-span-6">
              <div className=" flex flex-col items-center justify-between bg-gray-100 p-4 rounded-lg m-2 ">
                <div className="text-main pb-2">
                  {/* Briefcase Icon */}
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-gray-600">{experience}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="grid col-span-6">
              {/* Salary */}
              <div className="flex flex-col  items-center justify-between bg-gray-100 p-4 rounded-lg m-2">
                <div className="text-main  justify-start pb-2 ">
                  {/* Wallet Icon */}
                  
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 7H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 11H3v-1h18v1zm0-3H3V9h18v6zm-5-3c-.83 0-1.5.67-1.5 1.5S15.17 17 16 17s1.5-.67 1.5-1.5S16.83 12 16 12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Salary</h3>
                  <p className="text-gray-600">Salary : {salary}</p>
                </div>
              </div>
            </div>
            <div className="grid col-span-6">
              {/* Work Detail */}
              <div className="flex flex-col items-center justify-between bg-gray-100 p-4 rounded-lg m-2">
                <div className="text-main pb-2">
                  {/* Calendar Icon */}
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Work Detail</h3>
                  <p className="text-gray-600">Working Days: {workingDays}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 text-left border border-main" id="details">
          <h2 className="text-xl font-bold mb-4">Details</h2>
          <h3 className="text-md font-semibold mb-4">
            {companyName} is hiring for the role of {jobTitle}!
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">
              Responsibilities of the Candidate:
            </h4>
            <ul className="list-disc list-inside space-y-2 py-4 pl-4 pr-2 text-sm">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside space-y-2  py-4 pl-4 pr-2 text-sm">
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc list-inside space-y-2  py-4 pl-4 pr-2 text-sm">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg mt-3 p-4 text-left border border-main " id="contact" >
        <h2 className="text-xl font-bold mb-4">Contact Inforamtion</h2>
        <div className="flex">
          <div className="p-2">
          <TbMail />
 
          </div>
          <div>
          <p className="font-semibold">Mail Id: <span className="font-normal"> {mailId} </span></p>
              
          </div>
        </div>
              
        </div>
      </div>
    </div>
  );
};

export default JobCard1;
