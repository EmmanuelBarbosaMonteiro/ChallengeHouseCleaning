import { api } from '@/services/api'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  coordinate_x: number
  coordinate_y: number
}

interface CustomerInput {
  name: string
  email: string
  phone: string
  coordinate_x: number
  coordinate_y: number
}

interface CustomersProviderProps {
  children: ReactNode
}

interface CustomersContextData {
  customers: Customer[]
  createCustomer: (customer: CustomerInput) => Promise<void>
}

export const CustomersContext = createContext<CustomersContextData>(
  {} as CustomersContextData,
)

export function CustomersProvider({ children }: CustomersProviderProps) {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    api
      .get('/customers')
      .then((response) => setCustomers(response.data.customers))
  }, [])

  async function createCustomer(customerInput: CustomerInput) {
    const response = await api.post('/customers', customerInput)
    const { customer } = response.data

    setCustomers([...customers, customer])
  }

  return (
    <CustomersContext.Provider value={{ customers, createCustomer }}>
      {children}
    </CustomersContext.Provider>
  )
}
