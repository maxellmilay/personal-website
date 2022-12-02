import React from 'react'
import SectionContainer from './general/SectionContainer'
import { Typography, Grid } from "@mui/material"
import Tech from './techstack/Tech'
import techList from '../constants/techInfo'

export default function Techstack() {
    return (
        <SectionContainer title="Techstack">
            <Grid container item justifyContent="center" alignItems="center" sx={{ margin: '1.5rem 0' }}>
                {techList.map((tech) => {
                    return (
                        <Tech key={tech.name} Icon={tech.icon} name={tech.name} />
                    )
                })}
            </Grid>
        </SectionContainer >
    )
}
