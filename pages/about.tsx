import {useRouter} from 'next/router'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  const router = useRouter()
  console.log('about Query', router.query)

  return <div>About</div>
}
