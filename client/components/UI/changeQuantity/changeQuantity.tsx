"use client"

import { useState } from "react";
import { useAppDispatch } from "@/store";
import { changeQuantity, TypeOrderItem} from "@/store/features/orderSlice";
import styles from "./changeQuantity.module.scss";

function ChangeQuantity({product, quantity}: TypeOrderItem) {
	const dispatch = useAppDispatch();
 	const [count, setCount] = useState<number>(quantity);

	const heandleCount = (num:number) => {
		if(num < 0) return;

		const item:TypeOrderItem = {
			product:product,
			quantity:num,
		}

		setCount(num);
		dispatch(changeQuantity(item));
	}

	return ( 
		<div className={styles.cartQuantity}>
			<label>Кол-во</label>
			<input 
				type="number" 
				value={count} 
					onChange={e => heandleCount(Number(e.target.value))}
			/>
		</div>
	);
}

export default ChangeQuantity;