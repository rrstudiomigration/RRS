import { AppBar, Box, CssBaseline, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Base/Sidebar'
import Footer from '../Base/Footer'
import MenuIcon from '@mui/icons-material/Menu'
import * as logo from '../img/logo.svg'

const drawerWidth = 240

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
    >
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open menu'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ ml: 2, justifyContent: 'flex-start', display: { sm: 'none' } }}
        >
          <MenuIcon />
          <img src={logo.default} alt='Logo' />
        </IconButton>
      </AppBar>
      <Box
        component='nav'
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: { xs: '50px', sm: 0 }
        }}
      >
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: '24px 0',
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Outlet />
      </Box>
      <Box
        component='footer'
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          border: '1px',
          borderRadius: '5px'
        }}
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
