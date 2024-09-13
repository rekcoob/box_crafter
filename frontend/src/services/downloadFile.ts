import axios from 'axios'

interface Results {
  length: number
  width: number
  height: number
}

export async function downloadFile(
  results: Results,
  thickn: number,
  boxStyle: string
): Promise<void> {
  const thicknessMap: { [key: number]: string } = {
    5: 'BC',
    4: 'C',
    3: 'B',
  }

  const boxName = boxStyle === 'box' || boxStyle === 'box-open' ? 'Box' : 'Half'
  const fefcoCode = boxStyle === 'box' || boxStyle === 'half' ? '0201' : '0200'
  const filename = `${boxName}_${fefcoCode}_${results.length}x${
    results.width
  }x${results.height}_${thicknessMap[thickn] || 'output'}.dxf`

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
        l: results.length,
        w: results.width,
        h: results.height,
        t: thickn,
      },
      {
        responseType: 'blob',
      }
    )

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()

    // Clean up the URL object and the link element
    window.URL.revokeObjectURL(url)
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error downloading file:', error)
  }
}
