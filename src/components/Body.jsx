import * as React from "react";
import tophalf from "../assets/tophalf.svg";
import star from "../assets/star.svg";
import bottomhalf from "../assets/bottomhalf.svg";
import map from "../assets/map.png";
import building from "../assets/building.png";

const Body = () => {
  return (
    <span className="self-stretch flex w-full flex-col mt-8 px-12 max-md:max-w-full max-md:px-5">
      <div className="text-stone-900 text-center text-6xl font-medium leading-[88px] self-center max-w-[999px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
        Nous réunissons experts du monde entier et organisations en Afrique
      </div>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="text-stone-500 text-4xl font-medium leading-10">
                Organisations en Afrique
              </div>
              <div className="text-stone-900 text-base font-medium leading-5 mt-6">
                Vous êtes une entreprise privée ou publique basée en Afrique et
                vous avez du mal à recruter des profils expérimentés? Vous êtes
                une start-up africaine et vous souhaitez faire appel aux
                services d'un prestataire externe? Vous recherchez une expertise
                spécifique pour réaliser un futur projet?
                <br />
                <br />
                Grâce à son réseau, PANDA vous aide à trouver les experts dont
                vous avez besoin!
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={building}
              className="aspect-[1.08] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="text-stone-500 text-4xl font-medium leading-10">
                Experts
              </div>
              <div className="text-stone-900 text-base font-medium leading-5 mt-5">
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent sur le
                continent africain pour des raisons professionnelles et vous
                souhaitez étendre votre réseau? Vous souhaitez partager votre
                expertise avec des organisations africaines sans vous déplacer?
                <br />
                <br />
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="text-stone-900 text-6xl font-medium leading-[76.05px] self-stretch mt-48 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Missions de PANDA
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-1.5 mt-16 pr-2.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
          <span className="border flex flex-col items-stretch pl-3 pr-5 py-10 rounded-[108px_108px_0px_0px] border-solid border-stone-500">
            <div className="text-stone-900 text-sm leading-5 self-center whitespace-nowrap">
              01
            </div>
            <div className="text-stone-900 text-center text-4xl font-medium leading-10 self-center whitespace-nowrap mt-11 max-md:mt-10">
              Networking
            </div>
            <div className="text-stone-900 text-center text-sm leading-5 mt-6">
              Faciliter la mise en réseau “networking” entre les organisations
              situées en Afrique et les experts et entrepreneurs africains et
              internationaux.
            </div>
          </span>
        </div>
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
          <span className="border flex flex-col items-stretch pl-4 pr-6 py-11 rounded-[108px_108px_0px_0px] border-solid border-stone-500 max-md:pr-5">
            <div className="text-stone-900 text-sm leading-5 self-center whitespace-nowrap">
              02
            </div>
            <div className="text-stone-900 text-center text-4xl font-medium leading-10 self-center whitespace-nowrap mt-12 max-md:mt-10">
              Partage
            </div>
            <div className="text-stone-900 text-center text-sm leading-5 mt-6 mb-12 max-md:mb-10">
              Promouvoir le partage de connaissances et d’expertises.
            </div>
          </span>
        </div>
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
          <span className="border flex flex-col items-stretch pl-2.5 pr-3.5 py-11 rounded-[108px_108px_0px_0px] border-solid border-stone-500">
            <div className="text-stone-900 text-sm leading-5 self-center whitespace-nowrap">
              03
            </div>
            <div className="text-stone-900 text-center text-4xl font-medium leading-10 self-center whitespace-nowrap mt-11 max-md:mt-10">
              Recrutement
            </div>
            <div className="text-stone-900 text-center text-sm leading-5 mt-9 mb-2.5">
              Augmenter la visibilité des offres d’emploi en Afrique et
              faciliter le recrutement de professionnels qualifiés.
            </div>
          </span>
        </div>
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
          <span className="border flex flex-col items-stretch px-1.5 py-11 rounded-[108px_108px_0px_0px] border-solid border-stone-500">
            <div className="text-stone-900 text-sm leading-5 self-center whitespace-nowrap">
              04
            </div>
            <div className="text-stone-900 text-center text-4xl font-medium leading-10 whitespace-nowrap mt-11 max-md:mt-10">
              Collaborations
            </div>
            <div className="text-stone-900 text-center text-sm leading-5 self-center w-[242px] mt-9 mb-12 max-md:mb-10">
              Créer des opportunités de collaborations en Afrique.
            </div>
          </span>
        </div>
        <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
          <span className="border flex flex-col items-stretch px-3.5 py-11 rounded-[108px_108px_0px_0px] border-solid border-stone-500">
            <div className="text-stone-900 text-sm leading-5 self-center whitespace-nowrap">
              05
            </div>
            <div className="text-stone-900 text-center text-4xl font-medium leading-10 self-center whitespace-nowrap mt-11 max-md:mt-10">
              Evénements
            </div>
            <div className="text-stone-900 text-center text-sm leading-5 mt-8 mb-8">
              Augmenter la visibilité des évenements autour du “Business in
              Africa”.
            </div>
          </span>
        </div>
      </div>
      <div className="text-stone-900 text-6xl font-medium leading-[87.75px] capitalize self-stretch mt-64 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Fonctionnalités
      </div>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <span className="border flex grow flex-col items-center w-full pb-12 rounded-[89px_89px_0px_0px] border-solid border-neutral-200 max-md:mt-6">
                      <img
                        loading="lazy"
                        src={`${tophalf}`}
                        className="aspect-[2.9] object-contain object-center w-[238px] overflow-hidden"
                      />
                      <div className="text-stone-900 text-lg font-medium leading-6 uppercase whitespace-nowrap mt-2">
                        Sélection de profils
                      </div>
                      <div className="text-stone-900 text-center text-base leading-6 mt-10 mb-2.5">
                        Sélectionnez les meilleurs profils d'experts ou
                        organisations qui vous intéressent et entrez en contact
                        avec eux!
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <span className="border flex grow flex-col items-stretch w-full mt-1 pb-12 rounded-[89px_89px_0px_0px] border-solid border-neutral-200 max-md:mt-7">
                      <img
                        loading="lazy"
                        src={tophalf}
                        className="aspect-[3.05] object-contain object-center w-[238px] overflow-hidden self-center"
                      />

                      <div className="text-stone-900 text-lg font-medium leading-6 uppercase self-center whitespace-nowrap mt-3">
                        Publication
                      </div>
                      <div className="text-stone-900 text-center text-base leading-6 tracking-wide mt-10 mb-2">
                        Offres d’emploi, annonces, collaborations, événements,
                        etc. Publiez du contenu exclusif sur votre page privée !
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <span className="border flex grow flex-col items-stretch w-full mt-1.5 pt-px pb-3 rounded-[89px_89px_0px_0px] border-solid border-neutral-200 max-md:mt-7">
                      <img
                        loading="lazy"
                        src={tophalf}
                        className="aspect-[3.17] object-contain object-center w-[238px] fill-stone-500 overflow-hidden self-center"
                      />
                      <div className="text-stone-900 text-lg font-medium leading-6 uppercase self-center whitespace-nowrap mt-3">
                        tRAVEL MAP
                      </div>
                      <div className="text-stone-900 text-center text-base leading-6 mt-10">
                        Rencontrez-vous grâce à notre Travel Map! Cette
                        fonctionnalité permet aux experts de notifier leurs
                        déplacements sur le continent africain. Il ne reste plus
                        qu'à planifier la rencontre!
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[502px] max-w-full mt-5 self-start">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <span className="border flex grow flex-col items-center w-full pt-8 rounded-[89px_89px_0px_0px] border-solid border-neutral-200 max-md:mt-6">
                      <img
                        loading="lazy"
                        src={star}
                        className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                      />
                      <div className="text-stone-900 text-center text-lg font-medium leading-6 uppercase mt-7">
                        Filtres & recherche avancée
                      </div>
                      <div className="text-stone-900 text-center text-base leading-6 tracking-wide mt-5">
                        Ciblez vos recherches par secteur d'activité, pays et
                        plus encore.
                      </div>
                      <img
                        loading="lazy"
                        src={bottomhalf}
                        className="aspect-[2.76] object-contain object-center w-60 overflow-hidden z-[1] mt-1.5"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <span className="border flex grow flex-col items-center w-full pt-8 rounded-[89px_89px_0px_0px] border-solid border-neutral-200 max-md:mt-6">
                      <img
                        loading="lazy"
                        src={star}
                        className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                      />
                      <div className="text-stone-900 text-lg font-medium leading-6 uppercase whitespace-nowrap mt-7">
                        NOTIFICATIONS
                      </div>
                      <div className="text-stone-900 text-center text-base leading-6 mt-11 max-md:mt-10">
                        Soyez directement avertis des nouvelles publications et
                        mises à jour grâce aux notifications.
                      </div>
                      <img
                        loading="lazy"
                        src={bottomhalf}
                        className="aspect-[2.82] object-contain object-center w-60 overflow-hidden"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-6 max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src={map}
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="justify-center items-center self-center flex w-[331px] shrink-0 max-w-full h-[59px] flex-col mt-8 rounded-[35px] border-[0.5px] border-solid border-stone-900">
                {" "}
                Explorer la Travel Map{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-56 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
            <div className="text-stone-900 text-6xl font-medium leading-[76px] mt-16 max-md:text-4xl max-md:leading-[52px] max-md:mt-10">
              Découvrez les experts
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-stone-900 text-4xl font-medium leading-10 max-md:max-w-full max-md:mt-10">
              “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une
              offre d'emploi pour le poste de web developer publiée sur
              <span className="text-stone-900"> PANDA</span>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Body;
