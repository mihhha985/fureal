"use client"

import Image from 'next/image';
import { useAppDispatch} from "@/store/index";
import { setVisible } from "@/store/features/orderModalSlice";
import fon from "@/public/sahrana.jpg";
import {FaTelegram, FaWhatsapp, FaVk, FaOdnoklassniki} from "react-icons/fa";
import styles from "./MainBox.module.scss"

function MainBox() {

	const dispatch = useAppDispatch();
	
	return ( 
		<main className={styles.main}>
				<Image 
					src={fon} 
					alt={"fon"}
					/>
					<div className={styles.mainText}>
						<h2>Траурная флористика</h2>
						<p>Изготовление похоронных венков на заказ или предложим варианты из нашего каталога</p>
						<button onClick={() => dispatch(setVisible())}>Заказать</button>
						<div className={styles.socBox}>
							<FaTelegram size={32} />
							<FaWhatsapp size={32} />
							<FaVk size={32} />
							<FaOdnoklassniki size={32} />
						</div>
					</div>
		</main>
	);
}

export default MainBox;