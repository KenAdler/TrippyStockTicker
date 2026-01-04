# How to Get Real Stock Data 🚀

## Quick Steps (2 minutes)

### Step 1: Get Your Free API Key

1. **Go to Alpha Vantage**: https://www.alphavantage.co/support/#api-key
2. **Fill out the form**:
   - Email: Your email address
   - First Name: Your first name  
   - Last Name: Your last name
   - Organization: (optional - leave blank or put "Personal")
   - Check the terms & conditions box
3. **Click "GET FREE API KEY"**
4. **Copy your API key** (it will look something like: `ABC123XYZ456...`)

### Step 2: Enter API Key in the App

1. **Open your Trippy Stock Ticker** (locally or on the web)
2. **Find the "API Key" field** at the top of the page
3. **Paste your API key** into the field
4. **Add a stock symbol** (e.g., AAPL, TSLA, GOOGL)
5. **Click "Add Stock"**

### Step 3: Verify Real Data

- Look for a **green "LIVE" badge** on stock cards - this means you're getting real data!
- Without the badge = demo data (still works, just simulated)

## That's It! ✨

Your stock prices will now update with **real-time market data** every 5 seconds!

---

## API Limits (Free Tier)

- **5 API calls per minute**
- **500 API calls per day**

This means:
- You can track up to 5 stocks updating every minute
- Or fewer stocks updating more frequently
- The app will automatically use demo data if you hit the limit

## Troubleshooting

### "LIVE" badge not showing?
- Double-check you entered the API key correctly
- Make sure you haven't exceeded the rate limit (5 calls/min)
- Check browser console for error messages (F12 → Console)

### Data seems wrong?
- Verify the stock symbol is correct (e.g., AAPL not APPL)
- Market may be closed - Alpha Vantage shows last closing price after hours

### Rate limit reached?
- Wait 1 minute and try again
- Remove some stocks to stay under the 5 calls/min limit
- The app will automatically fall back to demo data

---

## Alternative: Use Multiple API Keys

If you need more than 500 calls/day:
1. Get multiple free API keys from Alpha Vantage
2. Rotate between them (requires code modification)

Or upgrade to Alpha Vantage premium for higher limits.

---

## Need Help?

Check the main README.md or open an issue on GitHub!

