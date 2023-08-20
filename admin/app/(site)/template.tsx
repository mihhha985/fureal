"use client"
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { hide } from '@/store/features/alertsSlice';
import ButtonAppBar from "@/component/ButtonAppBar";
import Snackbar from '@mui/material/Snackbar';

import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import SideBar from '@/component/SideBar';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Template({ children }: { children: React.ReactNode }) {
	const {text, status, type} = useAppSelector(state => state.alert);
	const dispatch = useAppDispatch();
	
  return (
		<div className="main-template">
			<ButtonAppBar />
			<div className="main-container">
				<SideBar />
				<div className="content">
					{children}
				</div>
			</div>
			<Snackbar 
				open={status}
				autoHideDuration={6000} 
				onClose={() => dispatch(hide())}>
				<Alert 
					onClose={() => dispatch(hide())} 
					severity={type as AlertColor}
					sx={{ width: '100%' }}>
					{text}
				</Alert>
      </Snackbar>
		</div>
	)
}