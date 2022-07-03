import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next'
import React from 'react'

type Props = {}

export default function PostID({data}: any) {
  return <div>{data.body}</div>
}

export const getStaticProps: GetStaticProps =
  async (context: GetStaticPropsContext) => {
    const post = await fetch(
      'https://jsonplaceholder.typicode.com/posts' +
        '/' +
        context.params?.id
    )
    const data = await post.json()
    return {
      props: {
        data,
      },
    }
  }

export const getStaticPaths: GetStaticPaths =
  async () => {
    const posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const data = await posts.json()

    return {
      paths: data.map((item: any) => ({
        params: {
          id: item.id.toString(),
        },
      })),
      fallback: false,
    }
  }
