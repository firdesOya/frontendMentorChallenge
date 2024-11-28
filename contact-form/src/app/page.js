"use client";

import { useState } from "react";

export default function Home() {
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
            <div className="w-full flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-10 ">
              <div className="max-w-[320px]">
                <label className="">
                  First Name
                  <span>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input mt-3"
                />
              </div>
              <div className="max-w-[320px]">
                <label>
                  Last Name
                  <span>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input mt-3"
                />
              </div>
            </div>
            <div className="w-full ">
              <label>
                Email Adress
                <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input mt-3"
              />
            </div>
            <div className="w-full">
              <label>
                Query Type
                <span>*</span>
              </label>
              <div className="w-full flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-10 mt-3">
                <label className="input max-w-[320px] flex items-center">
                  <input type="radio" className=" " />
                  General Enquiry
                </label>
                <label className="input max-w-[320px] flex items-center">
                  <input type="radio" className="" />
                  Support Request
                </label>
              </div>
              <div className="mt-3 flex flex-col gap-3 ">
                <label>
                  Message
                  <span>*</span>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full py-2 px-3 mt-3 border resize-none rounded-md border-grey-medium focus:outline-none focus:ring-1 focus:ring-green-medium  hover:border-green-medium "
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
