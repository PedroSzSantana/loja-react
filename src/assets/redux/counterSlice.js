import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'Home',
    value2: {},
}
export const conterSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        getProducts: (state, action) =>{
            state.value2 = action.payload
        }
    }
})
export const { getProducts } = conterSlice.actions;

export default conterSlice.reducer;