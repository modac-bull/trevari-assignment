import HeadPageMeta from '@/components/layouts/HeadPageMeta'
import Layout from '@/components/layouts/Layout'
import BookDetail from '@/components/pages/book/detail/Detail'
import React from 'react'

type Props = {}

export default function BookDetailPage({}: Props) {
  return (
    <>
      <HeadPageMeta title="도서 상세 페이지" />

      <Layout>
        <BookDetail />
      </Layout>
    </>
  )
}
