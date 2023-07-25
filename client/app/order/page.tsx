"use client"

import { useAppSelector, useAppDispatch } from "@/store";
import { setVisible } from "@/store/features/orderModalSlice";
import ChangeQuantity from "@/components/UI/changeQuantity/changeQuantity";
import RemoveItem from "@/components/UI/removeItem/RemoveItem";
import styles from "./page.module.scss";

function Page() {
	const dispatch = useAppDispatch();
	const {orderItems, totalPrice} = useAppSelector(store => store.order);

	return ( 
		<section id="cart" className={styles.orderContainer}>
			<h3>Корзина</h3>
			{orderItems.length > 0
				?
				<div className={styles.orderList}>
					{orderItems.map(item =>
						<div key={item.product.id} className={styles.orderItem}>

							<div className={styles.name}>
								<p>{item.product.title}</p>
								<h5>Цена: {item.product.price} &#8381;</h5>
							</div>

							<div className={styles.quantity}>
								<ChangeQuantity product={item.product} quantity={item.quantity} />
							</div>

							<div className={styles.trash}>
								<RemoveItem id={item.product.id} />
							</div>

						</div>	
					)}
					<div className={styles.totalPrice}>
						<p>Сумма вашего заказа</p>
						<h5>ИТОГО: {totalPrice} &#8381;</h5>
						<button onClick={() => dispatch(setVisible())}>Заказать</button>
					</div>
				</div>
				:
				<h4>В корзине нет товаров</h4>
			}
		</section>
	);
}

export default Page;