"use client"

import { useState } from "react";
import { PiSealQuestionLight } from "react-icons/pi";
import styles from "./ItemCaption.module.scss";

type TypeCaptionProps = {
	title:string;
	price:number;
	description:string | undefined | null;
}

function ItemCaption({title, price, description}: TypeCaptionProps) {

	const [descVisible, setDescVisible] = useState<boolean>(false);

	return ( 
		<div style={{position:"relative"}}>
			{descVisible &&
					<div  className={styles.descriptionBox}>
						<h4>{title}</h4>
						<p>{description}</p>
					</div>
				}
			<h4 className={styles.itemPrice}>Цена: {price} &#8381;
			<span
				onMouseOver={() => setDescVisible(true)}
				onMouseOut={() => setDescVisible(false)}
			>
				<PiSealQuestionLight size={18}/>
			</span>
			</h4>
		</div>	
	);
}

export default ItemCaption;