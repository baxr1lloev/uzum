import { createSlice } from "@reduxjs/toolkit";
import { postPushThunk } from "./pushThunk";

const initialState = {
    data: [],
    status: "idle"
}

export const pushSlice = createSlice({
    name: "push",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(postPushThunk.pending, (state) => {
                state.status = "loading..."
            } )
            .addCase(postPushThunk.fulfilled, (state, action) => {
                state.data.push(action.payload.data)
                state.status = "success"
            } )
            .addCase(postPushThunk.rejected, (state) => {
                state.status = "fail"
            } )
    }
})


export default pushSlice.reducer