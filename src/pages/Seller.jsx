import React, { useEffect, useState } from 'react';
import HeaderAd from '../Components/HeaderAd';
import LoadingForSellerPage from '../Components/LoadingForSellerPage';

const Seller = () => {

    const [Isloading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 4000)
    })
    return (
        <>
            {
                Isloading ? <><LoadingForSellerPage /></> : <><HeaderAd/></>
            }
        </>
    );
};


export default Seller;