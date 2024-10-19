import React, { useState } from 'react';
import profImg from '../assets/profile.svg';
import banner from '../assets/banner.svg';
import { FaArrowLeft } from "react-icons/fa6";



interface InvitationCardProps {
  name: string;
  profession: string;
  location: string;
  connections: string;
  profileImage: string;
  backgroundBanner?: string;

}

const InvitationCard: React.FC<InvitationCardProps> = ({
  name,
  profession,
  location,
  connections,
  profileImage,
  backgroundBanner
}) => {
  return (

    <div>
       {backgroundBanner && (
        

      <div className="relative border border-main rounded-lg overflow-hidden shadow-lg ">
      {backgroundBanner && (
        <div className="relative h-32">
          <img src={backgroundBanner} alt="Background" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex relative p-1 text-left">
        {/* Profile Image */} 
        <div className=''>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-1/4 rounded-full  border-white absolute -top-12 left-4"
        />
        </div>
        
        {/* Text Content */}
        <div className="ml-3 mt-12 pt-2 mb-6">
          <h3 className="font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{profession}</p>
          <p className="text-xs text-gray-500">{location}</p>
          <p className="text-xs text-gray-400 mr-2">{connections}</p>
        </div>
        {/* Follow Button */}
        <div className="absolute top-10 right-4">
          <button className="text-main bg-white py-1 px-4  mt-4 rounded-3xl border-main hover:bg-main hover:text-white">
            Follow
          </button>
        </div>
      </div>
     
     
    </div>

      )}
      {!backgroundBanner && (
        <div className="flex items-center p-2 border border-main rounded-2xl shadow-lg">
    
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full mr-2"
        />
        <div className="flex-1 text-left w-60">
          <h3 className="font-semibold  text-gray-800">{name}</h3>
          {profession && <p className="text-xs text-gray-600 truncate ">{profession} | <span  className="text-xs text-gray-500">{location} </span></p> }
          
          <p className="text-xs pt-1 text-gray-400">{connections}</p>
          <button className="text-main bg-white py-1 px-3  mt-2 rounded-3xl border-main hover:bg-main hover:text-white">
          Follow
        </button>
        </div>
        
      </div>
      )}


    
    </div>
  );
};

const InvitationsList: React.FC = () => {
  const invitations = [
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: ' 465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: '465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: ' 465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: ' 465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: '465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: ' 465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: ' 465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: '465 Mutuals ',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: ' 465 Mutuals ',
      profileImage: profImg,
    },
  ];
  const alsoFollow = [
    {
      name: 'Shradha Khapra',
      profession: '',
      location: '',
      connections: 'Sudheer, vamshidhar and 13 others you know followed',
      profileImage: profImg,
      backgroundBanner: banner, // Banner image
    },
    {
      name: 'AMAN DHATTARWAL',
      profession: '',
      location: '',
      connections: 'Annapareddy and Sahith followed',
      profileImage: profImg,
      backgroundBanner: banner, // Banner image
    },
  ];
  const peopleYouMayKnow = [
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: 'Bruhath Nimmani, Sharan Kumar Nara and 456 others you know followed',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: 'Bruhath Nimmani, Sharan Kumar Nara and 456 others you know followed',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: 'Bruhath Nimmani, Sharan Kumar Nara and 456 others you know followed',
      profileImage: profImg,
    },
  ];
  const popularPeople = [
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: 'Bruhath Nimmani, Sharan Kumar Nara and 456 others you know followed',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: 'Bruhath Nimmani, Sharan Kumar Nara and 456 others you know followed',
      profileImage: profImg,
    },
    {
      name: 'Prof. Michelle Obama',
      profession: 'Ophthalmologist | AIIMS Delhi’25 | Aspiring Medical Professional',
      location: 'AIIMS Delhi',
      connections: 'Bruhath Nimmani, Sharan Kumar Nara and 456 others you know followed',
      profileImage: profImg,
    },
  ];
  const [visibleCount1, setVisibleCount1] = useState(3); // Initially display 3 items
  const [visibleCount2, setVisibleCount2] = useState(3); // Initially display 3 items
  const [visibleCount3, setVisibleCount3] = useState(3); // Initially display 3 items
  const [visibleCount4, setVisibleCount4] = useState(3); // Initially display 3 items

  const showMoreItems1 = () => {
    setVisibleCount1((prevCount) => Math.min(prevCount + 3, invitations.length)); // Load 3 more, but not exceed total items
  };
  const showMoreItems2 = () => {
    setVisibleCount2((prevCount) => Math.min(prevCount + 3, peopleYouMayKnow.length)); // Load 3 more, but not exceed total items
  };
  const showMoreItems3 = () => {
    setVisibleCount3((prevCount) => Math.min(prevCount + 3, popularPeople.length)); // Load 3 more, but not exceed total items
  };
  const showMoreItems4 = () => {
    setVisibleCount4((prevCount) => Math.min(prevCount + 3, alsoFollow.length)); // Load 3 more, but not exceed total items
  };


  return (
    <div className='bg-slate-100 flex text-left  justify-center h-screen'>

   

    <div className="bg-white flex-col rounded-lg p-8 max-w-md w-full  h-screen">
      <div className="flex  items-center mb-4">
        <button className="text-lg pr-1"><FaArrowLeft />
        </button>
        <div className="flex-1">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full py-2  ml-2 px-3 w-full text-sm"
            />
          </div>
        </div>
      </div>

      <h2 className="text-xl text-left pl-4 font-semibold mb-4">
        Invitations({invitations.length})
      </h2>

      <div className="space-y-4">
        {invitations.slice(0,visibleCount1).map((invitation, index) => (
          <InvitationCard
            key={index}
            name={invitation.name}
            profession={invitation.profession}
            location={invitation.location}
            connections={invitation.connections}
            profileImage={invitation.profileImage}
          />
        ))}
      </div>
      {visibleCount1 < invitations.length && (
      <div className="text-center mt-4">
        <a href="#"
         className="text-blue-500 hover:underline"
         onClick={(e) => {
          e.preventDefault(); // Prevent page reload
          showMoreItems1();
        }}
         >
          See All
        </a>
      </div>
      )}
       {/* People You May Know Section */}
       <h2 className="text-md text-left ml-2 font-semibold mt-8 mb-4">
        People you may know based on your recent activity.
      </h2>
      <div className="space-y-4">
        {peopleYouMayKnow.slice(0,visibleCount2).map((person, index) => (
          <InvitationCard
            key={index}
            name={person.name}
            profession={person.profession}
            location={person.location}
            connections={person.connections}
            profileImage={person.profileImage}
          />
        ))}
      </div>

      {visibleCount2 < peopleYouMayKnow.length && (
      <div className="text-center mt-4">
        <a href="#"
         className="text-blue-500 hover:underline"
         onClick={(e) => {
          e.preventDefault(); // Prevent page reload
          showMoreItems2();
        }}
         >
          See All
        </a>
      </div>
      )}


        {/*Popular people on the medical community */}
       <h2 className="text-md text-left ml-2 font-semibold mt-8 mb-4">
       Popular people on the medical community.
      </h2>
      <div className="space-y-4">
        {popularPeople.slice(0,visibleCount3).map((person, index) => (
          <InvitationCard
            key={index}
            name={person.name}
            profession={person.profession}
            location={person.location}
            connections={person.connections}
            profileImage={person.profileImage}
          />
        ))}
      </div>

      {visibleCount3 < popularPeople.length && (
      <div className="text-center mt-4">
        <a href="#"
         className="text-blue-500 hover:underline"
         onClick={(e) => {
          e.preventDefault(); // Prevent page reload
          showMoreItems3();
        }}
         >
          See All
        </a>
      </div>
      )}




      {/* People Who Follow AIIMS Delhi Also Follow Section */}
       <h2 className="text-md text-left ml-2 font-semibold mt-8 mb-4">
       People who follow AIIMS Delhi also follow.
      </h2>
      <div className="space-y-4">
        {alsoFollow.slice(0,visibleCount4).map((person, index) => (
          <InvitationCard
            key={index}
            name={person.name}
            profession={''}
            location={''}
            connections={person.connections}
            profileImage={person.profileImage}
            backgroundBanner={person.backgroundBanner}

          />
        ))}
      </div>
       {visibleCount4 < alsoFollow.length && (
           <div className="text-center mt-4">
            <a href="#"
               className="text-blue-500 hover:underline"
              onClick={(e) => {
             e.preventDefault(); // Prevent page reload
            showMoreItems4();
            }}
         >
          See All
        </a>
      </div>
      )}
    </div>
    </div>
  );
};

export default InvitationsList;
