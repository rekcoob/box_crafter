const Drawing = require('dxf-writer')

function generateDxf(l, l2, w, h, k, s) {
  let d = new Drawing()

  // Draw lines based on input
  // Cut Layer
  d.drawLine(0, h + k * 2, 0, 0) // 1vertical-full
    // Horizontal Lower
    .drawLine(0, 0, l2 - s, 0) // horizontal-lower-1
    .drawLine(l2 + s, 0, l2 + w - s, 0) // horizontal-lower-2
    .drawLine(l2 + w + s, 0, l + l2 + w - s, 0) // horizontal-lower-3
    .drawLine(l + l2 + w + s, 0, l + l2 + w * 2, 0) // horizontal-lower-4
    // Horizontal Upper
    .drawLine(0, h + k * 2, l2 - s, h + k * 2) // horizontal-lower-1
    .drawLine(l2 + s, h + k * 2, l2 + w - s, h + k * 2) // horizontal-lower-2
    .drawLine(l2 + w + s, h + k * 2, l + l2 + w - s, h + k * 2) // horizontal-lower-3
    .drawLine(l + l2 + w + s, h + k * 2, l + l2 + w * 2, h + k * 2) // horizontal-lower-4
    // Klopy Vyseky Horizontal Lower
    .drawLine(l2 - s, 0, l2 - s, k) // klopy-lower-1
    .drawLine(l2 + s, 0, l2 + s, k) // klopy-lower-2
    .drawLine(l2 + w - s, 0, l2 + w - s, k) // klopy-lower-3
    .drawLine(l2 + w + s, 0, l2 + w + s, k) // klopy-lower-4
    .drawLine(l + l2 + w - s, 0, l + l2 + w - s, k) // klopy-lower-5
    .drawLine(l + l2 + w + s, 0, l + l2 + w + s, k) // klopy-lower-5
    .drawLine(l + l2 + w * 2, 0, l + l2 + w * 2, k) // klopy-lower-6
    // Klopy Vyseky Horizontal Upper
    .drawLine(l2 - s, h + k, l2 - s, h + k * 2) // klopy-Upper-1
    .drawLine(l2 + s, h + k, l2 + s, h + k * 2) // klopy-Upper-2
    .drawLine(l2 + w - s, h + k, l2 + w - s, h + k * 2) // klopy-Upper-3
    .drawLine(l2 + w + s, h + k, l2 + w + s, h + k * 2) // klopy-Upper-4
    .drawLine(l + l2 + w - s, h + k, l + l2 + w - s, h + k * 2) // klopy-Upper-5
    .drawLine(l + l2 + w + s, h + k, l + l2 + w + s, h + k * 2) // klopy-Upper-5
    .drawLine(l + l2 + w * 2, h + k, l + l2 + w * 2, h + k * 2) // klopy-Upper-6
    // Spary Vyseky Vertical Lower
    .drawLine(l2 - s, k, l2 + s, k) // Spary-lower-1
    .drawLine(l2 + w - s, k, l2 + w + s, k) // Spary-lower-2
    .drawLine(l + l2 + w - s, k, l + l2 + w + s, k) // Spary-lower-3
    // Spary Vyseky Vertical Upper
    .drawLine(l2 - s, h + k, l2 + s, h + k) // Spary-Upper-1
    .drawLine(l2 + w - s, h + k, l2 + w + s, h + k) // Spary-Upper-2
    .drawLine(l + l2 + w - s, h + k, l + l2 + w + s, h + k) // Spary-Upper-3
    // Zalozka Sikmina Lower
    .drawLine(l + l2 + w * 2, k, l + l2 + w * 2 + 40, k + 6)
    // Zalozka Sikmina Upper
    .drawLine(l + l2 + w * 2, h + k, l + l2 + w * 2 + 40, h + k - 6)
    // Zalozka Horizontal line
    .drawLine(l + l2 + w * 2 + 40, k + 6, l + l2 + w * 2 + 40, h + k - 6) // klopy-Upper-6

  // Crease Layer
  d.addLayer('Crease', Drawing.ACI.RED, 'CONTINUOUS')
    .setActiveLayer('Crease')
    .drawLine(0, k, l + l2 + w * 2, k) // vertical-lower-full
    .drawLine(0, h + k, l + l2 + w * 2, h + k) // vertical-upper-full
    .drawLine(l2, k, l2, h + k) // horizontal-1
    .drawLine(l2 + w, k, l2 + w, h + k) // horizontal-2
    .drawLine(l + l2 + w, k, l + l2 + w, h + k) // horizontal-3
    .drawLine(l + l2 + w * 2, k, l + l2 + w * 2, h + k) // horizontal-4
  return d.toDxfString()
}

module.exports = { generateDxf }
