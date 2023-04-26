import { createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk('goods/getUsers', async () => {
    const res = await axios.get('http://localhost:3000/goods')

    console.log(getUsers)
    return res.data
})

    