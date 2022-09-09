/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material'

import Role from './RoleCard/Role'


const Roles = ({setCurrentId}) => {
  const roles = useSelector((state) => state.roles)
  return(
    !roles.length ? <CircularProgress/> : (
      <Grid container alignItems="stretch" spacing={3}>
        {roles.map((role)=> (
          <Grid key={role._id} item xs={12} sm={6}>
            <Role role={role} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Roles