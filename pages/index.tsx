import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import Line from '../components/general/Line'
import Techstack from '../components/Techstack'
import Projects from '../components/Projects'
import OtherExperiences from '../components/OtherExperiences'
import Links from '../components/Links'
import { Grid } from "@mui/material"

export default function Home() {
  return (
    <Grid container direction="column" sx={{ width: "96%", margin: "0 2%" }}>
      <Head>
        <title>Maxell Milay</title>
      </Head>
      <Landing />
      <Line />
      <Techstack />
      <Line />
      <Projects />
      <Line />
      <OtherExperiences />
      <Links />
    </Grid>
  )
}
