"use client"

import { useState,  useEffect, MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "@/store/index";
import { setVisible } from "@/store/features/orderModalSlice";
import { toggleCartItem } from "@/store/features/orderSlice";
import {BsCheck2Circle, BsPlusCircle} from "react-icons/bs";
import { ICatalogItem } from "@/types/CatalogTypes";
import styles from "./AddCart.module.scss";

function AddCart({id, title, price}: ICatalogItem) {

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { orderItems } = useAppSelector(state =>  state.order);

	useEffect(() => {
		let result = orderItems.find(item => item.product.id === id);
		if(result) setIsChecked(true);
	})


	const heandleClick:MouseEventHandler = (e) => {
		e.preventDefault();
		const quantity = 1;
		const product:ICatalogItem = {
			id:id,
			title:title,
			price:price
		}

		dispatch(toggleCartItem({product, quantity}));
		let result = orderItems?.find(item => item.product.id === id);
		
		if(result === undefined){
			setIsChecked(true);
		}else{
			setIsChecked(false);
		}
	};

	const heandleOrder:MouseEventHandler = (e) => {
		e.preventDefault();
		dispatch(setVisible());
	}

	return ( 
		<div className={styles.cartControls}>
			<button
				onClick={e => heandleOrder(e)}
				className={styles.addCart}
			>
			Заказать
			</button>

			<div className={styles.addCart} onClick={e => heandleClick(e)}>
				{!isChecked 
					?
					<BsPlusCircle size={24}/>
					:
					<BsCheck2Circle size={24}/>
				}
			</div>
		</div>
	);
}

export default AddCart;