import styles from "./page.module.scss";

function Page() {
	return ( 
		<section>
			<div className={styles.thank}>
				<h3>Спасибо за ваш заказ!</h3>
				<h4>В блтжайшее рабочее время наш менеджер свяжется с вами для уточнения деталей заказа</h4>
			</div>
		</section>
	);
}

export default Page;