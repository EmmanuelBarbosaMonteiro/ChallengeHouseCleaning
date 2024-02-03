import Modal from 'react-modal'
import { X } from 'lucide-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ContainerTable } from '../CustomersTable/styles'

interface CalculateRouteModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  coordinate_x: string
  coordinate_y: string
  distance: string
}

export function CalculateRouteModal({
  isOpen,
  onRequestClose,
}: CalculateRouteModalProps) {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    async function fetchCustomers() {
      if (isOpen) {
        try {
          const response = await axios.get(
            'http://localhost:3333/customers/route',
          )
          setCustomers(response.data.customers)
        } catch (error) {
          console.error('Erro ao buscar clientes:', error)
        }
      }
    }

    fetchCustomers()
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <X />
      </button>

      <h2>Rota</h2>
      <ContainerTable>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Coordenadas</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>
                    x:{(+customer.coordinate_x).toFixed(2)} || y:
                    {(+customer.coordinate_y).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>Carregando dados...</td>
              </tr>
            )}
          </tbody>
        </table>
      </ContainerTable>
    </Modal>
  )
}
