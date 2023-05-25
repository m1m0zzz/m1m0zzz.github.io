import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'mimozのホームページ',
//   description: 'mimoz(@m1m0zzz)のホームページ',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <title>mimozのホームページ</title>
        <meta name="description" content="mimoz(@m1m0zzz)のホームページ" />
        <meta name="keywords" content="dtm,作曲,プラグイン,無料,Ableton" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:title" content="mimozのホームページ" />
        <meta property="og:description" content="mimoz(@m1m0zzz)のホームページです。" />
        <meta property="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
