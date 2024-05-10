import React from 'react'

type Props = {
    backgroundColor: string
}

export default function DownSeparator({ backgroundColor }: Props) {
    return (
        <div className={`bg-[${backgroundColor}]`} >
            <div className="down-separator bg-[#090A18] h-32 w-full"></div>
        </div>
    )
}