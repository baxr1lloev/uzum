import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


const PanelLoading = () => {
    return (
        <div className='animation_panel'>
            <PacmanLoader
                color="purple"
                size={150}
            />
        </div>
    );
};


export default PanelLoading;