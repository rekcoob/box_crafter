const Drawing = require('dxf-writer')

function generateDxf(l, w, h, t) {
  // Nadmiera dlzky = Dlzka + hrubka materialu
  const lt = l + t
  const lt2 = l + t - 2
  // Nadmiera sirky = Sirka + hrubka materialu
  const wt = w + t
  // Vyska klopy
  const k = t === 5 ? w / 2 + 4 : w / 2
  // Nadmiera vysky = Vyska + hrubka materialu * 2
  const htk = h + t * 2 + k
  const htk2 = h + t + k * 2
  // Spary
  const s = 4

  let d = new Drawing()

  // Draw lines based on input
  // Cut Layer
  d.drawLine(0, htk2, 0, 0)
    .drawLine(0, 0, lt2 - s, 0)
    .drawLine(lt2 + s, 0, lt2 + wt - s, 0)
    .drawLine(lt2 + wt + s, 0, lt + lt2 + wt - s, 0)
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt * 2, 0)
    .drawLine(0, htk2, lt2 - s, htk2)
    .drawLine(lt2 + s, htk2, lt2 + wt - s, htk2)
    .drawLine(lt2 + wt + s, htk2, lt + lt2 + wt - s, htk2)
    .drawLine(lt + lt2 + wt + s, htk2, lt + lt2 + wt * 2, htk2)
    .drawLine(lt2 - s, 0, lt2 - s, k)
    .drawLine(lt2 + s, 0, lt2 + s, k)
    .drawLine(lt2 + wt - s, 0, lt2 + wt - s, k)
    .drawLine(lt2 + wt + s, 0, lt2 + wt + s, k)
    .drawLine(lt + lt2 + wt - s, 0, lt + lt2 + wt - s, k)
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt + s, k)
    .drawLine(lt + lt2 + wt * 2, 0, lt + lt2 + wt * 2, k)
    .drawLine(lt2 - s, htk, lt2 - s, htk2)
    .drawLine(lt2 + s, htk, lt2 + s, htk2)
    .drawLine(lt2 + wt - s, htk, lt2 + wt - s, htk2)
    .drawLine(lt2 + wt + s, htk, lt2 + wt + s, htk2)
    .drawLine(lt + lt2 + wt - s, htk, lt + lt2 + wt - s, htk2)
    .drawLine(lt + lt2 + wt + s, htk, lt + lt2 + wt + s, htk2)
    .drawLine(lt + lt2 + wt * 2, htk, lt + lt2 + wt * 2, htk2)
    .drawLine(lt2 - s, k, lt2 + s, k)
    .drawLine(lt2 + wt - s, k, lt2 + wt + s, k)
    .drawLine(lt + lt2 + wt - s, k, lt + lt2 + wt + s, k)
    .drawLine(lt2 - s, htk, lt2 + s, htk)
    .drawLine(lt2 + wt - s, htk, lt2 + wt + s, htk)
    .drawLine(lt + lt2 + wt - s, htk, lt + lt2 + wt + s, htk)
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2 + 40, k + 6)
    .drawLine(lt + lt2 + wt * 2, htk, lt + lt2 + wt * 2 + 40, htk - 6)
    .drawLine(lt + lt2 + wt * 2 + 40, k + 6, lt + lt2 + wt * 2 + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt + lt2 + wt * 2, k)
    .drawLine(0, htk, lt + lt2 + wt * 2, htk)
    .drawLine(lt2, k, lt2, htk)
    .drawLine(lt2 + wt, k, lt2 + wt, htk)
    .drawLine(lt + lt2 + wt, k, lt + lt2 + wt, htk)
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2, htk)

  return d.toDxfString()
}

module.exports = { generateDxf }
