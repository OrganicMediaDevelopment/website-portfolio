/* © 2023 Organic Media Development. All Rights reserved. For more information: contact@organicmediadevelopment.com */

import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
	FaFileWord,
	FaFilePdf,
	FaFileAlt
} from 'react-icons/fa';

export default function Resume() {
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
		As a professional with over 20 years of technology industry experience, I successfully design, develop,
		and maintain user interfaces
		for software applications. <
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
		Resume <
		/Typography>

		<
		Grid container spacing = {
			12
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
		Button className = "button-link"
		variant = "contained"
		href = "./files/ArinSturm.pdf"
		target = "_blank" >
		<
		Typography component = "h1"
		variant = "h6"
		align = "center"
		color = "text.primary"
		gutterBottom >


		<
		FaFilePdf className = "resume-icon PDF-icon" / > Resume.PDF <
		/Typography> <
		/Button>

		<
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
		Button className = "button-link"
		variant = "contained"
		href = "./files/ArinSturm.text"
		target = "_blank" >
		<
		Typography component = "h1"
		variant = "h6"
		align = "center"
		color = "text.primary"
		gutterBottom >

		<
		FaFileAlt className = "resume-icon Text-icon" / >
		Resume.TEXT <
		/Typography> <
		/Button> <
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
		Button className = "button-link"
		variant = "contained"
		href = "./files/ArinSturm.docx"
		target = "_blank" >
		<
		Typography component = "h1"
		variant = "h6"
		align = "center"
		color = "text.primary"
		gutterBottom >


		<
		FaFileWord className = "resume-icon Word-icon" / >
		Resume.DOCX <
		/Typography>

		<
		/Button> <
		/Grid>




		<
		/Grid> <
		/Container> <
		/main>

	);
}