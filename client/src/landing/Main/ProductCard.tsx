import React from 'react'
import feet from "../../assets/feet-image.png";
import stars from "../../assets/stars.png";
import mouse from "../../assets/mouse-image.png";
type Props = {}

function ProductCard({ }: Props) {
    return (
        <div className='z-20 flex flex-col flex-wrap gap-10 w-[30%] xs:p-1 md:p-2 xl:p-4 rounded-md border border-1 border-gray-200/20  bg-cardBackground relative  xs:text-xs sm:text-sm'>

            <div className='Feet image select-none w-6/12 z-20'>
                <img className='w-full' src={feet} alt="mouse-feet" />
            </div>

            <div className='flex items-center gap-5'>
                <div><img src={stars} alt="review-starts" /></div>
                <div className='text-white'>4.7</div>
            </div>

            <div className='flex flex-col gap-5'>

                <div className='product-title text-white font-medium xs:text-base sm:text-base md:text-base xl:text-xl 2xl:text-2xl tracking-wider'>
                    <p>Logitech G Pro X</p>
                </div>

                <div className='product-description text-customGray 2xl:w-5/6'>
                    <p> Прецизни и издръжливи крачета, специално проектирани за плавно движение и бързи реакции.</p>
                </div>

                <div className='flex flex-wrap text-customGray xs:gap-1 lg:gap-2' >
                    <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                    <div className='tag px-3 py-1 bg-gray-800 rounded-md'>G Pro X</div>
                    <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Mouse feet</div>
                </div>

                <div className='pricing-and-offer xs:flex-col xl:flex-row flex items-center justify-between xs:w-full'>
                    <p className='price text-white' ><span className='pr-1 xs:text-lg font-medium sm:' >14</span>лв.</p>

                    <p className='offer-description text-customGray w-full xs:text-center xl:text-left' >за единичен сет крачета</p>
                </div>

                <div className='bg-gray-700 w-full h-[0.065rem]' >&nbsp;</div>

                <button className='px-6 py-4 bg-[#2e2f3b] border border-1 border-electricGreen rounded-md text-white font-medium' > Поръчай сега</button>

            </div>

            <div className='absolute -right-5 z-20 xs:w-[4rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem] xl:w-[8rem] 2xl:w-[10rem]' >
                <img className='w-full' src={mouse} alt="mouse" />
            </div>

            {/* <div className='absolute top-0 h-[10rem] w-[10rem] left-44 z-0 rounded-full bg-radial-gradient-product opacity-15' ></div> */}

        </div>

    )
}

export default ProductCard