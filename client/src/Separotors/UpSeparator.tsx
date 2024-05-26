type Props = {
    color: string
}

const UpSeparator = ({ color }: Props) => {
    return (
        <div className={`up-separator bg-${color} h-72 w-full `}></div>
    )
}

export default UpSeparator