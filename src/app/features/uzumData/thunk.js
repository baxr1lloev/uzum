import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUsers = createAsyncThunk('goods/getUsers', async () => {
    const res = await axios.get('http://localhost:3000/goods')

    return res.data
})

    