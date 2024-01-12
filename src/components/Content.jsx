import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import r from "../assets/r.png";
import software from "../assets/software.png";
import netfli from "../assets/netfli.png";
import data from "../assets/data.png";

const Content = () => {
  return (
    <div className="self-stretch flex w-full flex-col items-stretch pl-14 pr-5 max-md:max-w-full max-md:px-5">
      <div className="flex items-start justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <span className="flex grow basis-[0%] flex-col items-stretch mt-80 self-end max-md:mt-10">
          <div className="text-stone-900 text-base leading-5">
            Connectez-vous avec des organisations africaines, postulez au job de
            vos rêves en Afrique ou partagez votre expertise même à distance!
          </div>
          <div className="justify-center items-center flex shrink-0 h-[59px] flex-col mt-20 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10" />
        </span>
        <img
          loading="lazy"
          src={image1}
          className="aspect-[0.6] object-contain object-center w-[310px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src={image2}
          className="aspect-[0.6] object-contain object-center w-[246px] overflow-hidden shrink-0 max-w-full mt-28 self-end max-md:mt-10"
        />
        <img
          loading="lazy"
          src={image3}
          className="aspect-[0.6] object-contain object-center w-[172px] overflow-hidden shrink-0 max-w-full mt-56 self-end max-md:mt-10"
        />
      </div>
      <div className="flex items-start justify-between gap-5 mt-52 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <img
          loading="lazy"
          src={img1}
          className="aspect-[0.6] object-contain object-center w-[172px] overflow-hidden shrink-0 max-w-full mt-56 self-end max-md:mt-10"
        />
        <img
          loading="lazy"
          src={img2}
          className="aspect-[0.6] object-contain object-center w-[246px] overflow-hidden shrink-0 max-w-full mt-28 self-end max-md:mt-10"
        />
        <img
          loading="lazy"
          src={img3}
          className="aspect-[0.6] object-contain object-center w-[310px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
        <span className="flex grow basis-[0%] flex-col items-stretch mt-80 self-end max-md:mt-10">
          <div className="text-stone-900 text-base leading-5">
            Connectez-vous avec des organisations africaines, postulez au job de
            vos rêves en Afrique ou partagez votre expertise même à distance!
          </div>
          <div className="justify-center items-center flex shrink-0 h-[59px] flex-col mt-20 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10" />
        </span>
      </div>
      <span className="flex w-full items-center justify-between gap-5 mt-52 pr-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
        <div className="text-stone-900 text-6xl font-medium leading-[76px] grow shrink basis-auto my-auto max-md:text-4xl max-md:leading-[52px]">
          Offres d'emploi
        </div>
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch max-md:mt-4">
                <span className="border flex w-full flex-col items-stretch px-5 py-6 rounded-[112px] border-solid border-neutral-200">
                  <div className="text-stone-900 text-center text-3xl font-medium leading-9 whitespace-nowrap">
                    Lead Software Engineer
                  </div>
                  <div className="text-stone-500 text-base leading-5 self-center whitespace-nowrap mt-1.5">
                    Madagascar
                  </div>
                  <span className="flex justify-between gap-5 mt-5 items-end">
                    <span className="flex grow basis-[0%] flex-col items-stretch mt-14 max-md:mt-10">
                      <div className="text-stone-500 text-base font-medium leading-5 whitespace-nowrap">
                        Full-time
                      </div>
                      <div className="text-stone-900 text-base leading-5 underline whitespace-nowrap mt-3.5">
                        + Favorites
                      </div>
                    </span>
                    <span className="items-center self-stretch flex grow basis-[0%] flex-col">
                      <img
                        loading="lazy"
                        src={software}
                        className="aspect-[1.01] object-contain object-center w-[75px] overflow-hidden max-w-full"
                      />
                      <div className="text-stone-900 text-center text-sm font-bold leading-4 self-stretch whitespace-nowrap mt-4">
                        Tubik Studio
                      </div>
                    </span>
                    <div className="text-stone-900 text-base leading-5 self-center my-auto">
                      1 day ago
                    </div>
                  </span>
                  <div className="justify-center items-center self-center flex w-[231px] shrink-0 h-[59px] flex-col mt-14 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10">
                    Voir
                  </div>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch max-md:mt-4">
                <span className="border flex w-full flex-col items-stretch px-5 py-6 rounded-[112px] border-solid border-neutral-200">
                  <div className="text-stone-900 text-center text-3xl font-medium leading-9 whitespace-nowrap">
                    Risk Analyst
                  </div>
                  <div className="text-stone-500 text-base leading-5 self-center whitespace-nowrap mt-1.5">
                    Madagascar
                  </div>
                  <span className="flex justify-between gap-5 mt-5 items-end">
                    <span className="flex grow basis-[0%] flex-col items-stretch mt-14 max-md:mt-10">
                      <div className="text-stone-500 text-base font-medium leading-5 whitespace-nowrap">
                        Full-time
                      </div>
                      <div className="text-stone-900 text-base leading-5 underline whitespace-nowrap mt-3.5">
                        + Favorites
                      </div>
                    </span>
                    <span className="items-center self-stretch flex grow basis-[0%] flex-col">
                      <img
                        loading="lazy"
                        src={r}
                        className="aspect-[1.01] object-contain object-center w-[75px] overflow-hidden max-w-full"
                      />
                      <div className="text-stone-900 text-center text-sm font-bold leading-4 self-stretch whitespace-nowrap mt-4">
                        Bubba Gump
                      </div>
                    </span>
                    <div className="text-stone-900 text-base leading-5 self-center my-auto">
                      1 day ago
                    </div>
                  </span>
                  <div className="justify-center items-center self-center flex w-[231px] shrink-0 h-[59px] flex-col mt-14 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10">
                    Voir
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </span>

      <div className="mt-4 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0 mr-52">
            <span className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="text-stone-900 text-base leading-5">
                Publiez les offres d'emploi au sein de votre organisation auprès
                de notre communauté d'experts! Expert à la recherche d'un emploi
                en Afrique? Trouvez le job de vos rêves!
              </div>
              <div className="justify-center items-center flex shrink-0 h-[59px] flex-col mt-12 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10" />
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-4">
                    <span className="border flex w-full flex-col items-stretch px-5 py-6 rounded-[112px] border-solid border-neutral-200">
                      <div className="text-stone-900 text-center text-3xl font-medium leading-9 whitespace-nowrap">
                        Financial Analyst
                      </div>
                      <div className="text-stone-500 text-base leading-5 self-center whitespace-nowrap mt-1.5">
                        Madagascar
                      </div>
                      <span className="flex justify-between gap-5 mt-5 items-end">
                        <span className="flex grow basis-[0%] flex-col items-stretch mt-14 max-md:mt-10">
                          <div className="text-stone-500 text-base font-medium leading-5 whitespace-nowrap">
                            Full-time
                          </div>
                          <div className="text-stone-900 text-base leading-5 underline whitespace-nowrap mt-3.5">
                            + Favorites
                          </div>
                        </span>
                        <span className="items-center self-stretch flex grow basis-[0%] flex-col">
                          <img
                            loading="lazy"
                            src={netfli}
                            className="aspect-[1.01] object-contain object-center w-[75px] overflow-hidden max-w-full"
                          />
                          <div className="text-stone-900 text-center text-sm font-bold leading-4 self-stretch whitespace-nowrap mt-4">
                            SP-holding
                          </div>
                        </span>
                        <div className="text-stone-900 text-base leading-5 self-center my-auto">
                          1 day ago
                        </div>
                      </span>
                      <div className="justify-center items-center self-center flex w-[243px] shrink-0 h-[59px] flex-col mt-14 rounded-[35px] border-[0.5px] border-solid border-stone-900 max-md:mt-10">
                        Voir
                      </div>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-4">
                    <span className="border flex w-full flex-col items-stretch px-5 py-6 rounded-[112px] border-solid border-neutral-200">
                      <div className="text-stone-900 text-center text-3xl font-medium leading-9 whitespace-nowrap">
                        Data Engineer
                      </div>
                      <div className="text-stone-500 text-base leading-5 self-center whitespace-nowrap mt-1.5">
                        Madagascar
                      </div>
                      <span className="flex items-stretch justify-between gap-5 mt-5">
                        <span className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                          <div className="text-stone-500 text-base font-medium leading-5 whitespace-nowrap">
                            Full-time
                          </div>
                          <div className="text-stone-900 text-base leading-5 underline whitespace-nowrap mt-3.5">
                            + Favorites
                          </div>
                        </span>
                        <span className="items-center flex grow basis-[0%] flex-col">
                          <img
                            loading="lazy"
                            src={data}
                            className="aspect-[1.01] object-contain object-center w-[75px] overflow-hidden max-w-full"
                          />
                          <div className="text-stone-900 text-center text-sm font-bold leading-5 self-stretch mt-4">
                            Vehement Capital Partners
                          </div>
                        </span>
                        <div className="text-stone-900 text-base leading-5 self-center my-auto">
                          1 day ago
                        </div>
                      </span>
                      <div className="justify-center items-center self-center flex w-[243px] shrink-0 h-[59px] flex-col mt-10 rounded-[35px] border-[0.5px] border-solid border-stone-900">
                        Voir
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
