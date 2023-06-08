import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Loading } from '@/components/loading'

import 'normalize.css'
import 'flickity/css/flickity.css'
import '@/styles/styles.scss'

export const metadata = {
  title: 'Enclume',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' type='image/svg' href='https://images.ctfassets.net/esgvtsxg5drv/48cQ9HTqCIWni53SZ3k5XO/93cf6a14580867f6f3ab852088c1ad4f/favicon.svg' />
      </head>
      <body>
        <Loading />
        <Header locale={process.env.LOCALE} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
