import React from 'react'

type Props = {
    icon: string,
    heading: string,
    text: string,
}

const Perk = ({ icon, heading, text }: Props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
                <img src={icon} alt="Icon" className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#090A18]">{heading}</h3>
            <div className="text-sm text-[#51535D] max-w-xs text-center" >
                <p>{text}</p>
            </div>
        </div>
    );
};


export default Perk