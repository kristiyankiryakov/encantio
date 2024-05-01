import BottomCard from './BottomCard';
import ProductCard from './ProductCard';

function Index() {
    return (
        <div className='bg-[#090A18] w-8/12 mx-auto' >

            <div className='pt-32 flex justify-between text-white pb-10' >
                <h1 className=' text-4xl' >Най-търсените модели</h1>

                <button className='px-4 border-b border-electricGreen text-lg'>Виж всички</button>

            </div>

            <div className='card-container flex w-full justify-between items-center' >
                {
                    [1, 2, 3].map((card) => {
                        return <ProductCard />
                    })
                }
            </div>

            <BottomCard />

           
        </div>
    )
}

export default Index