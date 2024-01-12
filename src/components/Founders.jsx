import ava from "../assets/ava.png";
import avaa from "../assets/avaa.png";

const Founders = () => {
  return (
    <>
      <span className="mt-60 px-12 flex flex-col items-stretch max-md:px-5">
        <div className="text-stone-900 text-6xl font-medium leading-[87.75px] capitalize w-full max-md:max-w-full max-md:text-4xl">
          Les fondateurs
        </div>
        <div className="w-full mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col items-stretch max-md:mt-10">
                <img
                  loading="lazy"
                  src={avaa}
                  className="aspect-[0.6] object-contain object-center w-[80%] overflow-hidden"
                />
                <div className="text-stone-500 text-sm font-bold leading-5 mt-5">
                  <span className="text-stone-900">Co-fondateur PANDA:</span>
                  <br />
                  <span className="text-stone-500">Sarah Walu Onya</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col items-stretch max-md:mt-10">
                <img
                  loading="lazy"
                  src={ava}
                  className="aspect-[0.6] object-contain object-center w-[80%] overflow-hidden"
                />
                <div className="text-stone-500 text-sm font-bold leading-5 mt-5">
                  <span className="text-stone-900">Co-fondateur PANDA:</span>
                  <br />
                  <span className="text-stone-500">Abdoulaye Ba</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
              <div className="border flex min-h-[516px] max-w-[310px] flex-col rounded-[162.5px_162.5px_0px_0px] border-solid border-stone-300">
                <span className="flex grow flex-col items-stretch mt-16 mx-3 max-md:mt-10">
                  <div className="text-stone-500 text-base leading-5 mt-8">
                    “ <span className="text-[#A95454]">Sarah</span> et{" "}
                    <span className="text-[#A95454]">Abdoulaye</span> sont tous
                    deux consultants et managers dans un groupe international de
                    conseil en stratégie et management. Ils se sont rencontrés
                    au Luxembourg et ont beaucoup échangé sur leur expérience
                    commune dans l'entrepreneuriat. Tout au long de leurs
                    discussions, une chose très claire est vite apparue : leur
                    passion pour l'entrepreneuriat et leur amour de l'Afrique,
                    le continent dont ils sont tous deux originaires. “
                  </div>{" "}
                  <div className="text-stone-500 text-base leading-5 mt-6">
                    Ils sont alors convaincus qu'ils peuvent répondre à un
                    besoin critique en Afrique et avoir un réel impact en
                    réunissant des experts de premier plan du monde entier pour
                    collaborer avec des acteurs africains sur des projets visant
                    à faire croître l'écosystème de l'innovation en{" "}
                    <span className="text-stone-500">Afrique</span>.
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default Founders;
