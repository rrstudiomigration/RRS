import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Toolbar,
  Divider,
  Button,
  ButtonGroup,
  CardMedia,
  Stack
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { DarkModeContext } from '../../context/darkModeContext'
import * as logo from '../img/logo.svg'

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const handleSystemThemeClick = () => {
    if (prefersDarkMode) {
      dispatch({ type: 'DARK' })
    } else {
      dispatch({ type: 'LIGHT' })
    }
  }

  return (
    <nav>
      <Toolbar>
        <CardMedia
          component='img'
          image={logo.default}
          alt='RRStudio logo'
          sx={{ width: 1 }}
        />
      </Toolbar>
      <Divider />
      <Stack paddingTop={'5px'} spacing={1} direction='column'>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#eeeff8' : '',
              color: isActive ? '#5383ff' : 'black',
              borderRadius: '0 22px 22px 0',
              paddingLeft: '25px',
              textDecoration: 'none',
              padding: '5px 20px'
            }
          }}
          className='nav_link'
          to={'/'}
        >
          Главная
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#eeeff8' : '',
              color: isActive ? '#5383ff' : 'black',
              borderRadius: '0 22px 22px 0',
              paddingLeft: '25px',
              textDecoration: 'none',
              padding: '5px 20px'
            }
          }}
          className='nav_link'
          to={'/portfolio'}
        >
          Портфолио
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? '#eeeff8' : '',
              color: isActive ? '#5383ff' : 'black',
              borderRadius: '0 22px 22px 0',
              paddingLeft: '25px',
              textDecoration: 'none',
              padding: '5px 20px'
            }
          }}
          className='nav_link'
          to={'/contact'}
        >
          Контакты
        </NavLink>
      </Stack>

      <ButtonGroup
        variant='outlined'
        aria-label='outlined button group'
        size='small'
        sx={{
          margin: '24px',
          position: 'absolute',
          bottom: 0
        }}
      >
        <Button onClick={() => dispatch({ type: 'LIGHT' })}>Light</Button>
        <Button onClick={() => dispatch({ type: 'DARK' })}>Dark</Button>
        <Button onClick={handleSystemThemeClick}>System</Button>
      </ButtonGroup>
    </nav>
  )
}
