
type Props = {
    image: string
}

const SvgSeparator = ({ image }: Props) => {
    return (
        <div >
            <img className='object-cover' src={image} alt="wave-separator" />
        </div>
    )
}

export default SvgSeparator