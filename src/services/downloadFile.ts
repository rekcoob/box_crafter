import {
  generateBox,
  generateBoxOpen,
  generateHalf,
  generateHalfOpen,
} from '../dxf'
import { Dimensions } from '../types'
// import { saveAs } from 'file-saver'

// Update the downloadFile function with TypeScript annotations
export async function downloadFile(
  dimensions: Dimensions,
  thickness: number,
  boxStyle: string
): Promise<void> {
  let { length, width } = dimensions
  const { height } = dimensions

  const thicknessMap: { [key: number]: string } = {
    5: 'BC',
    4: 'C',
    3: 'B',
  }

  if (width > length) {
    ;[length, width] = [width, length]
  }

  const boxName = boxStyle === 'box' || boxStyle === 'box-open' ? 'Box' : 'Half'
  const fefcoCode = boxStyle === 'box' || boxStyle === 'half' ? '0201' : '0200'
  const filename = `${boxName}_${fefcoCode}_${length}x${width}x${height}_${
    thicknessMap[thickness] || 'output'
  }.dxf`

  let dxfContent: string

  // Select the correct DXF generator based on the boxStyle
  switch (boxStyle) {
    case 'box':
      dxfContent = generateBox(length, width, height, thickness)
      break
    case 'box-open':
      dxfContent = generateBoxOpen(length, width, height, thickness)
      break
    case 'half':
      dxfContent = generateHalf(length, width, height, thickness)
      break
    case 'half-open':
      dxfContent = generateHalfOpen(length, width, height, thickness)
      break
    default:
      throw new Error('Invalid box style')
  }

  // Create a Blob for the DXF file and trigger the download
  const blob = new Blob([dxfContent], { type: 'application/dxf' })

  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(link)
}
