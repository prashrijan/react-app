import React from "react";
import { useState } from "react";

function InputField({ type, placeholder, name, inputVal, setInputVal }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-64 mt-2 px-3 py-2 rounded-xl text-lg outline-none border-none"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
}

export default InputField;
