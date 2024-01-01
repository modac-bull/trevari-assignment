import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
  description?: string
  pageUrl?: string
  imageUrl?: string
}

export default function HeadPageMeta({
  title,
  description,
  pageUrl,
  imageUrl,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {pageUrl && (
        <>
          <meta property="og:url" content={pageUrl} />
          <meta name="twitter:site" content={pageUrl} />
          <link rel="canonical" href={pageUrl} />
        </>
      )}

      {imageUrl ? (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:image" content={imageUrl} />
        </>
      ) : (
        <>
          <meta property="og:image" content="/images/og.jpg" />
          <meta name="twitter:image" content="/images/og.jpg" />
        </>
      )}
    </Head>
  )
}
