import { styled } from '..'

export const Container = styled('header', {
  background: '$gray800',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Button = styled('button', {
  fontSize: '1rem',
  color: '$gray100',
  background: '$green500',
  border: 0,
  padding: '0 2rem',
  borderRadius: '0.25rem',
  height: '3rem',

  transition: 'filter 0.2s',

  '&:hover': {
    background: '$green300',
  },
})
