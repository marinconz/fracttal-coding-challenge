import React, {useState, useEffect} from 'react'
import { Container, Grid} from '@mui/material'
import { useDispatch } from 'react-redux'

import {getRoles} from '../../actions/roles'
import Form from '../Form/Form'
import Roles from '../Roles/Roles'
import Logs from '../Logger/Logs'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch(getRoles())
    },[currentId, dispatch])
  
    return (
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={12} md={8} >
                    <Roles setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    <Logs/>
                </Grid>
            </Grid>
        </Container>
    )
}
  
export default Home