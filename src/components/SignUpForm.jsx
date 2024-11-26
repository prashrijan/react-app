import React from "react";
import Label from "./Label";
import InputField from "./InputField";
import Button from "./Button";
import { useState } from "react";

function SignUpForm({ setShowLogin }) {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleOnClick = () => {
    setShowLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${userName}`);

    console.log("User registered Successfully");
  };
  return (
    <div>
      <form
        className="border-2 border-solid border-white rounded-lg flex flex-col gap-5 items-center p-10"
        onSubmit={handleSubmit}
      >
        <div>
          <Label
            value="Username"
            htmlFor="username"
            id="username"
            name="username"
          />
          <InputField
            type="text"
            placeholder="Enter your username"
            inputVal={userName}
            setInputVal={setUserName}
          />
        </div>
        <div>
          <Label value="Email" htmlFor="email" id="email" name="email" />
          <InputField
            type="email"
            placeholder="Enter your email"
            name="email"
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
            placeholder="Enter your password"
            name="password"
            inputVal={password}
            setInputVal={setPassword}
          />
        </div>

        <Button text="Sign In" />
        <p className="text-white">
          Already Have an account?{" "}
          <button type="button" onClick={handleOnClick}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
