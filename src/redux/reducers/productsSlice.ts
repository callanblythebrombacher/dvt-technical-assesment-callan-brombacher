import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store/store';
import { HYDRATE } from 'next-redux-wrapper';
import {productCategoryThunk} from "../thunk/productThunk";

// Type for our state
export interface ProductState {
    categories: Array<any>;
    error:string;
}

// Initial state
const initialState: ProductState = {
    categories:[],
    error:""
};

// Actual Slice
export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        [HYDRATE]: (state: any, action: any) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.productSlice,
            };
        },
    },
    extraReducers:(builder) => {
        builder.addCase(productCategoryThunk.fulfilled, (state:any, action:any)=>{
            if(!action.payload.isErr){
                state.categories = action.payload.data
            }else{
                state.error = action.payload?.data
            }
        } )
        builder.addCase(productCategoryThunk.rejected, (state:any, action:any)=>{
            state.error =action.payload.data
        })
    },

});


export const selectProductCategories = (state: AppState) => state.productSlice.categories;
export default productSlice.reducer;
