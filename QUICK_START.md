# Little Tradies Cafe — Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Test Locally (2 minutes)

```bash
cd "D:\7 - Little Tradies Cafe\Website\site"
python -m http.server 8000
```

Open browser: `http://localhost:8000`

✅ Test all pages load correctly

### Step 2: Deploy to Netlify (3 minutes)

**Option A: Drag & Drop (Fastest)**
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the `site` folder
3. Your site is live! 🎉

**Option B: Git Deploy (Recommended for updates)**
1. Create GitHub repo
2. Push code to GitHub
3. Connect to Netlify (Settings → Deployments)
4. Auto-deploys on each push

---

## 📋 Pre-Launch Checklist

- [ ] Update phone number (all files)
- [ ] Update email address (all files)
- [ ] Update address (all files)
- [ ] Test all forms (submit test data)
- [ ] Check all pages on mobile
- [ ] Verify links work
- [ ] Test navigation

---

## 🔧 Customization (Easiest First)

### 1. Business Info (5 min)
Edit in any HTML file:
- Phone: `(03) 1234 5678`
- Email: `hello@littletradiescafe.com.au`
- Address: `123 Little Builders Lane`

### 2. Menu Items (10 min)
Edit `site/menu.html`:
- Change prices
- Add/remove items
- Update descriptions

### 3. Events (5 min)
Edit `site/community.html`:
- Update dates
- Change workshop descriptions
- Add new events

### 4. Colors (5 min)
Edit `site/css/tokens.css`:
- All colors defined at top
- Change one place, updates everywhere
- Colors: teal, yellow, orange, navy, sage, coral

---

## 📊 After Going Live

### Day 1
- [ ] Check site loads on custom domain
- [ ] Submit sitemap to Google Search Console
- [ ] Share on social media

### Week 1
- [ ] Monitor form submissions
- [ ] Check Google Analytics is tracking
- [ ] Fix any reported issues

### Monthly
- [ ] Update events/tradie of month
- [ ] Check menu prices
- [ ] Review analytics
- [ ] Respond to form submissions

---

## 🆘 Common Issues

### Forms Not Working?
→ Check Netlify dashboard: Forms → submissions

### Images Not Showing?
→ Verify image files exist in `site/assets/`

### Site Not Live?
→ Wait 5 minutes for Netlify to build
→ Check build log in Netlify dashboard

### Analytics Not Tracking?
→ Replace `GA_TRACKING_ID` in `js/main.js`
→ Wait 24 hours for data to appear

---

## 📚 Full Documentation

- **README.md** (in /site) - Setup & configuration
- **DEPLOYMENT.md** - Complete deployment guide
- **IMPLEMENTATION_SUMMARY.md** - What was built

---

## 🚀 You're Ready!

Your production website is complete, optimized, and ready to launch.

**Next step:** Deploy to Netlify and go live! 🎉

Questions? Email: `hello@littletradiescafe.com.au`
