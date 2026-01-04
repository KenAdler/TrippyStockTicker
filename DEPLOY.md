# Deployment Guide

## Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (if installed)
```bash
gh repo create TrippyStockTicker --private --source=. --remote=origin --push
```

### Option B: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `TrippyStockTicker`
3. Set to **Private**
4. Click "Create repository"
5. Then run these commands:

```bash
cd "/Users/kenadler/Documents/GitHub/TrippyStockTicker"
git remote add origin git@github.com:YOUR_USERNAME/TrippyStockTicker.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Internet

### Recommended: Netlify (Easiest & Free)

1. Go to [netlify.com](https://www.netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select the `TrippyStockTicker` repository
5. Build settings:
   - Build command: (leave empty - it's a static site)
   - Publish directory: `/` (root)
6. Click "Deploy site"
7. Your site will be live at `trippystockticker.netlify.app` (or custom name)

**To update**: Just push to GitHub and Netlify auto-deploys!

### Alternative: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Deploy! Your site will be live immediately

### Alternative: GitHub Pages (for public repos)

Since you want a private repo, GitHub Pages won't work (it's only for public repos).
Use Netlify or Vercel instead.

### Alternative: Firebase Hosting (Google)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   cd "/Users/kenadler/Documents/GitHub/TrippyStockTicker"
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `.`
   - Single-page app: No
   - Overwrite index.html: No

4. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

Your site will be at `your-project.firebaseapp.com`

## Quick Deploy Commands Summary

```bash
# After creating GitHub repo and setting remote:
cd "/Users/kenadler/Documents/GitHub/TrippyStockTicker"
git push -u origin main

# Then use Netlify/Vercel web interface to connect and deploy
```

## Note About Google Drive

Google Drive cannot host web applications. Use one of the options above (Netlify, Vercel, or Firebase) for proper web hosting.

