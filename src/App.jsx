

import React from 'react';
import { Routes, Route } from "react-router-dom";
import Index from './pages/Index'
import Product from './pages/Product';


function App() {

    return (
        <Routes>
            <Route path='/' index element={<Index />} ></Route>
            <Route path='/categories/:id' element={<Product/>} ></Route>
        </Routes>
    )
}

export default App
