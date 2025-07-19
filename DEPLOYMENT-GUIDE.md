# Widget Deployment Guide

This guide shows you how to deploy the widget to your own domain so clients can use:

```html
<script
  src="https://live-chat-widget.vercel.app/widget-loader.js?key=CLIENT_KEY"
  id="ze-snippet"
  async
></script>
```

## 🚀 Quick Start

### Step 1: Build for Production

```bash
./deploy-production.sh
```

### Step 2: Update Your Domain

Edit `production-dist/widget-loader.js` and change line 9:

```javascript
const WIDGET_BASE_URL = 'https://live-chat-widget.vercel.app'; // Your actual domain
```

### Step 3: Upload Files

Upload all files from `production-dist/` to your web server:

- `widget-loader.js`
- `widget.html`
- `widget.bundle.js`
- `widget.bundle.js.LICENSE.txt`

## 📋 Deployment Options

### Option 1: Traditional Web Hosting (cPanel, FTP)

1. Build the widget:

   ```bash
   ./deploy-production.sh
   ```

2. Update the domain in `production-dist/widget-loader.js`

3. Upload via FTP/cPanel:
   - Create a folder on your server (e.g., `/public_html/widget/`)
   - Upload all files from `production-dist/`

4. Your widget will be available at:
   ```
   https://live-chat-widget.vercel.app/widget/widget-loader.js
   ```

### Option 2: VPS/Cloud Server (AWS, DigitalOcean, etc.)

1. Build the widget:

   ```bash
   ./deploy-production.sh
   ```

2. Copy files to your server:

   ```bash
   scp -r production-dist/* user@yourserver:/var/www/html/widget/
   ```

3. Configure Nginx/Apache with CORS headers:

**Nginx example:**

```nginx
location /widget/ {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, OPTIONS";
}
```

**Apache example (.htaccess):**

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, OPTIONS"
</IfModule>
```

### Option 3: Static Site Hosting

**Vercel:**

```bash
cd production-dist
vercel --prod
```

**Netlify:**

1. Drag `production-dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Update domain in widget-loader.js

**GitHub Pages:**

```bash
# Create gh-pages branch
git checkout -b gh-pages
cp -r production-dist/* .
git add .
git commit -m "Deploy widget"
git push origin gh-pages
```

## ⚙️ Required Server Configuration

### CORS Headers

Your server must include these headers:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### MIME Types

Ensure correct MIME types:

- `.js` files: `application/javascript`
- `.html` files: `text/html`

## 🧪 Testing Your Deployment

1. **Create a test page:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Widget Test</title>
  </head>
  <body>
    <h1>Testing Chat Widget</h1>

    <script
      src="https://live-chat-widget.vercel.app/widget-loader.js?key=TEST_KEY"
      id="ze-snippet"
      async
    ></script>
  </body>
</html>
```

2. **Check browser console for errors**

3. **Verify the widget appears in bottom right**

## 📝 Client Integration

Once deployed, share this with your clients:

```html
<!-- Add this before </body> tag -->
<script
  src="https://live-chat-widget.vercel.app/widget-loader.js?key=YOUR_CLIENT_KEY"
  id="ze-snippet"
  async
></script>
```

### Client Requirements:

- Website must use HTTPS
- JavaScript must be enabled
- Modern browser (Chrome, Firefox, Safari, Edge)

## 🔒 Security Considerations

1. **Use HTTPS** - Required for production
2. **Validate Client Keys** - Add validation in your backend
3. **Content Security Policy** - Clients may need to whitelist your domain

## 🚨 Troubleshooting

### Widget not showing

- Check browser console for errors
- Verify CORS headers are set
- Ensure all files are uploaded
- Check the script tag has `id="ze-snippet"`

### CORS errors

- Add proper headers to your server
- Ensure widget.html is served from same domain as widget-loader.js

### 404 errors

- Verify file paths are correct
- Check WIDGET_BASE_URL in widget-loader.js

## 📊 Example Directory Structure

```
yourdomain.com/
├── widget-loader.js     (entry point)
├── widget.html          (iframe content)
├── widget.bundle.js     (React app)
└── widget.bundle.js.LICENSE.txt
```

## 🎯 Production Checklist

- [ ] Build production files
- [ ] Update WIDGET_BASE_URL
- [ ] Upload to HTTPS server
- [ ] Configure CORS headers
- [ ] Test on different domains
- [ ] Create client documentation
- [ ] Set up client key system
