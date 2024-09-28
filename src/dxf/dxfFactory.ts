import { generateBox } from './box'
import { generateBoxOpen } from './box_open'
import { generateHalf } from './half'
import { generateHalfOpen } from './half_open'
import { BoxStyle } from '../types'

type DXFGenerator = (l: number, w: number, h: number, t: number) => string

// Factory function to return the correct DXF generator based on boxStyle
export function getDXFGenerator(boxStyle: BoxStyle): DXFGenerator {
  switch (boxStyle) {
    case 'box':
      return generateBox
    case 'box-open':
      return generateBoxOpen
    case 'half':
      return generateHalf
    case 'half-open':
      return generateHalfOpen
    default:
      throw new Error('Invalid box style')
  }
}
