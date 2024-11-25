import React from "react";

function InputField({ type, placeholder }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-64 px-3 py-2 rounded-xl text-lg outline-none border-none"
      />
    </div>
  );
}

export default InputField;
