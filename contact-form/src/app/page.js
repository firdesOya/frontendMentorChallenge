"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
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
    <div className="w-full min-h-screen grid place-items-center bg-green-lighter">
      <div className="bg-white px-8 py-6 rounded-md">
        <div>
          <h2 className="font-bold text-2xl text-grey-darker">Contact Us</h2>
          <form>
            <div className="w-[320px]">
              <label>
                First Name
                <span>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="w-[320px]">
              <label>
                Last Name
                <span>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
