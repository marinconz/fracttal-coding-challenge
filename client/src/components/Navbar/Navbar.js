import React, { useState, useEffect } from 'react'
import {  Toolbar, Typography, Button } from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import { LOGOUT, } from '../../constants/actionTypes'

import './styles.css'


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    
    const logout = () =>{
        dispatch({type: LOGOUT})
        navigate('/auth')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])


    return(
        <div className="appbar">
            <h1 className="heading">EMPLOYEES</h1>
            <Toolbar className="toolbar">
                {user?.result ? (
                    <div className="profile">
                        <Typography className="userName" variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained"  onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </div>
    )
}

export default Navbar