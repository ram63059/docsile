import React, { useState } from "react";
import banner from "../assets/banner.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import organisationimg from "../assets/organisation.svg";
import { IoPerson } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Registrationdetails = [
  {
    attendeetype: "Delegate",
    earlyBid: " INR 250",
    regularregistration: "INR 500",
    spotregistration: "INR 1000",
  },
  {
    attendeetype: "Non- member",
    earlyBid: "INR 250",
    regularregistration: "INR 500",
    spotregistration: "INR 1000",
  },
];

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}
interface EventDetailsProps {
  banner: string;
  title: string;
  startDate: string;
  endDate: string;
  views: number;

}

const EventCard: React.FC<EventDetailsProps>  = (
) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const eventdetails={
    banner:banner,
    title:"Easy Vent Mechanical Ventilation Course and Difficult Airway Management Course",
    startDate:"30 Nov 2024",
    endDate:"01 Dec 2024",
    views:100
  }
  const event = {
    description: [
      "We are excited to invite you to the Easy Vent Mechanical Ventilation Course and Difficult Airway Management Course 2024",
      "This event is designed to provide cutting-edge knowledge and training on mechanical ventilation and its evolving role in modern healthcare.",
    ],
    eventDate: "30th Nov & 1st Dec, 2024",

    address:
      " Medical Cobotics Centre (MCC) 4th Floor, LHC, 22, Okhla Industrial Estate, Phase III, Near Govind Puri Metro Station, New Delhi - 110019",
    keyTopics: [
      "Advances in mechanical ventilation technology",
      "Practical application and patient management",
      "Case studies from leading experts in the field",
      "Hands-on workshops and interactive sessions",
    ],
    whyAttend: [
      "Engage with top specialists in the industry",
      "Hands-on training sessions your clinical skills",
      "Earn CME credits while expanding your knowledge",
      "Exclusive networking opportunities with peers and experts",
    ],
    closingRemark: [
      " We look forward to seeing you at the CLUE Mechanical Ventilation Conference 2024",
      "Don't miss out on this chance to elevate your expertise and advance your career",
    ],
  };
  const day1Schedule: ScheduleItem[] = [
    {
      time: "8:30 AM - 9:00 AM",
      title: "REGISTRATIONS & PRE-TEST",
      description: "",
    },
    {
      time: "9:00 AM - 9:30 AM",
      title: "Basic Physiology of Respiration",
      description:
        "WOB, PTP, P0.1, Compliance, Resistance, Pulmonary pressures",
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Simulation in Basics of Respiratory Physiology",
      description: "",
    },
    {
      time: "11:00 AM - 11:30 AM",
      title: "Basic Physiology of Ventilation",
      description:
        "Time Constant, Ventilator Modes, Phase Variables, Plateau Pressure, Driving Pressure",
    },
    {
      time: "11:30 AM - 12:00 AM",
      title: "Scalars & Loops (PCV,VCV, PSV & Different Clinical Scenarios)",
      description: "",
    },
    {
      time: "12:00 AM - 12:30 AM",
      title: "Ventilatory Strategy in COPD/ASTHMA",
      description: "",
    },
    {
      time: "12:30 AM - 2:00 AM",
      title: "LUNCH BREAK",
      description: "",
    },
    {
      time: "2:00 AM - 2:30 AM",
      title: "Ventilatory Strategy in ARDS",
      description: "",
    },
    {
      time: "2:30 AM - 3:00 AM",
      title: "Weaning From Mechanical Ventilation",
      description: "",
    },
    {
      time: "3:00 AM - 3:30 AM",
      title: "Troubleshooting & Alarms",
      description: "",
    },
  ];
  const day2Schedule: ScheduleItem[] = [
    {
      time: "8:30 AM - 9:00 AM",
      title: "Welcome & Introduction",
      description: "",
    },
    {
      time: "9:00 AM - 10:00 AM",
      title: "Advanced Ventilation Concepts",
      description: "PEEP, CPAP, BiPAP, High-Frequency Oscillation",
    },
    {
      time: "10:00 AM - 11:00 AM",
      title: "Ventilation Troubleshooting Workshop",
      description: "",
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "Final Simulation and Review",
      description: "",
    },
  ];
  const currentSchedule = activeDay === 1 ? day1Schedule : day2Schedule;

  return (
    <div className="bg-slate-50 flex items-center justify-center ">
      <div className=" bg-slate-200 flex-col rounded-lg p-4 py-8 max-w-md w-full ">
        <div className="mb-3 ml-1">
          <FaArrowLeftLong size={20} />
        </div>

        <div className="bg-white rounded-lg p-3">
      {/* Dynamic Banner */}
      <img src={eventdetails.banner} alt="poster" className="w-full mb-6" />

      {/* Dynamic Title */}
      <p className="text-lg font-semibold">{eventdetails.title}</p>

      {/* Dynamic Dates */}
      <div className="flex flex-row mt-6">
        <FaRegCalendar className="mr-2 mt-1" />
        <p>{eventdetails.startDate} - {eventdetails.endDate}</p>
      </div>

      {/* Icons for actions */}
      <div className="flex mt-5">
        <FiDownload className="ml-2 mr-6 cursor-pointer" />
        <IoShareSocialSharp className="mr-6 cursor-pointer" />
        <IoBookmarkOutline className="cursor-pointer"  />
      </div>

      {/* Dynamic Views */}
      <div className="flex flex-row justify-between mt-6">
        <p>{eventdetails.views} views</p>
      </div>
    </div>

{/* this is the about page */}
        <div className="bg-white rounded-lg text-balance  w-full mt-5 p-3">
          <p className="text-lg font-semibold text-black">About Event</p>
          <p className="mt-5 pl-4">Dear Delegate,</p>

          <ul className="mt-5 list-disc pl-5">
            {event.description.map((topic, index) => (
              <li key={index} className="mb-2 leading-relaxed">
                {topic}
              </li>
            ))}
          </ul>

          <p className="font-semibold mt-5">Event Date</p>
          <li className="mt-3 leading-relaxed">{event.eventDate}</li>

          <p className="font-semibold mt-5">Venue</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="leading-relaxed">{event.address}</li>
          </ul>

          <p className="mt-5 font-semibold">Key Topics Include</p>
          <ul className="mt-2 list-disc pl-5">
            {event.keyTopics.map((topic, index) => (
              <li key={index} className="mb-2 leading-relaxed">
                {topic}
              </li>
            ))}
          </ul>

          <p className="mt-5 font-semibold">Why Attend?</p>
          <ul className="mt-2 list-disc pl-5">
            {event.whyAttend.map((reason, index) => (
              <li key={index} className="mb-2 leading-relaxed">
                {reason}
              </li>
            ))}
          </ul>
          <ul className="mt-2 list-disc pl-5">
            {event.closingRemark.map((reason, index) => (
              <li key={index} className="mb-2 leading-relaxed">
                {reason}
              </li>
            ))}
          </ul>

          <p className="text-md font-semibold text-gray-700 mt-5" > Warm regards,</p>

          <p className="text-md font-semibold text-gray-700">Organization Team</p>
        </div>



{/* this is the registration div */}
        <div className="mt-5 bg-white rounded-lg p-4">
          <p className="text-xl font-semibold mb-5"> Registration</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Attendee Type</TableHead>
                <TableHead>Early registration</TableHead>
                <TableHead>Regular registration</TableHead>
                <TableHead className="">Spot registration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Registrationdetails.map((register) => (
                <TableRow key={register.attendeetype}>
                  <TableCell className="font-medium">
                    {register.attendeetype}
                  </TableCell>
                  <TableCell>{register.earlyBid}</TableCell>
                  <TableCell>{register.regularregistration}</TableCell>
                  <TableCell className="">
                    {register.spotregistration}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="font-semibold text-gray-600 mt-4">
            Last Date : 25th October 2024
          </p>
        </div>

        <div className="mt-3 bg-white rounded-lg p-2">
          <div className="p-1  min-h-screen">
            <h1 className="text-2xl font-semibold mb-4">Schedule</h1>

            {/* Day Tabs */}
            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 text-lg font-medium ${
                  activeDay === 1
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveDay(1)}
              >
                Day 1
              </button>
              <button
                className={`px-4 py-2 text-lg font-medium ml-4 ${
                  activeDay === 2
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveDay(2)}
              >
                Day 2
              </button>
            </div>

            {/* Schedule Items */}
            {currentSchedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-2 mb-4 border w-full border-gray-200"
              >
                <div className="text-gray-500 font-semibold text-sm">
                  {item.time}
                </div>
                <div className="font-semibold text-md mt-2">{item.title}</div>
                {item.description && (
                  <div className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 bg-white rounded-lg p-3">
          <p className="text-2xl font-semibold "> Organizer</p>

          <div className="flex items-center">
            <div className="">
              <img
                src={organisationimg}
                alt="organisation img"
                width={40}
                className=" rounded-md"
              />
            </div>
            <div className="m-3">
              <p className="text-md font-semibold ">
                {" "}
                Academy of Critical Care Training (ACT)
              </p>
              <p className="text-sm font-normal text-gray-400">
                New Delhi, Delhi, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-lg p-3">
          <p className="text-2xl font-semibold">Venue Location</p>
          <div className="bg-white rounded-lg shadow p-1 max-w-4xl mx-auto mt-6">
            <div className="w-full h-64 mb-4">
              <iframe
                title="Venue Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.679015654608!2d77.26947603196934!3d28.52456797849901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39bb6206dbb%3A0x7b5e63d1720f8b06!2sMedical%20Cobot%20Center%20(MCC)!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-lg"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex items-center mt-6 text-gray-700">
            <div className="bg-gray-100 rounded-full p-2 m-2">
              <IoLocationSharp size={32} />
            </div>
            <p>
              Medical Cobotics Centre (MCC), 4th Floor, LHC, IIT, Okhla
              Industrial Estate, Phase III, Near Govind Puri Metro Station, New
              Delhi, Delhi, India, 110019
            </p>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-lg p-3 flex flex-col">
          <p className="text-xl font-semibold ">Contact</p>
          <div className="flex flex-row mt-2">
            <IoPerson className=" m-2" />
            <p>narayan sathya</p>
          </div>
          <div className="flex flex-row mt-2">
            <MdCall className=" m-2"   />

            <p>123456789</p>
          </div>
          <div className="flex flex-row mt-2">
            <MdOutlineMailOutline className=" m-2"  />

            <p>narayansathya@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
