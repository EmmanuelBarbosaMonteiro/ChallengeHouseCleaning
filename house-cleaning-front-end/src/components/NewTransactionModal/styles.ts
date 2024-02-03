import { styled } from '../../styles'

export const ContainerNewCustomerModal = styled('form', {
  h2: {
    color: '$gray300',
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },

  input: {
    width: '100%',
    padding: '0 1.5rem',
    height: '4rem',
    borderRadius: '0.25rem',
    color: '$gray100',

    border: '1px solid #d7d7d7',
    background: '$gray800',

    fontWeight: 400,
    fontSize: '1rem',

    '&::placeholder': {
      color: '$gray100',
    },

    '& + input': {
      marginTop: '1rem',
    },
  },

  'button[type="submit"]': {
    width: '100%',
    padding: '0 1.5rem',
    height: '4rem',
    background: '$green500',
    color: '$gray100',
    borderRadius: '0.25rem',
    border: 0,
    fontSize: '1rem',
    marginTop: '1.5rem',
    fontWeight: '600',

    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
})
