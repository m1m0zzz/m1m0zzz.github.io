"use client"

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const title = 'mimozのホームページ';
  const description = 'mimoz(@m1m0zzz)のホームページ. Abletonデバイスも配布しています'

  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="dtm,作曲,編曲,プラグイン,無料" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#89b9bd" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://m1m0zzz.github.io/" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="preview.png" />

        <meta name="twitter:creator" content="@m1m0zzz" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content="preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
      </body>
    </html>
  )
}
