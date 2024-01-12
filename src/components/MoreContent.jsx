import profile from "../assets/profile.png";
import image from "../assets/image.png";

const MoreContent = () => {
  return (
    <>
      <div className="px-12 mt-60 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col mt-2.5 max-md:mt-10">
              <div className="text-stone-900 text-6xl font-medium leading-[76px] self-stretch max-md:text-4xl max-md:leading-[52px]">
                Evénements à venir
              </div>
              <div className="text-stone-900 text-sm leading-5 self-stretch mt-12 max-md:mt-10">
                <span className="font-bold">Publié par:</span>{" "}
                <span className="font-bold text-stone-900">Pablo Diahuno</span>
              </div>
              <img
                loading="lazy"
                src={profile}
                className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full mt-7 self-start"
              />
              <div className="text-stone-900 text-base leading-5 self-stretch mt-20 max-md:mt-10">
                Sortez votre carnet d'adresses! Restez informés de tous les
                événements à venir autour du business en Afrique organisés en
                Afrique ou à l'étranger.
              </div>
              <div className="justify-center items-center self-stretch flex shrink-0 h-[59px] flex-col mt-12 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10" />
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={image}
              className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col items-stretch mt-5 max-md:mt-10">
              <div className="text-stone-500 text-sm leading-5 whitespace-nowrap">
                <span className="font-bold">L'événement: </span>
                <span className="font-bold text-stone-500">The </span>
                <span className="font-bold text-stone-500">Nancy </span>
                <span className="font-bold text-stone-500">party’s </span>
              </div>{" "}
              <div className="text-stone-500 text-sm leading-5 mt-3">
                <span className="font-bold">Date:</span>{" "}
                <span className="font-bold text-stone-500">10/07/22</span>
              </div>{" "}
              <div className="text-stone-500 text-sm leading-5 whitespace-nowrap mt-3">
                <span className="font-bold">Lieu: </span>
                <span className="font-bold text-stone-500">Senegal</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreContent;
