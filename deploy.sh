#!/bin/bash

echo "🚀 Building the widget..."
npm run build

echo "📁 Preparing deployment files..."
mkdir -p deploy
cp -r dist/* deploy/
cp widget-loader-demo.js deploy/
cp -r demo deploy/

echo "✅ Build complete! Files ready in 'deploy' folder"
echo ""
echo "📋 Next steps:"
echo "1. Upload the 'deploy' folder contents to your web server"
echo "2. Or use: npx serve deploy -p 8080"
echo "3. Or deploy to Vercel: vercel deploy --prod"
echo ""
echo "🌐 Demo will be available at: <your-domain>/demo/"