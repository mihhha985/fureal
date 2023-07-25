import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Link from 'next/link';
import { ICategory } from '@/types/category';

async function getData():Promise<ICategory[]> {
  const res = await fetch(process.env.serverUrl + '/category')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}

async function Page() {

	const data = await getData();
	console.log(data);

	if(data){
		return ( 
			<>
				<Breadcrumbs>
					<Typography color="text.primary">Категории</Typography>
				</Breadcrumbs>
				<Stack spacing={2} mt={4}>
					{data.map((item:ICategory) => 
						<Card 
							key={item.id}
							sx={{display:"flex", alignItems:"center", columnGap:"10px", padding:"10px 20px"}}
						>
							<Typography variant="h6" mr={'auto'} mb={0} gutterBottom>
								{item.name}
							</Typography>
							<Link href={`/main/category/update/${item.id}`}>
								<Tooltip title="Редактировать">
									<IconButton>
									<EditIcon />
									</IconButton>
								</Tooltip>
							</Link>
							{item.isActive 
								?
								<Switch defaultChecked/>
								:
								<Switch/>
							}
						</Card>
					)}
			</Stack>
			<Stack spacing={2} style={{marginTop:'auto'}}>
      	<Pagination count={10} color="primary" />
			</Stack>
			<Link href="/main/category/create">
				<SpeedDial
					ariaLabel="SpeedDial basic example"
					sx={{ position: 'absolute', bottom: 16, right: 16 }}
					icon={<SpeedDialIcon />}
				>
				</SpeedDial>
			</Link>
			</>
		);
	}else{
		return (
			<h3>Произошла ошибка при попытке получения данных. Попробуйте снова!</h3>
		)
	}
}

export default Page;