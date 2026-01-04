# Setting Up Your API Key

## Quick Setup (2 minutes)

1. **Get your free API key** from: https://www.alphavantage.co/support/#api-key

2. **Open `config.js`** in this project

3. **Replace `YOUR_API_KEY_HERE`** with your actual API key:
   ```javascript
   const API_CONFIG = {
       ALPHA_VANTAGE_API_KEY: 'YOUR_ACTUAL_API_KEY_GOES_HERE'
   };
   ```

4. **Save the file** and push to GitHub (or test locally)

5. **That's it!** Your website will now automatically use real stock data for all visitors.

## Important Notes

⚠️ **Security Warning**: The API key will be visible in the website's source code. Anyone can view it. This is fine for:
- Free-tier API keys
- Demo/prototype sites
- Personal projects

❌ **Not recommended for**:
- Production apps with paid API keys
- High-traffic sites (others could use your quota)

For production apps, use a backend proxy server instead.

## Testing

1. Open `index.html` in your browser
2. Add a stock symbol (e.g., AAPL)
3. Look for the green "LIVE" badge - this confirms real data!

## API Limits

Your free Alpha Vantage key has:
- **5 API calls per minute**
- **500 API calls per day**

The app tracks up to 5 stocks updating every minute, or fewer stocks more frequently.

