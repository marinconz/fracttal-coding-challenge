/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import {Delete, MoreHoriz} from '@mui/icons-material'
import { useDispatch } from 'react-redux'

import { deleteRole } from '../../../actions/roles'
import './styles.css'


const Role = ({ role, setCurrentId }) => {

  const dispatch = useDispatch()
  return(
    <Card>
      <div className='header'>
        <Typography variant="h5" sx={{margin: '5%', marginTop: '5%'}}>Name: {role.name}</Typography>
        <Button
          onClick={() => setCurrentId(role._id)}
        >    
          <MoreHoriz fontSize="default" sx={{margin: '5%', marginBottom: 0}}/>
        </Button>
      </div>
      <Typography variant="body2" sx={{margin: '5%'}}>ID: {role._id}</Typography>
      <CardContent>
        <Typography variant="body2">Role description: {role.role}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary' onClick={() => dispatch(deleteRole(role._id))}>
          <Delete fontSize="small"/>
                    Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Role