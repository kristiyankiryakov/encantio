
type Props = {
    text: string
}

const PerkElement = ({ text }: Props) => {
    return (
        <div className='flex gap-x-2 items-center' >
            <div className='h-6 w-6 bg-[#090A18] rounded-full' >
                &nbsp;
            </div>

            <p className='text-[#090A18] text-xl font-bold' >
                {text}
            </p>

        </div>
    )
}

export default PerkElement