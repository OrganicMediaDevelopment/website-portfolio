/* © 2023 Organic Media Development. All Rights reserved. For more information: contact@organicmediadevelopment.com */

import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';

import Header from './header';
import Contact from './pages/contact';
import Experience from './pages/experience';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function Navbar() {
	return ( <
		BrowserRouter >
		<
		Header / >
		<
		Routes >
		<
		Route path = '/experience'
		element = {
			< Experience / >
		}
		/> <
		Route path = '/portfolio'
		element = {
			< Portfolio / >
		}
		/> <
		Route path = '/resume'
		element = {
			< Resume / >
		}
		/> <
		Route path = '/contact'
		element = {
			< Contact / >
		}
		/> <
		Route path = "/"
		element = {
			< Navigate replace to = "/contact" / >
		}
		/> <
		/Routes> <
		/BrowserRouter>


	);
}

export default Navbar