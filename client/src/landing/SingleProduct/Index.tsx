import { useParams } from "react-router-dom"
import FixedCartButton from "../Cart/FixedCartButton";
import Navigation from "../Header/Navigation";
import useFetch from "../../hooks/useFetch";
import { Product } from "../../types/Product";
import { Rating } from "flowbite-react";
import SocialProof from "../SocialProof/Index"
import SvgSeparator from "../Separotors/SvgSeparator";
import UpWaveGray from "../../assets/up-wave-gray.svg";
import DownWaveGray from "../../assets/down-wave-gray.svg"
import Footer from "../Footer/Index"
import FAQ from "../FAQ/Index"
import { useState } from "react";
import { useScreenDetector } from "../../hooks/useScreenDetector";


type Props = {}

const Index = ({ }: Props) => {

    const { id } = useParams();

    const { data: product } = useFetch<Product>(`/products/${id}`, 'GET');

    const [imagePreview, setImagePreview] = useState<null | string>(null);

    const { isDesktop } = useScreenDetector();

    return (
        <div className="w-full h-full bg-[#090A18] font-custom1" >
            <Navigation />
            <div className="xl:flex xl:justify-around xl:w-8/12 xl:mx-auto" >
                <div className="thumbnail-container xl:mx-0 xs:mx-auto xs:w-fit xs:max-w-xl xl:max-w-lg" >
                    <img loading="eager" className="w-fit xs:max-w-[95%] xs:mx-auto rounded-lg" src={imagePreview ? imagePreview : product?.thumbnail as string} alt="product-thumbnail" />

                </div>
                {
                    isDesktop && (
                        <div className="flex flex-col gap-y-7 p-2 text-left" >
                            <div className="flex justify-start" >
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                                        73 reviews
                                    </a>
                                </Rating>
                            </div>

                            <h1 className="text-2xl text-white" >{product?.name}</h1>

                            <div className="flex flex-col text-2xl " >
                                <p className="old-price line-through" >97.00лв.</p>
                                <p className="new-price" >{product?.price}лв.</p>
                            </div>

                            <p>
                                {product?.description}
                            </p>


                            <div className="mx-auto mt-6" >
                                <button className="rounded-xl bg-electricGreen text-pretty uppercase font-bold text-[#090a18] px-20 py-2" >добавяне в количката</button>
                            </div>


                            <div className="flex flex-col gap-y-2 xl:w-full xl:mx-0 " >
                                <p className="text-xl font-bold text-center" >100% Гаранция за връщане на парите!</p>
                                <p className="text-base text-center" >В рамките на 14 дни можеш да ни върнеш продукта
                                    и ние ще ти върнем обратно парите.</p>

                            </div>

                        </div>


                    )
                }

            </div>



            <div className="xs:flex xl:gap-x-5 xs:overflow-x-auto xs:gap-x-1 xs:mt-2 xl:w-8/12 xl:mx-auto" >
                {
                    <img loading="lazy" key={product?.thumbnail} onClick={() => setImagePreview(null)} src={product?.thumbnail as string} className="cursor-pointer xs:w-40 rounded-lg" alt="product-image" />
                }
                {
                    product?.images && product.images.map((img) => {
                        return (
                            <img loading="lazy" key={img} onClick={() => setImagePreview(img)} src={img} className="cursor-pointer xs:w-40 rounded-lg" alt="product-image" />
                        )
                    })
                }
            </div>

            {
                !isDesktop && (
                    <div className="flex flex-col gap-y-3 xs:pl-4 mt-3" >
                        <div className="" >
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                                    73 reviews
                                </a>
                            </Rating>
                        </div>

                        <h1 className="text-2xl text-white" >{product?.name}</h1>

                        <div className="flex flex-col text-2xl " >
                            <p className="old-price line-through" >97.00лв.</p>
                            <p className="new-price" >{product?.price}лв.</p>
                        </div>

                        <p>
                            {product?.description}
                        </p>

                    </div>)
            }

            {
                !isDesktop && <div>
                    <div className="w-fit mx-auto xs:mt-2 xl:mt-6" >
                        <button className="rounded-xl bg-electricGreen xs:px-14 xs:py-3 xl:px-28 xl:py-3 text-xl uppercase font-bold text-[#090a18]" >добавяне в количката</button>
                    </div>

                    <div className="flex flex-col gap-y-2 xs:w-11/12 mx-auto mt-4" >
                        <p className="text-lg font-bold text-center" >100% Гаранция за връщане на парите!</p>
                        <p className="text-center text-sm" >В рамките на 14 дни можеш да ни върнеш продукта
                            и ние ще ти върнем обратно парите.</p>

                    </div>
                </div>
            }

            <SvgSeparator image={UpWaveGray} />
            <SocialProof />
            <FAQ />

            <SvgSeparator image={DownWaveGray} />
            <Footer hidden={'hidden'} />

            <FixedCartButton />
        </div >
    )
}

export default Index