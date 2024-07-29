import Cursor from "../../assets/cursor.png";
import Testimonial from "../../assets/testimonail.png";

const Index = () => {
    return (

        <div className='bg-[#090A18] pt-10 pb-32' >

            <div className='bg-[#171826] flex md:flex-row xs:flex-col xs:items-center xs:gap-y-5 xs:w-10/12 mx-auto rounded-lg justify-between xl:p-8 xs:p-4 Card xl:gap-x-10' >

                <div className='xs:w-5/12 xs:mx-auto xl:mx-none z-10 flex' >
                    <img className='w-full' src={Testimonial} alt="gamer-testimonial" />
                </div>

                <div className='flex flex-col justify-around xs:text-center md:text-left xs:w-10/12 lg:w-7/12 md:pl-16' >

                    <div className='flex flex-col gap-6 xs:items-center md:items-start' >
                        <h3 className='text-white xs:text-2xl 2xl:text-4xl max-w-md w-fit tracking-wide font-medium' >Крачета за мишки, от геймър за геймъри</h3>
                        <p className='text-[#B5B5BA] xs:max-w-sm md:max-w-lg w-fit' >Като бивш геймър знам колко са важни добрите крачета за мишки. И съм се сблъсквал с недостига на българския пазар. Затова създадох [Име на фирмата], за да предложа на геймърите като вас удобно и лесно решение, за да издигнете играта си на ново ниво!</p>
                        <button className='xs:px-10 xs:py-2 xl:px-14 xl:py-4 bg-[#2e2f3b] border border-1 border-electricGreen rounded-md text-white font-medium max-w-xs w-fit h-14' >Разгледай модели</button>
                    </div>

                </div>

            </div>

            <div className='bg-[#090A18] relative mt-32 h-48  uppercase tracking-widest text-center align-bottom 2xl:text-3xl lg:text-xl font-medium'>
                <div className='absolute top-48 left-0 w-full h-20 bg-[#D782FF] xs:skew-y-12 sm:skew-y-6 origin-top-right flex items-center justify-between'>
                    <div className='flex justify-around items-center gap-10' >
                        <p>очност</p>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                    </div>

                    <div className='flex justify-around items-center xl:gap-10' >
                        <p>Подобрен комфорт</p>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                    </div>

                    <div className='flex justify-around items-center xl:gap-10' >
                        <p className=' ' >Намаляване на шума</p>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                    </div>

                    <div className='flex justify-between items-center xl:gap-10' >
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                        <p className=' ' >П</p>
                    </div>

                </div>
                <div className='absolute top-48 left-0 w-full h-20 bg-electricGreen xs:-skew-y-12 sm:-skew-y-6 origin-top-left flex items-center justify-between'>

                    <div className='flex justify-around items-center xl:gap-10' >
                        <p>а точност</p>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                    </div>

                    <div className='flex justify-around items-center xl:gap-10' >
                        <p>Ергономичен дизайн</p>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                    </div>

                    <div className='flex justify-around items-center xl:gap-10' >
                        <p>По-добра точност</p>
                        <div className='flex flex-col items-center justify-center' >
                            <img className='w-full' src={Cursor} alt="cursor-image" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Index