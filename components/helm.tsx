import * as React from 'react'
import { SFC } from 'react'
import { Helmet } from 'react-helmet'
import { AppContext } from '../contexts/app'


export const Helm: SFC<{
  title: string
  description?: string
  image?: string
}> = props => {
  return <AppContext.Consumer>
    {({ content, locale }) => <Helmet
      defaultTitle='Enclume'
      titleTemplate={`Enclume – %s`}
    >
      <html lang={locale ? locale.split('-')[0] : 'fr'} />
      {/* {['en-US', 'fr-CA'].filter(locale => locale !== locale).map(locale => <link rel='alternate' href={`${process.env.REDIRECT_ROOT}/${locale}`} hrefLang={locale} key={locale}/>)} */}
      <title>{props.title}</title>
      <meta property='og:title' content={props.title} />
      <meta name='description' content={props.description} />
      <meta property='og:description' content={props.description} />
      {props.image && <meta property="og:image" content={props.image} />}
    </Helmet>}
  </AppContext.Consumer>
}
