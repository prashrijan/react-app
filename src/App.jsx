import "./index.css";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center flex-col gap-4 ">
        <img
          src="https://dentedcode.com/_next/static/media/logo.a74b1abd.png"
          className="h-auto max-w-full w-96"
        />
        <Welcome title="Dented Code Academy" />
        <LoginForm />
      </div>
    </>
  );
}

export default App;
