import styles from "./page.module.scss";

function Page() {
	return ( 
		<section id="catalog">
			<div className="container">
				<h3 className="title">Контакты</h3>
				<div className={styles.contactBox}>
					<div className={styles.recvezit}>
						<p>ИП Смирнова Дарья Евгеньевна</p>
						<p>ИНН: 231175643</p>
						<p>Адрес: г. Краснодар Северная 216</p>
						<p>Телефон: 8-800-145-16-77</p>
						<p>Email: recuerdo.eterno@yandex.ru</p>
					</div>
					<div className={styles.map}>
						<iframe src="https://yandex.ru/map-widget/v1/?ll=38.954274%2C45.043458&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjM3Mjk0MxJC0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7QtNCw0YAsINCh0LXQstC10YDQvdCw0Y8g0YPQu9C40YbQsCwgMjE2IgoNLtEbQhWBLDRC&z=17.1" width="100%" height="400" frameBorder="1"></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Page;