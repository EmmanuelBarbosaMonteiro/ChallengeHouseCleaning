import { CustomersTable } from '@/components/CustomersTable'
import { HomeContainer } from '@/styles/pages/home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <HomeContainer>
        <CustomersTable />
      </HomeContainer>
    </>
  )
}
