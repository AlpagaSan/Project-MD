'use client' 

import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/timeline', label: 'Timeline' },
  { link: '/about', label: 'About' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
     <Link key={link.label} href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
        }}
      >
        {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}