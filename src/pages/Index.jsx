import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Famous from '../Components/Famous'
import Loading from '../Components/Loading'
import Swipper from '../Components/Swipper'

const Index = () => {

    const [Isloading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 4000)
    })


    return (
        <>
            {
                Isloading ? <><Loading /></> : <><Header /> <Swipper /> <Famous /></>
            }
        </>
    );
};


export default Index;