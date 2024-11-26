import { Theme } from '@aws-amplify/ui-react'

export const theme: Theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      authenticator: {
        router: {
          borderWidth: '0px',
        },
      },
      button: {
        primary: {
          backgroundColor: '#000000',
          _hover: { backgroundColor: '#000000' },
        },
        link: {
          color: '#000000',
          _hover: {
            backgroundColor: 'none',
          },
        },
      },
    },
  },
}
