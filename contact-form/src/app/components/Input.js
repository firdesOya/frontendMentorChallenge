import React from "react";

export default function Input({
  title,
  name,
  value,
  onChange,
  type,
  className,
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
        className="input mt-3"
      />
    </div>
  );
}
