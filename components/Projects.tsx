import React from 'react'
import SectionContainer from './general/SectionContainer'
import { Typography, Grid } from '@mui/material'
import Project from './projects/Project'

export default function Projects() {
    return (
        <SectionContainer title="Projects">
            <Grid container item justifyContent='space-evenly' sx={{ marginTop: '2rem' }}>
                <Project></Project>
                <Project></Project>
            </Grid>

        </SectionContainer>
    )
}
