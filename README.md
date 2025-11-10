# Egyptians Food - Website

Authentic Egyptian Catering website with multilingual support (English, French, Arabic).

## 📁 File Structure

```
egyptians-food-website/
├── index.html          (Home page)
├── menu.html           (Menu page with all dishes)
├── about.html          (About Us page)
├── contact.html        (Contact page with form)
├── css/
│   └── styles.css     (All styling)
├── js/
│   └── script.js      (All functionality)
└── README.md          (This file)
```

## ✨ Features

- **Trilingual Support**: English, French, Arabic
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Single Page Navigation**: Smooth transitions between pages
- **Collapsible Menu**: Expandable menu sections
- **Contact Form**: Quote request form
- **Egyptian Theme**: Authentic design with hieroglyphics

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from branch" → choose `main` → `/(root)`
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the entire `egyptians-food-website` folder
3. Your site goes live instantly!
4. You can connect a custom domain

### Option 3: Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Navigate to folder: `cd egyptians-food-website`
4. Run: `vercel`
5. Follow prompts to deploy

### Option 4: Direct Web Hosting

1. Upload all files to your web server via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Make sure file permissions are correct (644 for files, 755 for directories)

## 🌐 Custom Domain

After deploying to GitHub Pages/Netlify/Vercel:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your hosting platform settings, add the custom domain
3. Update DNS records at your domain registrar:
   - For GitHub Pages: Create `CNAME` record pointing to `yourusername.github.io`
   - For Netlify/Vercel: Follow their custom domain instructions

## 📝 Customization

### Update Contact Information

Edit `contact.html`:
- Phone: Line 61
- Facebook: Line 71

### Update Menu Items

Edit `js/script.js`:
- Menu data starts at line 6
- Available in 3 languages: English (`en`), French (`fr`), Arabic (`ar`)

### Change Colors

Edit `css/styles.css`:
- CSS variables at lines 8-20
- Modify color values to match your brand

### Add/Remove Pages

1. Create new HTML file following the structure of existing pages
2. Add navigation link to all page headers
3. Update translations in `data-en`, `data-fr`, `data-ar` attributes

## 📧 Contact Form Setup

The form currently logs to console. To make it functional:

### Option A: FormSpree (Easy)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update `js/script.js` line 597 with:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
});
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create email template
3. Add EmailJS SDK to `contact.html`
4. Update form submission handler

### Option C: Backend Service
Create your own backend with Node.js/PHP/Python to handle form submissions

## 🔧 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support
- IE11: ❌ Not supported

## 📱 Testing Locally

1. Simply double-click `index.html` to open in browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser

## 🎨 Design Credits

- Font: System fonts for best performance
- Icons: Unicode hieroglyphics (𓂀 𓆇)
- Color scheme: Egyptian gold and brown tones

## 📄 License

© 2025 Egyptians Food - All Rights Reserved

## 🆘 Support

For issues or questions:
- Phone: +1 (518) 551-2421
- Facebook: [Egyptians Food](https://www.facebook.com/share/163iteCKVA/?mibextid=wwXIfr)

---

**Ready to deploy!** Just upload these files to any web hosting service. 🚀
