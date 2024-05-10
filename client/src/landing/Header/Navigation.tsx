import React from 'react'

function Navigation() {
    return (
        <div className='p-4 bg-[#090A18]'>

            <nav className='py-3 2xl:px-6 NAVIGATION  bg-[#090A18] border-[1px] border-white/20 border-opacity-5 rounded-md flex items-center justify-between 2xl:w-6/12 mx-auto relative z-10'>

                <div className='LOGO'>ENACNTIO</div>

                <div className='group-buttons flex 2xl:gap-10'>
                    <button>Продукти</button>
                    <button>Предимства</button>
                    <button>За нас</button>
                    <button>Контакти</button>
                </div>

                <button className='bg-gradient-to-r from-gray-700 via-gray-700 to-gray-800 text-opacity-100 py-2 px-5 rounded-md border border-1 border-electricGreen border-opacity-60 z-10'>Поръчай сега</button>

            </nav>

        </div>
    )
}

export default Navigation