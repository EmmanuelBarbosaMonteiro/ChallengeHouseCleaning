import React, { useState } from 'react'

import { AppProps } from 'next/app'
import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'
import { Button, Container, Header } from '@/styles/pages/app'
import { NewCustomerModal } from '@/components/NewTransactionModal'
import { CustomersProvider } from '@/context/CustomersContext'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false)

  function handleOpenNewCustomerModal() {
    setIsNewCustomerModalOpen(true)
  }

  function handleCloseNewCustomerModal() {
    setIsNewCustomerModalOpen(false)
  }

  return (
    <CustomersProvider>
      <Container>
        <Header>
          <Image
            src={logoImg}
            alt=""
            width={48}
            height={48}
            objectFit="cover"
          />
          <Button onClick={handleOpenNewCustomerModal}>
            Cadastrar Cliente
          </Button>

          <NewCustomerModal
            isOpen={isNewCustomerModalOpen}
            onRequestClose={handleCloseNewCustomerModal}
          />
        </Header>
      </Container>
      <Component {...pageProps} />
    </CustomersProvider>
  )
}

export default MyApp
