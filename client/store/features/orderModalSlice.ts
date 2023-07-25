import { createSlice } from '@reduxjs/toolkit'
//import type { RootState } from '..';

export interface IOrderModal {
  isVisible:boolean;
	value:number;
}

const initialState: IOrderModal = {
  isVisible: false,
	value:0,
}

export const orderModal = createSlice({
  name: 'orderModal',
  initialState,
  reducers: {
    setVisible: (state) => {
			state.isVisible = !state.isVisible;
		},
  }
})

export const { setVisible } = orderModal.actions;
export default orderModal.reducer