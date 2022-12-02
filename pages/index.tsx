import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import Line from '../components/Line'
import Techstack from '../components/Techstack'
import Projects from '../components/Projects'
import OtherExperiences from '../components/OtherExperiences'
import Links from '../components/Links'

export default function Home() {
  return (
    <>
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
      <Line />
      <Links />
    </>
  )
}
