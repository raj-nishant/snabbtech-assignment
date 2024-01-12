import Social from "../assets/Social.png";

const Footer = () => {
  return (
    <span className="flex flex-col items-stretch mt-[101px] px-12 max-md:px-5">
      <div className="bg-zinc-600 flex min-h-[1px] w-full flex-col max-md:max-w-full" />
      <div className="text-stone-900 text-center text-4xl font-medium leading-[54px] self-center max-w-[849px] mt-28 max-md:max-w-full max-md:mt-10">
        Rejoignez notre communauté et aidez-nous à construire la première
        plateforme de networking en ligne à destination du marché africain!
      </div>
      <div className="self-center flex w-[488px] max-w-full gap-5 mt-28 items-start max-md:flex-wrap max-md:mt-10">
        <div className="justify-center items-center flex shrink-0 h-[59px] flex-col flex-1 rounded-[35px] border-[0.5px] border-solid border-stone-900">
          Se connecter
        </div>
        <div className="justify-center items-center flex shrink-0 h-[59px] flex-col flex-1 rounded-[35px] border-[0.5px] border-solid border-stone-900">
          Créer un compte{" "}
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-20 pl-11 pr-3.5 max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <span className="items-start flex w-full max-w-[1200px] justify-between gap-5 py-3 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-900 text-base font-bold leading-6 uppercase my-auto">
            Page d'accueil
          </div>
          <div className="text-stone-900 text-base font-bold leading-6 uppercase my-auto">
            pour les EXPERTS
          </div>
          <div className="text-stone-900 text-base font-bold leading-6 uppercase">
            pour les organisations en Afrique
          </div>
          <div className="text-stone-900 text-base font-bold leading-6 uppercase self-center my-auto">
            Contact
          </div>
        </span>
        <span className="self-stretch z-[1] flex w-full justify-between gap-5 mt-2.5 items-start max-md:max-w-full max-md:flex-wrap">
          <span className="items-stretch flex grow basis-[0%] flex-col mt-2.5">
            <div className="text-stone-900 text-sm leading-5">
              Missions de PANDA
            </div>
            <div className="text-stone-900 text-sm leading-5 mt-5">
              Fonctionnalités
            </div>
            <div className="text-stone-900 text-sm leading-5 mt-5">
              Découvrez les experts
            </div>
            <div className="text-stone-900 text-sm leading-5 whitespace-nowrap mt-5">
              Découvrez les organisations en Afrique
            </div>
            <div className="text-stone-900 text-sm leading-5 mt-5">
              Offres d'emploi
            </div>
            <div className="text-stone-900 text-sm leading-5 mt-5">
              Evénements à venir
            </div>
            <div className="text-stone-900 text-sm leading-5 mt-5">
              Témoignages
            </div>
            <div className="text-stone-900 text-sm leading-5 mt-5">
              Les fondateurs
            </div>
          </span>
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
                <span className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-stone-900 text-sm leading-5">
                    Découvrez les organisations en Afrique
                  </div>
                  <div className="text-stone-900 text-sm leading-5 mt-5">
                    Offres d'emploi
                  </div>
                  <div className="text-stone-900 text-sm leading-5 mt-5">
                    Travel Map
                  </div>
                  <div className="text-stone-900 text-sm leading-5 mt-5">
                    Evénements à venir
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch flex flex-col mt-2.5 max-md:mt-10">
                  <div className="text-stone-900 text-sm leading-5 whitespace-nowrap">
                    Découvrez les experts
                  </div>
                  <div className="text-stone-900 text-sm leading-5 mt-5">
                    Travel Map
                  </div>
                  <div className="text-stone-900 text-sm leading-5 whitespace-nowrap mt-5">
                    Evénements à venir
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="text-stone-900 text-sm leading-5 grow whitespace-nowrap mt-4">
            Nous contacter
          </div>
        </span>
        <span className="flex w-[739px] max-w-full justify-between gap-5 mt-20 mb-5 self-end items-start max-md:flex-wrap max-md:mt-10">
          <div className="text-stone-900 text-center text-sm leading-5 mt-1">
            © 2022 Tous droits réservés
          </div>
          <img
            loading="lazy"
            src={Social}
            className="aspect-[7.73] object-contain object-center w-[116px] overflow-hidden shrink-0 max-w-full"
          />
        </span>
      </div>
    </span>
  );
};

export default Footer;
