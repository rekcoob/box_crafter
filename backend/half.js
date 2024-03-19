const Drawing = require('dxf-writer')

function generateHalf(l, w, h, t) {
  // Nadmiera dlzky = Dlzka + hrubka materialu
  const lt = l + t
  const lt2 = l + t - 2
  // Nadmiera sirky = Sirka + hrubka materialu
  const wt = w + t
  // Vyska klopy | Ternary Operator
  const k = t === 5 ? w / 2 + 4 : t === 4 ? w / 2 + 2 : w / 2 + 1
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
    .drawLine(lt + s, 0, lt + wt - s, 0) // horizontal-lower-2
    // Horizontal Upper
    .drawLine(0, htk2, lt - s, htk2) // horizontal-upper-1
    .drawLine(lt + s, htk2, lt + wt - s, htk2) // horizontal-upper-2
    // Klopy Vyseky Vertical Lower
    .drawLine(lt - s, 0, lt - s, k) // klopy-lower-1
    .drawLine(lt + s, 0, lt + s, k) // klopy-lower-2
    .drawLine(lt + wt - s, 0, lt + wt - s, k) // klopy-lower-3
    // Klopy Vyseky Vertical Upper
    .drawLine(lt - s, htk, lt - s, htk2) // klopy-Upper-1
    .drawLine(lt + s, htk, lt + s, htk2) // klopy-Upper-2
    .drawLine(lt + wt - s, htk, lt + wt - s, htk2) // klopy-Upper-3
    // Spary Vyseky Horizontal Lower
    .drawLine(lt - s, k, lt + s, k) // Spary-lower-1
    .drawLine(lt + wt - s, k, lt + wt, k) // Spary-lower-4-zalozka
    // Spary Vyseky Horizontal Upper
    .drawLine(lt - s, htk, lt + s, htk) // Spary-Upper-1
    .drawLine(lt + wt - s, htk, lt + wt, htk) // Spary-Upper-4-zalozka
    // Zalozka Sikmina Lower
    .drawLine(lt + wt, k, lt + wt + 40, k + 6)
    // Zalozka Sikmina Upper
    .drawLine(lt + wt, htk, lt + wt + 40, htk - 6)
    // Zalozka Horizontal line
    .drawLine(lt + wt + 40, k + 6, lt + wt + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt - s, k) // Horizontal-lower-1
    .drawLine(lt + s, k, lt + wt - s, k) // Horizontal-lower-2
    .drawLine(0, htk, lt - s, htk) // Horizontal-upper-1
    .drawLine(lt + s, htk, lt + wt - s, htk) // Horizontal-upper-2
    .drawLine(lt, k, lt, htk) // Verticalk1
    .drawLine(lt + wt, k, lt + wt, htk) // Verticalk2

  return d.toDxfString()
}

module.exports = { generateHalf }
