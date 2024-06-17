import DownWaveGray from "../assets/down-wave-gray.svg"
import DownWave from "../assets/down-wave.svg"
import UpWaveGray from "../assets/up-wave-gray.svg"
import UpWave from "../assets/up-wave.svg"
import FAQ from './FAQ/Index'
import FeatureCards from "./FeatureCards/Index"
import Footer from './Footer/Index'
import Header from "./Header/Index"
import Main from "./Main/Index"
import SvgSeparator from "./Separotors/SvgSeparator"
import SocialProof from './SocialProof/Index'
import Testimonial from './Testimonial/Index'
type Props = {}

const Index = (props: Props) => {
    return (
        <div className='ROOT h-full w-full font-custom1' >
            <Header />
            <Main />
            <SvgSeparator image={UpWave} />

            <FeatureCards />
            <SvgSeparator image={DownWave} />
            <Testimonial />

            <SvgSeparator image={UpWaveGray} />
            <SocialProof />
            <FAQ />

            <SvgSeparator image={DownWaveGray} />
            <Footer />
        </div >
    )
}

export default Index