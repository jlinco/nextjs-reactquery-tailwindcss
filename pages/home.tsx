import { useRouter } from 'next/router'
import { useSessionUser } from '@/hooks/useSessionUser'
import { useEffect } from 'react'
import { NextPage } from 'next'
import AppLayout from '@/components/General/AppLayout'

const Home: NextPage = () => {
  const [sessionUser, session] = useSessionUser()
  const router = useRouter()

  useEffect(() => {
    !session && router.push('/')
  }, [router])

  if (!session) return null

  return (
    <AppLayout>
      <p>We have home page here</p>
    </AppLayout>
  )
}

export default Home