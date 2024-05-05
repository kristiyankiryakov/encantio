import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import Minus from "../../assets/minus.png"

type Props = {}

const Index = (props: Props) => {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value: string) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    return (
        <div className="bg-gray-100">
            <h1 className="text-4xl text-center text-[#090A18] font-bold py-16">Често задавани въпроси</h1>

            <div id="accordionExample">

                <div className="rounded-t-lg border-b-[1px] border-neutral-300 bg-gray-100 dark:border-neutral-600 dark:bg-neutral-800 w-6/12 mx-auto">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${activeElement === "element1" &&
                                `[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                } group relative font-medium flex w-full items-center rounded-t-[15px] border-0 bg-gray-100 px-5 py-4 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element1")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Как да избера правилните крачета за мишката си?
                            <span
                                className={`${activeElement === "element1"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element1"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <div className="px-5 py-4 text-[#51535D]">
                            За да избереш правилните крачета за мишката си, трябва да вземеш предвид размера и формата на мишката си, както и твоите лични предпочитания. Може да използваш филтрите на нашия сайт, за да намериш крачета за мишки, съвместими с твоята мишка.
                        </div>
                    </TECollapse>
                </div>

            </div>


            <div className="rounded-t-lg border-b-[1px] border-neutral-300 bg-gray-100 dark:border-neutral-600 dark:bg-neutral-800 w-6/12 mx-auto">
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`${activeElement === "element2" &&
                            `[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            } group relative font-medium flex w-full items-center rounded-t-[15px] border-0 bg-gray-100 px-5 py-4 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => handleClick("element2")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Как да избера правилните крачета за мишката си?
                        <span
                            className={`${activeElement === "element2"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element2"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                >
                    <div className="px-5 py-4 text-[#51535D]">
                        За да избереш правилните крачета за мишката си, трябва да вземеш предвид размера и формата на мишката си, както и твоите лични предпочитания. Може да използваш филтрите на нашия сайт, за да намериш крачета за мишки, съвместими с твоята мишка.
                    </div>
                </TECollapse>
            </div>


            <div className="rounded-t-lg border-b-[1px] border-neutral-300 bg-gray-100 dark:border-neutral-600 dark:bg-neutral-800 w-6/12 mx-auto">
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`${activeElement === "element3" &&
                            `[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            } group relative font-medium flex w-full items-center rounded-t-[15px] border-0 bg-gray-100 px-5 py-4 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => handleClick("element3")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Как да избера правилните крачета за мишката си?
                        <span
                            className={`${activeElement === "element3"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element3"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                >
                    <div className="px-5 py-4 text-[#51535D]">
                        За да избереш правилните крачета за мишката си, трябва да вземеш предвид размера и формата на мишката си, както и твоите лични предпочитания. Може да използваш филтрите на нашия сайт, за да намериш крачета за мишки, съвместими с твоята мишка.
                    </div>
                </TECollapse>
            </div>


            <div className="rounded-t-lg border-b-[1px] border-neutral-300 bg-gray-100 dark:border-neutral-600 dark:bg-neutral-800 w-6/12 mx-auto">
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`${activeElement === "element4" &&
                            `[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            } group relative font-medium flex w-full items-center rounded-t-[15px] border-0 bg-gray-100 px-5 py-4 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => handleClick("element4")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Как да избера правилните крачета за мишката си?
                        <span
                            className={`${activeElement === "element4"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element4"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                >
                    <div className="px-5 py-4 text-[#51535D]">
                        За да избереш правилните крачета за мишката си, трябва да вземеш предвид размера и формата на мишката си, както и твоите лични предпочитания. Може да използваш филтрите на нашия сайт, за да намериш крачета за мишки, съвместими с твоята мишка.
                    </div>
                </TECollapse>
            </div>


            <div className="rounded-t-lg border-b-[1px] border-neutral-300 bg-gray-100 dark:border-neutral-600 dark:bg-neutral-800 w-6/12 mx-auto">
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`${activeElement === "element5" &&
                            `[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            } group relative font-medium flex w-full items-center rounded-t-[15px] border-0 bg-gray-100 px-5 py-4 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                        type="button"
                        onClick={() => handleClick("element5")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Как да избера правилните крачета за мишката си?
                        <span
                            className={`${activeElement === "element5"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element5"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                >
                    <div className="px-5 py-4 text-[#51535D]">
                        За да избереш правилните крачета за мишката си, трябва да вземеш предвид размера и формата на мишката си, както и твоите лични предпочитания. Може да използваш филтрите на нашия сайт, за да намериш крачета за мишки, съвместими с твоята мишка.
                    </div>
                </TECollapse>
            </div>

        </div>
    )
}

export default Index