import React, { useState } from 'react';
import InputWithPlace from '../components/InputWithPlace';

const Membership: React.FC = () =>{
    const [formData, setFormData] = useState({
        Society: '',
        Position: '',
        MembershipId: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log('Form data submitted:', formData);
      };
    



    return (
        <div className="bg-slate-100 flex items-center justify-center h-screen" >
      <form onSubmit={handleSubmit} className="bg-white flex-col rounded-lg p-8 max-w-md w-full h-screen">
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
      <h2 className="text-2xl font-semibold mb-5"> Membership details </h2>
      <div className=' '>

        <div className='flex flex-col'>

       
      <InputWithPlace
          label="Society*"
          name="Society"
          placeholder="Ex: telangana Medical society"
          type="text"
          value={formData.Society}
          onChange={handleChange}
        />

        <InputWithPlace
          label="Position"
          name="Position"
          placeholder="Ex: president of opthomology"
          type="text"
          value={formData.Position}
          onChange={handleChange}
        />
        <InputWithPlace
          label="Membership Id"
          name="MembershipId"
          placeholder="Ex: 446178"
          type="text"
          value={formData.MembershipId}
          onChange={handleChange}
        />
         </div>
         <div className='flex '>

    
        <button
            type="submit"
            className="w-full py-2 mt-60 bg-main text-white font-semibold rounded-3xl hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-buttonhover"
          >
            Save
          </button>
          </div>
          </div>

      </form>
      
      </div>
    );
};


export default Membership;