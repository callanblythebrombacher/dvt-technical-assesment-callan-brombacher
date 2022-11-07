import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store/store';
import { HYDRATE } from 'next-redux-wrapper';
import {productCategoryThunk, getAllProductsThunk} from "../thunk/productThunk";

// Type for our state
export interface ProductState {
    categories: {
        data:Array<any>|null;
        error:any|null;
    };
    products:{
        data:{
            id:number;
            title:string;
            price:string;
            category:string;
            description:string;
            image:string;
        }[]|null;
        error:any|null;
    };
}

// Initial state
const initialState: ProductState = {
    categories:{
        data:null,
        error:null
    },
    products:{
        data:null,
        error:null
    }
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
                state.categories.data = action.payload.data
            }else{
                state.categories.error = action.payload?.data
            }
        } )
        builder.addCase(productCategoryThunk.rejected, (state:any, action:any)=>{
            state.categories.error =action.payload.data
        })
        builder.addCase(getAllProductsThunk.fulfilled, (state:any, action:any)=>{
            if(!action.payload.isErr){
                state.products.data = action.payload.data
            }else{
                state.categories.error.data = action.payload?.data
            }
        } )
        builder.addCase(getAllProductsThunk.rejected, (state:any, action:any)=>{
            state.products.error =action.payload.data
        })
    },

});


export const selectProductCategories = (state: AppState) => state.productSlice.categories;
export const selectProducts = (state: AppState) => state.productSlice.products;
export default productSlice.reducer;
