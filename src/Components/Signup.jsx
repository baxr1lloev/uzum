import React, { useState } from 'react';
import { Input, InputGroup, InputLeftAddon, Button, InputRightElement } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Signup = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <div className='w-[100%] h-full flex'>
                <div className='w-[41.2%]'>
                    <img className='h-[857px]' src="/src/assets/man.png" alt="" />
                </div>
                <div className='w-[60%] '>
                    <div className='flex justify-end items-end'>
                        <div className='pr-[40px] items-center gap-[15px] flex pt-[25px] '>
                            <p className='text-white text-[14px] font-[600] '>Уже есть аккаунт?</p>
                            <button className='w-[68px] h-[38px] rounded-[8px] bg-[#E94949]'>
                                <p className='text-white text-[14px]'>Войти</p>
                            </button>
                        </div>
                    </div>
                    <div className='pl-[50px] w-full '>
                        <div className='pt-[10px]'>
                            <p className='text-black font-bold text-[32px] '>Начните продавать <br />
                                на Uzum.uz</p>
                            <p className='text-[16px] pt-[10px] text-[#f6f6f6] '>Обязательно изучите
                                <a href="#" className='underline text-blue' > инструкцию </a>
                                перед <br />
                                регистрацией. Это займёт не более 40 минут.</p>
                            <p className='text-black text-[16px] pt-[20px]  '>Язык интерфейса</p>
                            <p className='text-[14px] pt-[15px] '>В дальнейшем смена языка <br />
                                доступна в разделе «Мой профиль»</p>

                            <div className='pt-[20px]'>
                                <div className='rounded-[10px] justify-between px-[20px] flex items-center w-[410px] h-[58px] border-[gray] bg-[white] '>
                                    <p>Русский</p>
                                    <p>Русский</p>
                                </div>


                                <div className='pt-[25px]'>
                                    <p className='text-[14px]'>Имя</p>
                                    <div className='w-[410px]  '>
                                        <Input placeholder='Имя' size='lg' />
                                    </div>
                                    <div className='pt-[10px]'>
                                        <p className='text-[14px]'>Телефон</p>
                                        <div className='w-[410px]'>
                                            <InputGroup>
                                                <InputLeftAddon children='+998' />
                                                <Input type='tel' placeholder='Номер телефона' />
                                            </InputGroup>
                                        </div>
                                        <div className='pt-[10px]'>
                                            <p className='text-[14px]'>Электронная почта</p>
                                            <div className='w-[410px]  '>
                                                <Input placeholder='example@email.com' size='lg' />
                                            </div>
                                        </div>
                                        <div className='pt-[10px]'>
                                            <p>Пароль</p>
                                            <div className='w-[410px]'>
                                                <InputGroup size='lg'>
                                                    <Input
                                                        pr='4.5rem'
                                                        type={show ? 'text' : 'password'}
                                                        placeholder='Не менее 8 символов'
                                                    />
                                                    <InputRightElement width='4.5rem'>
                                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                            {show ? 'Cкрыть' : 'Показать'}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </div>
                                        </div>
                                        <div className='pt-[15px]'>
                                            <Link to={`/admin`} >
                                                <button className='w-[410px] h-[30px] rounded-[5px] bg-red-500 '>
                                                    <p className='text-[14px] text-white '>Продолжить</p>
                                                </button>
                                            </Link>
                                        </div>

                                        <div className='pt-[20px]'>
                                            <p className='text-[13px] text-center'>
                                                Нажимая на кнопку “Продолжить” вы соглашаетесь <br />
                                                c <a className='underline' href="#">Договором Оферты </a> и <a className='underline' href="#">Политикой Конфиденциальности</a> Uzum <br />
                                                | Business
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Signup;