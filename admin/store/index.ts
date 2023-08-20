import { configureStore } from '@reduxjs/toolkit';
import alertsSlice from './features/alertsSlice';

export const store = configureStore({
  reducer: {
		alert: alertsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch