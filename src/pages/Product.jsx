import React from 'react';
import Header from '../Components/Header';
import Rendering from '../Components/Rendering';
import { useParams } from 'react-router-dom';

const Product = () => {

    const params = useParams();
    const prodId = params.id;
    const id = prodId.charAt(1)


    return (
        <>
            <Header></Header>
            <Rendering id={id}/>
        </>
    );
};


export default Product;