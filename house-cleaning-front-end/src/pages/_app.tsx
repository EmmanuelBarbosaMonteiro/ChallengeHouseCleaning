import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Button, Container, Header } from '@/styles/pages/app'
import { NewCustomerModal } from '@/components/NewTransactionModal'
import { CustomersProvider } from '@/context/CustomersContext'
import { CalculateRouteModal } from '@/components/CalculateRouteModal'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false)
  const [isCalculateRouteModalOpen, setIsCalculateRouteModalOpen] =
    useState(false)

  function handleOpenNewCustomerModal() {
    setIsNewCustomerModalOpen(true)
  }

  function handleCloseNewCustomerModal() {
    setIsNewCustomerModalOpen(false)
  }

  function handleOpenCalculateRouteModal() {
    setIsCalculateRouteModalOpen(true)
  }

  function handleCloseCalculateRouteModal() {
    setIsCalculateRouteModalOpen(false)
  }

  return (
    <CustomersProvider>
      <Container>
        <Header>
          <Button onClick={handleOpenNewCustomerModal}>
            Cadastrar Cliente
          </Button>
          <NewCustomerModal
            isOpen={isNewCustomerModalOpen}
            onRequestClose={handleCloseNewCustomerModal}
          />

          <Button onClick={handleOpenCalculateRouteModal}>Calcular Rota</Button>
          <CalculateRouteModal
            isOpen={isCalculateRouteModalOpen}
            onRequestClose={handleCloseCalculateRouteModal}
          />
        </Header>
      </Container>
      <Component {...pageProps} />
    </CustomersProvider>
  )
}

export default MyApp
