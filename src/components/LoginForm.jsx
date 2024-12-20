import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Label from "./Label";

function LoginForm({ setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
    setShowLogin(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert(email + ":" + password);
    console.log("form submitted");
  }
  return (
    <>
      <form
        className="border-2 border-solid border-white rounded-lg flex flex-col gap-5 items-center p-10"
        onSubmit={handleSubmit}
      >
        <div>
          <Label value="Email" htmlFor="email" id="email" name="email" />
          <InputField
            type="email"
            placeholder="Enter your email"
            inputVal={email}
            setInputVal={setEmail}
          />
        </div>
        <div>
          <Label
            value="Password"
            htmlFor="password"
            id="password"
            name="password"
          />
          <InputField
            type="password"
            placeholder="Enter your email"
            name="email"
            inputVal={password}
            setInputVal={setPassword}
          />
        </div>

        <Button text="Login" />
        <p className="text-white">
          New to Dented Code?{" "}
          <button type="button" onClick={handleOnClick}>
            Sign Up
          </button>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
