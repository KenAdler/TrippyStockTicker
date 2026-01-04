# Trippy Stock Ticker 🌀🌈

A real-time stock market ticker with psychedelic visual effects that evoke the visual distortions of a heavy dose of magic mushrooms. Watch stock prices morph, warp, and breathe with trippy animations!

## Features

- 🔴 Real-time stock market data (via Alpha Vantage API)
- 🌈 Psychedelic visual effects:
  - Warping and morphing animations
  - Color-shifting gradients
  - Breathing/pulsing effects
  - Glitch animations
  - Pattern overlays
  - Floating card animations
- 📊 Multiple stock tracking
- 🎨 Responsive design
- ⚡ Auto-updates every 5 seconds

## Setup

### Option 1: Use with Free API Key

1. Get a free API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. Enter the API key in the app (optional - works without it too!)

### Option 2: Demo Mode

The app works without an API key using demo data with realistic variations.

## Local Development

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # Then visit http://localhost:8000
   ```

## Deployment to Internet-Facing URL

### Option 1: Netlify (Recommended - Free & Easy)

1. Push this repository to GitHub
2. Go to [netlify.com](https://www.netlify.com)
3. Sign up/login and click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Deploy! Your site will be live at `your-project-name.netlify.app`

### Option 2: Vercel (Free & Easy)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login and click "Add New Project"
4. Import your GitHub repository
5. Deploy! Your site will be live at `your-project-name.vercel.app`

### Option 3: GitHub Pages (Free)

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be live at `username.github.io/repository-name`

### Option 4: Google Cloud Storage / Firebase Hosting

Since you mentioned Google Drive, here's a Google option:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init hosting`
3. Follow prompts and select this directory
4. Run `firebase deploy`
5. Your site will be live on Firebase Hosting

**Note:** Google Drive itself cannot host web applications. The above options are proper hosting solutions.

## Usage

1. Enter a stock symbol (e.g., AAPL, TSLA, GOOGL, MSFT)
2. Click "Add Stock" or press Enter
3. Watch the psychedelic animations as prices update!
4. Add multiple stocks to track
5. Prices auto-update every 5 seconds

## Customization

- **Update Frequency**: Change the interval in `script.js` (line with `setInterval`)
- **Colors**: Modify the gradient colors in `styles.css`
- **Animations**: Adjust animation speeds and effects in `styles.css`
- **Stock Symbols**: Default demo stocks can be modified in `script.js`

## Browser Support

- Chrome/Edge: Full support ✅
- Firefox: Full support ✅
- Safari: Full support ✅
- Mobile browsers: Supported ✅

## API Notes

- **Alpha Vantage**: Free tier allows 5 API calls per minute, 500 per day
- The app uses a CORS proxy for API calls (for demo purposes)
- For production, consider setting up your own backend proxy
- Demo mode works offline with realistic data variations

## License

MIT License - Feel free to use and modify!

---

**Disclaimer**: This is a demo application. For production use, implement proper error handling, rate limiting, and consider using a backend proxy for API calls to avoid CORS issues.

