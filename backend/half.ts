import Drawing from 'dxf-writer'

function generateHalf(l: number, w: number, h: number, t: number): string {
  // Excess Length = Length + Thickness
  const lt = l + t
  const lt2 = l + t - 2
  // Excess Width = Width + Thickness
  const wt = w + t
  // Flap Height
  const k = t === 5 ? w / 2 + 4 : t === 4 ? w / 2 + 2 : w / 2 + 1
  // Excess Height = Height + Thickness * 2
  const htk = h + t * 2 + k
  const htk2 = h + 2 * (t + k)
  // Flap Gap
  const s = 4

  let d = new Drawing()

  // Cut Layer
  d.drawLine(0, htk2, 0, 0) // 1vertical-full

    .drawLine(0, 0, lt - s, 0) // horizontal-lower-1
    .drawLine(lt + s, 0, lt + wt - s, 0) // horizontal-lower-2
    // Horizontal Upper
    .drawLine(0, htk2, lt - s, htk2) // horizontal-upper-1
    .drawLine(lt + s, htk2, lt + wt - s, htk2) // horizontal-upper-2
    // Flaps Vyseky Vertical Lower
    .drawLine(lt - s, 0, lt - s, k) // flaps-lower-1
    .drawLine(lt + s, 0, lt + s, k) // flaps-lower-2
    .drawLine(lt + wt - s, 0, lt + wt - s, k) // flaps-lower-3
    // Flaps Vyseky Vertical Upper
    .drawLine(lt - s, htk, lt - s, htk2) // flaps-Upper-1
    .drawLine(lt + s, htk, lt + s, htk2) // flaps-Upper-2
    .drawLine(lt + wt - s, htk, lt + wt - s, htk2) // flaps-Upper-3
    // Flap Gaps Vyseky Horizontal Lower
    .drawLine(lt - s, k, lt + s, k) // Flap Gaps-lower-1
    .drawLine(lt + wt - s, k, lt + wt, k) // Flap Gaps-lower-4
    // Flap Gaps Vyseky Horizontal Upper
    .drawLine(lt - s, htk, lt + s, htk) // Flap Gaps-Upper-1
    .drawLine(lt + wt - s, htk, lt + wt, htk) // Flap Gaps-Upper-4
    // GLue Flap Diagonal Lower
    .drawLine(lt + wt, k, lt + wt + 40, k + 6)
    // GLue Flap Diagonal Upper
    .drawLine(lt + wt, htk, lt + wt + 40, htk - 6)
    // GLue Flap Horizontal line
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

export { generateHalf }
