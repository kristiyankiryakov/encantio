import Navigation from './Navigation'
import SeeMoreBtn from './SeeMoreBtn'
import Text from './Text'

function Index() {
    return (
        <div className='HEADER relative bg-[#090A18] text-white text-opacity-90'>
            < Navigation />
            <Text />
            <SeeMoreBtn />
            {/* <Circle /> */}
        </div>
    )
}

export default Index