# Valentine Website 💕

A stunning interactive Valentine's Day website with animations, music, and romantic effects. Express your love with this beautiful, fully customizable web experience!

## ✨ Features

### 🎵 Background Music
- Automatic playback of "Love Me Like You Do" by Ellie Goulding
- Toggle music on/off with a floating button
- Smooth volume controls (50% default)
- Fallback autoplay handling for browser restrictions

### 🎆 Interactive Animations
- **Fireworks/Firecrackers**: Colorful sparkle explosions with physics-based particles
- **Blooming Flowers**: 10 different flower types that grow from the bottom
- **Floating Hearts**: Romantic hearts that rise and drift across the screen
- **Big "I LOVE YOU" Text**: Dramatic pop-out text with glowing pulse effect

### ⭐ Visual Effects
- Twinkling starfield background with randomized opacity
- Custom romantic cursor (arrow with heart symbol)
- Animated text messages that fade in and out
- Mobile-responsive design
- Smooth transitions and glow effects

### 🎨 Design Elements
- Comic Sans MS font for playful, romantic feel
- Pink, blue, and purple color scheme
- Pulsing glow effects on text
- Professional animations with CSS3

### 🔘 Interactive Button
- "Click Me! ❤" button that triggers all animations
- Changes to "I Love You! 💕" when clicked
- Launches simultaneous fireworks, flowers, and hearts

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling, animations, and effects
- **JavaScript (ES6)** - Interactivity and animations
- **Canvas API** - Starfield background rendering
- **Web Audio API** - Background music playback

## 📁 Project Structure

```
valentine-website/
├── index.html              # Main HTML file
├── script.js               # All JavaScript logic
├── public/
│   ├── style.css          # All CSS styles
│   ├── images/
│   │   ├── favicon.png    # Website icon
│   │   └── pointer.png    # Original cursor image
│   └── music/
│       └── [your-music-file].mp3  # Background music
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Clone the Repository

```bash
git clone https://github.com/blakshmankumarroyals/valentine-website.git
cd valentine-website
```

### Option 2: Use as Template

Click [`Use this template`](https://github.com/blakshmankumarroyals/valentine-website/generate) to create your own copy.

## 🎵 Adding Your Music

1. Get your music file (MP3 format recommended)
2. Name it appropriately (e.g., `love-me-like-you-do.mp3`)
3. Place it in `public/music/` folder
4. Update the path in `index.html` if using a different filename:

```html
<source src="public/music/your-music-file.mp3" type="audio/mpeg">
```

**Music Recommendations:**
- Love Me Like You Do - Ellie Goulding
- Perfect - Ed Sheeran
- All of Me - John Legend
- Make You Feel My Love - Adele

## 🎨 Customization

### Change the Love Message

Edit the text in `script.js` around line 200-300 to customize messages:

```javascript
context.fillText("Your custom message here", canvas.width/2, canvas.height/2);
```

### Modify Colors

Update color schemes in `public/style.css`:

```css
#valentinesButton {
    background-color: #2d2dff;  /* Change button color */
}

#bigLoveText {
    color: #ff1493;  /* Change "I LOVE YOU" text color */
}
```

### Adjust Animation Counts

In `script.js`, modify animation counts:

```javascript
// Hearts count (currently 20)
for (let i = 0; i < 20; i++) { ... }

// Fireworks count (currently 8)
for (let i = 0; i < 8; i++) { ... }

// Flowers count (currently 10)
for (let i = 0; i < 10; i++) { ... }
```

### Change Footer Text

Edit `index.html` footer:

```html
<footer id="footer">
  YOUR CUSTOM TEXT HERE
</footer>
```

## 📱 Mobile Responsive

The website is fully responsive and adapts to:
- Desktop screens (full experience)
- Tablets (optimized layout)
- Mobile phones (adjusted font sizes and spacing)

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select main branch as source
5. Your site will be live at `https://blakshmankumarroyals.github.io/valentine-website/`

### Other Hosting Options

This is a static website and works on:
- Netlify
- Vercel
- Firebase Hosting
- Any static file hosting service

Simply upload the files and it's ready to go!

## 💻 Local Testing

### Simple Method (No Server Required)

Just open `index.html` in your browser. However, audio autoplay might be restricted.

### With Local Server (Recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000
```

Using Node.js:
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

**Note**: Audio autoplay policies vary by browser. Click anywhere on the page if music doesn't start automatically.

## 📝 Credits

**Original Concept**: Based on [in-all-the-stars](https://github.com/KalDrongo/in-all-the-stars) by [KalDrongo](https://github.com/KalDrongo)

**Enhanced & Modified By**: [YOUR LOVE LUCKY - blakshmankumarroyals](https://github.com/blakshmankumarroyals)

**Additional Features Added**:
- Background music with controls
- Fireworks and flower bloom animations
- Big popup "I LOVE YOU" text
- Custom romantic cursor
- Enhanced mobile responsiveness
- Removed PHP dependencies for pure static deployment
- Interactive button with multiple animation triggers

## 📜 License

This project is open source. See [LICENSE](LICENSE) file for details.

## ❤️ Show Your Love

If you used this for your Valentine, consider:
- ⭐ Starring this repository
- 🍴 Forking it
- 📢 Sharing it with others

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this project!

## 💌 Support

Having trouble? Check existing issues or create a new one on GitHub.

---

**Made with ❤️ for spreading love on Valentine's Day**

**Happy Valentine's Day! 💕**
