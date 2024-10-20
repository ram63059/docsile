"use client";
import React, {  useRef, useState } from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import profileimg from "../assets/profile.svg";
import media from "../assets/media.svg";
import job from "../assets/job.svg";
import document  from "../assets/document.svg";
import event1 from "../assets/event1.svg";
import poll from "../assets/poll.svg";
import services from "../assets/services.svg";
import question from "../assets/question.svg";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";



const images = [
  { src: media, name: "Media" },
  { src: question, name: "Question" },
  { src: job, name: "Job" },
  { src: poll, name: "Poll" },
  { src: event1, name: "Event" },
  { src: document, name: "Document" },
  { src: services, name: "Services" },
];

const Post: React.FC = () => {
  const [postContent, setPostContent] = useState("");

  const isPostDisabled = postContent.trim().length === 0;


  const fileInputRef = useRef<HTMLInputElement | null>(null); 

  

  const handleSvgClick = () => {
    fileInputRef.current?.click(); 
  };

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file ) {
      setSelectedImage(file);
      const imagePreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(imagePreviewUrl);
    }
  };
  console.log(selectedImage);
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="bg-slate-100 flex items-center justify-center h-screen">
      <div className="bg-white flex flex-col rounded-lg p-8 max-w-md w-full h-screen">
        <div className="flex flex-row justify-between w-full items-center mb-5">
          <div className="flex flex-row items-center w-full">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={profileimg}
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-1"
              />
              <div className="flex flex-col max-w-md   justify-center ">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      Anyone <MdOutlineArrowDropDown />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom">
                    <div className="flex flex-col">
                      <SheetTitle>Who can see your post?</SheetTitle>
                    </div>

                    <div className="max-w-md  flex flex-col">
                      <div className=" items-center max-w-md flex flex-row justify-between p-4">
                        <div className="flex flex-row items-center">
                          <div className="p-2 bg-gray-300 rounded-full mr-2">
                            <BsGlobeCentralSouthAsia size={20} />
                          </div>
                          <div>
                            <Label
                              htmlFor="name"
                              className="text-right font-semibold text-lg"
                            >
                              Anyone
                            </Label>
                          </div>
                        </div>
                        <div>
                          <Input
                            id="name"
                            type="radio"
                            name="visibility"
                            value="anyone"
                            className="col-span-1 size-5 "
                          />
                        </div>
                      </div>
                      <div className=" items-center max-w-md flex flex-row justify-between p-4">
                        <div className="flex flex-row items-center">
                          <div className="p-2 bg-gray-300 rounded-full mr-2">
                            <IoPeopleSharp size={20} />
                          </div>
                          <div>
                            <Label
                              htmlFor="name"
                              className="text-right font-semibold text-lg"
                            >
                              Connections only
                            </Label>
                          </div>
                        </div>
                        <div>
                          <Input
                            id="name"
                            type="radio"
                            name="visibility"
                            value="connections"
                            className="col-span-1 size-5"
                          />
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <button
              className={`px-3 py-1 rounded-3xl ${
                isPostDisabled
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-main text-white hover:bg-buttonhover"
              }`}
              disabled={isPostDisabled}
            >
              Post
            </button>
          </div>
        </div>

        <div className="flex-1 mb-2">
          <textarea
            className="w-full h-full p-2  rounded-md focus:outline-none resize-none"
            placeholder="Share your thoughts..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          
        </div>
       <div>
       {previewUrl && (
              <div className=" relative mt-4 inline-block">
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-1 right-1 mt-1  bg-gray-400 rounded-full p-1 px-2 hover:bg-gray-500 focus:outline-none"
                    >
                    ✕
                  </button>
                <img
                  src={previewUrl}
                  alt="Selected"
                  className="max-w-full h-auto rounded-md shadow-lg"
                />
                 
              </div>
            )}
       </div>
        <div className="flex flex-row justify-end  items-center">
      
          <div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              style={{ display: "none" }} 
              onChange={handleImageChange}
            />{" "}
             
            <div onClick={handleSvgClick} className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-5"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                />
                <path
                  d="M3 17L8 12L13 17L18 11L21 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex">
           
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    {" "}
                    <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <div className="grid grid-cols-3 grid-rows-3  gap-12 p-12  ">
                    
                              {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center "
                    >
                      <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                      <span className="text-md font-semibold mt-1">{image.name}</span>
                    </div>
                  ))}

                  </div>
                </SheetContent>
              </Sheet>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
