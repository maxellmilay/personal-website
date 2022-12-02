import React from 'react'
import { Grid } from "@mui/material"
import { styled } from '@mui/material/styles'

const ProjectContainer = styled(Grid)(({ theme }) => ({
    width: theme.spacing(60),
    height: theme.spacing(60),
    backgroundColor: "red",
    borderRadius: '0.75rem'
}))

export default function Project() {
    return (
        <ProjectContainer>
            
        </ProjectContainer>
    )
}
