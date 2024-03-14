const Drawing = require('dxf-writer')

function generateHalfClosed(l, w, h, t) {
  // Nadmiera dlzky = Dlzka + hrubka materialu
  const lt = l + t
  const lt2 = l + t - 2
  // Nadmiera sirky = Sirka + hrubka materialu
  const wt = w + t
  // Vyska klopy
  const k = t === 5 ? w / 2 + 4 : w / 2
  // Nadmiera vysky = Vyska + hrubka materialu * 2
  const htk = h + t * 2 + k
  const htk2 = h + 2 * (t + k)
  // Spary
  const s = 4

  let d = new Drawing()

  // Draw lines based on input
  // Cut Layer
  d.drawLine(0, htk2, 0, 0) // 1vertical-full
    // Horizontal Lower
    .drawLine(0, 0, lt - s, 0) // horizontal-lower-1
    .drawLine(lt + s, 0, lt + wt, 0) // horizontal-lower-2
    // Horizontal Upper
    .drawLine(0, htk2, lt - s, htk2) // horizontal-upper-1
    .drawLine(lt + s, htk2, lt + wt, htk2) // horizontal-upper-2
    // Klopy Vyseky Vertical Lower
    .drawLine(lt - s, 0, lt - s, k) // klopy-lower-1
    .drawLine(lt + s, 0, lt + s, k) // klopy-lower-2
    .drawLine(lt + wt, 0, lt + wt, k) // klopy-lower-3
    // Klopy Vyseky Vertical Upper
    .drawLine(lt - s, htk, lt - s, htk2) // klopy-Upper-1
    .drawLine(lt + s, htk, lt + s, htk2) // klopy-Upper-2
    .drawLine(lt + wt, htk, lt + wt, htk2) // klopy-Upper-3
    // Spary Vyseky Horizontal Lower
    .drawLine(lt - s, k, lt + s, k) // Spary-lower-1
    // Spary Vyseky Horizontal Upper
    .drawLine(lt - s, htk, lt + s, htk) // Spary-Upper-1
    // Zalozka Sikmina Lower
    .drawLine(lt + wt, k, lt + wt + 40, k + 6)
    // Zalozka Sikmina Upper
    .drawLine(lt + wt, htk, lt + wt + 40, htk - 6)
    // Zalozka Horizontal line
    .drawLine(lt + wt + 40, k + 6, lt + wt + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt + wt, k) // vertical-lower-full
    .drawLine(0, htk, lt + wt, htk) // vertical-upper-full
    .drawLine(lt, k, lt, htk) // horizontal-1
    .drawLine(lt + wt, k, lt + wt, htk) // horizontal-2

  return d.toDxfString()
}

module.exports = { generateHalfClosed }
