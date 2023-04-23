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
                <div className='grid grid-cols-5 gap-[22px] pt-[20px] '>
                    {grids?.map((i) => (
                        <Item item={i} key={i.id} isLiked={liked_ids.includes(i.id)} />
                    ))}

                </div>
                <a href="https://uzum.uz/ru/category/Vse-kategorii--112">
                    <div className='flex items-center cursor-pointer  justify-center w-[100%]'>
                        <img className='rounded-[12px]' src="https://images.uzum.uz/cfublbnhgiov1qid61c0/main_page_banner.jpg" alt="" />
                    </div>
                </a>
                <div className='grid grid-cols-5 gap-[22px] pt-[20px] '>
                    {grids?.map((i) => (
                        <Item item={i} key={i.id} isLiked={liked_ids.includes(i.id)} />
                    ))}
                </div>
            </div>
        </div>
    );
};



export default Famous;