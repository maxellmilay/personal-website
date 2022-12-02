import React from 'react'
import { Typography, Grid } from '@mui/material'
import { StyledSectionContainer } from './general/SectionContainer'

export default function Landing() {
    return (
        <StyledSectionContainer container item color="#FEFCF3" justifyContent="center" alignItems="center">
            <Grid container item justifyContent="center" sx={{ height: "100%" }}>
                <Typography variant="h1" sx={{ textAlign: 'center' }}>Hi! I&apos;m Maxell</Typography>
            </Grid>
        </StyledSectionContainer>
    )
}
