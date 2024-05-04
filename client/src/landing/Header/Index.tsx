import React from 'react'
import Navigation from './Navigation'
import Text from './Text'
import SeeMoreBtn from './SeeMoreBtn'
import Circle from './Circle'

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