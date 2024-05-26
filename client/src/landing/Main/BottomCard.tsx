import feet from "../../assets/feet-image.png";

const BottomCard = () => {
    return (
        <div className='text-pretty select-none bottom-card border border-1 border-electricGreen/40 rounded-md mt-20 bg-[#171826]'>
            <div className='xs:flex-col sm:flex-row  flex xs:p-2 sm:p-3 gap-1 lg:p-6 justify-between'>

                <div className='flex flex-col justify-between gap-8 xs:text-center sm:text-left'>
                    <div className='text-container max-w-lg flex flex-col gap-2'>
                        <p className=' text-white text-opacity-70 text-3xl'>Не намираш точно за твоя модел?</p>
                        <p className='text-white text-3xl'>Открий <span className='text-electricGreen'>универсалните</span> крачета!</p>

                        <p className='text-[#C0C0C0] text-md mt-2 '>Прецизни и издръжливи крачета, специално проектирани за плавно движение и бързи реакции.</p>
                    </div>

                    <div className='flex flex-wrap select-none text-customGray xs:gap-1 sm:gap-2 max-w-lg'>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                        <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                    </div>
                </div>

                <div className='flex xs:items-center sm:items-start flex-col gap-3 sm:w-2/6 relative z-10' >

                    <div className='flex w-full xs:justify-center sm:justify-normal' >

                        <div className='sm:relative xs:max-w-36' >
                            <img className='w-full' src={feet} alt="mouse-feet" />

                            {/* <img className='absolute left-52 top-4' src={stars} alt="five-start-reviews" /> */}
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <p className='price text-white xs:text-xl sm:text-2xl' >14 лв.</p>
                        <p className='text-[#C0C0C0] xs:text-sm sm:text-base font-thin pl-1' >за единичен сет крачета</p>
                    </div>

                    <button className='xs:text-sm sm:text-lg text-pretty xs:px-3 xs:py-2 sm:px-7 sm:py-3 bg-[#2e2f3b] border border-0.5 border-electricGreen rounded-md text-white font-medium' >Поръчай сега</button>

                </div>



            </div>
        </div>
    )
}

export default BottomCard