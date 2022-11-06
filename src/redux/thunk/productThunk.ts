import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
type ThunkType = {isErr:boolean; data:any}

export const productCategoryThunk = createAsyncThunk<ThunkType>(
    'productSlice/productCategoryThunk',
    async()=>{
        const axiosConfig:{
            method:string;
            url:string;
        }={
            method:'get',
            url:'https://fakestoreapi.com/products/categories'
        }
        return await axios.request(axiosConfig)
            .then(res=>{
                return{
                    isErr:false,
                    data:res.data
                }}
            ).catch(err=>{
                return{
                    isErr:true,
                    data:err
                }
            })

    }
)
