import star from "../assets/star.svg";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
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
            <span className="text-3xl ml-16"> Forgot Password</span> <br />
          </div>
          <div className="border self-center flex w-[307px] shrink-0 max-w-full h-px flex-col mt-3 rounded-lg border-solid border-neutral-200" />

          <div className="text-stone-500 text-base whitespace-nowrap ml-8 mt-2.5 self-start">
            <input
              type="text"
              className="border-black"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-7 ml-7">
            Please enter your login email address to receive your password reset
            link.
          </div>
        </span>
      </div>
      <span className="self-stretch flex w-full flex-col mt-9 px-12">
        <span className="items-stretch self-center flex gap-3 mt-4"></span>
        <Link
          to="/home"
          className="justify-center items-center self-center flex w-[235px] shrink-0 h-[59px] flex-col rounded-[35px] border-[0.5px] border-solid border-stone-900 hover:bg-white"
        >
          Get the link
        </Link>
      </span>
    </>
  );
};

export default Forgot;
