import { api } from '@/services/api'
import { ContainerTable } from '@/styles/components/customers-table'
import React, { useState, useEffect } from 'react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  coordinate_x: string
  coordinate_y: string
}

export function CustomersTable() {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await api.get('/customers')
        setCustomers(response.data.customers)
      } catch (error) {
        console.error('Falha ao buscar clientes:', error)
      }
    }

    fetchCustomers()
  }, [])

  return (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Coordenadas</th>
          </tr>
        </thead>

        <tbody>
          {customers ? (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  x:{(+customer.coordinate_x).toFixed(2)} || y:
                  {(+customer.coordinate_y).toFixed(2)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Carregando dados...</td>
            </tr>
          )}
        </tbody>
      </table>
    </ContainerTable>
  )
}
