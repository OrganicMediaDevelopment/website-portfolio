/* © 2023 Organic Media Development. All Rights reserved. For more information: contact@organicmediadevelopment.com */

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BarCharts from '../components/barcharts';
import LineCharts from '../components/linecharts';
import '../components/PieChart.css';

export default function Contact() {
	return (

		<
		main > {
			/* Hero unit */ } <
		Container sx = {
			{
				py: 2
			}
		}
		maxWidth = "sm" >
		<
		Typography variant = "body"
		align = "center"
		color = "text.secondary"
		paragraph >
		User Interface Developer

		<
		/Typography> <
		/Container> <
		Container sx = {
			{
				py: 8
			}
		}
		maxWidth = "md" > {
			/* End hero unit */ } <
		Grid container spacing = {
			4
		} >

		<
		Grid item key = {
			1
		}
		xs = {
			12
		}
		sm = {
			6
		}
		md = {
			4
		} >
		<
		Card sx = {
			{
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}
		} >
		<
		BarCharts / >
		<
		CardContent sx = {
			{
				flexGrow: 1
			}
		} >

		<
		Typography >
		I am an independently motivated worker, dedicated to continuous learning, and persistent in improving computer user experiences. <
		/Typography> <
		/CardContent> <
		CardActions >
		<
		Typography gutterBottom variant = "h5" >
		<
		Button color = "secondary"
		variant = "contained"
		href = "/experience" > Experience < /Button> <
		/Typography> <
		/CardActions> <
		/Card> <
		/Grid>

		<
		Grid item key = {
			2
		}
		xs = {
			12
		}
		sm = {
			6
		}
		md = {
			4
		} >
		<
		Card sx = {
			{
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}
		} >
		<
		LineCharts / >
		<
		CardContent sx = {
			{
				flexGrow: 1
			}
		} >
		<
		Typography >
		I enjoy logical problem - solving and using my analytical skills to take on complex challenges and find flexible, creative, and simple solutions. <
		/Typography> <
		/CardContent> <
		CardActions >
		<
		Typography gutterBottom variant = "h5" >
		<
		Button color = "secondary"
		variant = "contained"
		href = "/portfolio" > Portfolio < /Button> <
		/Typography> <
		/CardActions> <
		/Card> <
		/Grid>

		<
		Grid item key = {
			3
		}
		xs = {
			12
		}
		sm = {
			6
		}
		md = {
			4
		} >
		<
		Card sx = {
			{
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}
		} >
		<
		div style = {
			{
				"height": '100%',
				"display": "flex"
			}
		} >
		<
		div className = "pie-wrap pie-wrap2" >
		<
		div className = "slice1 slice-wrap" > < /div> <
		div className = "slice2 slice-wrap" > < /div> <
		/div> <
		/div> <
		CardContent sx = {
			{
				flexGrow: 1
			}
		} >
		<
		Typography >
		As a professional with over 20 years of technology industry experience, I successfully design, develop,
		and maintain user interfaces
		for software applications. <
		/Typography> <
		/CardContent> <
		CardActions >
		<
		Typography gutterBottom variant = "h5" >
		<
		Button color = "secondary"
		variant = "contained"
		href = "/resume" > Resume < /Button> <
		/Typography> <
		/CardActions> <
		/Card> <
		/Grid>

		<
		/Grid> <
		/Container> <
		/main>

	);
}