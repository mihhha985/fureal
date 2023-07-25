import CatalogItem from '@/components/catalogItem/CatalogItem';
import styles from "./CatalogBox.module.scss";
import axios from 'axios';
import { ICatalogItem } from "@/types/CatalogTypes";
import { revalidatePath } from 'next/cache';

const fetchData = async ():Promise<ICatalogItem[] | undefined> => {
	try{
		const response = await axios.get(`${process.env.serverUri}/catalog`);

		return response.data;
	}catch(err){
		console.log(err);
	}

	revalidatePath('/');
}

async function CataLogBox() {

	const data = await fetchData();
	
	if(data && data.length > 0){

		return ( 
			<div className={styles.catalog}>
				<div className='container'>
					<div className={styles.catalogContainer}>
							{data.map((item:ICatalogItem) => 
								<CatalogItem 
									key={item.id}
									id={item.id} 
									title={item.title}
									price={item.price}
									description={item.description}
								/>
							)}
					</div>
				</div>	
			</div>
		);
	}else{
		return (
			<h3>Ошибка!!! Не удалось получить список продуктов</h3>
		)
	}	
}

export default CataLogBox;