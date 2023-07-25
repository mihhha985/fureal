import Image from "next/image";
import { ICatalogItem } from "@/types/CatalogTypes";
import axios from 'axios';
import img from "@/public/flour.png";
import styles from "./page.module.scss";
import ProductOrder from "@/components/productOrder/ProductOrder";

const fetchData = async (id:string):Promise<ICatalogItem | undefined> => {
	try{
		const response = await axios.get(`${process.env.serverUri}/catalog/${id}`);

		return response.data;
	}catch(err){
		console.log(err);
	}
}


async function Page({ params }: { params: { id: string } }) {

	const data = await fetchData(params.id);

	return ( 
		<section id="product">
			<h3 className="title">Патриотические венки</h3>
			<div className="container">
				<div className={styles.productContainer}>
					<div className={styles.productImages}>
						<Image 
							src={img} 
							alt="Венок" 
							style={{
								objectFit: 'contain', // cover, contain, none
							}}
							priority fill/>
					</div>
					<div className={styles.productCaption}>
						<h4>{data?.title}</h4>
						<h5>Цена: {data?.price} &#8381;</h5>
						{data !== undefined && data !== null &&
							<ProductOrder id={data.id} title={data.title} price={data.price} />
						}
					</div>
				</div>
				<div className={styles.productDescription}>
					<h3>Характеристики</h3>
					<p>{data?.description}</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum quos 
					quasi aliquid facilis repudiandae, hic voluptatum quidem laboriosam aspernatur consequatur, possimus sed ipsam iure ex sunt! Aut dolorem velit deserunt, voluptatum nisi atque quisquam, libero natus illo, 
					consectetur tempore? Dolorem dolore porro aspernatur rerum adipisci reprehenderit molestiae.</p>
				</div>
				<div className={styles.productDescription}>
					<h3>Отзывы</h3>
					<h4>Нет отзывов о данном товаре</h4>
				</div>
			</div>
		</section>
	);
}

export default Page;