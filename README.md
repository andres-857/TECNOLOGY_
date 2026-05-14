# ⚡ TECNOLOGY - Cyberpunk Technology Database

A futuristic, neon-styled cyberpunk website showcasing advanced technologies with interactive filtering and dynamic animations.

## 🎮 Features

### 🌟 Cyberpunk Aesthetic
- **Neon Color Scheme**: Green (#00ff00), Magenta (#ff00ff), and Cyan (#00ffff)
- **Animated Grid Background**: Matrix-style grid effect
- **Glowing Effects**: Text shadows and box glows on all interactive elements
- **Smooth Animations**: Staggered card reveals and hover effects
- **Dark Theme**: Professional dark background with gradient overlays

### 🎯 Interactive Functionality
- **Category Filtering**: Filter technologies by category (ALL, IA, ROBOTICS, BIOTECH, WEAPONS)
- **Dynamic Card Rendering**: Cards appear with smooth animations
- **Keyboard Shortcuts**: 
  - `G` - Toggle Glitch Mode (Easter egg!)
  - `←` / `→` - Navigate between filter categories
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes

### 📊 Technologies Included

1. **Inteligencia Artificial** 🤖 - AI systems and machine learning
2. **Robótica** 🦾 - Robotics and automation
3. **Biotecnología** 🧬 - Biotechnology and biological engineering
4. **Armas Tecnológicas** ⚔️ - Advanced weapon systems

## 🚀 Getting Started

### Live Website
Visit your live site at: **https://andres-857.github.io/TECNOLOGY_/**

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/andres-857/TECNOLOGY_.git
cd TECNOLOGY_
```

2. Open `index.html` in your web browser
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# Or simply drag index.html into your browser
```

## 📁 Project Structure

```
TECNOLOGY_/
├── index.html           # Main HTML file
├── css/
│   └── style.css       # Cyberpunk styling with animations
├── js/
│   └── script.js       # Interactive functionality
├── data/
│   └── data.json       # Technology database (optional)
└── README.md           # This file
```

## 🛠️ Customization

### Adding New Technologies

Edit the `technologies` array in `js/script.js`:

```javascript
const technologies = [
    {
        id: 5,
        nombre: "quantum-computing",
        titulo: "Quantum Computing",
        descripcion: "Your description here...",
        icono: "⚛️",
        categoria: "quantum"
    },
    // ... more items
];
```

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary: #00ff00;      /* Main green */
    --secondary: #ff00ff;    /* Magenta */
    --tertiary: #00ffff;     /* Cyan */
    --dark: #0a0e27;         /* Dark background */
    --text: #e0e6ff;         /* Text color */
}
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `G` | Toggle Glitch Mode |
| `←` | Previous Category |
| `→` | Next Category |

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#00ff00` | Borders, titles, glows |
| Secondary Magenta | `#ff00ff` | Card titles, hover effects |
| Tertiary Cyan | `#00ffff` | Subtitle, status text |
| Dark Background | `#0a0e27` | Main background |
| Card Background | `#1a1f3a` | Card containers |

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations and gradients
- **JavaScript (Vanilla)** - No dependencies required
- **Git/GitHub** - Version control and hosting

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

Your site is automatically deployed to GitHub Pages at every push to the `main` branch.

### Manual Deployment Steps:

1. Go to Repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch and `/root` folder
4. Click Save
5. Wait 1-2 minutes for deployment

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**andres-857** - Created on May 14, 2026

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📧 Support

For issues or suggestions, please open a GitHub Issue on the repository.

---

**Made with ⚡ and neon glow ✨**

*POWERED BY CYBERPUNK.AI*
