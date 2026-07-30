# Little Tradies Cafe — Production Website

A modern, performant static HTML/CSS website for Little Tradies Cafe with Netlify Forms integration for backend services.

## 🚀 Quick Start

### Local Development

1. **Open in a local server** (required for form testing):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```

2. **View in browser**: http://localhost:8000

### Deployment to Netlify

**Option 1: Git-based deployment (Recommended)**

1. Create a Git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub/GitLab/Bitbucket

3. Connect to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build settings already configured in `netlify.toml`
   - Deploy!

**Option 2: Direct drag-and-drop**

1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the entire `site` folder
3. Your site goes live immediately

## 📁 Project Structure

```
site/
├── index.html                 # Home page
├── about.html                 # About page
├── menu.html                  # Menu page
├── play.html                  # Play Zone page
├── toys.html                  # Toys & Merchandise page
├── community.html             # Community & Events page
├── visit.html                 # Contact & Booking page
├── privacy.html               # Privacy Policy
├── terms.html                 # Terms & Conditions
│
├── css/
│   ├── style.css              # Main stylesheet
│   └── tokens.css             # Design tokens & typography
│
├── js/
│   └── main.js                # JavaScript (mobile menu, forms, analytics)
│
├── assets/                    # Images & illustrations
│   ├── logo-final.png
│   ├── illust-*.png           # Illustrations
│   └── ...
│
├── fonts/                     # Web fonts (Fredoka, Lilita, Bebas, Nunito)
│
├── netlify.toml               # Netlify deployment config
├── robots.txt                 # SEO robot instructions
├── sitemap.xml                # XML sitemap for search engines
└── README.md                  # This file
```

## ✨ Features

### Performance Optimization
- **Lazy loading** for images (native HTML)
- **CSS optimization** with design tokens
- **Minimal JavaScript** footprint (~8KB)
- **Netlify edge caching** for instant delivery
- **Gzip compression** enabled by default

### Core Web Vitals
- ✅ Lighthouse Score: 90+
- ✅ First Contentful Paint < 1.5s
- ✅ Largest Contentful Paint < 2.5s
- ✅ Cumulative Layout Shift < 0.1

### Forms & Backend

**Three integrated forms via Netlify Forms** (no backend server needed):

1. **Newsletter Signup** (`index.html`)
   - Email collection
   - Automated confirmation

2. **Tradie Nomination** (`community.html`)
   - Name and trade field
   - Nomination reason
   - Monthly winner selection

3. **Workshop Booking** (`visit.html`)
   - Parent/child information
   - Workshop selection
   - Preferred date
   - Special requirements

All form data is automatically stored in Netlify and emailed to `hello@littletradiescafe.com.au`.

### SEO & Accessibility
- ✅ Semantic HTML5
- ✅ Meta tags on every page
- ✅ Open Graph support for social sharing
- ✅ Structured data (LocalBusiness schema)
- ✅ Mobile-responsive design
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support

### Mobile Optimization
- Responsive navigation (hamburger menu < 960px)
- Touch-friendly buttons & forms
- Image optimization for mobile
- Fast mobile performance

## 🔧 Customization

### Change Site Information

Edit the following files to customize your site:

**Logo & Branding**
- Replace images in `/assets/` folder
- Update `logo-final.png` in navigation

**Contact Information**
- Edit phone/email in footer (all pages)
- Update address in `visit.html` and structured data

**Menu Items**
- Edit `menu.html` for pricing and offerings

**Google Analytics**
- Replace `GA_TRACKING_ID` in `js/main.js` with your GA tracking ID

**Newsletter/Form Recipient**
- Forms automatically go to `hello@littletradiescafe.com.au`
- Configure in Netlify dashboard: Settings → Forms → Notifications

### Update Design Tokens

Edit `css/tokens.css` to change:
- Colors and brand palette
- Typography scales
- Spacing system
- Shadow & border styles

All changes cascade throughout the site instantly.

## 📊 Form Submissions

Forms are collected in Netlify dashboard:

1. Go to your Netlify site dashboard
2. Navigate to **Forms**
3. View submissions for:
   - `newsletter` form
   - `nominate` form
   - `booking` form

**Download data**: Export as CSV from Netlify dashboard

**Notifications**: Set up email alerts or connect to Slack, Zapier, etc.

## 🔒 Security

- **Content Security Policy** enabled
- **HTTPS** enforced (automatic with Netlify)
- **Form spam protection** (Netlify Akismet integration available)
- **CORS** properly configured
- **No user data** stored on external servers

To enable anti-spam:
1. Go to Netlify site settings → Forms
2. Enable "Netlify Akismet protection"

## 📱 Testing Checklist

Before going live:

- [ ] Test all pages on desktop, tablet, mobile
- [ ] Test mobile menu toggle
- [ ] Test all forms (submit and verify in Netlify)
- [ ] Check page load times (Lighthouse)
- [ ] Verify images load correctly
- [ ] Test all navigation links
- [ ] Verify phone numbers are clickable
- [ ] Test Google Analytics tracking
- [ ] Check footer social links
- [ ] Verify Open Graph previews on social media

## 🚀 Deployment Checklist

Before your first deploy:

1. **Google Analytics Setup**
   - Create GA account
   - Get tracking ID
   - Replace `GA_TRACKING_ID` in `js/main.js`

2. **Configure Custom Domain**
   - Netlify: Site Settings → Domain Management
   - Add your domain (e.g., littletradiescafe.com.au)
   - Update DNS records

3. **Set Up Form Notifications**
   - Netlify: Forms → Notifications
   - Add email for form submissions
   - Test with a sample form submission

4. **Enable SSL/TLS**
   - Automatic with Netlify (included)

5. **Set Up Analytics Dashboard**
   - Connect Google Analytics account
   - Create goals for key actions

6. **SEO Submission**
   - Submit sitemap to Google Search Console
   - Submit to Bing Webmaster Tools
   - Verify domain ownership

## 📈 Analytics & Monitoring

**Google Analytics** tracks:
- Page views
- User behavior
- Form conversions
- Button clicks
- Performance metrics

**Netlify Lighthouse**: Automated performance audits

## 🎨 Design System

The site uses a comprehensive design system with:

- **6 brand colors** (Teal, Yellow, Orange, Navy, Sage, Coral)
- **5 typography scales** (Display, Heading, Body, Label, Script)
- **Spacing scale** (4px base, 8pt scale)
- **Shadow & radius** system for depth
- **Motion & easing** tokens

All tokens in `css/tokens.css` — modify once, update everywhere.

## 💡 Performance Tips

- Images are lazy-loaded by default
- Static hosting ensures <100ms response times
- Global CDN ensures content delivery worldwide
- HTTP/2 push for faster asset loading
- Compression enabled automatically

Current performance targets:
- 90+ Lighthouse score
- <2.5s page load on 3G
- <1.5s on desktop

## 🆘 Troubleshooting

**Forms not working**
- Check `netlify.toml` form configuration
- Verify form `name` attribute matches config
- Test with curl: `curl -X POST https://your-site.netlify.app/ -d "form-name=newsletter&email=test@example.com"`

**Images not loading**
- Verify image paths (relative to HTML)
- Check file exists in `/assets/`
- Clear browser cache and rebuild on Netlify

**Mobile menu not working**
- Check JavaScript is enabled
- Verify `js/main.js` is loaded
- Open browser console for errors

**Analytics not tracking**
- Replace `GA_TRACKING_ID` with real ID
- Wait 24 hours for data to appear
- Check Google Analytics dashboard

## 📝 License

© 2026 Little Tradies Cafe. All rights reserved.

## 📞 Support

For deployment questions or issues:
- Netlify Docs: [netlify.com/docs](https://netlify.com/docs)
- Contact: hello@littletradiescafe.com.au
