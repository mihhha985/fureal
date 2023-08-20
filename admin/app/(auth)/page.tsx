"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Card, TextField} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Home() {
	const router = useRouter();
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const authHandler = () => {
		//if(login === process.env.login 
		//&& password === process.env.password)
		router.push('/main');
	}

  return (
		<Card sx={{width:"380px", m:"5vh auto"}} variant='outlined'>
			<CardContent>
					<Typography variant="h3" gutterBottom>Вход</Typography>
					<TextField 
						label="Login" 
						variant="standard"
						onChange={e => setLogin(e.target.value)} 
						value={login}
					/>
					<TextField
						label="Password"
						variant="standard" 
						type="password"
						autoComplete="current-password"
						onChange={e => setPassword(e.target.value)}
						value={password}	
					/>
			</CardContent>
			<CardActions>
				<Button
					onClick={authHandler}
					type='button' 
					variant="contained">
					Send
				</Button>
			</CardActions>
		</Card>
  )
}
