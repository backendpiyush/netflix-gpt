import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="bgIMG"
        />
      </div>
      <form className="w-3/12 my-36 p-12 bg-black absolute mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="text-white text-3xl font-bold py-4">
          {" "}
          {isSignIn ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-700 text-white"
            type="text"
            placeholder="full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 text-white"
          type="text"
          placeholder="email"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700 text-white"
          type="password"
          placeholder="password"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg" type="submit">
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "new to netflix? Sign up now"
            : "Already a user? sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
