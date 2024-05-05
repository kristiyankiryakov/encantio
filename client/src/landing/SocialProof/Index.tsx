import React from 'react'
import Stars from "../../assets/stars.png"

type Props = {}

const Index = (props: Props) => {
    return (
        <div className='bg-gray-200' >

            <h3 className='font-bold text-4xl text-center text-[#090A18] pt-20' >Отзиви от запалени геймъри</h3>

            <div className='flex gap-10 overflow-x-auto w-11/12 mx-auto mt-20 rounded-lg p-12 custom-scrollbar' >

                <div className='single-review w-[36rem] flex flex-col gap-10  justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg' >
                    <div className=''>
                        <img className='' src={Stars} alt="review-stars" />
                    </div>
                    <p className='pb-5 w-[30rem] text-pretty' >
                        Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                    </p>
                    <div className='flex justify-between items-center' >
                        <p className='Author text-xl font-medium pl-5' >Иван Г.</p>

                        <div className='flex gap-2 tags pr-10' >
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >Logitech</div>
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >G Pro X
                            </div>
                        </div>
                    </div>
                </div>

                <div className='single-review w-[36rem] flex flex-col gap-10  justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg' >
                    <div className=''>
                        <img className='' src={Stars} alt="review-stars" />
                    </div>
                    <p className='pb-5 w-[30rem] text-pretty' >
                        Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                    </p>
                    <div className='flex justify-between items-center' >
                        <p className='Author text-xl font-medium pl-5' >Иван Г.</p>

                        <div className='flex gap-2 tags pr-10' >
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >Logitech</div>
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >G Pro X
                            </div>
                        </div>
                    </div>
                </div>


                <div className='single-review w-[36rem] flex flex-col gap-10  justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg' >
                    <div className=''>
                        <img className='' src={Stars} alt="review-stars" />
                    </div>
                    <p className='pb-5 w-[30rem] text-pretty' >
                        Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                    </p>
                    <div className='flex justify-between items-center' >
                        <p className='Author text-xl font-medium pl-5' >Иван Г.</p>

                        <div className='flex gap-2 tags pr-10' >
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >Logitech</div>
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >G Pro X
                            </div>
                        </div>
                    </div>
                </div>


                <div className='single-review w-[36rem] flex flex-col gap-10  justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg' >
                    <div className=''>
                        <img className='' src={Stars} alt="review-stars" />
                    </div>
                    <p className='pb-5 w-[30rem] text-pretty' >
                        Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                    </p>
                    <div className='flex justify-between items-center' >
                        <p className='Author text-xl font-medium pl-5' >Иван Г.</p>

                        <div className='flex gap-2 tags pr-10' >
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >Logitech</div>
                            <div className='bg-[#D782FF] px-4 py-1 rounded-md' >G Pro X
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-red-500 mt-20 h-72' >

            </div>


        </div >
    )
}

export default Index