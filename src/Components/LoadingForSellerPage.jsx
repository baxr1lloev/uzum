import React from 'react';
import DotLoader from "react-spinners/DotLoader";


const LoadingForSellerPage = () => {
    return (
        <div className='animation'>
            <DotLoader
                color="purple"
                size={150}
            />
        </div>
    );
};


export default LoadingForSellerPage;