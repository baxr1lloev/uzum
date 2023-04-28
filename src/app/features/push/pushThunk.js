import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3000/goods"


export const postPushThunk = createAsyncThunk("post/postPushThunk", async (path, body) => {
    const res = await axios.post(BASE_URL + path, body)


    return res
} )