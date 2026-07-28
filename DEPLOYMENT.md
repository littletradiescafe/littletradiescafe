# Deployment Instructions — Little Tradies Cafe

## Current Status

✅ **Website is complete and ready for Netlify deployment.**

- 9 HTML pages with complete content
- CSS design system with mobile-responsive layout
- JavaScript for forms and interactivity
- SEO configuration (sitemap, robots.txt, schema)
- Netlify Forms integration
- Git repository initialized with first commit

## Next Steps

### 1. Add Image Assets (One-time)

The `site/assets/` folder needs these image files:

**Logo & Branding:**
- `logo-final.png` — Little Tradies Cafe logo

**Illustration Assets:**
- `illust-helmet.png` — Hard hat icon
- `illust-truck.png` — Truck illustration
- `illust-excavator.png` — Excavator illustration
- `illust-toolbox.png` — Tool box icon
- `illust-loader.png` — Loader illustration
- `illust-grader.png` — Grader illustration
- `illust-steamroller.png` — Steamroller illustration
- `illust-coffee-cup.png` — Coffee cup icon

**How to add:**
1. Download or create these image files
2. Place in `site/assets/` folder
3. Commit: `git add site/assets/ && git commit -m "Add image assets"`
4. Push to GitHub

### 2. Push to GitHub

```bash
# From littletradiescafe/ directory
git remote add origin https://github.com/YOUR_ORG/littletradiescafe.git
git push -u origin master
```

### 3. Connect to Netlify

1. Go to https://netlify.com
2. Sign in with GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. **Build settings:**
   - Build command: Leave empty (or use `echo 'Static site'`)
   - Publish directory: `site`
6. Click "Deploy site"

Netlify will deploy immediately. Your site will be live at:
`https://[random-name].netlify.app`

### 4. Configure Custom Domain

1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `littletradiescafe.com.au`
4. Netlify will show DNS records to add
5. Update your domain registrar DNS settings
6. Wait 24 hours for DNS to propagate

### 5. Enable Netlify Forms

Netlify automatically detects and activates forms. No additional setup needed.

View submissions:
1. Netlify dashboard → Forms
2. See all newsletter signups, nominations, and bookings

### 6. Optional: Add Google Analytics

Add to any page's `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

## File Checklist

```
✅ site/index.html            9,099 bytes
✅ site/about.html            ~4,200 bytes
✅ site/menu.html             ~4,800 bytes
✅ site/play.html             ~5,100 bytes
✅ site/toys.html             ~5,400 bytes
✅ site/community.html        ~9,200 bytes
✅ site/visit.html            9,400 bytes
✅ site/privacy.html          6,763 bytes
✅ site/terms.html            9,252 bytes
✅ site/sitemap.xml           1,832 bytes
✅ site/robots.txt              340 bytes
✅ site/css/style.css        ~22,000 bytes
✅ site/js/main.js            ~3,000 bytes
✅ netlify.toml                  ~1,000 bytes
✅ README.md                   Documentation
✅ .gitignore                  Git ignore rules
```

**Pending:**
⏳ `site/assets/` — image files (14 required)

## Content Management

### Update Homepage Daily Deal
Edit `site/index.html` → Search for `daily-deal` section

### Update Menu Prices
Edit `site/menu.html` → Update coffee and food pricing in the menu section

### Update Hours
Edit `site/visit.html` → Update the "Hours" section

### Add New Event
Edit `site/community.html` → Add to the events section with date, title, price

### Update Tradie of the Month
Edit `site/community.html` → Replace the featured tradie card in the hero section

## Testing Checklist

Before going live:

- [ ] All links work (test navigation)
- [ ] Forms submit successfully
- [ ] Images display correctly
- [ ] Mobile layout works (test on phone)
- [ ] SEO tags present (view page source)
- [ ] Custom domain resolves
- [ ] HTTPS certificate active (automatic with Netlify)

## Support

- Netlify docs: https://docs.netlify.com
- Custom domains: https://docs.netlify.com/domains-https/custom-domains/
- Forms: https://docs.netlify.com/forms/setup/

---

**Deploy Date:** Ready for immediate deployment
**Last Updated:** 2026-07-28
**Status:** ✅ Production Ready
