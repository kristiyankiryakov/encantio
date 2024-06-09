
import CartButton from "./CartButton";
import OrderNowNavBtn from "./OrderNowNavBtn"
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
} from "tw-elements-react";

function Navigation() {

    const pageButtons = [
        "Продукти", "Предимства", "За нас", "Контакти"
    ]

    return (
        <div className='p-4 bg-[#090A18] xs:text-xs sm:text-sm md:text-lg'>
            <nav className='p-3 NAVIGATION  bg-[#090A18] rounded-md flex items-center justify-between xs:w-12/12 md:w-11/12 lg:w-10/12 xl:w-7/12 2xl:w-7/12 mx-auto relative z-10'>

                <div className='LOGO xs:text-2xl'>ENACNTIO</div>

                <div className='group-buttons md:flex 2xl:gap-10 xs:hidden gap-3'>
                    {pageButtons.map((text) => <button className="" >{text}</button>)}
                </div>

                <OrderNowNavBtn />

                <div className="xs:flex xs:items-center xs:gap-10" >

                    <div className="md:hidden xs:block" >
                        <TEDropdown className="flex justify-center">
                            <TEDropdownToggle className="">
                                <div className="flex flex-col justify-between w-6 h-4 cursor-pointer">
                                    <div className="w-full h-0.5 rounded-xl bg-electricGreen"></div>
                                    <div className="w-full h-0.5 rounded-xl bg-electricGreen"></div>
                                    <div className="w-full h-0.5 rounded-xl bg-electricGreen"></div>
                                </div>

                            </TEDropdownToggle>

                            <TEDropdownMenu className="rounded-sm bg-gray-700" >

                                {pageButtons.map(text => {
                                    return <TEDropdownItem className="bg-gray-700 pointer-events-auto" >
                                        <a href="#" className="block rounded-sm w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal active:bg-gray-500">
                                            {text}
                                        </a>
                                    </TEDropdownItem>
                                })}
                            </TEDropdownMenu>
                        </TEDropdown>
                    </div>

                    <CartButton />
                </div>

            </nav >
        </div >
    )
}

export default Navigation