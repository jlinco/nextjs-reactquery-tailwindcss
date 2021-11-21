import Head from  'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { NextPage } from 'next'
import AppLayout from '@/components/General/AppLayout'

const Start: NextPage = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    session && router.push('/home')
  }, [router])

  if (loading || session) {
    return (
      <>
        <Head>
          <title>Loading...</title>
          <link rel="icon" href="/pic1.svg" />
        </Head>
        <p>Loading content....</p>
      </>
    )
  }

  return (
    <AppLayout>
      <p>Show login form or welcome here </p>
    </AppLayout>
  )
}

export default Start