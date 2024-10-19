import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { MdDateRange } from "react-icons/md";







const steps = ["Register", "Attendee Details", "Billing", "Payment"];

interface StepperComponentProps {
  activeStep: number;
  steps: string[];
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  isStepSkipped: (step: number) => boolean;
  skipped: Set<number>;
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  activeStep,
  steps,
  isStepSkipped,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};












interface AttendeeCountProps {
  attendeeCount: number;
  incrementAttendee: () => void;
  decrementAttendee: () => void;
  price: number;
  typeOfAttend: string;
}

const AttendeeCounter: React.FC<AttendeeCountProps> = ({
  attendeeCount,
  decrementAttendee,
  incrementAttendee,
  price,
  typeOfAttend,
}) => {
  return (
    <div className="flex justify-between items-center mt-12  mb-12 p-3 border rounded-lg shadow-sm">
      <div className="flex items-center">
        <button
          onClick={decrementAttendee}
          className="bg-purple-200 rounded-full p-2 text-purple-600 hover:bg-purple-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
        <span className="mx-4 text-gray-800">{attendeeCount}</span>
        <button
          onClick={incrementAttendee}
          className="bg-blue-200 rounded-full p-2 text-blue-600 hover:bg-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <div className="text-right">
        <div className="font-semibold text-gray-700">INR {price}</div>
        <div className="text-xs text-gray-500">{typeOfAttend}</div>
      </div>
    </div>
  );
};











interface AttendeeData {
  gender: string;
  name: string;
  country: string;
  state: string;
  contactNumber: string;
  email: string;
  practiceLicenseNumber: string;
  membershipId: string;
}

// Interface for Attendee Details Props
interface AttendeeDetailsProps {
  formData: AttendeeData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

// Attendee Details Component
const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({
  formData,
  onChange,
}) => {
  return (
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-700">
        Fill Attendee Details
      </h3>

      {/* Gender Selection */}
      <div className="mt-4 ml-1">
        <label className="block text-gray-700 font-medium ">Gender</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={onChange}
              className="mr-1"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={onChange}
              className="mr-1"
            />
            Female
          </label>
        </div>
      </div>

      {/* Name Input */}
      <div className="mt-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your name"
        />
      </div>

      {/* Country Selection */}
      <div className="mt-5">
        <select
          name="country"
          value={formData.country}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        >
          <option value="">Select your country</option>
          <option value="india">India</option>
          {/* Add more countries as needed */}
        </select>
      </div>

      {/* State Selection */}
      <div className="mt-5">
        <select
          name="state"
          value={formData.state}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        >
          <option value="">Select your state</option>
          <option value="telangana">Telangana</option>
          <option value="andhra">Andhra</option>
          <option value="karnataka">Karnataka</option>
        </select>
      </div>

      {/* Contact Number Input */}
      <div className="mt-5">
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your contact number"
        />
      </div>

      {/* Email Address Input */}
      <div className="mt-5">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your email address"
        />
      </div>

      {/* Practice License Number Input */}
      <div className="mt-5">
        <input
          type="text"
          name="practiceLicenseNumber"
          value={formData.practiceLicenseNumber}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your practice license number"
        />
      </div>

      {/* Membership ID Input */}
      <div className="mt-5">
        <input
          type="text"
          name="membershipId"
          value={formData.membershipId}
          onChange={onChange}
          className="bg-transparent w-full max-w-md text-lg placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter your membership ID"
        />
      </div>
    </div>
  );
};















interface BillingSectionProps {
  attendeeData: AttendeeData;
}

const BillingSection: React.FC<BillingSectionProps> = ({ attendeeData }) => {
  const [billingType, setBillingType] = useState<"Individual" | "Business">(
    "Individual"
  );
  const [formValues, setFormValues] = useState({
    billingName: attendeeData.name || "",
    contactNumber: attendeeData.contactNumber || "",
    email: attendeeData.email || "",
    country: attendeeData.country || "",
    state: attendeeData.state || "",
    city: "",
    postalCode: "",
    gstNumber: "",
    department: "",
    poNumber: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="billing-section p-3">
      <h3 className="font-semibold text-lg text-gray-700 mb-4">
        Billing Details
      </h3>

      {/* Tab selection */}
      <div className="flex mb-6 items-center">
        <p className="mr-3 font-md font-semibold text-gray-500">
          Billing type:
        </p>
        <button
          onClick={() => setBillingType("Individual")}
          className={`px-4 py-2 rounded-l-xl border ${
            billingType === "Individual"
              ? "bg-main text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setBillingType("Business")}
          className={`px-4 py-2 rounded-r-xl border ${
            billingType === "Business"
              ? "bg-main text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Business
        </button>
      </div>

      {/* Conditional form based on billing type */}
      {billingType === "Individual" ? (
        <div className="individual-form">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Billing Name
            </label>
            <input
              type="text"
              name="billingName"
              value={formValues.billingName}
              onChange={handleInputChange}
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Billing Name"
            />
          </div>
          {/* Other individual fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="input-field text-md bg-transparent w-full max-w-md  placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
              <option value="US">United States</option>
              <option value="IN">India</option>
              {/* Add more country options */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select className="input-field text-md bg-transparent w-full max-w-md  placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
              <option value="NY">New York</option>
              <option value="CA">California</option>
              {/* Add more state options */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow "
              placeholder="Enter City"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Postal Code"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              value={formValues.contactNumber}
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              value={formValues.email}
              placeholder="Enter Email Address"
            />
          </div>
        </div>
      ) : (
        <div className="organisation-form">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Organisation Name
            </label>
            <input
              type="text"
              name="organisationName"
              value={formValues.billingName} // Use billingName for organisation as well
              onChange={handleInputChange}
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Organisation Name"
            />
          </div>
          {/* Other organisation fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
              <option value="US">United States</option>
              <option value="IN">India</option>
              {/* Add more country options */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
              <option value="NY">New York</option>
              <option value="CA">California</option>
              {/* Add more state options */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter City"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Postal Code"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Taxation(GST number)
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Taxation"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              value={formValues.contactNumber}
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              value={formValues.email}
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Department"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              PO Number
            </label>
            <input
              type="text"
              className="input-field bg-transparent w-full max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter PO Number"
            />
          </div>
        </div>
      )}
    </div>
  );
};














interface EventDetailsProps {
  date: string;
  title: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ date, title }) => {
  return (
    <>
      <div className="text-xs text-green-500 font-semibold">CONFERENCE</div>
      <div className="flex items-center text-gray-600 mt-3">
        <MdDateRange className="mr-1" />

        <span>{date}</span>
      </div>
      <div className="font-semibold text-md mt-2 mb-4">{title}</div>
    </>
  );
};










const EventRegistration = () => {
  const [attendeeCount, setAttendeeCount] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const incrementAttendee = () => setAttendeeCount((prev) => prev + 1);
  const decrementAttendee = () =>
    setAttendeeCount((prev) => (prev > 1 ? prev - 1 : prev));

  const isStepSkipped = (step: number) => skipped.has(step);
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const [attendeeData, setAttendeeData] = useState<AttendeeData>({
    gender: "",
    name: "",
    country: "",
    state: "",
    contactNumber: "",
    email: "",
    practiceLicenseNumber: "",
    membershipId: "",
  });

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleAttendeeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAttendeeData({ ...attendeeData, [name]: value });
  };

  const ticketPrice = 2500; // Price per attendee
  const eventDate = "30 Nov 2024 to 01 Dec 2024";

  const eventTitle =
    "Easy Vent Mechanical Ventilation Course and Difficult Airway Management Course";

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md h-screen  p-2 flex items-center justify-center">
      <div className="bg-white flex flex-col rounded-lg  max-w-md w-full h-full p-2 shadow-lg">
        <svg
          className="w-6 h-6 my-3 mx-1"
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

        <div className="bg-blue-200 py-2 px-4 rounded-t-lg pt-4 pb-2">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Event Registration Online
          </h2>
          <StepperComponent
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
            isStepSkipped={isStepSkipped}
            skipped={skipped}
          />
        </div>

        <div className="border border-gray-100 p-4 rounded-b-lg bg-white">
          <EventDetails date={eventDate} title={eventTitle} />

          {activeStep === 0 && (
            <AttendeeCounter
              attendeeCount={attendeeCount}
              decrementAttendee={decrementAttendee}
              incrementAttendee={incrementAttendee}
              price={ticketPrice * attendeeCount}
              typeOfAttend={""}
            />
          )}

          {activeStep === 1 && (
            <AttendeeDetails
              formData={attendeeData}
              onChange={handleAttendeeChange}
            />
          )}

          {activeStep === 2 && <BillingSection attendeeData={attendeeData} />}

          {activeStep === 3 && <h2>Payment</h2>}

          <div className="flex justify-between text-blue-500 text-sm mt-3">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Cancellation Policy
            </a>
            <a href="#" className="hover:underline">
              Remarks
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            *GST, Convenience Fee will be added
          </p>
        </div>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            className="mt-4 bg-main text-white py-2 rounded-3xl hover:bg-main hover:text-white transition duration-300"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === steps.length ? (
            <Button onClick={handleReset}>Reset</Button>
          ) : (
            <Button
              onClick={handleNext}
              className="mt-4 bg-main text-white py-2 rounded-3xl hover:bg-main hover:text-white transition duration-300"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Continue"}
            </Button>
          )}
        </Box>
      </div>
    </div>
  );
};

export default EventRegistration;
