import DownWaveGray from "../assets/down-wave-gray.svg"
import TestWaveDown from "../assets/test-wave-down.svg"
import TestWave from "../assets/test-wave.svg"
import UpWaveGray from "../assets/up-wave-gray.svg"
import FixedCartButton from "./Cart/FixedCartButton"
import FAQ from './FAQ/Index'
import FeatureCards from "./FeatureCards/Index"
import Footer from './Footer/Index'
import Header from "./Header/Index"
import Main from "./Main/Index"
import SvgSeparator from "./Separotors/SvgSeparator"
import SocialProof from './SocialProof/Index'
import Testimonial from './Testimonial/Index'

const Index = () => {
    return (
        <div className='ROOT h-full w-full font-custom1 relative' >
            <Header />
            <Main />
            <SvgSeparator image={TestWave} />

            <FeatureCards />
            <SvgSeparator image={TestWaveDown} />
            <Testimonial />

            <SvgSeparator image={UpWaveGray} />
            <SocialProof />
            <FAQ />

            <SvgSeparator image={DownWaveGray} />
            <Footer />

            <FixedCartButton />
        </div >
    )
}

export default Index