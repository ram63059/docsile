import React from 'react';

interface InputWithPlaceProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  isTextArea?: boolean;
  
  onChange: (e: React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => void;
}

const InputWithPlace: React.FC<InputWithPlaceProps> = ({ label, name, type, value, required = false, onChange ,disabled, isTextArea = false}) => {
  return (
    <div className="w-full max-w-md min-w-[200px] mt-4 ">
      
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={label}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full bg-transparent max-w-md text-md placeholder:text-slate-400 text-slate-700 border border-main  rounded-2xl px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      ) : (
      <input
        type={type}
        name={name}
        placeholder={label}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full  bg-transparent max-w-md text-lg placeholder:text-slate-400 text-slate-700  border border-main rounded-lg px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
    )}
    </div>
  );
};

export default InputWithPlace;
