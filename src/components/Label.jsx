import React from "react";

function Label({ htmlFor, id, name, value }) {
  return (
    <div>
      <label htmlFor={htmlFor} id={id} name={name} className="text-white">
        {value}
      </label>
    </div>
  );
}

export default Label;
