import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import orderModalSlice from './features/orderModalSlice';
import orderSlice from './features/orderSlice';

export const store = configureStore({
  reducer: {
		order: orderSlice,
		orderModal: orderModalSlice,
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;