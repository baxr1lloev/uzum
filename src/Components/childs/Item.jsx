import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLiked, removeLiked } from '../../app/features/liked/LikedSlice';
import { useEffect } from 'react';


const Item = ({ item, isLiked }) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()

    setTimeout(() => {
        setIsLoading(false)
    }, 7000)

    // const [liked, setLiked] = useState(false)
    const liked = useSelector(state => state.liked);
    console.log(liked);

    // useEffect(() => { 
    //     fetch("http://localhost:3000/goods") 
    //       .then(res => res.json()) 
    //       .then(res => setData(res)) 
    //       .catch(err => console.log(err)) 
    //   }, [])

    return (
        <>
            {
                isLoading ?
                    <div className='h-[470px] loading  cursor-pointer rounded-[12px] w-[230px]'>
                        <div className='w-full faf2 image rounded-[12px] h-[75%]'

                        >
                        </div>
                        <div className='w-full content h-[25%]  pl-[10px]'>
                            {/* <p className='text-[14px]  w-[150px]'>
                        {item.title}
                    </p>
                    <div className='bg-[red]  justify-between flex items-center '>
                        <p className='text-[16px]  '>
                            {item.price}
                        </p>
                        <div className=''>
                            <img src="/src/assets/shopping.svg" alt="" />
                        </div>
                    </div> */}
                        </div>
                    </div>







                    :



                    <Link to={`/categories/:${item.id}`}>
                        <div className='h-[470px] shadow  cursor-pointer rounded-[12px] w-[230px]'>
                            <div className='w-full rounded-[12px] h-[75%]' style={{
                                background: `url(${item.media})`,
                                backgroundSize: 'contain',
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
                            <div className='w-full h-[25%]  pl-[10px] flex flex-col justify-between'>
                                <p className='text-[14px]  w-[150px]'>
                                    {item.title}
                                </p>
                                <div className='justify-between flex items-center '>
                                    <p className='text-[16px]  '>
                                        {item.price}
                                    </p>
                                    <div className=''>
                                        <img src="/src/assets/shopping.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    );
};


export default Item;