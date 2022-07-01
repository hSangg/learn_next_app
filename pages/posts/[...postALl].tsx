import {useRouter} from 'next/router'
import React from 'react'

type Props = {}

export default function gETalL({}: Props) {
  const router = useRouter()
  console.log(router)
  return <div></div>
}
