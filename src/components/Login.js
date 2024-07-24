import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);

    setErrMessage(message);
    if (message) return;

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = user;
              // ...dispatch
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
          // console.error("Error creating user:", errorCode, errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
          // console.log(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-[100%]"
          src={BG_URL}
          alt="bgIMG"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 my-36 p-12 bg-black absolute mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white text-3xl font-bold py-4">
          {" "}
          {isSignIn ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700 text-white"
            type="text"
            placeholder="full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700 text-white"
          type="text"
          placeholder="email"
        />
        <div className=" flex">
          {!showPassword ? (
            <input
              ref={password}
              className="p-4 my-4 w-[80%] bg-gray-700  text-white"
              type="password"
              placeholder="password"
            />
          ) : (
            <input
              ref={password}
              className="p-4 my-4 w-[80%] bg-gray-700  text-white"
              type="text"
              placeholder="password"
            />
          )}

          <span
            onClick={handleShowPassword}
            className="py-[18.5px] w-[20%] px-5 my-4 bg-gray-700"
          >
            👁️
          </span>
        </div>

        <p className="text-red-500 font-bold p-2">{errMessage}</p>

        <button
          className="p-4 my-6 bg-red-500 w-full rounded-lg"
          type="submit"
          onClick={handleButtonClick}
        >
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
