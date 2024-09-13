import Drawing from 'dxf-writer'

function generateHalfOpen(l: number, w: number, h: number, t: number): string {
  // Excess Length = Length + Thickness
  const lt = l + t
  const lt2 = l + t - 2
  // Excess Width = Width + Thickness
  const wt = w + t
  // Flap Height
  const k = t === 5 ? w / 2 + 4 : t === 4 ? w / 2 + 2 : w / 2 + 1
  // Excess Height = Height + Thickness * 2
  const htk = h + t + k
  const htk2 = h + 2 * k + t
  // Slots
  const s = 4

  let d = new Drawing()

  // Cut Layer
  d.drawLine(0, htk, 0, 0) // 1vertical-full
    // horizontal-upper-full
    .drawLine(0, htk, lt + wt, htk)
    // Horizontal Lower
    .drawLine(0, 0, lt - s, 0) // horizontal-lower-1
    .drawLine(lt + s, 0, lt + wt - s, 0) // horizontal-lower-2
    // Flaps Vyseky Vertical Lower
    .drawLine(lt - s, 0, lt - s, k) // klopy-lower-1
    .drawLine(lt + s, 0, lt + s, k) // klopy-lower-2
    .drawLine(lt + wt - s, 0, lt + wt - s, k) // klopy-lower-3
    // Slots Vyseky Horizontal Lower
    .drawLine(lt - s, k, lt + s, k) // Slots-lower-1
    .drawLine(lt + wt - s, k, lt + wt, k) // Slots-lower-4-zalozka
    // GlueFlap Diagonal Lower
    .drawLine(lt + wt, k, lt + wt + 40, k + 6)
    // GlueFlap Diagonal Upper
    .drawLine(lt + wt, htk, lt + wt + 40, htk - 6)
    // GlueFlap Horizontal line
    .drawLine(lt + wt + 40, k + 6, lt + wt + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt - s, k) // Horizontal-lower-1
    .drawLine(lt + s, k, lt + wt - s, k) // Horizontal-lower-2
    .drawLine(lt, k, lt, htk) // vertical-1
    .drawLine(lt + wt, k, lt + wt, htk) // vertical-2

  return d.toDxfString()
}

export { generateHalfOpen }
