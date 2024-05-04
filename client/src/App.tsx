import './App.css'
import Header from './landing/Header/Index'
import Main from './landing/Main/Index'
import FeatureCards from './landing/FeatureCards/Index'
import UpSeparator from './Separotors/UpSeparator'
import Testimonial from './landing/Testimonial/Index'
import DownSeparator from './Separotors/DownSeparator'
import SocialProof from "./landing/SocialProof/Index"

function App() {

  return (
    <div className='ROOT h-full w-full' >
      <div className='bg-[#090A18]' >
        < Header />
        <Main />
        <UpSeparator />
      </div>

      <div className='bg-white' >
        <FeatureCards />
        <DownSeparator />

        <Testimonial />
      </div>

      <div className='bg-[#090A18]' >
        <UpSeparator />
        <SocialProof />
      </div>

    </div>
  )
}

export default App
