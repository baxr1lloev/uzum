import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLiked, removeLiked } from '../../app/features/liked/LikedSlice';


const Item = ({ item }) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()

    setTimeout(() => {
        setIsLoading(false)
    }, 7000)



    return (
        <>
            {
                isLoading ?
                    <div className='h-[402px] loading rounded-[12px] w-[230px]'>
                        <div className='w-full faf2 cursor-pointer rounded-[12px]   bg-[#EFEFEF]  '>

                            <div className='w-full image h-[300px]'  >

                            </div>
                        </div>

                        <div className='w-full content flex flex-col '>
                            <p className='text-[#000000] loading pp text-[14px] font-[500]'>
                                {/* {item.desc} */}
                            </p>
                            <div className='flex  justify-between pt-[10px]'>
                                <p className='text-[#000000] description text-[14px] font-[500]'>
                                    {/* {item.price} */}
                                </p>

                            </div>
                        </div>
                    </div>
                    :
                    <Link to={`/categories/:${item.id}`}>
                        <div className='h-[402px]  cursor-pointer rounded-[12px] w-[230px]'>
                            <div className='w-full rounded-[12px] h-[75%]' style={{
                                background: `url(${item.img})`,
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
                            <div className='w-full h-[25%] pl-[10px] pt-[5px] tr rounded-[12px] '>
                                <p className='text-[14px]  w-[150px]'>
                                    {item.desc}
                                </p>
                                <p className='pt-[10px] text-[16px] '>
                                    {item.price}
                                </p>
                                <div className='flex items-end justify-end relative top-[-29px] pr-[5px] cursor-pointer  '>
                                    <img src="/src/assets/shopping.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    );
};


export default Item;