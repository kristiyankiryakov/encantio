import UpSeparator from './Separotors/UpSeparator'
import Header from "./Header/Index"
import Main from "./Main/Index"
import FeatureCards from "./FeatureCards/Index"
import DownSeparator from './Separotors/DownSeparator'
import Testimonial from './Testimonial/Index'
import SocialProof from './SocialProof/Index'
import FAQ from './FAQ/Index'
import Footer from './Footer/Index'

type Props = {}

const Index = (props: Props) => {
    return (
        <div className='ROOT h-full w-full font-custom1' >
            <div className='bg-[#090A18]' >
                <Header />
                <Main />
                <UpSeparator color='white' />
            </div>

            <div className='bg-white' >
                <FeatureCards />
                <DownSeparator backgroundColor="white" />

                <Testimonial />
            </div>

            <div className='bg-[#090A18]' >
                <UpSeparator color='gray-100' />
                <SocialProof />
            </div>

            <FAQ />

            <div className='bg-gray-100' >
                <DownSeparator backgroundColor="gray-100" />
            </div>

            <Footer />


        </div>
    )
}

export default Index