import axios from 'axios'

export async function downloadFile(results, thickn, boxStyle) {
  const thicknessMap = {
    5: 'BC',
    4: 'C',
    3: 'B'
  }
  const filename = `${results.length}x${results.width}x${results.height}_${thicknessMap[thickn] || 'output'}.dxf`

  let apiUrl
  if (import.meta.env.MODE === 'production') {
    apiUrl = `dxf/${boxStyle}`
  } else {
    apiUrl = `http://localhost:5000/dxf/${boxStyle}`
  }

  const response = await axios.post(
    apiUrl,
    {
      l: results.length,
      w: results.width,
      h: results.height,
      t: thickn
    },
    {
      responseType: 'blob'
    }
  )
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
}
