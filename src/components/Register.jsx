import star from "../assets/star.svg";
import { Link } from "react-router-dom";

const Register = () => {
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
            <span className="text-3xl"> Create your free account</span> <br />
            <span className="text-2xl">Takes less than </span>
            <span className="text-2xl text-stone-500">5 minutes</span>
            <span className="text-2xl text-stone-900">...</span>
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
                  placeholder="**********"
                />
              </div>
            </span>
          </span>
          <div className="text-stone-500 text-base whitespace-nowrap ml-8 mt-2.5 self-start">
            <input
              type="text"
              className="border-black"
              placeholder="**********"
            />
          </div>
        </span>
      </div>
      <span className="self-stretch flex w-full flex-col mt-9 px-12">
        <span className="items-stretch gap-3 ml-20 self-start">
          <div className="text-stone-900 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
            <input type="checkbox" />
            I’m an Expert
          </div>
          <div className="text-stone-900 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
            <input type="checkbox" />
            I’m an Organization in Africa
          </div>
        </span>
        <span className="items-stretch self-center flex gap-3 mt-4"></span>
        <Link
          to="/home"
          className="justify-center items-center self-center flex w-[235px] shrink-0 h-[59px] flex-col rounded-[35px] border-[0.5px] border-solid border-stone-900 hover:bg-white"
        >
          Join PANDA
        </Link>
        <div className="text-gray-400 text-center text-base leading-6 underline self-stretch mt-16">
          <span className="text-gray-400">
            By clicking on &quot;Create an account&quot;, you agree to our
          </span>
          <span className="underline text-gray-400">terms of use</span>
          <span className="text-gray-400"> and </span>
          <span className="underline text-gray-400">privacy policy</span>
          <span className="text-gray-400">.</span>
        </div>
      </span>
    </>
  );
};

export default Register;
