import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Products: 'Home',
    Filtro: {},
}
export const conterSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        getProducts: (state, action) =>{
            state.Products = action.payload
        }
    }
})
export const { getProducts } = conterSlice.actions;

export default conterSlice.reducer;