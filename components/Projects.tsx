import React from 'react'
import SectionContainer from './general/SectionContainer'
import { Typography, Grid } from '@mui/material'
import Project from './projects/Project'
import projectList from '../constants/projectInfo'

export default function Projects() {
    return (
        <SectionContainer title="Projects">
            <Grid container item justifyContent='space-evenly' sx={{ marginTop: '2rem' }}>
                {projectList.map((project) => {
                    return <Project key={project.name} name={project.name} description={project.description} photoURL={project.photoURL} link={project.link} />
                })}
            </Grid>
        </SectionContainer>
    )
}
