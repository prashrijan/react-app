import "./index.css";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center flex-col gap-4 p-5">
        <img
          src="https://dentedcode.com/_next/static/media/logo.a74b1abd.png"
          className="h-auto max-w-full w-96"
        />
        <h1 className="text-white text-2xl text-center">
          Welcome To Dented Code Academy
        </h1>
        <LoginForm />
      </div>
    </>
  );
}

export default App;
