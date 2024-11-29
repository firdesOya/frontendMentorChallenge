"use client";
import React from "react";
import { useState } from "react";
import Input from "./Input";

export default function Contact() {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(formData);
  return (
    <div className="w-full min-h-screen grid place-items-center bg-green-lighter px-3 py-4">
      <div className="bg-white px-8 py-6 rounded-md max-w-[740px]">
        <div>
          <h2 className="font-bold text-2xl text-grey-darker mb-5">
            Contact Us
          </h2>
          <form className="w-full flex flex-row  flex-wrap gap-5">
            <div className=" input-container">
              <Input
                title="First Name"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
              <Input
                title="Last Name"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <Input
              title="Email Adress"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            <div className="w-full">
              <label>
                Query Type
                <span className="ml-2 text-green-medium">*</span>
              </label>
              <div className="input-container mt-3">
                <label className="input text-base gap-2 flex items-center">
                  <input type="radio" className=" " />
                  General Enquiry
                </label>
                <label className="input gap-2 text-base  flex items-center">
                  <input type="radio" className="" />
                  Support Request
                </label>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-3 w-full">
              <label>
                Message
                <span className="ml-2 text-green-medium">*</span>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full py-2 px-3 mt-3 border resize-none rounded-md border-grey-medium focus:outline-none focus:ring-1 focus:ring-green-medium  hover:border-green-medium "
                />
              </label>
            </div>
            <div>
              <label className="flex items-center gap-1 md:gap-2 text-[10px] sm:text-xs md:text-sm">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="cursor-pointer appearance-none w-3 h-3 "
                />
                I hereby consent to being contacted by the team
                <span className=" text-green-medium">*</span>
              </label>
            </div>
            <button type="submit" className="bg-green-medium hover:bg-grey-darker text-white w-full font-semibold h-[45px] rounded-md text-sm">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
