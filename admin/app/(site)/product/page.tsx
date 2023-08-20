"use client"
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch } from '@/store/hooks';
import { show } from '@/store/features/alertsSlice';

import Healpers from '@/helpers';
import Link from 'next/link';
import { IProduct } from '@/types/product';
import ProductItem from "@/component/ProductItem";

function Page() {
	const dispatch = useAppDispatch();
	const [data, setData] = useState<IProduct[] | []>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		async function getData() {
			const result = await fetch(process.env.serverUrl + '/catalog');

			if(result.ok){
				const data = await result.json();
				let sorted = Healpers.sortedItems(data);
				console.log(sorted);
				setLoading(false);
				setData(sorted);
			}else{
				dispatch(show({
					text:'Ошибка при получении продуктов! Перезагрузите страницу и попробуйте снова!',
					type:'error',
				}));
			}
		}

		getData();
	}, [dispatch]);

	if(loading){
		return(
			<Box sx={{ 
				position: "absolute", 
				top: "50%", 
				left: "50%", 
				transform:"translate(-50%, -50%)"}}>
      	<CircularProgress />
    	</Box>
		);
	}
	
	return ( 
		<>
			<Breadcrumbs>
				<Typography color="text.primary">Товары</Typography>
			</Breadcrumbs>
			<Stack spacing={2} mt={4}>
				{data.map((item:IProduct) => 
					<ProductItem key={item.id} item={item} />
				)}
			</Stack>
			<Stack spacing={2} style={{marginTop:'auto', paddingTop:"40px"}}>
      	<Pagination count={10} color="primary" />
			</Stack>
			<Link 
				style={{ position: 'fixed', bottom: 16, right: 16 }}
				href="/product/create">
				<SpeedDial
					ariaLabel="SpeedDial basic example"
					icon={<SpeedDialIcon />}
				>
				</SpeedDial>
			</Link>
		</>
	);
	
}

export default Page;