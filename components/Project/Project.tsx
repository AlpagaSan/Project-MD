import {
  Anchor,
  Badge,
  Box,
  Divider,
  Group,
  Paper,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import React, { FC } from 'react'
import { IconBrandGithub, IconBrandVercel } from '@tabler/icons-react'

import { IProjectProps } from '../../interfaces/Project.interface'
import Transition from '../Transition/Transition'

const Project: FC<IProjectProps> = ({ title, description, links, stack }) => {
  const theme = useMantineColorScheme()

  return (
    <Transition whileHover={{ scale: 1.01 }}>
      <Paper
        
        withBorder
        radius="sm"
        shadow="md"
        px="md"
        py="xs"
      >
        <Group >
          <Group p="apart" style={{ width: '100%' }}>
            <Text size="md" w={700} mb="xs">
              {title}
            </Text>
            <Box>
              {links &&
                links.map((link: { link: string; id: number }) =>
                  link.link.includes('github') ? (
                    <Anchor
                      key={link.id}
                      component="a"
                      href={link.link}
                      target="_blank"
                      mr={8}
                      aria-label="Link to project on GitHub"
                    >
                      <IconBrandGithub
                        size={22}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                      />
                    </Anchor>
                  ) : (
                    <Anchor
                      key={link.id}
                      component="a"
                      href={link.link}
                      target="_blank"
                    >
                      <IconBrandVercel
                        size={22}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                        aria-label="Link to project on Vercel"
                      />
                    </Anchor>
                  )
                )}
            </Box>
          </Group>
          <Text mb={20} size="sm">
            {description}
          </Text>
          <Box style={{ width: '100%', height: '100%' }}>
            <Divider my="xs" mt="auto" size="xs" />
            {stack &&
              stack.map((item: string) => (
                <Badge
                  key={item}
                  size="xs"
                  variant="outline"
                  color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
                >
                  {item}
                </Badge>
              ))}
          </Box>
        </Group>
      </Paper>
    </Transition>
  )
}

export default Project
