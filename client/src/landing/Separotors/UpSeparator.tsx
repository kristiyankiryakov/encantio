type Props = {
    color: string
}

const UpSeparator = ({ color }: Props) => {
    return (
        <div className='bg-[#090A18]' >
            {/* 15.1re */}
            <div className={`up-separator bg-${color} h-[15.1rem] w-full `}></div>
        </div>

    )
}

export default UpSeparator