import React from "react";
import JobCard1 from "./JobCard1";

const JobsApp: React.FC = () => {
  const jobData = {
    companyLogo: "https://via.placeholder.com/50", // Replace with actual image URL
    jobTitle: "Telesales Executive",
    companyName: "Marketing King Online Pvt Ltd",
    location: "Delhi, Gurgaon",
    updatedOn: "Oct 6, 2024",
    appliedCount: 4,
    eligibility: "Fresher",
    jobLocations:[ 'Delhi' , 'Gurgaon'],
    experience:"No prior experience required",
    salary:"Not Disclosed",
    workingDays:"5 Days",
    mailId:"kantharam@gmail.com",
     responsibilities : [
      "Greet and welcome guests in a professional and courteous manner and providing information and assistance.",
      "Welcome visitors in a friendly manner and direct them to the correct person or office.",
      "Answer and forward phone calls, and take messages.",
      "Answer questions and provide basic information in-person, by phone, or by email.",
      "Perform other administrative tasks as assigned.",
     ],
     requirements : [
      "High school diploma or equivalent",
      "1-2 years of experience in front office or receptionist role",
      "Good communication to deal with guests",
      "Should know basics of computer",
    ],
     benefits : [
      "Competitive salary and benefits package",
      "Opportunity to work in a fast-paced and growing company",
      "Positive and supportive work environment",
    ], 
  };

  return (
    <div>
      <JobCard1  {...jobData} />
    </div>
  );
};

export default JobsApp;
