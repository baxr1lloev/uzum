import React from 'react';
import { Link } from 'react-router-dom';


const HeaderAd = () => {
    return (
        <>
            <div style={{ position: 'fixed', opacity: "0.9", top: 0, left: 0, width: '100%', backgroundColor: '#222222' }}>
                <div className='w-[100%]'>
                    <div className='flex items-center'>

                        <img className='pl-[30px]' style={{ color: "white" }} src="/src/assets/premium.png" alt="" />

                        <div className='flex pl-[397px] gap-[25px] items-center'>
                            <p className='text-[14px] text-[#f6f6f6] font-bold '>Преимущества</p>
                            <p className='text-[14px] text-[#f6f6f6] font-bold '>Отзывы</p>
                            <p className='text-[14px] text-[#f6f6f6] font-bold '>FAQ</p>
                            <p className='text-[14px] text-[#f6f6f6] font-bold '>Инструкция для продавцов</p>
                            <button className='w-[200px] h-[38px] bg-[#7000FF] rounded-[6px] '>
                                <p className='text-[white] font-[bold] text-[14px] '>
                                    <Link to={`/signup`} >Зарегистрироваться</Link>
                                </p>
                            </button>
                            <p className='text-[14px] text-[#f6f6f6] font-bold'>Личный кабинет</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className='w-full  h-[10000px] bg-[#141414]'>
                    <div className='flex'>
                        <div className='pl-[209px] pt-[107px] '>
                            <p className='text-[50px] text-[white] font-bold '>
                                Не упустите <br />
                                возможность
                            </p>
                            <p className='text-[32px] text-[#f6f6f6] '>
                                Начните строить свой бизнес <br />
                                на самом быстрорастущем <br />
                                маркетплейсе
                            </p>
                            <button className='w-[337px] mt-[15px] h-[65px] bg-[#7000FF] rounded-[12px] '>
                                <p className='text-[23px] font-bold text-[#f6f6f6] '>
                                    <Link to={`/signup`} >Зарегистрироваться</Link>

                                </p>
                            </button>
                        </div>
                        <div className='w-[780px] mt-[42px] h-fit opacity-30 '>
                            <img src="/src/assets/mac.png" alt="" />
                        </div>
                    </div>


                    <div className='flex justify-center'>
                        <div className='w-[70%] rounded-[30px] h-[340px]  glass '>
                            <div className='pt-[40px] pl-[50px] '>
                                <p className='text-[white] font-[500] text-[35px] '>
                                    Uzum — маркетплейс с гарантированной доставкой <br />
                                    за 1 день, вокруг которого объединяются тысячи <br />
                                    продавцов и производителей по всей стране
                                </p>
                                <div className='flex gap-[30px]'>
                                    <div className=' pt-[10px] w-[45%] h-[130px] '>
                                        <p className='text-[#f6f6f6] text-[23px]'>
                                            Uzum выстроил свою собственную самостоятельную систему логистики, хранения и выдачи заказов.
                                        </p>
                                    </div>

                                    <div className='w-[45%]  h-[130px] '>
                                        <p className='text-[#f6f6f6] text-[18.2px] text-start '>
                                            Это позволяет сохранить выгодную комиссию <br />
                                            маркетплейса для наших партнеров — от 3 до 20% <br />
                                            от суммы продаж, при этом стоимость доставки <br />
                                            и прочие расходы уже включены в комиссию. <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-[82%] h-fit  '>
                            <img src="https://seller.uzum.uz/images/tild3034-3831-4764-b837-663863313461__frame_31363.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <center>
                            <p className='text-white text-5xl w-[870px] tracking-[1px] '>
                                Станьте продавцом Uzum и успейте
                                занять лидирующие позиции
                                в своей нише!
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </>



    );
};


export default HeaderAd;