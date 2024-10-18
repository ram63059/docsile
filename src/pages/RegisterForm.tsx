import React, { useState } from 'react';

const EventRegistration = () => {
  const [attendeeCount, setAttendeeCount] = useState(1);

  const incrementAttendee = () => {
    setAttendeeCount(attendeeCount + 1);
  };

  const decrementAttendee = () => {
    if (attendeeCount > 1) {
      setAttendeeCount(attendeeCount - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="bg-blue-200 py-2 px-4 rounded-t-lg">
        <h2 className="text-lg font-semibold text-blue-900">Event Registration Online</h2>
        <div className="flex justify-between text-sm text-blue-600 mt-1">
          <span>Register</span>
          <span>Attendee Details</span>
          <span>Billing Details</span>
        </div>
      </div>

      <div className="border border-gray-300 p-4 rounded-b-lg bg-white">
        <div className="text-xs text-green-500 font-semibold">CONFERENCE</div>
        <div className="flex items-center text-gray-600 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1v4H3a1 1 0 100 2h1v2a2 2 0 002 2h8a2 2 0 002-2v-2h1a1 1 0 100-2h-1V8h1a1 1 0 100-2h-1V4a2 2 0 00-2-2H6zM5 6V4a1 1 0 011-1h8a1 1 0 011 1v2H5zm10 2v4H5V8h10zm-9 7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>30 Nov 2024 to 01 Dec 2024</span>
        </div>

        <div className="font-bold text-lg mt-2">Easy Vent Mechanical Ventilation Course and Difficult Airway Management Course</div>
        <div className="text-sm text-gray-500 mt-1">
          Medical Cobotics Centre (MCC) 4th Floor, LHC, IIT, Okhla Industrial Estate, Phase III, Near Govind Puri Metro Station, New Delhi, Delhi, India
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Add attendees</h3>
          <div className="flex justify-between items-center mt-2 p-3 border rounded-lg shadow-sm">
            <div className="flex items-center">
              <button onClick={decrementAttendee} className="bg-purple-200 rounded-full p-2 text-purple-600 hover:bg-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="mx-4 text-gray-800">{attendeeCount}</span>
              <button onClick={incrementAttendee} className="bg-blue-200 rounded-full p-2 text-blue-600 hover:bg-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-700">INR 2500</div>
              <div className="text-xs text-gray-500">REGULAR</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-blue-500 text-sm mt-4">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Cancellation Policy</a>
          <a href="#" className="hover:underline">Remarks</a>
        </div>

        <p className="text-xs text-gray-400 mt-2">*GST, Convenience Fee will be added</p>

        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Continue
        </button>
      </div>
    </div>
  );
};

export default EventRegistration;
