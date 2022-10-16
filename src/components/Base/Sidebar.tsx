import React, { useContext } from 'react'
import {
  Toolbar,
  Divider,
  Button,
  ButtonGroup,
  CardMedia,
  Stack,
  Box
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { DarkModeContext } from '../../context/darkModeContext'
import * as logo from '../img/logo.svg'
import CustomLink from '../CustomLink/CustomLink'
import AuthStatus from '../auth/AuthStatus'
import useAuth from '../../hooks/useAuth'

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const handleSystemThemeClick = () =>
    prefersDarkMode ? dispatch({ type: 'DARK' }) : dispatch({ type: 'LIGHT' })

  let auth = useAuth()

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
        <CustomLink to='/login'>Login</CustomLink>
        <CustomLink to='/'>Главная</CustomLink>
        <CustomLink to='/portfolio'>Портфолио</CustomLink>
        <CustomLink to='/contact'>Контакты</CustomLink>
        {auth.user && <CustomLink to='/admin'>Administration</CustomLink>}
      </Stack>

      <Box
        sx={{
          margin: '24px',
          position: 'absolute',
          bottom: 20
        }}
      >
        <AuthStatus />
      </Box>

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
