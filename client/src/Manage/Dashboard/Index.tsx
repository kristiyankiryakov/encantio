
import { HiArrowTrendingUp } from "react-icons/hi2";
import { TEChart } from "tw-elements-react";
const miniBanners = [
    {
        category: "Total sales",
        stats: "50% Incomes",
        value: 278,
        currency: "$"
    },
    {
        category: "Daily sales",
        stats: "50% Incomes",
        value: 278,
        currency: "$"
    },
    {
        category: "Total sales",
        stats: "50% Incomes",
        value: 278,
        currency: "$"
    },
    {
        category: "Total sales",
        stats: "50% Incomes",
        value: 278,
        currency: "$"
    },
    {
        category: "Total sales",
        stats: "50% Incomes",
        value: 278,
        currency: "$"
    }
]

const lineData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: "Monthly sales",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        },
    ],
}

function Dashboard() {
    return (


        <div className="h-screen w-full">

            <h1 className="text-2xl py-3 pl-5">Dashboard</h1>

            <div className="grid grid-cols-6 gap-5"  >

                <div className="col-span-4 p-4">
                    <div className="flex flex-col gap-5" >

                        <div className="banner-container flex gap-8 justify-around" >
                            {miniBanners.map((banner) => {
                                return (
                                    <div className="flex flex-col gap-5 bg-gray-600 p-5 items-center rounded-md" >

                                        <div className="icon-container rounded-full flex flex-col justify-center items-center bg-primary p-2" >
                                            <HiArrowTrendingUp size={40} />
                                        </div>

                                        <div className="flex flex-col items-center" >
                                            <h2 className="text-white font-semibold text-2xl" >{banner.category}</h2>
                                            <p className="text-base text-gray-300/50" >{banner.stats}</p>
                                        </div>

                                        <p className="text-2xl text-gray-50 font-bold" >{`${banner.currency}${banner.value}`}</p>

                                    </div>
                                )
                            })}
                        </div>

                        <div className=" p-2 relative" >
                            <TEChart type="line" data={lineData} />

                            {/* <div className="absolute top-10 right-10" >
                                <TEDropdown className="flex justify-center">
                                    <TERipple rippleColor="dark">
                                        <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                            Select period
                                            <span className="ml-2 [&>svg]:w-5 w-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </TEDropdownToggle>
                                    </TERipple>

                                    <TEDropdownMenu>
                                        <TEDropdownItem>
                                            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                Day
                                            </a>
                                        </TEDropdownItem>
                                        <TEDropdownItem>
                                            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                Month
                                            </a>
                                        </TEDropdownItem>
                                        <TEDropdownItem>
                                            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                Year
                                            </a>
                                        </TEDropdownItem>
                                    </TEDropdownMenu>
                                </TEDropdown>
                            </div> */}

                        </div>

                    </div>
                </div>

                <div className="col-span-2" >
                    <div className="flex flex-col gap-5" >

                        <div className="rounded-lg bg-gray-600 p-3" >
                            <h2 className="text-white text-xl font-medium" >Unfulfilled orders</h2>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    );
}

export default Dashboard