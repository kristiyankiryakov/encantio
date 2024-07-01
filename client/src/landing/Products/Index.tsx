import { Dropdown } from "flowbite-react";
import { ChangeEvent, useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import UpWaveGray from "../../assets/down-wave-gray.svg";
import DownWaveGray from "../../assets/up-wave-gray.svg";
import useFetch from "../../hooks/useFetch";
import { Product } from "../../types/Product";
import FAQ from "../FAQ/Index";
import Footer from "../Footer/Index";
import Navigation from "../Header/Navigation";
import BottomCard from "../Main/BottomCard";
import ProductCard from "../Main/ProductCard";
import SvgSeparator from "../Separotors/SvgSeparator";
import FixedCartButton from "../Cart/FixedCartButton";


type Props = {}

const Index = (props: Props) => {

    const [filter, setFiler] = useState("");
    const { data } = useFetch<Product[]>(`products`, 'GET');


    const filtered = data && data.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="h-full w-full bg-[#090A18] font-custom1" >
            <Navigation />

            <h1 className="text-2xl xs:pl-2 xl:pl-10 font-semibold mb-5" >Крачета за мишки</h1>


            <div className="flex justify-between xs:px-1 items-center xl:px-10 mb-5" >
                <div className="flex xs:flex-col xl:flex-row xl:gap-x-10" >
                    <p className="text-customGray xs:text-sm text-center underline" >Филтри</p>


                    <div className="flex xs:gap-x-10" >

                        <Dropdown className="z-30" label="Марка" inline >
                            <Dropdown.Item className="z-index-20">Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>

                        <Dropdown className="z-30" label="Модел" inline >
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>

                <div className="relative flex items-center my-3">

                    <input
                        type="search"
                        value={filter}
                        onInput={(e: ChangeEvent<HTMLInputElement>) => setFiler(e.target.value)}
                        className="relative m-0 block rounded border border-solid xs:w-32 pr-10 sm:w-40 bg-[#464752] px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none  placeholder:text-neutral-500 focus:z-[3] focus:border-electricGreen focus:shadow-inset focus:outline-none  dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200  dark:focus:border-electricGreen"
                        placeholder="Търсене"
                        id="exampleFormControlInput2"
                    />

                    <IoSearchOutline className="text-electricGreen absolute right-2" size={20} />
                </div>
            </div>


            <div className='card-container flex flex-wrap xl:w-11/12 mx-auto gap-4'>
                {filtered && filtered.map((product, index) => {
                    return (
                        <ProductCard key={product.description + index} product={product} />
                    )
                })}
            </div>

            <div className="w-11/12 mx-auto pb-3" >
                <BottomCard />
            </div>
            <SvgSeparator image={DownWaveGray} />

            <FAQ />

            <SvgSeparator image={UpWaveGray} />
            <Footer hidden="hidden" />
            <FixedCartButton />
        </div >
    )
}

export default Index