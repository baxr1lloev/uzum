import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';



const Header = () => {
    return (
        <div className='w-full justify-center flex h-[60px] shadow '>
            <div className='w-[85%] flex justify-between items-center bg-[] '>
                <img src="/src/assets/uzum.svg" alt="" />
                <button className='bg-[#EAEAF9] border-none rounded-[4px] w-[80px] h-[32px] '>
                    <p className='text-[#3333CC] text-[13px] font-[500] '>Каталог</p>
                </button>
                <div className='w-[698px] pl-[15px] pr-[10px] items-center flex justify-between rounded-[4px]  h-[32px] border-[#E2EAF1] border-[1px]'>
                    <p className='text-[#9AA5AF] text-[13px] font-[500] '>Искать товары</p>
                    <input className='w-[80%] h-full border-none ' type='search' />
                    {/* <CiSearch style={{ color: 'dark' }} /> */}
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
    );
};


export default Header;