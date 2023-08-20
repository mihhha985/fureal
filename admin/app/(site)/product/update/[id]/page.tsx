"use client"
import {useState, useEffect} from "react";
import Link from 'next/link';
import { useRouter, useParams } from "next/navigation";
import {Box, Card, Grid, Button, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Input, InputLabel, InputAdornment, FormControl} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useAppDispatch } from '@/store/hooks';
import { show } from '@/store/features/alertsSlice';

import { ICategory, ICategorySelected } from '@/types/category';
import { ICreateProduct } from "@/types/product";

function Page() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const {id} = useParams();

	const [title, setTitle] = useState<string>('');
	const [desription, setDesription] = useState<string>('');
	const [price, setPrice] = useState<string>('');
	const [categories, setCategories] = useState<ICategorySelected[] | []>([]);
	const [category, setCategory] = useState<ICategorySelected>({});

	useEffect(() => {
		async function getData() {
			const result = await fetch(process.env.serverUrl + '/catalog/' + id);

			if(result.ok){
				const data = await result.json();
				console.log(data);
				setTitle(data.title);
				setDesription(data.description);
				setPrice(data.price);
			}else{
				router.push('/product');
				dispatch(show({
					text:'Ошибка при получении продукта! Перезагрузите страницу и попробуйте снова!',
					type:'error',
				}));
			}
		}

		getData();
	}, [id, router, dispatch]);

	useEffect(() => {
	  async function getData(){
			const result = await fetch(process.env.serverUrl + '/category');

			if(result.ok){
				const data = await result.json();
				const arr:ICategorySelected[] = data.map((item:ICategory) => ({id:item.id, label:item.name}))
				setCategories(arr); 
			}else{
				dispatch(show({
					text:'Ошибка при получении категорий! Перезагрузите страницу и попробуйте снова!',
					type:'error',
				}));
			}
		}

		getData();
	}, [dispatch]);

	const create = async () => {

		if(category && category.id !== undefined){
			const data: ICreateProduct = {
				title:title,
				description:desription,
				price:+price,
				categoryId:category.id,
			}

			const result = await fetch(process.env.serverUrl + '/catalog', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(data)
			})

			if(result.ok){
				router.push('/product');
				dispatch(show({
					text:'Товар успешно отредактирован!',
					type:'success',
				}));
			}else{
				dispatch(show({
					text:'Ошибка при редактировании товара! Перезагрузите страницу и попробуйте снова!',
					type:'error',
				}));
			}
		}
	}

	return ( 
		<>
			<Breadcrumbs aria-label="breadcrumb">
				<Link href="/product">Товары</Link>
				<Typography color="text.primary">Редактировать</Typography>
			</Breadcrumbs>
			<Box
				component="form"
				maxWidth={"600px"} 
				marginTop={4}>
      	<Card variant="outlined">

					<Grid 
						container
						flexDirection="column" 
						rowGap={4}
						p={2}
					>

						<TextField 
							onChange={e => setTitle(e.target.value)}
							value={title}
							label="Наименование" 
							variant="standard"
							required 
						/>
					
						<TextField 
							onChange={e => setDesription(e.target.value)}
							value={desription}
							label="Описание" 
							variant="standard"
							rows={4}
							multiline
							required 
						/>
						
						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel htmlFor="standard-adornment-amount">Цена *</InputLabel>
							<Input
								value={price}
								onChange={e => setPrice(e.target.value)}
								id="standard-adornment-amount"
								startAdornment={<InputAdornment position="start">&#8381;</InputAdornment>}
								required
							/>
						</FormControl>

						
						<Autocomplete
							onChange={(event: any, newValue: any) => {
								setCategory(newValue);
							}}
							disablePortal
							id="combo-box-demo"
							options={categories}
							sx={{ width: 300 }}
							renderInput={(params) => <TextField {...params} label="Категории" />}
						/>
					
						<Grid mt={2}>
							<Button 
								onClick={create}
								variant="contained">
								Сохранить
							</Button>
						</Grid>

					</Grid>
				</Card>
    	</Box>
		</>
	);
}

export default Page;