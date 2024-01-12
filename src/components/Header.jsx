import star from "../assets/star.svg";
import north from "../assets/north-star.png";

const Header = () => {
  return (
    <div className=" self-stretch flex w-full flex-col items-stretch px-14 py-11 max-md:max-w-full max-md:px-5">
      <span className="flex w-full justify-between gap-5 items-start max-md:max-w-full  ">
        <div className="text-stone-900 text-base leading-6  mt-1.5">
          EN - FR
        </div>
        <span className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-900 text-4xl font-[350] mr-80 grow whitespace-nowrap font-[KyivType Sans] font-semibold">
            <span className="">
              Bienvenue sur P
              <span className="border-[3px] border-black rounded-tl-[16.028px] rounded-tr-[16.028px] w-[25px] h-[27px]">
                <img src={north} alt="" className="inline" />
              </span>
              NDA
            </span>
          </div>
          <div className="text-stone-900 text-base leading-6  underline my-auto">
            Créer un compte
          </div>
          <div className="text-stone-900 text-base leading-6  underline self-center whitespace-nowrap my-auto">
            Se connecter
          </div>
        </span>
      </span>
      <span className="items-stretch self-center flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-stone-900 text-sm grow whitespace-nowrap">
          Missions De PANDA
        </div>
        <div className="text-stone-900 text-sm ">Fonctionnalités</div>
        <div className="text-stone-900 text-sm ">Experts</div>
        <div className="text-stone-900 text-sm ">Organisations En Afrique</div>
        <div className="text-stone-900 text-sm ">Offres d'emploi</div>
        <div className="text-stone-900 text-sm ">Evénements à venir</div>
        <div className="text-stone-900 text-sm ">Témoignages</div>
        <div className="text-stone-900 text-sm  grow whitespace-nowrap">
          Fondateurs
        </div>
      </span>
    </div>
  );
};

export default Header;
