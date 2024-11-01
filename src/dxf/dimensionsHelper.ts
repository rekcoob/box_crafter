// /src/dxf/dimensionsHelper.ts

// export function calculateDimensions(
//   l: number,
//   w: number,
//   h: number,
//   t: number
// ): { lt: number; wt: number; k: number; htk: number; htk2: number } {
//   const lt = l + t
//   const wt = w + t
//   const k =
//     t === 5
//       ? Math.ceil(w / 2) + 4
//       : t === 4
//       ? Math.ceil(w / 2) + 2
//       : t === 10
//       ? Math.ceil(w / 2) + 10
//       : Math.ceil(w / 2) + 1
//   const htk = h + t + k
//   const htk2 = h + 2 * (t + k)

//   return { lt, wt, k, htk, htk2 }
// }

export function calculateDimensions(
  l: number,
  w: number,
  h: number,
  t: number
): {
  lt: number
  lt2: number
  wt: number
  k: number
  htk: number
  htk2: number
} {
  const lt = l + t
  const lt2 = t === 10 ? l + t : l + t - 2
  const wt = w + t
  const k =
    t === 5
      ? Math.ceil(w / 2) + 4
      : t === 4
      ? Math.ceil(w / 2) + 2
      : t === 10
      ? Math.ceil(w / 2) + 10
      : Math.ceil(w / 2) + 1
  const htk = h + t + k
  const htk2 = h + 2 * (t + k)

  return { lt, lt2, wt, k, htk, htk2 }
}
