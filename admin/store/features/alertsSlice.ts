import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material/Alert';

export interface alertsState{
	text: string;
  status: boolean;
  type: AlertColor;
}

export interface IAlertData{
	text:string,
	type:AlertColor,
}

const initialState = {
	text: '',
	status: false,
	type: 'success'
}

export const alertSlice = createSlice({
  name: 'alerts',
	initialState,
  reducers: {
		show: (state, action:PayloadAction<IAlertData>) => {
			state.text = action.payload.text;
			state.status = true;
			state.type = action.payload.type;
		},
		hide: (state) => {
			state.text = '';
			state.status = false;
		}
	}
});

export const { show, hide } = alertSlice.actions
export default alertSlice.reducer;