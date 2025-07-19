#!/bin/bash

echo "🚀 Building widget for production deployment..."

# Build the React app
echo "📦 Building React app..."
npm run build

# Create production directory
echo "📁 Preparing production files..."
mkdir -p production-dist

# Copy necessary files
cp dist/widget.html production-dist/
cp dist/widget.bundle.js production-dist/
cp dist/widget.bundle.js.LICENSE.txt production-dist/
cp widget-loader-production.js production-dist/widget-loader.js

echo "✅ Production build complete!"
echo ""
echo "📋 Files ready for deployment in 'production-dist' folder:"
echo "  - widget-loader.js (clients will load this)"
echo "  - widget.html"
echo "  - widget.bundle.js"
echo "  - widget.bundle.js.LICENSE.txt"
echo ""
echo "🔧 Next steps:"
echo "1. Update WIDGET_BASE_URL in production-dist/widget-loader.js"
echo "2. Upload all files to your web server"
echo "3. Ensure your server has proper CORS headers"