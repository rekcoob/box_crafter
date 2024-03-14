const Drawing = require('dxf-writer')

function generateBoxOpen(l, w, h, t) {
  // Nadmiera dlzky = Dlzka + hrubka materialu
  const lt = l + t
  const lt2 = l + t - 2
  // Nadmiera sirky = Sirka + hrubka materialu
  const wt = w + t
  // Vyska klopy
  const k = t === 5 ? w / 2 + 4 : w / 2
  // Nadmiera vysky = Vyska + hrubka materialu * 2
  const htk = h + t + k
  // Spary
  const s = 4

  let d = new Drawing()

  // Draw lines based on input
  // Cut Layer
  d.drawLine(0, htk, 0, 0) // 1vertical-full
    // horizontal-upper-full
    .drawLine(0, htk, lt + lt2 + wt * 2, htk)
    // Horizontal Lower
    .drawLine(0, 0, lt2 - s, 0) // horizontal-lower-1
    .drawLine(lt2 + s, 0, lt2 + wt - s, 0) // horizontal-lower-2
    .drawLine(lt2 + wt + s, 0, lt + lt2 + wt - s, 0) // horizontal-lower-3
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt * 2, 0) // horizontal-lower-4
    // Klopy Vyseky Vertical Lower
    .drawLine(lt2 - s, 0, lt2 - s, k) // klopy-lower-1
    .drawLine(lt2 + s, 0, lt2 + s, k) // klopy-lower-2
    .drawLine(lt2 + wt - s, 0, lt2 + wt - s, k) // klopy-lower-3
    .drawLine(lt2 + wt + s, 0, lt2 + wt + s, k) // klopy-lower-4
    .drawLine(lt + lt2 + wt - s, 0, lt + lt2 + wt - s, k) // klopy-lower-5
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt + s, k) // klopy-lower-6
    .drawLine(lt + lt2 + wt * 2, 0, lt + lt2 + wt * 2, k) // klopy-lower-7
    // Spary Vyseky Horizontal Lower
    .drawLine(lt2 - s, k, lt2 + s, k) // Spary-lower-1
    .drawLine(lt2 + wt - s, k, lt2 + wt + s, k) // Spary-lower-2
    .drawLine(lt + lt2 + wt - s, k, lt + lt2 + wt + s, k) // Spary-lower-3
    // Zalozka Sikmina Lower
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2 + 40, k + 6)
    // Zalozka Sikmina Upper
    .drawLine(lt + lt2 + wt * 2, htk, lt + lt2 + wt * 2 + 40, htk - 6)
    // Zalozka Horizontal line
    .drawLine(lt + lt2 + wt * 2 + 40, k + 6, lt + lt2 + wt * 2 + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt + lt2 + wt * 2, k) // horizontal-lower-full
    .drawLine(lt2, k, lt2, htk) // vertical-1
    .drawLine(lt2 + wt, k, lt2 + wt, htk) // vertical-2
    .drawLine(lt + lt2 + wt, k, lt + lt2 + wt, htk) // vertical-3
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2, htk) // vertical-4

  return d.toDxfString()
}

module.exports = { generateBoxOpen }
