import React from 'react'
import feet from "../../assets/feet-image.png";
import stars from "../../assets/stars.png";
import mouse from "../../assets/mouse-image.png";
type Props = {}

const BottomCard = (props: Props) => {
    return (
        <div className='text-pretty select-none bottom-card border border-1 border-white mt-20 bg-[#171826]'>
            <div className='flex p-6 justify-between'>

                <div className='flex flex-col justify-between gap-8'>
                    <div className='text-container max-w-lg'>
                        <p className=' text-white text-opacity-70 text-3xl'>Не намираш точно за твоя модел?</p>
                        <p className='text-white text-3xl'>Открий <span className='text-electricGreen'>универсалните</span> крачета!</p>

                        <p className='text-[#C0C0C0] text-md mt-2 '>Прецизни и издръжливи крачета, специално проектирани за плавно движение и бързи реакции.</p>
                    </div>

                    <div className='flex flex-wrap select-none text-customGray gap-2 max-w-lg'>
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

                <div className='flex flex-col gap-3 w-2/6 relative z-10' >

                    <div className='flex w-full'>

                        <div className='relative' >
                            <img className='w-full' src={feet} alt="mouse-feet" />

                            {/* <img className='absolute left-52 top-4' src={stars} alt="five-start-reviews" /> */}
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <p className='price text-white text-2xl' >14 лв.</p>
                        <p className='text-[#C0C0C0]' >за единичен сет крачета</p>
                    </div>

                    <button className='px-6 py-4 bg-[#2e2f3b] border border-1 border-electricGreen rounded-md text-white font-medium' > Поръчай сега</button>

                </div>



            </div>
        </div>
    )
}

export default BottomCard