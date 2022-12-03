import React from 'react'
import { Grid, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SocialMedia } from '../enums/socialMediaLinks';
import Link from 'next/link';

export default function Links() {
  return (
    <Grid container item alignItems='center' sx={{ borderTop: 'solid black 1px', height: '20vh' }}>
      <Grid container item alignItems='center'>
        <Typography variant="h6" sx={{ marginRight: '1.25rem' }}>Connect with me: </Typography>
        <Link href={SocialMedia.FACEBOOK}>
          <FacebookIcon fontSize="large" sx={{ marginRight: '1rem' }} />
        </Link>
        <Link href={SocialMedia.LINKEDIN}>
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  )
}
