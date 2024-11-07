# 📦 Box Crafter

**Box Crafter** is a React application for designing custom boxes. Users can select dimensions, material type, and box style to generate a DXF file ready for manufacturing.

🌐 **Live Demo**: [Box Crafter on Netlify](https://box-crafter.netlify.app)

<!-- ## Theme Demo

![Screenshot of Box Crafter](./src/assets/) -->

## ✨ Features

<!-- - 🧱 **Material Selection**: Choose between different materials (B, C, BC, AAC) with predefined thicknesses. -->

- 📜 **Material Selection**: Choose between different materials (B, C, BC, AAC) with predefined thicknesses.
- 📐 **Dimension Input**: Enter inner dimensions to create dxf file based on material thickness.
- 📦 **Box Styles**: Choose from standard FEFCO box styles like Regular Slotted Box (Code 0201).
- 💾 **DXF Export**: Download a DXF file of the unfolded box layout.

## 🛠 Technologies

- **React** for UI
- **JavaScript** for calculations
- **TypeScript** for Type Safety
- **DXF Generator Library** (`dxf-writer`)

## 🚀 Getting Started

1. **Clone and Install**:
   ```bash
   git clone https://github.com/rekcoob/box_crafter.git
   cd box_crafter
   npm install
   ```
2. **Run Locally**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

## 🎮 Usage

1. **Select Material & Box Style**.
2. **Enter Dimensions** (Length, Width, Height)
3. **Download DXF** for the box layout

## 📂 Project Structure

- `src/components`: UI components like DimensionInput and BoxStyles
- `src/services`: Functions for dimension calculations and DXF generation

<!-- ## 🤝 Contributing

1. Fork and clone the repo.
2. Create a branch, make changes, and open a pull request. -->

## 📄 License

This project is licensed under the MIT License
