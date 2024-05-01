import './App.css'
import Header from './landing/Header/Index'
import Main from './landing/Main/Index'
import FeatureCards from './landing/FeatureCards/Index'
import UpSeparator from './Separotors/UpSeparator'
import Testimonial from './landing/Testimonial/Index'

function App() {

  return (
    <div className='ROOT bg-[#090A18] h-full' >
      < Header />
      <Main />
      <UpSeparator />
      <FeatureCards />
      <Testimonial />

    </div>
  )
}

export default App
