import React from "react";

import "./style.css";

export default function TextInput({
  label,
  name,
  type,
  id,
  defaultValue,
  placeholder,
}) {
  return (
    <div className="input-wrapper">
      <label className="input-lable">{label}</label>
      <input
        className="input"
        name={name}
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}
