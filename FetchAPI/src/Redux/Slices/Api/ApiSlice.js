import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return await response.data;
})

export const apiSlice = createSlice({
    name: "posts",
    initialState: {
        data: null,
        loading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            console.log(`error ${JSON.stringify(action)}`)
        })
    }
})

export default apiSlice.reducer