import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import LikeFooterItem from './LikeFooterItem';



const Rendering = ({ id }) => {

    const [count, setCount] = useState(0)
    const grids = useSelector(state => state.someReducer);
    const data = grids.filter((i) => i.id === +id)


    console.log(data)

    return (

        
        <>
            <div className='flex pt-[40px] items-center justify-center'>
                <div className='w-[85%]'>

                    <div className='flex gap-[25px]'>


                        <div className='grid gap-[10px] grid-cols-1'>
                            <div className='w-[83px] rounded-[2px] shad h-[111px] bg-[#EFEFEF]' style={{
                                backgroundImage: `url(${data[0].media})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionY: 'center',
                                backgroundSize: 'cover'
                            }}>

                            </div>
                            <div className='w-[83px] shad rounded-[2px] h-[111px] bg-[#EFEFEF]' style={{
                                backgroundImage: `url(${data[0].media})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionY: 'center',
                                backgroundSize: 'cover'
                            }}>

                            </div>
                            <div className='w-[83px] shad rounded-[2px] h-[111px] bg-[#EFEFEF]' style={{
                                backgroundImage: `url(${data[0].media})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionY: 'center',
                                backgroundSize: 'cover'
                            }}>
                            </div>
                            <div className='w-[83px] shadow rounded-[2px] h-[111px] bg-[#EFEFEF]' style={{
                                backgroundImage: `url(${data[0].media})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionY: 'center',
                                backgroundSize: 'cover'
                            }}>
                            </div>
                        </div>


                        <div className='w-[380px] h-[488px] rounded-[4px] bg-[#EFEFEF] ' style={{
                            backgroundImage: `url(${data[0].media})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }} >

                        </div>


                        <div className='pt-[25px] pl-[15px] '>
                            <p className='text-[#000000] w-[600px] text-[32px] leading-[39px] font-[600] '>
                                {data[0].title}
                            </p>


                            <div className='pt-[20px]'>
                                <p className='text-[#000000] text-[28px] leading-[34px] font-[600] '>
                                    {data[0].price}
                                </p>
                            </div>



                            <div className='pt-[20px]'>
                                <div className='w-[89px] items-center justify-center gap-[20px] bg-[#ACACAC] h-[30px] flex '>
                                    <button onClick={() => setCount((count) => count - 1)}>-</button>
                                    <button>{count + 1} </button>
                                    <button onClick={() => setCount((count) => count + 1)}>+</button>
                                </div>
                            </div>


                            <div className='pt-[30px] '>
                                <hr />
                            </div>



                            <div className='pt-[30px] w-[500px] '>
                                <p className='font-[400] text-[#000000] text-[14px] leading-[19px] '>
                                    {data[0].description}
                                </p>
                            </div>



                            <div className='pt-[30px]'>
                                <div className='flex gap-[10px] '>
                                    <button className='w-[176px] h-[32px] bg-[#7000FF] rounded-[4px]'>
                                        <p className='text-[#FFFFFF] font-[400] leading-[16px] text-[13px] '>Добавить в корзину</p>
                                    </button>
                                    <button className='w-[176px] h-[32px] rounded-[4px] bord '>
                                        <p className='text-[#7000FF] font-[400] leading-[16px] text-[13px] '>Добавить в избранное</p>
                                    </button>
                                </div>
                            </div>



                        </div>

                    </div>




                    <div className='flex pt-[80px] items-center justify-center'>
                        <div className='w-[100%]'>
                            <p className='text-[32px] font-[600] leading-[39.2px] text-[#000000]'>Похожие товары</p>


                            <div className='gap-[100px] pt-[20px] grid grid-cols-5 '>

                                <LikeFooterItem/>
                                <LikeFooterItem/>
                                <LikeFooterItem/>
                                <LikeFooterItem/>
                                <LikeFooterItem/>


                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


export default Rendering;