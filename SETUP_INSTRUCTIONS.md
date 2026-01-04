# Setup Instructions

## Step 1: Create GitHub Repository

### Option A: Quick Create via Browser
1. Go to: https://github.com/new
2. Repository name: `TrippyStockTicker`
3. Description: `Real-time stock ticker with psychedelic visual effects`
4. Set to **Private** ✓
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

### Option B: Using GitHub CLI (if you install it)
```bash
brew install gh
gh auth login
gh repo create TrippyStockTicker --private --source=. --remote=origin --push
```

## Step 2: Push Code to GitHub

After creating the repo, run these commands:

```bash
cd "/Users/kenadler/Documents/GitHub/TrippyStockTicker"
git remote add origin git@github.com:KenAdler/TrippyStockTicker.git
git branch -M main
git push -u origin main
```

(If the remote already exists, use: `git remote set-url origin git@github.com:KenAdler/TrippyStockTicker.git`)

## Step 3: Get Alpha Vantage API Key (for Stock Data)

The app works WITHOUT an API key (uses demo data), but for real stock data:

1. Go to: https://www.alphavantage.co/support/#api-key
2. Fill out the form:
   - Email: Your email
   - First Name: Your first name
   - Last Name: Your last name
   - Organization: (optional)
   - Check the terms box
3. Click **"GET FREE API KEY"**
4. Copy the API key they give you
5. Paste it into the app's "API Key" field when you run it

**Free Tier Limits:**
- 5 API calls per minute
- 500 API calls per day

**Note:** The app works perfectly fine in demo mode without an API key - it just uses realistic simulated data instead of live stock prices.

## Step 4: Deploy to Internet (Optional)

See `DEPLOY.md` for deployment options (Netlify, Vercel, Firebase, etc.)

