# Widget Deployment Guide

This guide explains how to deploy the live chat widget for demonstration or production use.

## Quick Deployment Options

### Option 1: GitHub Pages (Recommended for Demo)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main branch

3. **Access your demo:**
   - Your widget demo will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/demo/`
   - Widget files will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option 2: Vercel (Zero Config)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   npm run build
   vercel dist --prod
   ```

3. **Your widget will be instantly deployed with a URL like:**
   - `https://your-project.vercel.app/`

### Option 3: Netlify (Drag & Drop)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `dist` folder to the deployment area
   - Your site will be live instantly

### Option 4: Traditional Web Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload these files to your web server:**
   - `dist/widget.html`
   - `dist/widget.bundle.js`
   - `dist/widget.bundle.js.LICENSE.txt`
   - `widget-loader.js` (modify the `WIDGET_HOST_URL`)

## Integration Instructions for Clients

Once deployed, clients can add the widget to their website with:

```html
<script
  src="https://YOUR-DOMAIN.com/widget-loader.js?key=CLIENT_KEY"
  id="ze-snippet"
  async
></script>
```

## Customization

### Update Widget Host URL

Edit `widget-loader.js` and change:
```javascript
const WIDGET_HOST_URL = "https://YOUR-DOMAIN.com/widget.html";
```

### Customize Colors

Modify Tailwind classes in the React components:
- Primary color: Change `bg-blue-600` to your brand color
- Hover states: Update `hover:bg-blue-700`
- Focus states: Modify `focus:ring-blue-500`

### Add Backend Integration

Replace the mock functions in `Widget.tsx`:
- `handlePresaleSubmit`: Connect to your CRM/database
- `handleSendMessage`: Integrate with your chat backend

## Local Testing

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Open demo page:**
   - Navigate to `http://localhost:9000/demo/`
   - Or open `demo/index.html` with a local server

## Production Checklist

- [ ] Update `WIDGET_HOST_URL` in `widget-loader.js`
- [ ] Configure CORS headers on your server
- [ ] Set up SSL certificate (HTTPS required)
- [ ] Implement backend API integration
- [ ] Add analytics tracking
- [ ] Test on multiple browsers
- [ ] Optimize bundle size if needed

## Troubleshooting

### Widget not appearing
- Check browser console for errors
- Verify the script tag has correct `id="ze-snippet"`
- Ensure the widget host URL is accessible

### CORS issues
- Add appropriate CORS headers to your server
- Ensure widget.html is served from the same domain or configure CORS

### Style conflicts
- The widget uses Tailwind CSS with isolated styles
- If conflicts occur, check for global CSS overrides

## Support

For issues or questions:
- Check the browser console for error messages
- Verify all files are properly uploaded
- Test with the demo page first