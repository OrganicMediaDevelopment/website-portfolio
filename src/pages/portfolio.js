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
import ImageViewer from 'react-simple-image-viewer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

export default function Portfolio() {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	const [data, setData] = useState([]);
	const [images, setImages] = useState([]);

	const getData = () => {
		fetch('../portfolio.json', {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				const images = [];
				myJson.map((item) => (
					images.push(item.image)
				))
				setImages(images);
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
				py: 2
			}
		}
		maxWidth = "sm" >
		<
		Typography variant = "body"
		align = "center"
		color = "text.secondary"
		paragraph >
		I enjoy logical problem - solving and using my analytical skills to take on complex challenges and find flexible, creative, and simple solutions. <
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
		Portfolio <
		/Typography> {
			/* End hero unit */ } <
		Grid container spacing = {
			4
		} > {
			data.map((item, index) => ( <
				Grid item key = {
					item.id
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
				CardMedia component = "img"
				sx = {
					{
						// 16:9
						pt: '5%',
						height: '100%',
						display: 'flex'
					}
				}
				image = {
					item.image
				}
				title = {
					item.job
				}
				/> <
				CardContent sx = {
					{
						flexGrow: 1
					}
				} >
				<
				Typography variant = "h8"
				component = "h4" > {
					item.company
				} <
				/Typography> <
				Typography gutterBottom variant = "body2" > {
					item.date
				} <
				/Typography><Divider / >
				<
				Typography gutterBottom variant = "subtitle1" > {
					item.title
				} <
				/Typography> <
				Typography gutterBottom variant = "body2" > {
					item.job
				} <
				/Typography><Divider / >
				<
				Typography variant = "h8"
				component = "h6" > {
					item.skills
				} <
				/Typography> <
				/CardContent> <
				CardActions >
				<
				Button size = "small"
				color = "secondary"
				variant = "contained"
				onClick = {
					() => openImageViewer(index)
				} > View < /Button> <
				/CardActions> <
				/Card> <
				/Grid>
			))
		} {
			isViewerOpen && ( <
				ImageViewer src = {
					images
				}
				currentIndex = {
					currentImage
				}
				onClose = {
					closeImageViewer
				}
				disableScroll = {
					false
				}
				backgroundStyle = {
					{
						backgroundColor: "rgba(0,0,0,0.8)"
					}
				}
				closeOnClickOutside = {
					true
				}
				/>
			)
		} <
		/Grid>

		<
		/Container> <
		/main>

	);
}