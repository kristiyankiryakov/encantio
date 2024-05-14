import PerkElement from '../Footer/PerkElement';

const perks = ["Бърза доставка с Еконт", "Дълъг живот на продуктите", "Отстъпки за комплекти"];


function Text() {
    return (
        <div className="w-full bg-header-background z-20 bg-center min-h-[35rem] bg-cover relative grid place-items-top mt-40">

            <div className='z-20 flex flex-col text-white/90 items-center gap-y-14 justify-end' >
                <div className='flex flex-col items-center gap-2 absolute -top-16 xs:text-3xl' >
                    <h1 className='font-bold 2xl:text-5xl' >Трансформирай твоето</h1>
                    <h1 className='2xl:text-4xl' ><span className='font-bold 2xl:text-5xl '  >гейминг изживяване</span>  с нови</h1>
                    <h1 className='2xl:text-4xl' >крачета за мишката ти</h1>
                </div>

                <div className='flex justify-center absolute top-1/3' >
                    <button className='px-6 py-3 xs:text-lg 2xl:text-xl text-black font-medium bg-electricGreen rounded-sm'> Разгледай моделите</button>
                </div>

                   <div className='flex lg:flex-row xs:flex-col gap-2 justify-around items-center lg:w-8/12 pb-5'>
                    {
                        perks.map((text) => {
                            return <PerkElement circleColor={'white'} textColor='#fff' text={text} />
                        })
                    }
                </div>

            </div>


            <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>


        </div>
    )
}

export default Text

// <div className='z-20 select-none bg-header-background bg-no-repeat bg-center bg-cover bg-opacity-5 bg-[#090A18] relative'>
//     <div className='flex flex-col text-white text-4xl items-center gap-2 pb-52' >
//         <h1>Трансформирай твоето</h1>
//         <h1>гейминг изживяване с нови</h1>
//         <h1>крачета за мишката ти</h1>
//     </div>
{/* <div className="absolute inset-0 bg-black opacity-60"></div> */ }
// </div>
