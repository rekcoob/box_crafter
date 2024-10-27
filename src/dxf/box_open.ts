import Drawing from 'dxf-writer'

export function generateBoxOpen(
  l: number,
  w: number,
  h: number,
  t: number
): string {
  const lt = l + t
  const lt2 = l + t - 2
  const wt = w + t
  const k =
    t === 5
      ? w / 2 + 4
      : t === 4
      ? w / 2 + 2
      : t === 10
      ? w / 2 + 10
      : w / 2 + 1
  const htk = h + t + k
  const s = 4

  const d = new Drawing()

  // Cut Layer
  d.drawLine(0, htk, 0, 0) // vertical-full-1
    // horizontal-upper-full
    .drawLine(0, htk, lt + lt2 + wt * 2, htk)
    // Horizontal Lower
    .drawLine(0, 0, lt2 - s, 0) // horizontal-lower-1
    .drawLine(lt2 + s, 0, lt2 + wt - s, 0) // horizontal-lower-2
    .drawLine(lt2 + wt + s, 0, lt + lt2 + wt - s, 0) // horizontal-lower-3
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt * 2 - s, 0) // horizontal-lower-4
    // Flaps Vertical Lower
    .drawLine(lt2 - s, 0, lt2 - s, k) // Flaps-lower-1
    .drawLine(lt2 + s, 0, lt2 + s, k) // Flaps-lower-2
    .drawLine(lt2 + wt - s, 0, lt2 + wt - s, k) // Flaps-lower-3
    .drawLine(lt2 + wt + s, 0, lt2 + wt + s, k) // Flaps-lower-4
    .drawLine(lt + lt2 + wt - s, 0, lt + lt2 + wt - s, k) // Flaps-lower-5
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt + s, k) // Flaps-lower-6
    .drawLine(lt + lt2 + wt * 2 - s, 0, lt + lt2 + wt * 2 - s, k) // Flaps-lower-7
    // Flap Gaps Horizontal Lower
    .drawLine(lt2 - s, k, lt2 + s, k) // Flap Gaps-lower-1
    .drawLine(lt2 + wt - s, k, lt2 + wt + s, k) // Flap Gaps-lower-2
    .drawLine(lt + lt2 + wt - s, k, lt + lt2 + wt + s, k) // Flap Gaps-lower-3
    .drawLine(lt2 + lt + 2 * wt - s, k, lt + lt2 + wt * 2, k) // Flap Gaps-lower-4
    // GlueFlap Diagonal Lower
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2 + 40, k + 6)
    // GlueFlap Diagonal Upper
    .drawLine(lt + lt2 + wt * 2, htk, lt + lt2 + wt * 2 + 40, htk - 6)
    // GlueFlap Horizontal line
    .drawLine(lt + lt2 + wt * 2 + 40, k + 6, lt + lt2 + wt * 2 + 40, htk - 6)

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    // Horizontal Lower
    .drawLine(0, k, lt2 - s, k) // Horizontal-lower-1
    .drawLine(lt2 + s, k, lt2 + wt - s, k) // Horizontal-lower-2
    .drawLine(lt2 + wt + s, k, lt2 + lt + wt - s, k) // Horizontal-lower-3
    .drawLine(lt2 + lt + wt + s, k, lt2 + lt + 2 * wt - s, k) // Horizontal-lower-4
    .drawLine(lt2, k, lt2, htk) // vertical-1
    .drawLine(lt2 + wt, k, lt2 + wt, htk) // vertical-2
    .drawLine(lt + lt2 + wt, k, lt + lt2 + wt, htk) // vertical-3
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2, htk) // vertical-4

  return d.toDxfString()
}
