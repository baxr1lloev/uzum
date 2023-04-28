import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';
import { TbExchange } from "react-icons/tb"
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { postPushThunk } from '../../app/features/push/pushThunk';

const AxiosFunc = ({ item }) => {

    const [modal, setModal] = useState(false)

    const [img, setImg] = useState('')
    const url = 'http://localhost:3000/goods/'

    useEffect(() => {
        setImg(...item.media);
    }, [])

    const deleteEl = (arg) => {
        axios.delete(url + arg)
    }
    return (
        <>
            <div className='w-full mt-[30px] shadow rounded-[20px] flex items-center justify-between px-[10px] h-[100px]   '>
                <div className='w-[70%] flex items-center  justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[100px] shd h-[80px] rounded-[8px]  ' style={{
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            background: `url(${img})`,
                        }} >

                        </div>
                        <p className='text-[16px]  text-black font-bold '>
                            {item.title}
                        </p>
                    </div>
                    <p className='text-black'>
                        {
                            item.price
                        }
                    </p>
                </div>
                <div className='flex justify-between gap-[20px]'>
                    <MdAddCircleOutline className='cursor-pointer' onClick={() => setModal(true)} />
                    <AiFillDelete className='cursor-pointer' onClick={() => deleteEl(item.id)} />
                    <TbExchange className='cursor-pointer' />
                </div>
            </div>

            {
                modal && <Add_user_modal onClose={setModal} />
            }

        </>

    );
};


export default AxiosFunc;


const Add_user_modal = ({ onClose }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors }
    } = useForm();

    const onSubmit = data => {
        dispatch(postPushThunk("goods", data))
    };

    return (
        <div className='bg-white flex flex-col gap-4 w-[500px] rounded-md h-fit p-10 fixed top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] '>
            <h1 className='text-xl font-medium mb-6'>Add something..</h1>
            <form action={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} type="text" name='name' placeholder='picture' /> <br />
                <input {...register("title", { required: true })} type="text" name='title' placeholder='Введите загаловок' /> <br />

                <button className='px-4 py-2 bg-purple-600 text-white '>send</button>
            </form>
            <button className='px-4 py-2 bg-red-600 text-white' onClick={() => onClose(false) } >close</button>
        </div>
    )
} 