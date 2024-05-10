import Stars from "../../assets/stars.png"

const Index = () => {
    return (
        <main>
            <section className='bg-gray-100'>
                <h1 className='font-bold text-4xl text-center text-[#090A18] pt-20'>Отзиви от запалени геймъри</h1>

                <div className='flex gap-5 overflow-x-auto w-10/12 mx-auto mt-20 rounded-lg p-12 custom-scrollbar'>
                    <article className='single-review w-[36rem] flex flex-col gap-10 justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg'>
                        <figure>
                            <img src={Stars} alt="review-stars" />
                        </figure>
                        <p className='pb-5 w-[30rem] text-pretty'>
                            Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='Author text-xl font-medium pl-5'>Иван Г.</p>
                            <div className='flex gap-2 tags pr-10'>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>Logitech</div>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>G Pro X</div>
                            </div>
                        </div>
                    </article>

                    <article className='single-review w-[36rem] flex flex-col gap-10 justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg'>
                        <figure>
                            <img src={Stars} alt="review-stars" />
                        </figure>
                        <p className='pb-5 w-[30rem] text-pretty'>
                            Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='Author text-xl font-medium pl-5'>Иван Г.</p>
                            <div className='flex gap-2 tags pr-10'>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>Logitech</div>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>G Pro X</div>
                            </div>
                        </div>
                    </article>

                    <article className='single-review w-[36rem] flex flex-col gap-10 justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg'>
                        <figure>
                            <img src={Stars} alt="review-stars" />
                        </figure>
                        <p className='pb-5 w-[30rem] text-pretty'>
                            Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='Author text-xl font-medium pl-5'>Иван Г.</p>
                            <div className='flex gap-2 tags pr-10'>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>Logitech</div>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>G Pro X</div>
                            </div>
                        </div>
                    </article>

                    <article className='single-review w-[36rem] flex flex-col gap-10 justify-around bg-white rounded-lg p-4 text-[#51535D] shadow-lg'>
                        <figure>
                            <img src={Stars} alt="review-stars" />
                        </figure>
                        <p className='pb-5 w-[30rem] text-pretty'>
                            Преди да си купя тези крачета за мишки, играта ми беше посредствена. Мишката ми се плъзгаше и постоянно се ядосвах. Но след като ги сложих, сякаш играя на съвсем нова мишка! Движенията са плавни и прецизни, мога да се прицелвам с лекота и печеля много по-често.
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='Author text-xl font-medium pl-5'>Иван Г.</p>
                            <div className='flex gap-2 tags pr-10'>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>Logitech</div>
                                <div className='bg-[#D782FF] px-4 py-1 rounded-md'>G Pro X</div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Index
