"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter, usePathname } from 'next/navigation';
import { useMemo } from 'react';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DraftsIcon from '@mui/icons-material/Drafts';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MailIcon from '@mui/icons-material/Mail';

import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const CustomBox = styled(Box)(() => ({
  padding:'6px 8px', 
	borderRadius:'5px',
	cursor:'pointer',
	position:'relative',
	'&:hover':{
		backgroundColor: 'rgba(0, 0, 0, 0.04)',
	}
}));

const MyNotificationsActive = styled(Box)(() => ({
	position:'absolute',
	width:'10px',
	height:'10px',
	borderRadius:'50%',
	background:orange[300],
	top:'3px',
	right:'3px',
}));

export default function ButtonAppBar() {
	const router = useRouter();
	const pathname = usePathname();
	
	const head = useMemo(() => {
		switch(pathname){
			case '/main':
				return {
					title: 'Главная',
					icon: <OtherHousesIcon fontSize='large' />
				};
			case '/category':
				return {
					title: 'Категории',
					icon: <MenuBookIcon fontSize='large' />
				};
			case '/product':
				return {
					title:'Товары',
					icon: <StorefrontIcon fontSize='large' />
				};
			case '/orders':
				return {
					title:'Заказы',
					icon: <AddShoppingCartIcon fontSize='large' />
				};
			case '/sender':
				return {
					title: 'Рассылка',
					icon: <DraftsIcon fontSize='large' />
				};
			case '/document':
				return {
					title:'Документы',
					icon: <FolderCopyIcon fontSize='large' />
				};
			default:
				return {
					title: 'Главная',
					icon: <OtherHousesIcon fontSize='large'/>
				};
		}
	}, [pathname]);

  return (
    <Box
			sx={{ 
			flexGrow: 1,
		}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
					  <span style={{position:'relative', top:'5px', paddingRight:'20px'}}>
							{head.icon}
						</span>
            <span>
							{head.title}
						</span>
          </Typography>
					<Box sx={{display:'flex', columnGap:'5px', mr:'60px'}}>
						<CustomBox>
							<MailIcon/>
						</CustomBox>	
						<CustomBox>
							<NotificationsActiveIcon />
							<MyNotificationsActive />
						</CustomBox>
					</Box>

          <Button 
						onClick={() => router.push('/')}
						color="inherit"
					>
						<ExitToAppIcon />
						<span style={{position:'relative', top:'1px', left:'1px'}}>Выход</span>
					</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}