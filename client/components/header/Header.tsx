"use client"

import Image from "next/image";
import Link from 'next/link';
import {MouseEvent, useState} from "react";
import { usePathname } from 'next/navigation'
import OrderModal from "@/components/orderModal/OrderModal";
import { useAppSelector} from "@/store/index";
import {FaCartShopping, FaSquarePhone} from "react-icons/fa6";
import { IoMdMenu, IoIosCloseCircleOutline } from "react-icons/io";
import logo from "@/public/logo.png";
import styles from "./Header.module.scss";

function Header() {
	const pathname = usePathname();
	const { isVisible } = useAppSelector(state => state.orderModal);
	const { totalCount, totalPrice } = useAppSelector(state => state.order);
	const [priceVisible, setPriceVisible] = useState<boolean>(false);
	const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

	const heandleClick = () => {
		let content = document.querySelector('.content') as HTMLDivElement;
		let loader = document.querySelector('.loader') as HTMLDivElement;
		let body  = document.querySelector('body') as HTMLBodyElement;
		content.style.display = "none";
		loader.style.display = "block";
		body.style.background = "#202020"
		setTimeout(() => {
			content.style.display = "block";
			loader.style.display = "none";
			body.style.backgroundImage = "url('/bg.jpg')";
		}, 1200);
	}

	return (
		<> 
		{isVisible && <OrderModal />}
		{mobileMenuVisible &&
			<div 
				className={styles.moduleMenuContaiten}
				onClick={() => setMobileMenuVisible(false)}
			>
					<div 
						className={styles.mobileMenuContent}
						onClick={e => e.stopPropagation()}
					>
						<div>
							<p className={styles.phone}>
								<FaSquarePhone size={32} color="#202020"/>
								<span>8-800-145-16-77</span>
							</p>
						</div>
						<nav className={styles.menu}>
							<Link	 
								href={"/"}
								onClick={() => setMobileMenuVisible(false)} 
								className={pathname === '/' ? styles.active : ''}>
								Главная
							</Link>
							<Link 
								href={"/catalog"}
								onClick={() => setMobileMenuVisible(false)} 
								className={pathname === '/catalog' ? styles.active : ''}>
								Каталог
							</Link>
							<Link 
								href={"/delivery"}
								onClick={() => setMobileMenuVisible(false)} 
								className={pathname === '/delivery' ? styles.active : ''}>
								Доставка и оплата
							</Link>
							<Link href={"/contact"}
								onClick={() => setMobileMenuVisible(false)} 
								className={pathname === '/contact' ? styles.active : ''}>
								Контакты
							</Link>
						</nav>
					</div>
			</div>
		}
		<header className={styles.header}>
				<Link href={"/"} className={styles.logo}>
					<Image src={logo} alt='logo' />
				</Link>
				<div>
					<p className={styles.phone}>
						<FaSquarePhone size={32} color="#e2e2e2"/>
						<span>8-800-145-16-77</span>
					</p>
					<h1>Вечная память</h1>
				</div>
				<nav className={styles.menu}>
					<Link 
						href={"/"} 
						onClick={heandleClick}
						className={pathname === '/' ? styles.active : ''}>
						<i>Главная</i>
						<span></span>
					</Link>
					<Link 
						href={"/catalog"}
						onClick={heandleClick} 
						className={pathname === '/catalog' ? styles.active : ''}>
						<i>Каталог</i>
						<span></span>
					</Link>
					<Link 
						href={"/delivery"} 
						onClick={heandleClick}
						className={pathname === '/delivery' ? styles.active : ''}>
						<i>Доставка и оплата</i>
						<span></span>
					</Link>
					<Link 
						href={"/contact"} 
						onClick={heandleClick}
						className={pathname === '/contact' ? styles.active : ''}>
						<i>Контакты</i>
						<span></span>
					</Link>
				</nav>
				<div className={styles.cartBox}>
					<Link 
						href={"/order"} 
						onMouseOver={() => setPriceVisible(true)}
						onMouseOut={() => setPriceVisible(false)}
					>
						<FaCartShopping size={24} color="#e2e2e2" />
						<span>{totalCount}</span>
					</Link>
					{priceVisible &&
						<div className={styles.totalPrice}>Итого: {totalPrice} &#8381;</div>
					}
				</div>
				<div
					onClick={() => setMobileMenuVisible(prev => !prev)} 
					className={styles.toggleMenu}
				>
					{mobileMenuVisible
						?
						<IoIosCloseCircleOutline size={40} color="#e2e2e2" />
						:
						<IoMdMenu size={40} color="#e2e2e2" />
					}
				</div>
		</header>
		</>
	);
}

export default Header;