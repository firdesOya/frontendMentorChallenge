import React from "react";

export default function Input({
  title,
  name,
  value,
  onChange,
  type = "text",
  errors = {},
  className = "",
  onFocus
}) {
  return (
    <div className={`${className} w-full `}>
      <label>
        {title}
        <span className="ml-2 text-green-medium">*</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`input mt-3 mb-2 ${errors[name] ? "border-red-warn focus:ring-red-warn" :"border-grey-medium focus:ring-green-medium hover:border-green-medium"}`}
        onFocus={onFocus}
      />
       {errors && errors[name] && <p className="text-red-warn  text-xs">{errors[name]}</p>}
    </div>
  );
}
