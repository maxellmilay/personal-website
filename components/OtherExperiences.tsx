import React from 'react'
import SectionContainer from './general/SectionContainer'
import Experience from './other/Experience'
import otherExperiencesList from '../constants/otherExperiencesInfo'
import { Grid } from '@mui/material'

export default function OtherExperiences() {
    return (
        <SectionContainer title="Experiences From Other Fields">
            <Grid container item justifyContent="center" sx={{ margin: '1rem 0' }}>
                {otherExperiencesList.map((experience) => {
                    return <Experience key={experience.contest} award={experience.award} contest={experience.contest} date={experience.date} photoURL={experience.photoURL} contribution={experience.contribution} />
                })}
            </Grid>
        </SectionContainer>
    )
}
