import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productSlice } from '../reducers/productsSlice';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        [productSlice.name]: productSlice.reducer,
    },
    devTools: true,
});
const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const wrapper = createWrapper<AppStore>(makeStore);
