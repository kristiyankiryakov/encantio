import { Chip, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useMemo, useState } from 'react';
import { v4 as uuid } from "uuid";
import { filterAddedTags, handleCreateTag, handleTagToProduct } from '../../services/ProductHelper';
import { Product } from '../../../types/Product';
import useFetch from '../../../hooks/useFetch';
import { Tag } from '../../../types/Tag';

type Props = {
    product: Product
    setProduct: (product: Product | ((prev: Product) => Product)) => void
}

const ProductTags = ({ product, setProduct }: Props) => {

    const { data: availableTags, invalidateFetch } = useFetch<Tag[]>('/tags', 'GET');
    const [createTag, setCreateTag] = useState("");

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const filteredTags = useMemo(() => filterAddedTags(availableTags as Tag[], product.tags), [availableTags, product.tags, invalidateFetch])

    const handleAddOrDeleteTag = async (productId: number, tagId: number) => {
        try {
            const newProductWithTags = await handleTagToProduct(productId, tagId);
            setProduct(newProductWithTags);
        } catch (e) {
            console.log(e);
        }
    }

    const handleKeyPress = async (e: any) => {
        if (e.key === 'Enter' && createTag.trim() !== '') {
            await handleCreateTag(createTag);
            setCreateTag('');
            invalidateFetch();
        }
    };



    return (
        <div className='bg-[#1d2127] p-6 rounded-md shadow-md' >
            <h2 className='text-xl font-semibold mb-4 text-gray-300'>Tags</h2>
            <div className='flex justify-between px-2 my-2' >

                <div className="relative mb-3 w-4/12" data-twe-input-wrapper-init>
                    <input
                        type="text"
                        value={createTag}
                        onInput={(e: any) => setCreateTag(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="peer block min-h-[auto] w-full rounded border-1 border-white/60 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInputText"
                        placeholder="Add tag" />
                    <label
                        htmlFor="exampleFormControlInputText"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Tag input
                    </label>
                </div>

                <div className='max-w-xl flex flex-col gap-y-2' >
                    <h1 className='text-center text-xl' >Available tags</h1>

                    <Paper
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            m: 0,
                            backgroundColor: "#1d2127"
                        }}
                        component="ul"
                    >
                        {filteredTags && filteredTags.map((data) => {
                            return (
                                <ListItem key={uuid()}>
                                    <Chip
                                        size="medium"
                                        color="primary"
                                        sx={{
                                            color: "white",
                                            backgroundColor: "#4b5563",
                                            cursor: "pointer"
                                        }}
                                        label={data.name}
                                        onClick={() => handleAddOrDeleteTag(product.id as number, data.id)}
                                    />
                                </ListItem>
                            );
                        })}
                    </Paper>
                </div>
            </div>

            <div className='w-6/12 flex flex-col gap-y-5 max-w-2xl' >
                <h1 className='text-xl text-center' >Applied tags</h1>

                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                        backgroundColor: "#1d2127"
                    }}
                    component="ul"
                >
                    {product.tags ? product.tags.map((data) => {
                        return (
                            <ListItem key={uuid()}>
                                <Chip
                                    size="medium"
                                    color="primary"
                                    sx={{
                                        color: "white",
                                        backgroundColor: "#4b5563"
                                    }}
                                    label={data.name}
                                    onDelete={() => handleAddOrDeleteTag(product.id as number, data.id)}
                                />
                            </ListItem>
                        );
                    }) :
                        <h1 className='' >Product does not have added tags</h1>
                    }
                </Paper>

            </div>

        </div>
    )
}

export default ProductTags