import React from 'react';
import Item from './childs/Item';
import { useSelector } from "react-redux"

const Famous = () => {

    const grids  = useSelector(state => state.someReducer);
    const liked_ids  = useSelector(state => state.liked.data_id);
    
    console.log(liked_ids);
    return (
        <div className='flex pt-[20px] justify-center'>
            <div className='w-[85%]'>
                <p className='text-[#000000] text-[32px] font-[600] '>Популярное</p>
                <div className='grid grid-cols-4 gap-[20px] pt-[20px] '>
                    {grids?.map((i) => (
                        <Item item={i} key={i.id} isLiked={liked_ids.includes(i.id)} />
                    ))}

                </div>
            </div>
        </div>
    );
};



export default Famous;