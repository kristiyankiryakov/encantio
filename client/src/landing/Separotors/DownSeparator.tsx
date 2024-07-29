
type Props = {
    backgroundColor: string
}

export default function DownSeparator({ backgroundColor }: Props) {
    return (
        <div className={` bg-[#090A18]`} >
            {/* 4.4rem */}
            <div className={`down-separator bg-${backgroundColor} h-72 w-full`}></div>
        </div>
    )
}