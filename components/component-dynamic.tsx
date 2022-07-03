import {GetServerSideProps} from 'next'
import React from 'react'

type Props = {}

export default function DinamicComponent({}: Props) {
  console.log('render')
  return (
    <h1 className="font-bold text-2xl text-green-500">
      DinamicComponent
    </h1>
  )
}

export const getServerSideProps = () => {
  return {
    props: {},
  }
}
