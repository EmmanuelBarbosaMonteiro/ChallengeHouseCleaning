import { styled } from '../../styles'

export const ContainerTable = styled('main', {
  marginTop: 0,

  table: {
    width: '100%',
    borderSpacing: '0 0.5rem',

    th: {
      color: '$green300',
      fontWeight: 400,
      padding: '1rem 2rem',
      textAlign: 'left',
      lineHeight: '1.5rem',
    },

    td: {
      padding: '1rem 2rem',
      border: 0,
      background: '#c4c4cc',
      color: '#121214',
    },

    tr: {
      '&:first-child td:first-child': {
        borderTopLeftRadius: '0.25rem',
      },
      '&:first-child td:last-child': {
        borderTopRightRadius: '0.25rem',
      },
      '&:last-child td:first-child': {
        borderBottomLeftRadius: '0.25rem',
      },
      '&:last-child td:last-child': {
        borderBottomRightRadius: '0.25rem',
      },
    },
  },
})
