
type Props = {
    text: string
    circleColor: string,
    textColor: string
}

const PerkElement = ({ text, circleColor, textColor }: Props) => {

    return (
        <div className='flex gap-x-2 items-center min-w-64 z-20' >
            <div className={`h-6 w-6 bg-${circleColor} rounded-full z-20`} >
                &nbsp;
            </div>

            <p className={`text-[${textColor}] xs:text-base md:text-lg xl:text-xl font-bold z-20`} >
                {text}
            </p>

        </div>
    )
}

export default PerkElement