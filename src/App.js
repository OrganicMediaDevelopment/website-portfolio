/* © 2023 Organic Media Development. All Rights reserved. For more information: contact@organicmediadevelopment.com */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {
	createTheme,
	ThemeProvider
} from '@mui/material/styles';
import {
	ThemeOptions
} from '@mui/material/styles';
import './App.css';
import Navbar from './navbar';
import logo from './images/omd_logo.png';

export const themeOptions: ThemeOptions = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#ffffff',
			contrastText: '#000000',
		},
		secondary: {
			main: '#9acd32',
		},
		info: {
			main: '#9acd32',
		},
		success: {
			main: '#9acd32',
		},
	},
});

function Copyright() {
	return ( <
		Typography variant = "body2"
		color = "text.secondary"
		align = "center" > {
			'Copyright © '
		} <
		Link color = "inherit"
		href = "mailto:contact@organicmediadevelopment.com" >
		Organic Media Development <
		/Link>{' '}
		2013 - {
			new Date().getFullYear()
		} {
			'.'
		} <
		/Typography>
	);
}

function App() {
	return ( <
		ThemeProvider theme = {
			themeOptions
		} >
		<
		CssBaseline / >

		<
		Navbar / >

		{
			/* Footer */ } <
		Box sx = {
			{
				bgcolor: 'background.paper',
				p: 6
			}
		}
		component = "footer" >


		<
		Box sx = {
			{
				mx: 'auto',
				width: 350,
				display: 'flex',
				flexDirection: 'row'
			}
		} >
		<
		Box sx = {
			{
				pr: 2
			}
		} > < Link color = "inherit"
		className = "footer-link"
		href = "./contact" > Contact < /Link></Box >
		<
		Box sx = {
			{
				pr: 2
			}
		} > < Link color = "inherit"
		className = "footer-link"
		href = "./experience" > Experience < /Link></Box >
		<
		Box sx = {
			{
				pr: 2
			}
		} > < Link color = "inherit"
		className = "footer-link"
		href = "https://github.com/OrganicMediaDevelopment/website-portfolio"
		target = "_blank" > GitHub < /Link></Box >
		<
		Box sx = {
			{
				pr: 2
			}
		} > < Link color = "inherit"
		className = "footer-link"
		href = "./portfolio" > Portfolio < /Link></Box >
		<
		Box sx = {
			{
				pr: 2
			}
		} > < Link color = "inherit"
		className = "footer-link"
		href = "./resume" > Resume < /Link></Box >
		<
		/Box> <
		Typography variant = "h6"
		align = "center"
		gutterBottom >
		<
		a href = "/contact" > < img src = {
			logo
		}
		className = "App-logo-page"
		alt = "logo" / > < /a> <
		/Typography> <
		Copyright / >
		<
		/Box> {
			/* End footer */ } <
		/ThemeProvider>


	);
}

export default App;