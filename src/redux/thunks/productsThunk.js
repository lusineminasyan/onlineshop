import {createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../api/axios";

export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        return await instance.get(`/productTypes`)
    }
)

const productsFulfilled = (state, {payload}) => {
    state.products = payload.data
}

export const productsExtraReducer = builder => {
    builder
        .addCase(getProducts.fulfilled, productsFulfilled)
}