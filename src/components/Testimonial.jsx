import img from "../assets/img.png";

const Testimonial = () => {
  return (
    <div className="mt-60 px-12 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
          <span className="flex flex-col items-stretch">
            <div className="text-stone-900 text-6xl font-medium leading-[87.75px] capitalize whitespace-nowrap max-md:text-4xl">
              Témoignages
            </div>
            <div className="text-stone-500 text-sm leading-5 mt-16 max-md:mt-10">
              <span className="font-bold text-stone-900">Diaspora Member:</span>
              <span className="font-bold text-stone-500"> Artur Luison</span>
            </div>
            <div className="text-stone-500 text-sm leading-5 mt-8">
              <span className="font-bold">Job Position: </span>
              <span className="font-bold text-stone-500">Manager</span>
            </div>
            <div className="text-stone-900 text-base font-medium leading-5 capitalize mt-32 max-md:mt-10">
              “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci. “
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src={img}
            className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col items-stretch my-auto max-md:mt-10">
            <div className="text-stone-900 text-base font-bold leading-6">
              Very Nice Atmosphere and experience with “Welcome to PANDA”
            </div>
            <div className="text-stone-900 text-base leading-5 mt-12 max-md:mt-10">
              Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci.
            </div>
            <div className="text-stone-900 text-base leading-5 mt-16 max-md:mt-10">
              Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci.
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
