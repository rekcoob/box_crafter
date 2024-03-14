const Drawing = require('dxf-writer')

function generateHalfOpen(l, w, h, t) {
  // Nadmiera dlzky = Dlzka + hrubka materialu
  const lt = l + t
  const lt2 = l + t - 2
  // Nadmiera sirky = Sirka + hrubka materialu
  const wt = w + t
  // Vyska klopy
  const k = t === 5 ? w / 2 + 4 : w / 2
  // Nadmiera vysky = Vyska + hrubka materialu * 2
  const htk = h + t + k
  const htk2 = h + 2 * k + t
  // Spary
  const s = 4

  let d = new Drawing()

  // Draw lines based on input
  // Cut Layer
  d.drawLine(0, htk, 0, 0) // 1vertical-full
    // horizontal-upper-full
    .drawLine(0, htk, lt + wt, htk)
    // Horizontal Lower
    .drawLine(0, 0, lt - s, 0) // horizontal-lower-1
    .drawLine(lt + s, 0, lt + wt, 0) // horizontal-lower-2
    // Klopy Vyseky Vertical Lower
    .drawLine(lt - s, 0, lt - s, k) // klopy-lower-1
    .drawLine(lt + s, 0, lt + s, k) // klopy-lower-2
    .drawLine(lt + wt, 0, lt + wt, k) // klopy-lower-3
    // Spary Vyseky Horizontal Lower
    .drawLine(lt - s, k, lt + s, k) // Spary-lower-1
    // Zalozka Sikmina Lower
    .drawLine(lt + wt, k, lt + wt + 40, k + 6)
    // Zalozka Sikmina Upper
    .drawLine(lt + wt, htk, lt + wt + 40, htk - 6)
    // Zalozka Horizontal line
    .drawLine(lt + wt + 40, k + 6, lt + wt + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt + wt, k) // horizontal-lower-full
    .drawLine(lt, k, lt, htk) // vertical-1
    .drawLine(lt + wt, k, lt + wt, htk) // vertical-2

  return d.toDxfString()
}

module.exports = { generateHalfOpen }
