import BottomCard from './BottomCard';
import ListProductCards from './ListProductCards';

function Index() {

    return (
        <div className='bg-[#090A18]'>
            <div className='bg-[#090A18] xs:w-11/12 md:w-10/12 lg:8/12 mx-auto pb-10' >

                <div className=' flex justify-between text-white xs:py-10 xl:py-20' >
                    <h1 className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg' >Най-търсените модели</h1>
                    <button className='xs:px-2 sm:px-3 lg:px-4 border-b border-electricGreen text-lg text-pretty'>Виж всички</button>
                </div>

                <ListProductCards />

                <BottomCard />
            </div>

        </div>

    )
}

export default Index