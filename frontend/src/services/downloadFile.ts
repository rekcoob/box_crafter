import axios from 'axios'

interface Dimensions {
  length: number
  width: number
  height: number
}

export async function downloadFile(
  dimensions: Dimensions,
  thickn: number,
  boxStyle: string
): Promise<void> {
  const thicknessMap: { [key: number]: string } = {
    5: 'BC',
    4: 'C',
    3: 'B',
  }

  // Destructure dimensions and reassign length/width if necessary
  let { length, width } = dimensions
  const { height } = dimensions // Use const for height as it is not reassigned

  if (width > length) {
    ;[length, width] = [width, length]
  }

  const boxName = boxStyle === 'box' || boxStyle === 'box-open' ? 'Box' : 'Half'
  const fefcoCode = boxStyle === 'box' || boxStyle === 'half' ? '0201' : '0200'
  const filename = `${boxName}_${fefcoCode}_${length}x${width}x${height}_${
    thicknessMap[thickn] || 'output'
  }.dxf`

  // const apiUrl = `${process.env.REACT_APP_API_URL}/dxf/${boxStyle}`

  let apiUrl: string
  if (import.meta.env.MODE === 'production') {
    apiUrl = `dxf/${boxStyle}`
  } else {
    apiUrl = `http://localhost:5000/dxf/${boxStyle}`
  }

  try {
    const response = await axios.post(
      apiUrl,
      {
        length,
        width,
        height,
        thickness: thickn,
      },
      { responseType: 'blob' }
    )

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error downloading file:', error)
  }
}
