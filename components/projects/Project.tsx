import React from 'react'
import { Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectPropsInterface {
    name: string
    description: string
    photoURL: StaticImageData
    link: string
}

const ProjectContainer = styled(Grid)(({ theme }) => ({
    width: theme.spacing(60),
    minHeight: theme.spacing(60),
    backgroundColor: "white",
    borderRadius: '0.75rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    padding: '2.5rem 0.5rem',
    margin: '1rem 0'
}))

export default function Project({ name, description, photoURL, link }: ProjectPropsInterface) {
    return (
        <ProjectContainer container item alignItems='center' direction='column'>
            <Image src={photoURL} alt="Project Photo" width={425} style={{ borderRadius: '0.5rem' }} />
            <Typography variant="h5" sx={{ marginTop: '1rem' }}>{name}</Typography>
            <Typography sx={{ fontSize: '0.75rem', margin: '1rem 2rem', textAlign: 'justify' }}>{description}</Typography>
            <Link href={link} style={{ fontSize: '0.7rem' }}>{link}</Link>
        </ProjectContainer>
    )
}
