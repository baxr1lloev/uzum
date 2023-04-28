import React, { useEffect, useState } from 'react';
import AxiosFunc from './childs/AxiosFunc';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../app/features/uzumData/thunk';
import PanelLoading from './PanelLoading';

const AdminPage = () => {
    const dispatch = useDispatch()
    const [Isloading, setIsloading] = useState(true)

    const grids = useSelector(state => state.someReducer.goods);
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    console.log(grids);


    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 4000)
    })
    return (

        <>
            {
                Isloading ? <><PanelLoading /></>
                    :
                    <div className='flex justify-center items-center'>
                        <div className='flex items-center mt-16'>
                            <div className='w-[1200px] shadow grid grid-col-1 gap-[10px] overflow-x-scroll rounded-[30px]  h-[600px]'>
                                {
                                    grids.map(i => <AxiosFunc key={i.id} item={i} />)
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
        
    );
};


export default AdminPage;