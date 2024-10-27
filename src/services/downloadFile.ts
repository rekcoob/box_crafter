import { getDXFGenerator } from '../dxf/dxfFactory'
import { Dimensions, BoxStyle } from '../types'
import { downloadBlob } from '../utils/download'

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
    10: 'AAC',
  }

  if (width > length) {
    ;[length, width] = [width, length]
  }

  const boxName = boxStyle === 'box' || boxStyle === 'box-open' ? 'Box' : 'Half'
  const fefcoCode = boxStyle === 'box' || boxStyle === 'half' ? '0201' : '0200'
  const filename = `${boxName}_${fefcoCode}_${length}x${width}x${height}_${
    thicknessMap[thickness] || 'output'
  }.dxf`

  // Get the correct DXF generator function using the factory
  const dxfGenerator = getDXFGenerator(boxStyle as BoxStyle)

  // Generate the DXF file content
  const dxfContent = dxfGenerator(length, width, height, thickness)

  // Create a Blob and download the file
  const blob = new Blob([dxfContent], { type: 'application/dxf' })
  downloadBlob(blob, filename)
}
