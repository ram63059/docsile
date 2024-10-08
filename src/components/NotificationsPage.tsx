import React, { useState } from 'react';
import NotificationItem from './Notificationitem';

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const notifications = [
    {
      imageUrl: 'organisation.svg',
      title: 'Cascade Institute of Medical Sciences',
      description: 'posted Neuro-Science article for students.',
      reactions: 3327,
      comments: 210, 
      type: 'post' as const,
    },
    {
      imageUrl: 'profile.svg',
      title: 'Bruhath Nimmnani',
      description: 'posted a question on Neuro-Science article by AIIMS Delhi.',
      reactions: 3327,
      comments: 210, 
      type: 'question' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'Software Engineer Opening',
      description: 'at Tech Solutions',
      reactions: 1500,
      location: 'vizag, andhrapradesh', 
      type: 'job' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'AI & Robotics Seminar',
      description: 'Join the seminar on the future of AI.',
      reactions: 2000,
      location: 'hyderabad, telangana', 
      type: 'seminar' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'Cascade Institute of Medical Sciences',
      description: 'posted Neuro-Science article for students.',
      reactions: 3327,
      comments: 210, 
      type: 'post' as const,
    },
    {
      imageUrl: 'profile.svg',
      title: 'Bruhath Nimmnani',
      description: 'posted a question on Neuro-Science article by AIIMS Delhi.',
      reactions: 3327,
      comments: 210, 
      type: 'question' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'Software Engineer Opening',
      description: 'at Tech Solutions',
      reactions: 1500,
      location: 'vizag, andhrapradesh', 
      type: 'job' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'AI & Robotics Seminar',
      description: 'Join the seminar on the future of AI.',
      reactions: 2000,
      location: 'hyderabad, telangana', 
      type: 'seminar' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'Cascade Institute of Medical Sciences',
      description: 'posted Neuro-Science article for students.',
      reactions: 3327,
      comments: 210, 
      type: 'post' as const,
    },
    {
      imageUrl: 'profile.svg',
      title: 'Bruhath Nimmnani',
      description: 'posted a question on Neuro-Science article by AIIMS Delhi.',
      reactions: 3327,
      comments: 210, 
      type: 'question' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'Software Engineer Opening',
      description: 'at Tech Solutions',
      reactions: 1500,
      location: 'vizag, andhrapradesh', 
      type: 'job' as const,
    },
    {
      imageUrl: 'organisation.svg',
      title: 'AI & Robotics Seminar',
      description: 'Join the seminar on the future of AI.',
      reactions: 2000,
      location: 'hyderabad, telangana', 
      type: 'seminar' as const,
    },
  ];
  const filteredNotifications = activeTab === 'All' 
  ? notifications 
  : notifications.filter(notification => notification.type === activeTab);


  return (
    
    <div className="max-w-md  mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-screen ">
      {/* Header */}
      <div className="p-4 border-b border-gray-300 flex items-center">
        <button className="mr-2 text-gray-500">&larr;</button>
        <h1 className="text-lg font-semibold">Notifications</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-around bg-gray-100 p-2">
        {['All', 'job','seminar', 'question','post'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full ${
              activeTab === tab
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="divide-y divide-gray-200">
        {filteredNotifications.map((notification, index) => (
          <NotificationItem
          key={index}
          imageUrl={notification.imageUrl}
          title={notification.title}
          description={notification.description}
          reactions={notification.reactions}
          comments={notification.comments}
          location={notification.location}
          type={notification.type}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;

