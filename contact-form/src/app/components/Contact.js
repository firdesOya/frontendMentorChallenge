"use client";
import React, { useRef } from "react";
import { useState } from "react";
import Input from "./Input";

export default function Contact() {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basit bir e-posta doğrulama regex'i
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.queryType) {
      newErrors.queryType = "Please select a query type";
    }
    if (!formData.message.trim()) {
      newErrors.message = "This field is required";
    }
    if (!formData.consent) {
      newErrors.consent =
        "To submit this form,please consent to eing contacted";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSuccess(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    setTimeout(() => setSuccess(false), 3000);

    console.log(formData);
    setFormdata({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    });
  };

  return (
    <div className="w-full min-h-screen grid place-items-center bg-green-lighter px-3 py-32">
      {success && (
        <div className="bg-grey-darker absolute top-5 rounded-md p-6">
          <div className="flex flex-row items-center gap-3 mb-3">
            <img src="/icon-success-check.svg" />
            <h5 className="text-white font-bold text-base">Message Sent!</h5>
          </div>
          <span className="text-white text-sm">
            Thanks for completing the form.We&apos;ll be in touch soon!
          </span>
        </div>
      )}
      <div className="bg-white px-8 py-6 rounded-md max-w-[740px]">
        <div>
          <h2 className="font-bold text-2xl text-grey-darker mb-5">
            Contact Us
          </h2>
          <form
            className="w-full flex flex-row  flex-wrap gap-5"
            onSubmit={handleSubmit}
          >
            <div className="input-container">
              <Input
                title="First Name"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
                errors={errors}
                onFocus={handleFocus}
              />
              <Input
                title="Last Name"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                errors={errors}
                onFocus={handleFocus}
              />
            </div>
            <Input
              title="Email Adress"
              value={formData.email}
              name="email"
              onChange={handleChange}
              errors={errors}
              onFocus={handleFocus}
            />
            <div className="w-full">
              <label>
                Query Type
                <span className="ml-2 text-green-medium">*</span>
              </label>
              <div className="input-container mt-3">
                <label className="input text-base gap-2 flex items-center">
                  <input
                    type="radio"
                    name="queryType"
                    value="General Enquery"
                    checked={formData.queryType === "General Enquery"}
                    onChange={handleChange}
                  />
                  General Enquiry
                </label>
                <label className="input gap-2 text-base  flex items-center">
                  <input
                    type="radio"
                    name="queryType"
                    value="Support Request"
                    checked={formData.queryType === "Support Request"}
                    onChange={handleChange}
                  />
                  Support Request
                </label>
              </div>
              {errors.queryType && (
                <span className="text-red-warn mt-2 text-xs">
                  {errors.queryType}
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-col gap-3 w-full">
              <label>
                Message
                <span className="ml-2 text-green-medium">*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  rows={6}
                  className={`w-full py-2 px-3 mt-3 border resize-none rounded-md focus:outline-none focus:ring-1  ${
                    errors.message
                      ? "border-red-warn focus:ring-red-warn"
                      : "border-grey-medium focus:ring-green-medium  hover:border-green-medium"
                  }`}
                />
              </label>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-1 md:gap-2 text-[10px] sm:text-xs md:text-sm">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="cursor-pointer appearance-none w-3 h-3 "
                />
                I hereby consent to being contacted by the team
                <span className=" text-green-medium">*</span>
              </label>
              {errors.consent && (
                <p className="text-red-warn text-[10px] sm:text-xs mt-2">
                  {errors.consent}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-medium hover:bg-grey-darker text-white w-full font-semibold h-[45px] rounded-md text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
