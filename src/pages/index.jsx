import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>
          Hello, <br /> I'm Kohei Abe.
        </BigTitle>
        <Subtitle>I'm a Software Engineer at Tokyo.</Subtitle>
      </Hero>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="dict"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #555555 0%, #444444 100%)"
          >
            Dictation app based on YouTube video. This is an app for English learners.
          </ProjectCard>
          <ProjectCard
            title="調 - sirabe"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #555555 0%, #444444 100%)"
          >
            Web app which analyzes an iTunes library and visualizes it.
          </ProjectCard>
          <ProjectCard
            title="Being"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #555555 0%, #444444 100%)"
          >
            Office monitoring system.
          </ProjectCard>
          <ProjectCard
            title="giftee reception iOS app"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #555555 0%, #444444 100%)"
          >
            Reception iOS native app for giftee inc.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Hello, world.
            <br />
            <br />
            I’m a Software Engineer currently working at Tokyo in Japan.
            <br />
            <br />I can build Web/iOS applications using Ruby, JavaScript and Swift.
          </AboutSub>
        </AboutHero>
        <AboutDesc />
      </About>
      <Contact>
        <Inner />
        <Footer>
          &copy; 2019 by Kohei Abe. <br />
          This page is based on{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">gatsby-starter-portfolio-cara</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
