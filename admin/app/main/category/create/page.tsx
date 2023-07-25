"use client"
import {useState} from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import {Box, Card, Grid, Button, TextField, Alert} from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {ICreateCategory} from "@/types/category";

function Page() {
	const router = useRouter()
	const create = async () => {

		const data:ICreateCategory = {
			name:title,
			order:order
		}
		
		await fetch(process.env.serverUrl + '/category', {
			method:'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body:JSON.stringify(data)
		})
		.then(() => {
			setSuccess(true);
			setTitle('');
			setOrder(0);
			setTimeout(() => {
				setSuccess(false);
			}, 2500)
		})
		.catch(() => {
			setError(true);
		})
	}

	const [title, setTitle] = useState<string>('');
	const [order, setOrder] = useState<number | undefined>();
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	return ( 
		<>
			{error &&
				<Box border="1px solid rgba(30, 70, 32, .1)" borderRadius={"6px"} mb={2}>
					<Alert severity="error">Ошибка при создании категории!!!</Alert>
				</Box>
			}
			{success &&
				<Box border="1px solid rgba(30, 70, 32, .1)" borderRadius={"6px"} mb={2}>
					<Alert severity="success">Новая категория успешно созданна!!!</Alert>
				</Box>
			}
			<Breadcrumbs aria-label="breadcrumb">
				<Link href="/main/category">Категории</Link>
				<Typography color="text.primary">Создать</Typography>
			</Breadcrumbs>
			<Box maxWidth={"600px"} marginTop={4}>
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
							onChange={e => setOrder(Number(e.target.value))}
							value={order}
							type="number" 
							label="Порядок" 
							variant="standard" 
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