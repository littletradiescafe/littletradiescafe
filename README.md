# Little Tradies Cafe — Static Website

A production-ready static HTML/CSS website for Little Tradies Cafe, built without any build tools or frameworks.

## Structure

```
littletradiescafe/
├── site/
│   ├── index.html           # Home page
│   ├── about.html           # About & mission
│   ├── menu.html            # Coffee & food menu
│   ├── play.html            # Play zone activities
│   ├── toys.html            # Merchandise shop
│   ├── community.html       # Tradie of the Month
│   ├── visit.html           # Location & bookings
│   ├── privacy.html         # Privacy policy
│   ├── terms.html           # Terms & conditions
│   ├── sitemap.xml          # XML sitemap for SEO
│   ├── robots.txt           # Search engine rules
│   ├── css/
│   │   └── style.css        # Complete design system
│   ├── js/
│   │   └── main.js          # Form handling & interactivity
│   └── assets/              # Images & illustrations
├── netlify.toml             # Netlify deployment config
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Features

- **Responsive Design** — Mobile-first CSS Grid & Flexbox
- **No Build Step** — Pure HTML, CSS, and JavaScript
- **Netlify Forms** — Form submissions for newsletter, nominations, bookings
- **SEO Optimized** — Schema markup, sitemap, robots.txt, meta tags
- **Accessible** — Semantic HTML5, ARIA labels, keyboard navigation
- **Performance** — Lazy loading, optimized images, cache headers
- **Brand Colors** — Teal, Yellow, Orange, Navy, Sage, Coral

## Design System

CSS custom properties for consistent styling:

```css
--color-teal: #1f8d8a
--color-yellow: #f2b32c
--color-orange: #e46a2e
--color-navy: #2f4e68
--color-sage: #7d8b6a
--color-coral: #e87a5b
```

## Deployment to Netlify

1. **Connect Git Repository**
   - Push code to GitHub
   - Connect repo to Netlify

2. **Configure Netlify**
   - Build command: leave empty (static site)
   - Publish directory: `site`

3. **Custom Domain**
   - Add custom domain: `www.littletradiescafe.com.au`
   - Netlify will provide DNS records

4. **Forms**
   - Netlify automatically detects forms with `name` and `netlify` attributes
   - Submissions appear in Netlify dashboard

5. **Environment**
   - All settings in `netlify.toml`
   - No environment variables needed for static site

## Local Testing

Simply open `site/index.html` in a browser. No local server needed for static content.

For development with a local server:
```bash
# Python
python3 -m http.server 8000

# Node
npx http-server site

# Ruby
ruby -run -ehttpd site -p8000
```

## File Sizes

- Total HTML: ~45 KB
- CSS: ~22 KB
- JavaScript: ~3 KB
- **Total uncompressed: ~70 KB**

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (by design — static site)
- Mobile-first responsive to 320px width

## Maintenance

### Update Content
Edit HTML files directly. No build step required.

### Update Styles
Edit `css/style.css`. Changes take effect on next page load.

### Add New Pages
1. Create new `.html` file in `site/`
2. Copy nav structure from existing page
3. Update `sitemap.xml` with new URL

### Submit Forms
Forms are handled by Netlify automatically:
- Newsletter signup: `name="subscribe"`
- Tradie nomination: `name="nominate"`
- Workshop booking: `name="booking"`

View submissions in Netlify dashboard under Forms.

## GitHub & Deployment

1. Initialize repo locally (already done)
2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/littletradescape/littletradiescafe.git
   git push -u origin master
   ```
3. Connect to Netlify from GitHub
4. Netlify auto-deploys on every push to master

## Contact

- Email: hello@littletradiescafe.com.au
- Phone: (03) 1234 5678
- Web: https://littletradiescafe.com.au

---

**Built for Play. Brewed for Parents. Fuelled for Tradies.** ♡
