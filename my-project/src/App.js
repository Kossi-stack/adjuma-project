import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div class="h-screen w-screen bg-no-repeat bg-cover bg-sign-in">
      <div class="flex h-screen items-center justify-center pt-28">
        <div class="text-white items-center justify-center mr-28 mb-28 mt-4 px-8 py-2 w-2/6 text-center bg-black/30 rounded-xl">
          <h1 class="font-bold text-xl">Kuku's Hair</h1>
          <p class="text-xs"> 
            This is the official page to manage kuku's orders, respond to
            bookings and more. Log in to continue.
          </p>
        </div>
        <div class="rounded-xl p-12 bg-white mr-16">
        <div>
          <div class="pl-12 w-3/4">
            <img src={logo} />
          </div>
          <div>
            <h2 class="font-bold text-center text-2xl pt-4">Welcome back</h2>
            <p class="text-center text-xs text-gray-500 pb-8">Sign in to your account</p>
          </div>
          <form>
            <div class="mb-4">
              <label class="">Username</label>
              <input class="rounded-lg px-2 py-2 w-4/5 md:w-full border-[1px]" type="text" placeholder="Enter your username" />
            </div>
            <div class="mb-4">
              <label>Password</label>
              <input class="rounded-lg px-2 py-2 w-4/5 md:w-full border-[1px]" type="password" placeholder="............" />
            </div>
            <div class="flex justify-between items-center mb-4 gap-x-4">
              <label>
                <input type="checkbox" />
                <span class="ms-2">Remember me</span>
              </label>
              <a href="#" class=" px-4 text-pink-500">Forgot password</a>
            </div>
            <input class="rounded-lg text-white bg-pink-500 mt-6 py-2 w-full px-2 " type="button" value="Sign in" />
          </form>
        </div>
      </div>
      </div>
      <div class="text-white text-xs text-center pt-2">
        <p>All rights reserved ...</p>
      </div>
    </div>
  );
}

export default App;
