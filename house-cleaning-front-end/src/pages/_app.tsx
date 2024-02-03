import React from 'react'
import { AppProps } from 'next/app'
import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'
import { Button, Container, Header } from '@/styles/pages/app'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          <Image
            src={logoImg}
            alt=""
            width={48}
            height={48}
            objectFit="cover"
          />
          <Button>Cadastrar Cliente</Button>
        </Header>
      </Container>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
