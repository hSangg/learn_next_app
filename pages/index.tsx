import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {useRouter} from 'next/router'

const DinamicComponent = dynamic(
  () => import('../components/component-dynamic'),
  {ssr: false}
)

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <DinamicComponent />
      {/* wanna render on client */}
    </div>
  )
}

export default Home
