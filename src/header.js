/* © 2023 Organic Media Development. All Rights reserved. For more information: contact@organicmediadevelopment.com */

import {
  useLocation
} from 'react-router-dom';
import logo from './images/omd_logo.png';
import logoO from './images/omdO.png';
import {
  FaBars
} from 'react-icons/fa';
import Navbar from './navbar';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'


export default function Header() {
  const location = useLocation();
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu'
  })

  document.title = ((location.pathname).substring(1)).charAt(0).toUpperCase() + (location.pathname).substring(2) + ' - Organic Media Development';
  return (

    <
    div >
    <
    Toolbar >
    <
    AppBar position = "relative"
    sx = {
      {
        borderRadius: '4px'
      }
    } >
    <
    Box sx = {
      {
        mx: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      }
    } >

    <
    Link sx = {
      {
        width: '5%',
      }
    }
    href = "/contact" > < img src = {
      logoO
    }
    className = "App-logo-O"
    alt = "logo" / > < /Link> <
    Typography variant = "body2"
    color = "text.secondary"
    className = "ease-in-ui"
    noWrap >
    <
    Link color = "inherit"
    href = "mailto:contact@organicmediadevelopment.com"
    sx = {
      {
        display: 'flex',
        mt: 2
      }
    } >
    <
    div style = {
      {
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: '20rem'
      }
    } > contact @organicmediadevelopment.com < /div> <
    /Link> <
    /Typography>


    <
    Container sx = {
      {
        mt: 1.5,
        textAlign: 'right',
        width: '60%',
      }
    } >
    <
    Link variant = "contained" {
      ...bindTrigger(popupState)
    }
    sx = {
      {
        color: 'grey',
        fontSize: '3vmin'
      }
    } >
    <
    FaBars className = "hand-link" / >
    <
    /Link> <
    Menu {
      ...bindMenu(popupState)
    } >
    <
    MenuItem href = "/contact"
    className = {
      (location.pathname === '/contact' ? 'hidden' : '')
    }
    component = "a"
    onClick = {
      popupState.close
    } > Contact < /MenuItem> <
    MenuItem href = "/experience"
    className = {
      (location.pathname === '/experience' ? 'hidden' : '')
    }
    component = "a"
    onClick = {
      popupState.close
    } > Experience < /MenuItem> <
    MenuItem href = "/portfolio"
    className = {
      (location.pathname === '/portfolio' ? 'hidden' : '')
    }
    component = "a"
    onClick = {
      popupState.close
    } > Portfolio < /MenuItem> <
    MenuItem href = "/resume"
    className = {
      (location.pathname === '/resume' ? 'hidden' : '')
    }
    component = "a"
    onClick = {
      popupState.close
    } > Resume < /MenuItem> <
    /Menu> <
    /Container> <
    /Box>

    <
    /AppBar> <
    /Toolbar>

    <
    Container maxWidth = "sm"
    sx = {
      {
        mt: 3
      }
    } >
    <
    Box sx = {
      {
        mx: 'auto',
        width: 275,
        display: 'flex',
        flexDirection: 'row'
      }
    } >

    <
    Box sx = {
      {
        pr: 2
      }
    } >
    <
    Typography variant = "h2"
    className = "header-name header-grey" >
    Arin < /Typography> <
    /Box> <
    Typography variant = "h2"
    color = "text.primary"
    className = "header-name header-bold" >
    Sturm < /Typography> <
    /Box>


    <
    /Container>

    <
    /div>



  );
}