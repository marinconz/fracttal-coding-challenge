import React, { useEffect, useState } from 'react'
import { Paper, Grid, Container, Typography } from '@mui/material'

import { fetchLogs } from './apiCall'
import './styles.css'

const Logs = () => {

    const [ logs, setLogs ] = useState([])

    async function fetchData() {
        const logs = await fetchLogs()
        setLogs(logs)
    }

    useEffect(()=>{
        fetchData()
    })

    return(
        <Container component="main" maxWidth="xs">
            <Paper elevation={3}>
                <Typography className="logTitle" variant="h6">Log history</Typography>
                <Grid container className="logConatiner">
                    {logs.map((log)=> (
                        <div key={log._id} className="log">
                            {log.message}
                        </div>
                    ))}
                </Grid>
            </Paper>
        </Container>
    )
}

export default Logs