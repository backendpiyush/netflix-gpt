import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { addLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSeach = useSelector((store) => store.gpt.showGptSeach);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
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
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsbscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <div className="absolute px-2 py-2 bg-gradient-to-t from-black z-50 w-screen flex justify-between">
      <img className=" w-40" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          {showGptSeach && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-4 mx-4 py-4 bg-purple-800 text-white rounded-lg "
            onClick={handleGptSearch}
          >
            {showGptSeach ? "homepage" : "GPTsearch"}
          </button>
          <img className="w-12 h-12" alt="userIcon" src={user.photoURL} />
          <button onClick={handleSignOut} className="px-2 mx-2 bg-slate-400">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
