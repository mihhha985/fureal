import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/darklogo.png";
import styles from "./Footer.module.scss";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footerContainer}>
					<div>
						<Image src={logo} alt={"logo"} height={120} sizes=""/>
					</div>
					<ul className={styles.menu}>
						<li>
							<Link href={"/"} className={styles.active}>Главная</Link>
						</li>
						<li>
							<Link href={"/catalog"}>Каталог</Link>
						</li>
						<li>
							<Link href={"/catalog"}>Доставка и оплата</Link>
						</li>
						<li>
							<Link href={"/catalog"}>Контакты</Link>
						</li>
					</ul>
					<div>
						<h4>Контакты:</h4>
						<p>г. Краснодар Северная 216</p>
						<p>8-800-145-16-77</p>
						<p>recuerdo.eterno@yandex.ru</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;