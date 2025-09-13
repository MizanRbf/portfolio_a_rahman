import Title from "@/app/Shared/Title/Title";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#000] px-4 pb-30">
      <div className="max-w-[1300px] mx-auto">
        {/* Title & description */}
        <div className="text-center">
          {/* Title */}
          <div className="flex items-center pt-20 mb-10 justify-center">
            <Title title="Contact Me"></Title>
          </div>
          <p className="">
            consectetur adipisicing elit. Ut vitae eos aliquam quo voluptates
            magni! Amet, itaque minus! .
          </p>
        </div>

        {/* Name */}
        <div className="md:px-0 mb-10 md:mb-0">
          <div className="mb-3">
            <p className="font-semibold ">Your Name</p>
            <input
              className="border rounded-lg py-2 w-full pl-4  border-primary"
              type="text"
              name="name"
              placeholder="Write your name here.."
            />
          </div>
          {/* Email */}
          <div className="mb-3">
            <p className="font-semibold ">Your Email</p>
            <input
              className="border rounded-lg py-2 w-full pl-4  border-primary"
              type="email"
              name="email"
              placeholder="Write your email here.."
            />
          </div>
          {/* Text Area */}
          <div className="mb-3">
            <p className="font-semibold">Text Message</p>
            <textarea
              className="border rounded-lg pl-4 w-full h-30 border-primary"
              name="text"
              placeholder="Text here"
            ></textarea>
          </div>
          {/* Button */}
          <button className="border rounded-lg py-2 w-full bg-primary text-white font-semibold hover:bg-secondary  cursor-pointer mb-10">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
