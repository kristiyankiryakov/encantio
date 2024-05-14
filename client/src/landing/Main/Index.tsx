import BottomCard from './BottomCard';
import ProductCard from './ProductCard';

function Index() {
    return (
        <div>
            <div className='bg-[#090A18] w-8/12 mx-auto' >

                <div className='pt-32 flex justify-between text-white pb-10' >
                    <h1 className=' text-4xl' >Най-търсените модели</h1>

                    <button className='px-4 border-b border-electricGreen text-lg'>Виж всички</button>

                </div>

                <div className='card-container flex flex-wrap w-full justify-between items-start gap-2'>
                    {[1, 2, 3].map((card) => {
                        return <ProductCard key={card} />;
                    })}
                </div>



                <BottomCard />


            </div>

        </div>

    )
}

export default Index