import Head from 'next/head'
import React from 'react'
import { MetaTagInterface } from './interface'

const MetaTag = (props: MetaTagInterface) => {
  const { title, description, image } = props

  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content={description}  />

    {/* Og: tag for facebook share link */}
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={description}
    />
    <meta
      property="og:image"
      content={image ? image : 'https://fakeimg.pl/250x100/"'}
    />
  </Head>
  )
}

export default MetaTag
