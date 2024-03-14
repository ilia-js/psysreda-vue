import type { ColorScheme } from '@/types/colors'

export const buttonColorSchemes: Record<string, ColorScheme> = {
  grey: {
    color: 'black',
    backgroundColor: '#666'
  },
  red: {
    color: 'white',
    backgroundColor: '#dc3545'
  },
  whiteAndBlack: {
    color: 'black',
    border: '1px solid #666',
    backgroundColor: '#FFF'
  }
}
