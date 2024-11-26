import React from "react";

function Button({ text }) {
  return (
    <div>
      <button
        type="submit"
        className="bg-green-600 px-6 py-2 rounded-xl text-white"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
