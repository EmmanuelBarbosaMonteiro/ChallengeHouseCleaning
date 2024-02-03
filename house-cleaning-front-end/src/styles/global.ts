import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '.react-modal-overlay': {
    background: 'rgba(0, 0, 0, 0.5)',

    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.react-modal-content': {
    width: '100%',
    maxWidth: 576,
    background: '$gray900',
    padding: '3rem',
    position: 'relative',
    borderRadius: '0.24rem',
  },

  '.react-modal-close': {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
    border: 0,
    background: 'transparent',
    color: '$gray100',

    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.8)',
      background: 'transparent',
    },
  },
})
