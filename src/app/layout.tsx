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
        <meta property="og:title" content="mimozのホームページ" />
        <meta property="og:description" content="mimoz(@m1m0zzz)のホームページです。" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
