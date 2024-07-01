import feet from "../../assets/feet-image.png";
import stars from "../../assets/stars.png"

const BottomCard = () => {
    return (
        <div className='xs:w-[98%] xl:w-8/12 xs:mx-auto text-pretty select-none bottom-card border border-1 border-electricGreen/40 rounded-md mt-20 bg-[#171826]'>
            <div className='xs:flex-col sm:flex-row flex xs:p-2 sm:p-3 xs:gap-y-5 lg:p-6 xs:justify-between xl:justify-around'>

                <div className='flex flex-col justify-between gap-8 xs:text-center sm:text-left'>
                    <div className='text-container max-w-lg flex flex-col gap-2'>
                        <p className=' text-white text-opacity-70 xs:text-xl xl:text-3xl'>Не намираш точно за твоя модел?</p>
                        <p className='text-white xs:text-xl xl:text-3xl'>Открий <span className='text-electricGreen'>универсалните</span> крачета!</p>

                        <p className='text-[#C0C0C0] xs:text-sm xl:text-md mt-2 '>Прецизни и издръжливи крачета, специално проектирани за плавно движение и бързи реакции.</p>
                    </div>

                    <div className='flex flex-wrap select-none text-customGray xs:gap-1 sm:gap-2 max-w-lg'>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag xs:px-2 xs:text-sm sm:text-base xl:px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                    </div>
                </div>

                <div className='flex xs:items-center justify-around flex-col gap-3 sm:w-2/6 relative z-10' >

                    <div className='flex w-full xs:justify-around ' >

                        <div className='sm:relative xs:max-w-36 xl:max-w-52' >
                            <img className='w-full' src={feet} alt="mouse-feet" />

                            {/* <img className='absolute left-52 top-4' src={stars} alt="five-start-reviews" /> */}

                        </div>

                        <div className='flex xs:flex-col items-center xs:justify-around'>
                            <img className=' left-52 top-4' src={stars} alt="five-start-reviews" />
                            <p className='price text-white xs:text-xl sm:text-2xl' >14 лв.</p>
                            <p className='text-[#C0C0C0] xs:text-sm sm:text-base font-thin pl-1' >за единичен сет крачета</p>
                        </div>

                    </div>



                    <button className='xs:text-sm sm:text-lg text-pretty xs:px-20 xl:px-20 xl:py-2 xs:py-2 sm:py-3 bg-[#2e2f3b] border border-0.5 border-electricGreen rounded-md text-white font-medium' >Поръчай сега</button>

                </div>



            </div>
        </div>
    )
}

export default BottomCard