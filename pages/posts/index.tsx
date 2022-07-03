import {GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import React from 'react'

type Props = {
  body: string
  id: number
  title: string
  userId: number
}

export default function Post({data}: any) {
  const router = useRouter()
  return (
    <div className="p-20 ">
      {data.map((items: Props) => (
        <li
          onClick={() => {
            router.push(
              router.pathname +
                '/' +
                items.id.toString()
            )
          }}
          key={items.id}>
          {items.title}
        </li>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps =
  async () => {
    const posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const data = await posts.json()
    return {
      props: {
        data,
      },
    }
  }
