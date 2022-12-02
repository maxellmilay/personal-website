import React from 'react'
import { Typography, Grid } from '@mui/material'
import { StyledSectionContainer } from './SectionContainer'

export default function Landing() {
    return (
        <StyledSectionContainer color="black">
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                <Typography variant="h1">Hi! I&apos;m Maxell</Typography>
            </Grid>

        </StyledSectionContainer>
    )
}
