import { TECollapse } from 'tw-elements-react'

type Props = {
    question: string,
    answer: string,
    faqKey: string,
    activeElement: string,
    setActiveElement: React.Dispatch<React.SetStateAction<string>>
}

const SingleFaq = ({ question, answer, faqKey, activeElement, setActiveElement }: Props) => {

    const handleClick = (value: string) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    console.log(activeElement);

    return (
        <div className="rounded-t-lg border-b-[1px] border-neutral-300 bg-gray-100 xs:w-11/12 sm:w-6/12 mx-auto">
            <h2 className="mb-0" id="headingOne">
                <button
                    className={`${activeElement === faqKey &&
                        `[box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                        } group relative font-medium flex w-full items-center rounded-t-[15px] border-0 bg-gray-100 px-5 py-4 text-left text-2xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                    type="button"
                    onClick={() => handleClick(faqKey)}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    {question}
                    <span
                        className={`${activeElement === faqKey
                            ? `rotate-[-180deg] -mr-1`
                            : `rotate-0 fill-[#212529]`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
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
                show={activeElement === faqKey}
                className="!mt-0 !rounded-b-none !shadow-none"
            >
                <div className="px-5 py-4 text-[#51535D]">
                    {answer}
                </div>
            </TECollapse>
        </div>
    )
}

export default SingleFaq