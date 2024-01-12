import pics from "../assets/pics.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleSignInClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex flex-wrap">
      <div className="">
        <img src={pics} alt="" />
      </div>

      <div className="flex max-w-[480px] w-full flex-col items-center mx-auto">
        <span className="items-stretch flex justify-between gap-5 px-5 pt-16">
          <span className="flex flex-col items-stretch">
            <Link
              className="text-stone-900 text-base leading-5 whitespace-nowrap hover:bg-white"
              onClick={handleSignInClick}
            >
              Join PANDA
            </Link>
          </span>
          <div className="text-gray-400 text-base leading-5 mt-1.5 self-start">
            or
          </div>
          <div>
            <Link
              className="text-stone-900 text-base leading-5 self-start hover:bg-white"
              onClick={handleSignInClick}
            >
              Sign in
            </Link>
          </div>
        </span>
        {showLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;
