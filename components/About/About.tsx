'use client'

import {
  SiGithub,
  SiGmail,
  SiLinkerd,
  SiMedium,
  SiX,
} from '@icons-pack/react-simple-icons'
import {
  Anchor,
  Box,
  Group,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const GitHubCalendar = dynamic(() => import('react-github-calendar'))

const About = () => {
  const { colorScheme } = useMantineColorScheme()
  const iconColor = colorScheme === 'dark' ? '#fff' : '#000'

  const socialMediaIcons: { component: ReactNode; url: string }[] = [
    {
      component: <SiGithub color={iconColor} size={32} />,
      url: 'https://www.github.com/alpagasan',
    },
    {
      component: <SiLinkerd color={iconColor} size={32} />,
      url: 'https://www.linkedin.com/in/alpagasan',
    },
    {
      component: <SiMedium color={iconColor} size={32} />,
      url: 'https://medium.com/@alpagasan',
    },
    {
      component: <SiX color={iconColor} size={32} />,
      url: 'https://twitter.com/alpagasan',
    },
    {
      component: <SiGmail color={iconColor} size={32} />,
      url: 'mailto:alpagasan@alpagasan.com',
    },
  ]

  return (
    <>
      <Box>
        <Title order={1} mb={30}>
          About
        </Title>
        <Text w={500} mt={8}>
          <strong>Michael Santos</strong>. 1977.
        </Text>
        <Text w={500} mt={20}>
          I&apos;m a software analyst developer from Liege Belgium.
        </Text>
        <Text w={500} mt={20}>
          I&apos;ve been working to improve myself in web development field
          since 2020 with a focus on responsive web applications. I enjoy
          learning new technologies and tools, writing articles, and working on
          open source projects. My motivation for developing this website is to
          share my learnings with the rest of the world.
        </Text>
        <Text w={500} my={20}>
          Currently, I&apos;m working as a software engineer manager at&nbsp;
          <Anchor
            href="https://www.cinemanext.com/"
            target="_blank"
            variant="link"
            w={500}
          >
            <strong>CinemaNext</strong>
          </Anchor>
          .
        </Text>
        <Text w={500} mt={20}>
          Along with pixel hunting, I enjoy skating, going to live music events,
          playing video games, watching TV series, and hanging out with my
          friends.
        </Text>
      </Box>
      <Box>
        <Title order={2} mt={50} mb={30}>
          Contact Me
        </Title>
        <Group>
          {socialMediaIcons.map(
            (icon: { component: ReactNode; url: string }) => (
              <Anchor key={icon.url} href={icon.url} target="_blank">
                {icon.component}
              </Anchor>
            )
          )}
        </Group>
      </Box>
      <Box>
        <Title order={3} mt={50} mb={30}>
          My Github Stats
        </Title>
        <GitHubCalendar
          username="AlpagaSan"
          year="last"
          style={{ maxWidth: '960px' }}
        />
      </Box>
    </>
  )
}

export default About
