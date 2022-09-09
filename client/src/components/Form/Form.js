/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { createRole, updateRole } from '../../actions/roles'
import './styles.css'

const Form = ({ currentId, setCurrentId }) => {

    const [roleData, setRoleData] = useState({name: '', role: ''})
    const role = useSelector((state) => currentId ? state.roles.find((r) => r._id === currentId) : null)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))


    useEffect(() => {
        if(role) setRoleData(role)
    },[role])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updateRole(currentId, roleData))
        }else{
            dispatch(createRole(roleData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setRoleData({ name: '', role: ''})
    }

    if (!user?.result?.name) {
        return (
            <Paper>
                <Typography variant="h6" align="center" style={{padding: '10px'}}>
              Please Sign In to create, edit, or delete more users.
                </Typography>
            </Paper>
        )
    }

    return(
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" className="paperTitle">User information</Typography>
                <TextField 
                    name="name" 
                    variant="outlined" 
                    label="Full Name" 
                    fullWidth
                    sx={{
                        marginBottom: '10px'
                    }} 
                    value={roleData.name} 
                    onChange={(e) => setRoleData({ ...roleData, name: e.target.value })} 
                />
                <TextField 
                    name="role" 
                    variant="outlined" 
                    label="Role description" 
                    fullWidth 
                    multiline 
                    rows={4} 
                    sx={{
                        marginBottom: '10px'
                    }}
                    value={roleData.role} 
                    onChange={(e) => setRoleData({ ...roleData, role: e.target.value })} 
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                    sx={{
                        marginBottom: '10px'
                    }}
                >
                Submit
                </Button>
                <Button 
                    variant="contained" 
                    size="small" 
                    onClick={clear} 
                    fullWidth
                >
                Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form