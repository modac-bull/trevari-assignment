import HeadPageMeta from '@/components/layouts/HeadPageMeta'
import Layout from '@/components/layouts/Layout'
import HomePage from '@/components/pages/home/Home'
import React from 'react'

type Props = {}

export default function HomeScreenPage({}: Props) {
  return (
    <>
      <HeadPageMeta title="도서 목록 페이지" />

      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}
