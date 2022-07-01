import type {NextPage} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <h1
        onClick={() => {
          router.push('/posts')
        }}>
        click me
      </h1>
    </div>
  )
}

export default Home
