"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter, usePathname } from 'next/navigation';

export default function ButtonAppBar() {
	const router = useRouter();
	const pathname = usePathname();

	const setPageName = ():string => {
		switch(pathname){
			case '/main':
				return 'Главная';
			case '/main/category':
				return 'Категории';
			case '/main/product':
				return 'Товары';
			case '/main/orders':
				return 'Заказы';
			case '/main/sender':
				return 'Рассылка';
			case '/main/document':
				return 'Документы';
			default:
				return 'Главная';
		}
	}

  return (
    <Box
			sx={{ 
			flexGrow: 1,
		}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {setPageName()}
          </Typography>
          <Button 
						onClick={() => router.push('/')}
						color="inherit"
					>Выход</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}