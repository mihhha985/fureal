"use client"

import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/store/index";
import { setVisible } from "@/store/features/orderModalSlice";
import { TypeOrderItem, clearCart } from "@/store/features/orderSlice";
import styles from "./OrderModal.module.scss";

type Inputs = {
	fio:string;
	tell:string;
	adress:string;
}

type TypeOrderSend = { 
	orderDataSend: Inputs | null; 
	orderItemsSend: TypeOrderItem[] | null;
}

enum PositionForm {
	Start,
	End
}

const orderSend = {
	orderItemsSend:null,
	orderDataSend:null
} as TypeOrderSend;

function OrderModal() {

	const router = useRouter()
	const dispatch = useAppDispatch();
	const { orderItems, totalPrice } = useAppSelector(store => store.order);
	const [position,  setPosition] = useState<PositionForm>(PositionForm.Start);

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
		orderSend.orderDataSend = data;
		orderSend.orderItemsSend = orderItems;
		setPosition(PositionForm.End);
		/*
		console.log(data);
		dispatch(setVisible());
		router.push('/thank');
		*/
	}

	const onError: SubmitErrorHandler<Inputs> = (error) => console.log(error);

	return ( 
		<div 
			onClick={() => dispatch(setVisible())}
			className={styles.orderModalBox}
		>
			<div 
				className={styles.modalContent}
				onClick={e => e.stopPropagation()}
			>
				{orderItems.length > 0 
				?
					<>
					{position === PositionForm.Start &&
						<form 
							onSubmit={handleSubmit(onSubmit, onError)} 
							className={styles.orderForm}
						>

						<h4>Заполните форму</h4>

						<div className={styles.inputBox}>
							<label>ФИО:</label>
							<input {...register("fio", { required: true, maxLength: 60, minLength:10 })} />
							{errors.fio?.type === "required" && (
								<p className={styles.error}>Введите ваше ФИО</p>
							)}
							{(errors.fio?.type === "maxLength" || errors.fio?.type === "minLength") && (
								<p className={styles.error}>Введите корректное ФИО</p>
							)}
						</div>

						<div className={styles.inputBox}>
							<label>Телефон:</label>
							<input {...register("tell", { required: true, maxLength: 15, minLength:11 })} />
							{errors.tell?.type === "required" && (
								<p className={styles.error}>Введите ваш номер телефона</p>
							)}
							{(errors.tell?.type === "maxLength" || errors.tell?.type === "minLength") && (
								<p className={styles.error}>Введите корректный номер телефона</p>
							)}
						</div>

						<div className={styles.inputBox}>
							<label>Адрес доставки:</label>
							<textarea
								{...register("adress", { required: true, maxLength: 200, minLength:10 })}
								rows={3}
							></textarea>
							{errors.adress?.type === "required" && (
								<p className={styles.error}>Введите адрес доставки</p>
							)}
							{(errors.adress?.type === "maxLength" || errors.adress?.type === "minLength") && (
								<p className={styles.error}>Введите корректный адрес доставки</p>
							)}
						</div>

						<button type="submit">Далее</button>
						</form>
					}
					{position === PositionForm.End &&
						<div className={styles.orderList}>
							<h3>Ваш заказ:</h3>
							<div className={styles.orderItemsBox}>
								{orderItems.map(item => 
									<div key={item.product.id} className={styles.orderItem}>
										<p>{item.product.title}</p>
										<div className={styles.itemPrice}>
											<span>Кол-во:{item.quantity} шт.</span>
											<span>Цена: {item.product.price} &#8381;</span>
										</div>
									</div>		
								)}
								<h4>Итого: {totalPrice} &#8381;</h4>
							</div>
							<button
								onClick={() => {
									dispatch(setVisible());
									dispatch(clearCart());
									router.push('/thank');
								}} 
								className={styles.confirmBtn}>
								Оплатить на сайте
							</button>
							<button
								onClick={() => {
									dispatch(setVisible());
									dispatch(clearCart());
									router.push('/thank');
								}} 
								className={styles.confirmBtn}>
								Оплатить при получении
							</button>
						</div>
					}
					</>
				:
					<div className={styles.emptyOrder}>
						<h4>У вас нет товаров в карзине!</h4>
						<p>Перейдите в каталог и добавьте понравившиеся товары, а после сделайте заказ.</p>
						<button onClick={() => {
							dispatch(setVisible());
							router.push('/catalog');
						}}>Каталог</button>
					</div>
				}
			</div>
		</div>
	);
}

export default OrderModal;