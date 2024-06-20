import feet from "../../assets/feet-image.png";
import stars from "../../assets/stars.png";
import mouse from "../../assets/mouse-image.png";
import { Product, ProductItem } from "../../types/Product";
import { useCartStore } from "../../stores/CartStore";

type Props = {
    product: Product
}

function ProductCard({ product }: Props) {

    const productItem: ProductItem = {
        id: product.id as number,
        name: product.name,
        quantity: 1,
        price: product.price,
        thumbnail: product.thumbnail as string
    }

    const { addToCart, toggleCart } = useCartStore();

    const handleAddToCart = (item: ProductItem): void => {
        addToCart(item)
        toggleCart(true);
    }

    return (
        <div className='z-20 flex flex-col flex-wrap gap-10 w-[30%] xs:min-w-[20rem] md:min-w-[10rem] xs:p-6 xl:p-8 rounded-md border border-1 border-gray-200/20  bg-cardBackground relative xs:text-xs sm:text-sm'>

            <div className='Feet image select-none w-6/12 z-20'>
                <img className='w-full' src={feet} alt="mouse-feet" />
            </div>

            <div className='flex items-center gap-5'>
                <div><img src={stars} alt="review-starts" /></div>
                <div className='text-white text-base'>4.7</div>
            </div>

            <div className='flex flex-col xs:gap-2 xl:gap-5'>

                <div className='product-title text-white font-medium xs:text-2xl tracking-wider'>
                    <p>Logitech G Pro X</p>
                </div>

                <div className='product-description text-customGray 2xl:w-5/6'>
                    <p> Прецизни и издръжливи крачета, специално проектирани за плавно движение и бързи реакции.</p>
                </div>

                <div className='flex flex-wrap text-customGray xs:gap-1 lg:gap-2' >
                    <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Logitech</div>
                    <div className='tag px-3 py-1 bg-gray-800 rounded-md'>G Pro X</div>
                    <div className='tag px-3 py-1 bg-gray-800 rounded-md'>Mouse feet</div>
                </div>

                <div className='pricing-and-offer xs:flex-col xl:flex-row flex items-center justify-between xs:w-full'>
                    <p className='price text-white' ><span className='pr-1 xs:text-lg font-medium sm:' >14</span>лв.</p>

                    <p className='offer-description text-customGray w-full xs:text-center xl:text-left' >за единичен сет крачета</p>
                </div>

                <div className='bg-gray-700 w-full h-[0.065rem]' >&nbsp;</div>

                <button onClick={() => handleAddToCart(productItem)} className='xl:px-6 xl:py-4 xs:px-4 xs:py-2 bg-[#2e2f3b] border border-1 border-electricGreen rounded-md text-white font-medium' > Поръчай сега</button>

            </div>

            <div className='absolute -top-0 xs:h-[6rem] xs:w-[6rem] md:h-[5rem] md:w-[5rem] lg:h-[7rem] lg:w-[7rem] xl:h-[10rem] xl:w-[10rem] left-[45%] z-0 rounded-full bg-radial-gradient-product opacity-20' ></div>

            <div className='absolute -right-5 xs:top-5 xl:top-10 z-20 xs:w-[8rem] md:w-[7rem] xl:w-[10rem]' >
                <img className='w-full' src={mouse} alt="mouse" />
            </div>


        </div>

    )
}

export default ProductCard