import { ContainerTable } from '@/components/CustomersTable/styles'
import { CustomersContext } from '@/context/CustomersContext'
import { useContext } from 'react'

export function CustomersTable() {
  const { customers } = useContext(CustomersContext)

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
