import Drawing from 'dxf-writer'

// Define the types for the function inputs
export function generateBox(
  l: number,
  w: number,
  h: number,
  t: number
): string {
  const lt = l + t
  const lt2 = l + t - 2
  const wt = w + t
  const k = t === 5 ? w / 2 + 4 : t === 4 ? w / 2 + 2 : w / 2 + 1
  const htk = h + t * 2 + k
  const htk2 = h + 2 * (t + k)
  const s = 4

  const d = new Drawing()

  // Cut Layer
  d.drawLine(0, htk2, 0, 0) // vertical-full-1
    .drawLine(0, 0, lt2 - s, 0) // horizontal-lower-2
    .drawLine(lt2 + s, 0, lt2 + wt - s, 0) // horizontal-lower-3
    .drawLine(lt2 + wt + s, 0, lt + lt2 + wt - s, 0) // horizontal-lower-4
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt * 2 - s, 0) // horizontal-lower-5
    .drawLine(0, htk2, lt2 - s, htk2) // horizontal-upper-6
    .drawLine(lt2 + s, htk2, lt2 + wt - s, htk2) // horizontal-upper-7
    .drawLine(lt2 + wt + s, htk2, lt + lt2 + wt - s, htk2) // horizontal-upper-8
    .drawLine(lt + lt2 + wt + s, htk2, lt + lt2 + wt * 2 - s, htk2) // horizontal-upper-9
    .drawLine(lt2 - s, 0, lt2 - s, k) // Flap Gaps-lower-10
    .drawLine(lt2 + s, 0, lt2 + s, k) // Flap Gaps-lower-11
    .drawLine(lt2 + wt - s, 0, lt2 + wt - s, k) // Flap Gaps-lower-12
    .drawLine(lt2 + wt + s, 0, lt2 + wt + s, k) // Flap Gaps-lower-13
    .drawLine(lt + lt2 + wt - s, 0, lt + lt2 + wt - s, k) // Flap Gaps-lower-14
    .drawLine(lt + lt2 + wt + s, 0, lt + lt2 + wt + s, k) // Flap Gaps-lower-15
    .drawLine(lt + lt2 + wt * 2 - s, 0, lt + lt2 + wt * 2 - s, k) // Flap Gaps-lower-16
    .drawLine(lt2 - s, htk, lt2 - s, htk2) // Flap Gaps-Upper-17
    .drawLine(lt2 + s, htk, lt2 + s, htk2) // Flap Gaps-Upper-18
    .drawLine(lt2 + wt - s, htk, lt2 + wt - s, htk2) // Flap Gaps-Upper-19
    .drawLine(lt2 + wt + s, htk, lt2 + wt + s, htk2) // Flap Gaps-Upper-20
    .drawLine(lt + lt2 + wt - s, htk, lt + lt2 + wt - s, htk2) // Flap Gaps-Upper-21
    .drawLine(lt + lt2 + wt + s, htk, lt + lt2 + wt + s, htk2) // Flap Gaps-Upper-22
    .drawLine(lt + lt2 + wt * 2 - s, htk, lt + lt2 + wt * 2 - s, htk2) // Flap Gaps-Upper-23
    .drawLine(lt2 - s, k, lt2 + s, k) // Slots-lower-24
    .drawLine(lt2 + wt - s, k, lt2 + wt + s, k) // Slots-lower-25
    .drawLine(lt + lt2 + wt - s, k, lt + lt2 + wt + s, k) // Slots-lower-26
    .drawLine(lt2 + lt + 2 * wt - s, k, lt + lt2 + wt * 2, k) // Slots-lower-27-glueFlap
    .drawLine(lt2 - s, htk, lt2 + s, htk) // Slots-Upper-28
    .drawLine(lt2 + wt - s, htk, lt2 + wt + s, htk) // Slots-Upper-29
    .drawLine(lt + lt2 + wt - s, htk, lt + lt2 + wt + s, htk) // Slots-Upper-30
    .drawLine(lt2 + lt + 2 * wt - s, htk, lt + lt2 + wt * 2, htk) // Slots-Upper-31-glueFlap
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2 + 40, k + 6) // GlueFlap Diagonal Lower -32
    .drawLine(lt + lt2 + wt * 2, htk, lt + lt2 + wt * 2 + 40, htk - 6) // GlueFlap Diagonal Upper -33
    .drawLine(lt + lt2 + wt * 2 + 40, k + 6, lt + lt2 + wt * 2 + 40, htk - 6) // GlueFlap Horizontal -34

  // Crease layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, lt2 - s, k) // Horizontal-lower-1
    .drawLine(lt2 + s, k, lt2 + wt - s, k) // Horizontal-lower-2
    .drawLine(lt2 + wt + s, k, lt2 + lt + wt - s, k) // Horizontal-lower-3
    .drawLine(lt2 + lt + wt + s, k, lt2 + lt + 2 * wt - s, k) // Horizontal-lower-4
    .drawLine(0, htk, lt2 - s, htk) // Horizontal-upper-5
    .drawLine(lt2 + s, htk, lt2 + wt - s, htk) // Horizontal-upper-6
    .drawLine(lt2 + wt + s, htk, lt2 + lt + wt - s, htk) // Horizontal-upper-7
    .drawLine(lt2 + lt + wt + s, htk, lt2 + lt + 2 * wt - s, htk) // Horizontal-upper-8
    .drawLine(lt2, k, lt2, htk) // Vertical-9
    .drawLine(lt2 + wt, k, lt2 + wt, htk) // Vertical-10
    .drawLine(lt + lt2 + wt, k, lt + lt2 + wt, htk) // Vertical-11
    .drawLine(lt + lt2 + wt * 2, k, lt + lt2 + wt * 2, htk) // Vertical-12

  return d.toDxfString()
}
