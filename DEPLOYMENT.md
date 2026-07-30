# Little Tradies Cafe — Deployment Guide

## 🚀 Production Deployment Checklist

This guide walks through deploying your Little Tradies Cafe website to production using Netlify (recommended) or alternative hosting.

---

## **OPTION 1: Netlify Deployment (Recommended) ⭐**

Netlify is the easiest, fastest way to deploy a static website. Free tier includes:
- ✅ Unlimited bandwidth
- ✅ Form handling (up to 100/month)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment from Git

### Step 1: Prepare Your Repository

```bash
cd "D:\7 - Little Tradies Cafe\Website"

# Initialize Git repository
git init
git add .
git commit -m "Initial commit: Little Tradies Cafe website"
```

### Step 2: Push to GitHub

1. Create a new repository on [github.com](https://github.com)
   - Name: `littletradiescafe` (or similar)
   - Make it public (free)

2. Push your code:
```bash
git remote add origin https://github.com/yourusername/littletradiescafe.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Select GitHub, authorize, and choose your repository
4. **Build settings** (should auto-detect):
   - Build command: (leave empty - static site)
   - Publish directory: `site`
5. Click **"Deploy site"**

✅ **Your site is now live!** Netlify generates a preview URL (e.g., `little-tradies-cafe-xyz.netlify.app`)

### Step 4: Connect Custom Domain

1. In Netlify: **Site Settings → Domain Management**
2. Click **"Add custom domain"**
3. Enter your domain: `littletradiescafe.com.au`
4. Follow DNS instructions for your registrar

**DNS Records to Add:**
```
littletradiescafe.com.au  →  Name: your-site.netlify.app
www.littletradiescafe.com.au  →  Netlify alias
```

### Step 5: Enable SSL/TLS (Automatic)

- Netlify automatically provisions an SSL certificate
- HTTPS is enabled on day 1 (no extra cost)

### Step 6: Configure Form Notifications

1. **Netlify Dashboard → Forms**
2. Click **"Add notifications"**
3. Select **"Email notification"**
4. Enter: `hello@littletradiescafe.com.au`
5. Save

All form submissions now email automatically to this address.

**To add team members:**
- Netlify → **Team Settings → Members**
- Invite team by email

---

## **OPTION 2: Alternative Hosting Platforms**

### Vercel
- **Pros**: Similar to Netlify, excellent performance
- **Cons**: Different form handling (needs serverless functions)
- Deploy: Connect GitHub → auto-deploy on push

### GitHub Pages
- **Pros**: Free, integrated with GitHub
- **Cons**: No form handling built-in
- **Setup**: Enable in repo Settings → Pages

### Traditional Hosting (Shared/VPS)

If using GoDaddy, Bluehost, or similar:

1. Upload contents of `/site` folder via FTP/SFTP
2. Point domain to hosting provider's nameservers
3. Set up email forwarding for form submissions

---

## **Testing Before Going Live**

### Functionality Checklist

- [ ] **Navigation**: All links work and point to correct pages
- [ ] **Mobile Menu**: Hamburger toggle works on mobile (<960px)
- [ ] **Forms**: Test all three forms
  - Newsletter signup → Check email inbox
  - Tradie nomination → Check Netlify Forms dashboard
  - Workshop booking → Verify all fields submit
- [ ] **Images**: All illustrations load correctly
- [ ] **Performance**: Run Lighthouse audit (target: 90+)
- [ ] **Mobile**: Test on actual phone/tablet
- [ ] **Social Links**: Facebook, Instagram, TikTok links work
- [ ] **Responsive Design**: Test at 320px, 768px, 1440px widths

### Performance Audit

```bash
# Using Lighthouse CLI
npm install -g lighthouse
lighthouse https://your-site.netlify.app --view
```

**Target Metrics:**
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## **SEO Setup**

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. **URL prefix**: `https://littletradiescafe.com.au`
3. Verify domain (using DNS record)
4. Submit sitemap: `/sitemap.xml`
5. Monitor indexing status

### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add site: `https://littletradiescafe.com.au`
3. Submit sitemap
4. Track search analytics

### Meta Tags Verification

- Ensure all pages have `<meta description>`
- Open Graph tags for social sharing
- Structured data (LocalBusiness schema) on home page

**Test social sharing:**
- Share link on Facebook/Twitter
- Verify preview image and description appear correctly

---

## **Email & Contact Setup**

### Email Forwarding

For `hello@littletradiescafe.com.au` to work:

**Option 1: Netlify Form Notifications** (Easiest)
- Forms auto-email to your inbox
- Already configured in `netlify.toml`

**Option 2: Domain Email Provider**
- Google Workspace, Mailgun, or similar
- Provides actual email account for support@, info@, etc.

**Option 3: Email Forwarding Service**
- Namecheap, GoDaddy, or registrar's built-in forwarding
- Forwards incoming mail to your personal email

### Phone Number Format

- Update phone throughout site: `(03) 1234 5678`
- Make clickable: `<a href="tel:0312345678">`
- Gets recognized as phone number on mobile

---

## **Analytics Setup**

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your **Measurement ID** (starts with `G-`)
3. In `site/js/main.js`, replace:
   ```javascript
   gtag('config', 'G-XXXXXXXXXX');
   ```
4. Test with preview URL before going live

**Track Events:**
- Page views (automatic)
- Form submissions (configured in `main.js`)
- Button clicks (configured in `main.js`)
- Workshop bookings (tracked)

### View Analytics

- Dashboard shows traffic, sources, conversions
- Wait 24+ hours for data to populate
- Set up alerts for high traffic or anomalies

---

## **Ongoing Maintenance**

### Weekly
- Check form submissions (Netlify dashboard)
- Respond to newsletter signups
- Review website analytics

### Monthly
- Update "Tradie of the Month" (community.html)
- Update event calendar (community.html)
- Check external links work
- Refresh Daily Deal section

### Quarterly
- Run Lighthouse audit
- Update menu prices (menu.html)
- Review Google Search Console for errors
- Update team contact info if needed

### Annually
- Renew domain registration
- Update copyright year in footer
- Review and update policies
- Assess need for content refresh

---

## **Update Workflow**

### Making Changes

1. **Edit files locally**
   ```bash
   # Edit index.html, menu.html, etc.
   # Test locally: python -m http.server 8000
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Update menu prices for Q3"
   git push origin main
   ```

3. **Netlify auto-deploys**
   - Detects push
   - Builds and deploys to production
   - Takes ~1 minute

4. **Verify live**
   - Check your domain (littletradiescafe.com.au)
   - Changes live in ~2-3 minutes

---

## **Emergency Rollback**

If something breaks:

1. **Find last good commit**
   ```bash
   git log --oneline
   ```

2. **Revert to previous version**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

3. **Netlify auto-deploys** the rollback
4. Site recovers in ~2-3 minutes

---

## **Performance Optimization**

Current optimizations already in place:

✅ Image lazy loading  
✅ CSS minification via Netlify  
✅ JavaScript defer loading  
✅ Web font optimization  
✅ Gzip compression  
✅ HTTP/2 support  
✅ Global CDN caching  

**Further optimization** (if needed):

- Image optimization: Use tools like ImageOptim before upload
- CSS splitting: Create separate stylesheets for different pages
- JavaScript bundling: Combine scripts if adding more
- Service Workers: Enable for offline support

---

## **Security Hardening**

Already configured:

✅ HTTPS enforced  
✅ CSP headers set  
✅ Security headers enabled  
✅ Form spam protection ready  

**Optional additions:**

1. **Enable Netlify Akismet spam protection**
   - Netlify dashboard → Forms → Security
   - Filters spam automatically

2. **Set up rate limiting**
   - Prevent form abuse
   - Netlify → Site Settings → Security

3. **Regular security audits**
   - Monthly check of Netlify logs
   - Monitor for suspicious activity

---

## **Troubleshooting**

### Forms Not Submitting
- Check `netlify.toml` form names match HTML `name` attribute
- Verify form method is `POST`
- Test: `curl -X POST https://your-site.netlify.app`

### Images Not Loading
- Verify paths are relative (e.g., `assets/logo.png`)
- Check files exist in uploaded folder
- Clear browser cache: Ctrl+Shift+Delete

### Mobile Menu Not Working
- Ensure `js/main.js` loads (check browser console)
- Verify no JavaScript errors
- Test on actual mobile device

### Analytics Not Tracking
- Replace `GA_TRACKING_ID` with real GA4 ID
- Wait 24 hours for data to appear
- Check Google Analytics dashboard filters

### Custom Domain Not Working
- Verify DNS records propagated (up to 48 hours)
- Check domain registrar settings
- Netlify team can help debug DNS

---

## **Support & Resources**

### Netlify
- Docs: [netlify.com/docs](https://netlify.com/docs)
- Support: team@netlify.com
- Community: [netlify.com/community](https://netlify.com/community)

### Technical Support
- Email: `hello@littletradiescafe.com.au`
- Phone: `(03) 1234 5678`

### Documentation
- README.md: Setup and local development
- This file (DEPLOYMENT.md): Production deployment
- netlify.toml: Configuration file comments

---

## **Deployment Completed!**

Once deployed, you have:

✅ Production website live on custom domain  
✅ Form submissions emailing automatically  
✅ Global CDN for fast loading worldwide  
✅ SSL/HTTPS security  
✅ Analytics tracking setup  
✅ SEO optimized (submitted to search engines)  
✅ Mobile-responsive design  
✅ 90+ Lighthouse performance score  

**Next steps:**
1. Share site with team and test thoroughly
2. Promote on social media
3. Monitor form submissions
4. Track analytics and iterate on content
5. Celebrate! 🎉

For questions or updates, contact the team at `hello@littletradiescafe.com.au`.
