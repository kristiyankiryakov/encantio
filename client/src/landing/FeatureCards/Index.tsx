import comfortGrid from "../../assets/comfort-grid.png";
import divGrid from "../../assets/div-grid.png";
import lightning from "../../assets/lightning.png";
import square from "../../assets/square.png";
import star from "../../assets/star.png";
import Perk from './Perk';
import perkText from "./Text.tsx";

const Index = () => {
  return (
    <main>

      <section className='bg-white pb-10'>

        <h1 className="text-[#090A18] pt-24 text-3xl text-center font-medium">Издигни мишката си на ново ниво</h1>

        <div className='perks-container flex xl:flex-row justify-around mt-10'>
          <Perk icon={star} heading={perkText.qualityText.heading} text={perkText.qualityText.subHeading} />
          <Perk icon={square} heading={perkText.selectionText.heading} text={perkText.selectionText.subHeading} />
          <Perk icon={lightning} heading={perkText.easeText.heading} text={perkText.easeText.subHeading} />
        </div>

        <h2 className="text-[#090A18] pt-24 text-4xl text-center font-medium mb-10">Открийте разликата с [име на марка]</h2>

        <div className='grid xs:grid-cols-1 sm:grid-cols-3 xs:gap-5 xl:gap-10 xl:w-9/12 md:w-11/12 lg:w-10/12 xs:w-11/12 mx-auto'>

          <article className='xs:p-3 xl:p-8 rounded-2xl flex flex-col shadow-[-5px_5px_30px_0px_#BCEF30] justify-between'>

            <div className='text flex flex-col gap-4'>
              <h3 className='text-[#090A18] font-medium text-2xl text-left'>Увеличете комфорта си</h3>

              <p className='text-[#51535D] text-base text-left'>Добре проектираните крачета за мишки осигуряват по-добър захват за различни повърхности.</p>
            </div>

            <div className='max-w-4/6 mx-auto'>
              <img className='max-w-full object-cover xs:max-h-52 xl:max-h-96' src={comfortGrid} alt="grid" />
            </div>

          </article>

          <div className='flex flex-col gap-5 justify-between'>

            <article className='flex flex-col justify-between shadow-[0px_-3px_30px_0px_#BCEF30] rounded-2xl xs:p-3 xl:p-10'>
              <div className='xs:h-5 xl:h-20'>&nbsp;</div>

              <div className='text flex flex-col gap-4'>
                <h3 className='text-[#090A18] font-medium text-2xl'>Бърза и лесна подмяна</h3>

                <p className='text-[#51535D] text-base max-w-sm'>Това ви позволява да поддържате оптималната производителност на мишката си за по-дълго време.</p>
              </div>
            </article>

            <article className='flex flex-col justify-between shadow-[5px_5px_20px_0px__#D782FF] rounded-2xl xs:p-3 xl:p-10'>
              <div className='xs:h-5 xl:h-20'>&nbsp;</div>

              <div className='text flex flex-col gap-4'>
                <h3 className='text-[#090A18] font-medium text-2xl'>Защитете мишката си</h3>

                <p className='text-[#51535D] text-base max-w-sm'>Крачетата действат като бариера между долната част на мишката и бюрото ви, предпазвайки от драскотини.</p>
              </div>
            </article>

          </div>


          <article className='xs:p-3 xl:p-8 rounded-2xl flex flex-col gap-8 justify-between shadow-[0px_3px_20px_0px_#D782FF]'>

            <div className='max-w-4/6 mx-auto'>
              <img className='max-w-full object-cover xs:max-h-52 xl:max-h-96' src={divGrid} alt="grid" />
            </div>

            <div className='text flex flex-col gap-4'>
              <h3 className='text-[#090A18] font-medium text-2xl text-left'>Увеличете комфорта си</h3>

              <p className='text-[#51535D] text-base text-left'>Добре проектираните крачета за мишки осигуряват по-добър захват за различни повърхности.</p>
            </div>

          </article>

        </div>

      </section>

    </main>
  );
};

export default Index;
