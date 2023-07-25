"use client"

import { useAppDispatch } from "@/store";
import { removeItem } from "@/store/features/orderSlice";
import { BsTrash } from "react-icons/bs";
import styles from "./RemoveItem.module.scss";

const RemoveItem = ({id}) => {

	const dispatch = useAppDispatch();

	return ( 
		<div className={styles.removeItemBox}>
			<div
				onClick={() => dispatch(removeItem(id))} 
				className={styles.removeItem}>
				<BsTrash size={16}/>
			</div>
		</div>
	);
}

export default RemoveItem;