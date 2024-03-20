import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div class="h-screen w-screen bg-sign-in">
      <div class="flex items-center justify-center">
        <div class="text-white items-center justify-center mt-28 px-8 py-2 w-2/6 text-center bg-black/50 rounded-xl">
          <h1 class="font-bold text-xl pb-2 ">Kuku's Hair</h1>
          <p class="text-sm"> 
            This is the official page to manage kuku's orders, respond to
            bookings and more. Log in to <br/> continue.
          </p>
        </div>
        <div class="rounded-xl p-12 bg-white mt-28">
        <div>
          <div class="px-12">
            <img src={logo} />
          </div>
          <div>
            <h2 class="font-bold text-center text-4xl pt-4">Welcome back</h2>
            <p class="text-center text-sm pb-8">Sign in to your account</p>
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
      <div class="text-white text-center text-sm py-8">
        <p>All rights reserved ...</p>
      </div>
    </div>
  );
}

export default App;
