import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../app/features/uzumData/thunk';

const LikeFooterItem = ({id}) => {

    const grids = useSelector(state => state.someReducer.goods);
    const dispatch = useDispatch()
    const data = grids.filter((i) => i.id === +id)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    console.log(data)

    return (
        <div className='h-[470px] shadow  cursor-pointer rounded-[12px] w-[230px]'>
            <div className='w-full rounded-[12px] h-[75%]' style={{
                background: `url(${grids[0].media})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}

            >
                <div className='flex p-[10px] justify-end'>
                    <AiOutlineHeart style={{
                        color: '#ACACAC', width: '21px', height: '19px',
                        cursor: 'pointer'
                    }} />
                </div>
            </div>
            <div className='w-full   pl-[10px]'>
                <p className='text-[14px]  w-[150px]'>
                    {grids[0].title}
                </p>
                <p className='text-[16px]  '>
                    {grids[0].price}
                </p>
                <div className='flex items-end justify-end relative top-[-30px] cursor-pointer pr-[10px] '>
                    <img src="/src/assets/shopping.svg" alt="" />
                </div>
            </div>
        </div>
    );
};


export default LikeFooterItem;