import Image from "next/image";
import Link from "next/link";
import flour from "@/public/flour.png";
import styles from "./CatalogItem.module.scss";
import { ICatalogItem } from "@/types/CatalogTypes";
import AddCart from "@/components/UI/addCart/AddCart";
import ItemCaption from "../UI/itemCaption/ItemCaption";

function CatalogItem({id, title, price, description}: ICatalogItem) {

	return ( 
		<Link href={'/catalog/' + id} className={styles.catalogItem}>
			<div className={styles.imageBox}>
				<Image src={flour} alt={'Венок'} style={{
					objectFit: 'contain', 
				}} sizes="100%" fill/>
			</div>
			<div className={styles.itemCaption}>
				<ItemCaption title={title} price={price} description={description} />
				<p className={styles.itemTitle}>{title}</p>
			</div>

			<AddCart id={id} title={title} price={price} />	
		</Link>
	);
}

export default CatalogItem;