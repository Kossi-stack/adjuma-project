import logo from "./assets/logo.png";
import "./App.css";
import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  async function handleLogin() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch(
      "https://molidom.adjuma.io/api/v1/auth/signin-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    if (result.status == "success") {
      localStorage.setItem(
        "user-info",
        JSON.stringify({
          token: result.data.token,
          fullName: result.data.user.fullName,
        })
      );
      setIsLoggedIn(true);
    } else {
      setLoginError(result.message);
    }
  }

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover bg-sign-in">
      <div className="flex h-screen items-center justify-center pt-28">
        <div className="text-white items-center justify-center mr-28 mb-28 mt-4 px-8 py-2 w-2/6 text-center bg-black/30 rounded-xl">
          <h1 className="font-bold text-xl">Kuku's Hair</h1>
          <p className="text-xs">
            This is the official page to manage kuku's orders, respond to
            bookings and more. Log in to continue.
          </p>
        </div>
        <div className="rounded-xl p-12 bg-white mr-16">
          <div>
            <div className="pl-12 w-3/4">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h2 className="font-bold text-center text-2xl pt-4">
                Welcome back
              </h2>
              <p className="text-center text-xs text-gray-500 pb-8">
                Sign in to your account
              </p>
            </div>
            <form>
              {loginError && (
                <p className="text-xs text-red-600 text-center py-2">
                  {loginError}
                </p>
              )}
              <div className="mb-4">
                <label className="">Email</label>
                <input
                  className="rounded-lg px-2 py-2 w-4/5 md:w-full border-[1px]"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input
                  className="rounded-lg px-2 py-2 w-4/5 md:w-full border-[1px]"
                  type="password"
                  placeholder="............"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mb-4 gap-x-4">
                <label>
                  <input type="checkbox" />
                  <span className="ms-2">Remember me</span>
                </label>
                <a href="#" className=" px-4 text-pink-500">
                  Forgot password
                </a>
              </div>
              <input
                onClick={handleLogin}
                className="rounded-lg text-white bg-pink-500 mt-6 py-2 w-full px-2 "
                type="button"
                value="Sign in"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="text-white text-xs text-center pt-2">
        <p>All rights reserved ...</p>
      </div>
    </div>
  );
}

export default App;
