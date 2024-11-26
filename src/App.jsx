import "./index.css";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center flex-col gap-4 ">
        <img
          src="https://dentedcode.com/_next/static/media/logo.a74b1abd.png"
          className="h-auto max-w-full w-96"
        />
        <Welcome title="Dented Code Academy" />
        {showLogin ? (
          <LoginForm setShowLogin={setShowLogin} />
        ) : (
          <SignUpForm setShowLogin={setShowLogin} />
        )}
      </div>
    </>
  );
}

export default App;
