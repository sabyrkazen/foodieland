import { Head } from 'minista'

import { Header } from '@layouts/Header'
import { Content } from '@layouts/Content'
import { Footer } from '@layouts/Footer'

import favicon from '@assets/favicons/favicon.svg'
import appleTouchIcon from '@assets/favicons/apple-touch-icon.png'
import manifest from '@assets/favicons/site.webmanifest'

import '@/main'
import '@/styles'

export default ({ children, title, url }) => {
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Foodieland | {title}</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
