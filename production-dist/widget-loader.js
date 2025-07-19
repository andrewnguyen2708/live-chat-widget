/**
 * Live Chat Widget Loader - Production Version
 *
 * Usage:
 * <script src="https://live-chat-widget.vercel.app/widget-loader.js?key=CLIENT_KEY" id="ze-snippet" async></script>
 */
(() => {
  // IMPORTANT: Update this URL to where you host the widget files
  const WIDGET_BASE_URL = 'https://chat-widget.vercel.app'; // Change this to your Vercel URL

  // Find the script tag
  const thisScript = document.getElementById('ze-snippet');

  if (!thisScript) {
    console.error('Chat Widget: Could not find script tag with id="ze-snippet"');
    return;
  }

  // Extract the client key from URL parameters
  const urlParams = new URLSearchParams(thisScript.src.split('?')[1]);
  const clientKey = urlParams.get('key');

  if (!clientKey) {
    console.error('Chat Widget: Missing client key parameter');
    return;
  }

  // Create iframe container
  const container = document.createElement('div');
  container.id = 'live-chat-widget-container';
  container.style.cssText = `
    position: fixed;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 550px;
    z-index: 999999;
    pointer-events: none;
  `;

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = `${WIDGET_BASE_URL}/widget.html?key=${encodeURIComponent(clientKey)}`;
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: auto;
  `;
  iframe.setAttribute('title', 'Live Chat Support');

  // Add iframe to container and container to page
  container.appendChild(iframe);

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(container);
    });
  } else {
    document.body.appendChild(container);
  }

  console.log(`Chat Widget loaded for client: ${clientKey}`);
})();
