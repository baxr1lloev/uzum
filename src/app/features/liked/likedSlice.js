import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:  JSON.parse(localStorage.getItem('liked')) || [],
    data_id: []
}


export const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        removeLiked: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id)
            state.data_id = state.data_id.filter(item => action.payload )
            localStorage.setItem('liked', JSON.stringify(state.data) )
        },
        addLiked: (state, action) => {
            state.data = [...state.data, action.payload]
            state.data_id = [...state.data_id, action.payload]
            localStorage.setItem('liked',JSON.stringify(state.data_id))
        }
    }
})

export const {removeLiked, addLiked} = likedSlice.actions
export default likedSlice.reducer