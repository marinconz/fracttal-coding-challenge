import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Paper, Grid, Container, Avatar } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

import {signin, signup} from '../../actions/auth'
import Input from './Input'
import './styles.css'

const Auth = () => {

  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignup) {
      dispatch(signup(form, navigate))
    } else {
      dispatch(signin(form, navigate))
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return(
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className="paper">
        <Avatar className="avatar">
          <LockOutlined/>
        </Avatar>
        <Typography varian="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button className="submit" type="submit" fullWidth variant="contained" color="primary" >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign Up' }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth