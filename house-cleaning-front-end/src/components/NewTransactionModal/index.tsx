import Modal from 'react-modal'
import { ContainerNewCustomerModal } from './styles'
import { X } from 'lucide-react'
import { FormEvent, useState, useContext } from 'react'
import { CustomersContext } from '@/context/CustomersContext'

interface NewCustomerModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewCustomerModal({
  isOpen,
  onRequestClose,
}: NewCustomerModalProps) {
  const { createCustomer } = useContext(CustomersContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [coordinateX, setCoordinateX] = useState(0)
  const [coordinateY, setCoordinateY] = useState(0)

  async function handleCreateNewCustomer(event: FormEvent) {
    event.preventDefault()

    await createCustomer({
      name,
      email,
      phone,
      coordinate_x: coordinateX,
      coordinate_y: coordinateY,
    })

    setName('')
    setEmail('')
    setPhone('')
    setCoordinateX(0)
    setCoordinateY(0)

    onRequestClose()
  }

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

      <ContainerNewCustomerModal onSubmit={handleCreateNewCustomer}>
        <h2>Cadastrar Cliente</h2>

        <input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Coordenada X"
          value={coordinateX}
          onChange={(event) => setCoordinateX(Number(event.target.value))}
          required
        />

        <input
          type="number"
          placeholder="Coordenada Y"
          value={coordinateY}
          onChange={(event) => setCoordinateY(Number(event.target.value))}
          required
        />

        <button type="submit">Cadastrar</button>
      </ContainerNewCustomerModal>
    </Modal>
  )
}
