import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className='bg-[#F4F5F5] w-full h-[25px] '>
                <div className='flex justify-center'>
                    <div className='w-[85%] h-[25px] flex items-center justify-between'>
                        <div className='flex items-center gap-[5px]'>
                            <CiLocationOn />
                            <p className='text-[14px] cursor-pointer font-[400] text-black '>Город:</p>
                            <p className='text-[14px] cursor-pointer decoration-solid underline font-[500] text-black '>Самарканд</p>
                        </div>
                        <p className='text-[15px] font-[500] cursor-pointer text-black '>Пункты выдачи</p>
                        <p className='text-[14px] text-[gray] cursor-pointer'>Доставим ваш заказ бесплатно - всего за 1 день!</p>
                        <p className='text-[14px] cursor-pointer text-[gray]'>
                            <Link to={`/seller`} >Продавайте на Uzum</Link>
                        </p>
                        <p className='text-[14px] cursor-pointer text-[gray]'>Вопрос-ответ</p>
                        <p className='text-[14px] cursor-pointer text-[gray]'>Мои заказы</p>
                        <div className='flex items-center gap-[4px]'>
                            <img className='w-[19px] cursor-pointer h-[19px] ' src="/russia.png" alt="" />
                            <p className='text-[14px] cursor-pointer text-[gray]'>Русский</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full justify-center flex h-[60px]  '>
                <div className='w-[85%] gap-[10px] flex justify-between items-center bg-[] '>
                    <img src="/src/assets/uzum.svg" alt="" />
                    <button className='bg-[#EAEAF9] border-none rounded-[4px] w-[80px] h-[32px] '>
                        <p className='text-[#3333CC] text-[13px] font-[500] '>Каталог</p>
                    </button>
                    <div className='w-[698px] pl-[15px] pr-[10px] items-center flex justify-between rounded-[4px]  h-[32px] border-[#E2EAF1] border-[1px]'>
                        <p className='text-[#9AA5AF] text-[13px] font-[500] '>Искать товары</p>
                        <input className='w-[80%] h-full border-none ' type='search' />
                    </div>
                    <div className='flex items-center gap-[20px] justify-between'>
                        <CgProfile style={{ color: 'white' }} />
                        <p className='text-[#000000] text-[12px] font-[500] '>Шахзод</p>
                        <p className='text-[#000000] text-[12px] font-[500] '>Избранное</p>
                        <p className='text-[#000000] text-[12px] font-[500] '>Корзина</p>
                        <button className='w-[16px] items-center flex justify-center h-[18px] bg-[#7000FF] rounded-[2px] '>
                            <p className='text-[#FFFFFF] text-[12px] '>3</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex pt-[8px] justify-center'>
                <div className='w-[85%] flex justify-between h-[10px] '>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Электроника</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Бытовая техника</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Одежда</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Обувь</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Аксессуары</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Красота</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Здоровье</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Товары для дома</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Строительство и ремонт</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Автотовары</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Детские товары</p>
                    <p className='text-[gray] hover:underline hover:text-[black] text-[14.5px] cursor-pointer'>Еще</p>
                </div>
            </div>
        </>
    );
};


export default Header;