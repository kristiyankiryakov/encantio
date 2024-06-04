import { useParams } from 'react-router-dom'

type Props = {}

const Single = (props: Props) => {

    const { id } = useParams();

    return (
        <div className='w-full'
        >Single Product</div>
    )
}

export default Single