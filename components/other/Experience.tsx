import React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface ExperiencePropsInterface {
    award: string
    contest: string
    date: string
    photoURL: StaticImageData
    contribution: string
}

const ExperienceContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    width: '75%',
    margin: '1rem 2%',
    borderRadius: '0.5rem',
    textAlign: 'center'
}))

export default function Experience({ award, contest, date, photoURL, contribution }: ExperiencePropsInterface) {
    return (
        <ExperienceContainer container item>
            <Grid container item md={6} justifyContent="center" sx={{ borderRight: 'solid 1px #DCDCDC', borderBottom: 'solid 1px #DCDCDC' }}>
                <Image src={photoURL} alt="Experience Photo" style={{ margin: '1rem 0', width: "90%", height: 'auto' }} />
            </Grid>
            <Grid container item md={6} direction="column" justifyContent="center" alignItems='center' sx={{ padding: '1rem 2rem 2rem ' }}>
                <Typography variant="h4" sx={{ marginBottom: '1rem' }}>{award}</Typography>
                <Typography>{contest}</Typography>
                <Typography sx={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{date}</Typography>
                <Typography sx={{ marginTop: '1rem' }}>{contribution}</Typography>
            </Grid>
        </ExperienceContainer>
    )
}
