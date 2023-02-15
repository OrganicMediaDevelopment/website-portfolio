/* © 2023 Organic Media Development. All Rights reserved. For more information: contact@organicmediadevelopment.com */

import * as React from 'react';
import {
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	render
} from 'react-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Experience() {
	const [data, setData] = useState([]);

	const getData = () => {
		fetch('../experience.json', {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				console.dir(myJson)
				setData(myJson)
			});
	}
	useEffect(() => {
		getData()
	}, [])

	return (

		<
		main > {
			/* Hero unit */ } <
		Container sx = {
			{
				py: 8
			}
		}
		maxWidth = "sm" >
		<
		Typography variant = "body"
		align = "center"
		color = "text.secondary"
		paragraph >
		I am an independently motivated worker, dedicated to continuous learning, and persistent in improving computer user experiences. <
		/Typography> <
		/Container> <
		Container sx = {
			{
				py: 8
			}
		}
		maxWidth = "md" >
		<
		Typography component = "h2"
		variant = "h4"
		align = "center"
		color = "text.primary"
		style = {
			{
				"font-variant": "small-caps"
			}
		}
		gutterBottom >
		Experience <
		/Typography> {
			/* End hero unit */ } <
		Grid container spacing = {
			4
		} > {
			data.map((card) => ( <
				Grid item key = {
					card.id
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
				CardContent sx = {
					{
						flexGrow: 1
					}
				} >
				<
				Typography gutterBottom variant = "h8"
				component = "h3"
				sx = {
					{
						color: '#556b2f'
					}
				} > {
					card.category
				} <
				/Typography> <
				div style = {
					{
						"column-count": "2"
					}
				} > {
					card.skills.map((skill) => ( <
						Typography > {
							skill.name
						} <
						/Typography>
					))
				} <
				/div> <
				/CardContent> <
				/Card> <
				/Grid>
			))
		} <
		/Grid> <
		/Container> <
		/main>

	);
}