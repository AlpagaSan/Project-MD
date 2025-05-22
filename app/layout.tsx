import '@mantine/core/styles.css';

import React from 'react';
import { Container, ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
//import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import { navigation } from '../routes/navigation'

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          <Container >{children}</Container>

        </MantineProvider>
      </body>
    </html>
  );
}
