import './App.css'
import Header from './landing/Header/Index'
import Main from './landing/Main/Index'
import FeatureCards from './landing/FeatureCards/Index'
import UpSeparator from './Separotors/UpSeparator'
import Testimonial from './landing/Testimonial/Index'
import DownSeparator from './Separotors/DownSeparator'
import SocialProof from "./landing/SocialProof/Index"
import Footer from "./landing/Footer/Index"
import FAQ from "./landing/FAQ/Index"

function App() {

  return (
    <div className='ROOT h-full w-full' >
      <div className='bg-[#090A18]' >
        < Header />
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

export default App
