import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function LoginForm() {
  return (
    <>
      <form className="border-2 border-solid border-white rounded-lg flex flex-col gap-5 items-center p-10">
        <InputField type="email" placeholder="Enter your email" />
        <InputField type="password" placeholder="Enter your password" />
        <Button />
      </form>
    </>
  );
}

export default LoginForm;
