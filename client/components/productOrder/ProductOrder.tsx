"use client"

import { useState, useEffect, MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "@/store/index";
import { setVisible } from "@/store/features/orderModalSlice";
import { toggleCartItem } from "@/store/features/orderSlice";
import {BsCheck2Circle, BsPlusCircle} from "react-icons/bs";
import { ICatalogItem } from "@/types/CatalogTypes";
import styles from "./ProductOrder.module.scss";

function ProductOrder({id, title, price}: ICatalogItem) {

	const dispatch = useAppDispatch();
	const { orderItems } = useAppSelector(state =>  state.order);

	const [quantity, setQuantity] = useState<number>(1);
	const [isChecked, setIsChecked] = useState<boolean>(false);

	useEffect(() => {
		let result = orderItems.find(item => item.product.id === id);
		if(result) {
			setIsChecked(true);
			setQuantity(result.quantity);
		}
	});

	const heandleClick:MouseEventHandler = (e) => {
		e.preventDefault();
		let product:ICatalogItem = {
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
		<> 
			<div className={styles.quantityBox}>
				<label>Кол-во</label>
				<input 
					type="number" 
					value={quantity}
					onChange={e => setQuantity(Number(e.target.value))}
				/>
			</div>
			<div className={styles.deliveryBox}>
				<h6>Упаковка:</h6>
				<div>
					<input type="radio" name="desc" value="1"/>
					<label>Картонная каробка</label>
				</div>
				<div>
					<input type="radio" name="desc" value="2"/>
					<label>Картонная каробка c деревянным каркасом</label>
				</div>
				<div>
					<input type="radio" name="desc" value="3"/>
					<label>Деревянная каробка</label>
				</div>
			</div>
			<div className={styles.orderControl}>

				<button
					onClick={e => heandleOrder(e)} 
					className={styles.addCart}>
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
		</>
	);
}

export default ProductOrder;