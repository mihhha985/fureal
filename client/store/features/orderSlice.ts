import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICatalogItem } from '@/types/CatalogTypes';

export type TypeOrderItem = {
	product: ICatalogItem;
	quantity:number
}

export interface IOrder {
	totalCount:number;
	totalPrice:number;
	orderItems:TypeOrderItem[];
}

const initialState: IOrder = {
  totalCount:0,
	totalPrice:0,
	orderItems: []
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

		toggleCartItem: (state, action:PayloadAction<TypeOrderItem>) => {
			let product = action.payload.product;
			let quantity = action.payload.quantity;
			let index = state.orderItems?.findIndex((item) => item.product.id === product.id);
			
			if(index === -1){
				state.orderItems?.push(action.payload);
				state.totalCount = state.totalCount + quantity;
				state.totalPrice = state.totalPrice + product.price * quantity;
			}else{
				state.orderItems?.splice(index, 1);
				state.totalCount = state.totalCount - quantity;
				state.totalPrice = state.totalPrice - product.price * quantity;
			}
		},

		changeQuantity: (state, action:PayloadAction<TypeOrderItem>) => {
			let product = action.payload.product;
			let quantity = action.payload.quantity;
			let index = state.orderItems?.findIndex((item) => item.product.id === product.id);

			if(index !== -1){
				state.orderItems[index].quantity = quantity;
				state.totalCount = state.orderItems.reduce((sum, item) => sum + item.quantity, 0);
				state.totalPrice = state.orderItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
			}
		},

		removeItem: (state, action: PayloadAction<number>) => {
			let index = state.orderItems?.findIndex((item) => item.product.id === action.payload);
			if(index !== -1){
				state.orderItems?.splice(index, 1);
				state.totalCount = state.orderItems.reduce((sum, item) => sum + item.quantity, 0);
				state.totalPrice = state.orderItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
			}
		},

		clearCart: (state) => {
			state.orderItems = [];
			state.totalCount = 0;
			state.totalPrice = 0;
		}
  }
})

export const { toggleCartItem, changeQuantity, removeItem, clearCart } = orderSlice.actions;
export default orderSlice.reducer;