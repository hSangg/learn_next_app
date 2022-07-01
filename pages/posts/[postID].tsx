import {useRouter} from 'next/router'
import React from 'react'

type Props = {}

export default function PostDetailPage({}: Props) {
  const router = useRouter()
  console.log('router: ', router)

  return <div>PostDetailPage: {}</div>
}
