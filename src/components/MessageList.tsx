import React, { useState } from 'react';

type Message = {
  imageUrl: string;
  name: string;
  message: string;
  date: string;
  unread: boolean;
};

const initMessages: Message[] = [
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: false,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: false,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: true,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: false,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: false,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: false,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: true,
  },
  {
    imageUrl: "msgprofile.svg", // Replace with actual image URL
    name: 'Punarnavi Bhupalam',
    message: 'Okay, See you again... bye!',
    date: 'Oct 3',
    unread: false,
  },
];

const MessageList: React.FC = () => {
    const [messages, setMessages] = useState(initMessages);
    const [searchText, setSearchText] = useState(''); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleInputBlur = () => {
    if (searchText === '') {
      setSearchText(''); 
    }
  };


    const handleMessageClick = (index: number) => {
      setMessages((prevMessages) =>
        prevMessages.map((message, i) =>
          i === index ? { ...message, unread: false } : message
        )
      );
    };
  return (
    <div className="max-w-md  bg-white shadow-lg rounded-lg overflow-hidden h-screen">
      {/* searchbar inHeader */ }
      <div className="p-px border-b border-gray-300 flex items-center aboulte">
        <button className="mr-2 text-gray-500">&larr;</button>
        {/* <h1 className="text-lg font-semibold">Search Messages</h1> */}
        <div className=" relative  p-4 w-full">
        <input
          type="text"
          placeholder="Search Messages"
          value={searchText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full ml-1 p-2 pl-10 border border-gray-300 rounded-full focus:outline-none"
        />
        
         {searchText === '' && (
         <svg
          className="absolute ml-3 mr-2 left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.42-1.42l4.24 4.24a1 1 0 11-1.42 1.42l-4.24-4.24zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg> 
         )}
      </div>

      </div>

      

      {/* Messages List */}
      <div className="min-w-96 divide-y mt--1 divide-gray-200">
        {messages.map((message, index) => (
          <div
            key={index}
            onClick={() => handleMessageClick(index)}
            className={`flex items-center justify-between p-4 ${message.unread ? 'bg-blue-100' : ''}`}
          >
            <img
              src={message.imageUrl}
              alt={message.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4 flex-1">
              <div className="text-sm text-left font-semibold">{message.name}</div>
              <div className="text-xs text-left text-gray-500 truncate">
                {message.message}
              </div>
            </div>
            <div className="text-xs text-gray-400 ml-5">{message.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
