import agri from "../assets/agri.png";
import star from "../assets/star.svg";

const Activities = () => {
  return (
    <span className="mt-60 flex flex-col items-stretch px-12 max-md:px-5">
      <div className="text-stone-900 text-6xl font-medium leading-[70px] w-full max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Top 5 des domaines d’activités porteurs en Afrique
      </div>
      <div className="self-center flex w-full max-w-[1299px] items-center justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          src={agri}
          className="aspect-[1.01] object-contain object-center w-[503 px] h-[483px] overflow-hidden my-auto max-md:max-w-full"
        />
        <div className="self-stretch flex flex-col pr-8 py-1 max-md:max-w-full max-md:pr-5">
          <span className="self-stretch flex justify-between gap-1.5 mt-1.5 items-start max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src={star}
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-3"
            />
            <div className="text-stone-900 text-4xl font-medium leading-10 self-stretch grow max-md:max-w-full">
              Les énergies renouvelables
            </div>
          </span>
          <span className="self-stretch flex items-center justify-between gap-2 mt-10 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src={star}
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-stone-500 text-4xl font-medium leading-[54.08px] self-stretch grow shrink basis-auto max-md:max-w-full">
              L'agro-alimentaire
            </div>
          </span>
          <span className="self-stretch flex items-center justify-between gap-2 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <img
              loading="lazy"
              src={star}
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-stone-900 text-4xl font-medium leading-[54.08px] self-stretch grow shrink basis-auto max-md:max-w-full">
              Les technologies
            </div>
          </span>
          <span className="flex gap-2 mt-12 self-start items-start max-md:mt-10">
            <img
              loading="lazy"
              src={star}
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-1.5"
            />
            <div className="text-stone-900 text-4xl font-medium leading-[54.08px] grow whitespace-nowrap">
              Le e-commerce
            </div>
          </span>
          <span className="self-stretch flex justify-between gap-2 mt-12 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <img
              loading="lazy"
              src={star}
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-3.5"
            />
            <div className="text-stone-900 text-4xl font-medium leading-10 self-stretch grow shrink basis-auto max-md:max-w-full">
              Les solutions de paiement
            </div>
          </span>
          <div className="justify-center items-center flex w-[196px] shrink-0 h-[59px] flex-col mt-20 rounded-[35px] border-[0.5px] border-solid border-stone-900 self-start max-md:mt-10" />
        </div>
      </div>
    </span>
  );
};

export default Activities;
