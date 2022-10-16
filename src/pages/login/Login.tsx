import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

interface LocationState {
  from: {
    pathname: string
  }
}

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = (location.state as LocationState)?.from?.pathname || '/'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get('name') as string

    auth.signIn(username, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div
      style={{
        height: '70vh'
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display='flex'
          flexDirection={'column'}
          maxWidth={400}
          alignItems='center'
          justifyContent='center'
          margin='auto'
          marginTop={5}
          padding={3}
          borderRadius={3}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ':hover': { boxShadow: '10px 10px 20px #ccc' }
          }}
        >
          <Typography variant='h4' padding={3} textAlign='center'>
            Login
          </Typography>
          <TextField
            type={'text'}
            variant='outlined'
            placeholder='Name'
            name='name'
          />
          <Button
            type='submit'
            variant='contained'
            color='warning'
            sx={{
              marginTop: 3,
              borderRadius: 3
            }}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Login
