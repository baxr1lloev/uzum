

import React from 'react';
import { Routes, Route } from "react-router-dom";
import Index from './pages/Index'
import Product from './pages/Product';
import Seller from './pages/Seller';
import Signup from './Components/Signup';
import AdminPage from './Components/AdminPage';

function App() {

    return (
            <Routes>
                <Route path='/' index element={<Index />} ></Route>
                <Route path='/categories/:id' element={<Product />} ></Route>
                <Route path='/seller' element={<Seller />} ></Route>
                <Route path='/signup' element={<Signup />} ></Route>
                <Route path='/admin' element={<AdminPage/>} ></Route>
            </Routes>

    )
}

export default App
