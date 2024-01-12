import { useState } from "react";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";
import Forgot from "./Forgot";

const Login = () => {
  const [forgot, setForgot] = useState(false);

  const handleForgot = () => {
    setForgot(!forgot);
  };

  return forgot ? (
    <Forgot />
  ) : (
    <>
      <div className="bg-neutral-200 w-[230px] shrink-0 h-px" />
      <div className="border self-stretch flex w-full flex-col items-center mt-10 py-12 rounded-[250px_250px_0px_0px] border-solid border-neutral-200">
        <img
          loading="lazy"
          src={star}
          className="aspect-square object-contain object-center w-[22px] fill-stone-900 overflow-hidden max-w-full mt-1"
        />
        <span className="self-stretch flex w-full flex-col mt-11 mb-3.5 pl-7 pr-16">
          <div className="text-stone-500 text-3xl font-medium self-stretch ml-7">
            <span className="text-3xl text-center"> Login</span> <br />
          </div>
          <div className="border self-center flex w-[307px] shrink-0 max-w-full h-px flex-col mt-3 rounded-lg border-solid border-neutral-200" />
          <span className="self-center flex w-full max-w-[322px] items-stretch justify-between gap-5 mt-2.5">
            <span className="flex grow basis-[0%] flex-col items-stretch">
              <div className="text-gray-400 text-sm leading-5 underline whitespace-nowrap">
                This email address already exists.
                <span className="underline">Sign in</span>
              </div>
              <div className="text-stone-500 text-base mt-9">
                <input
                  type="text"
                  className="border-black"
                  placeholder="Enter Email"
                />
              </div>
            </span>
          </span>
          <div className="text-stone-500 text-base whitespace-nowrap ml-8 mt-2.5 self-start">
            <input
              type="text"
              className="border-black"
              placeholder="Enter Password"
            />
          </div>
          <Link className="mt-7 ml-7 hover:bg-white" onClick={handleForgot}>
            Forgot Password?
          </Link>
        </span>
      </div>
      <span className="self-stretch flex w-full flex-col mt-9 px-12">
        <span className="items-stretch self-center flex gap-3 mt-4"></span>
        <Link
          to="/home"
          className="justify-center items-center self-center flex w-[235px] shrink-0 h-[59px] flex-col rounded-[35px] border-[0.5px] border-solid border-stone-900 hover:bg-white"
        >
          Login
        </Link>
      </span>
    </>
  );
};

export default Login;
