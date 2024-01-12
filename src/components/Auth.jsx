import pics from "../assets/pics.png";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleSignInClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="flex flex-wrap">
      <div className="">
        <img src={pics} alt="" />
      </div>

      <div className="flex max-w-[480px] w-full flex-col items-center mx-auto">
        <span className="items-stretch flex justify-between gap-5 px-5 pt-16">
          <span className="flex flex-col items-stretch">
            <div className="text-stone-900 text-base leading-5 whitespace-nowrap">
              Join PANDA
            </div>
            <div className="bg-stone-500 flex shrink-0 h-1 flex-col mt-3" />
          </span>
          <div className="text-gray-400 text-base leading-5 mt-1.5 self-start">
            or
          </div>
          <div>
            <div
              className="text-stone-900 text-base leading-5 self-start"
              onClick={handleSignInClick}
            >
              Sign in
            </div>
          </div>
        </span>
        {showLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;
