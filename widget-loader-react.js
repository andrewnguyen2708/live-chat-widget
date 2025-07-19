/**
 * Live Chat Widget Loader for React Bundle
 *
 * This script is intended to be placed on a client's website.
 * It finds its own script tag to extract the unique client 'key',
 * then creates an iframe and loads the React widget bundle into it.
 */
(() => {
  // --- Configuration ---
  // IMPORTANT: Update this URL to where you host the built widget.html
  const WIDGET_HOST_URL = "http://127.0.0.1:5500/dist/widget.html"; // For production: 'https://your-server.com/widget.html'

  // Find the script tag that loaded this script. It must have the id "ze-snippet".
  const thisScript = document.getElementById("ze-snippet");

  if (!thisScript) {
    console.error(
      'Chat Widget Loader: Could not find the script tag with id="ze-snippet".'
    );
    return;
  }

  // Extract the 'key' from the script's src URL.
  // e.g., https://.../widget-loader-react.js?key=CLIENT_123 -> key = "CLIENT_123"
  const urlParams = new URLSearchParams(thisScript.src.split("?")[1]);
  const clientKey = urlParams.get("key");

  if (!clientKey) {
    console.error(
      'Chat Widget Loader: The "key" parameter is missing in the script src.'
    );
    return;
  }

  // --- Create the Iframe ---

  // Create a container div for the iframe. This helps with positioning.
  const iframeContainer = document.createElement("div");
  iframeContainer.id = "live-chat-widget-container";
  iframeContainer.style.position = "fixed";
  iframeContainer.style.bottom = "0";
  iframeContainer.style.right = "0";
  iframeContainer.style.width = "400px"; // A bit wider than the widget to avoid scrollbars
  iframeContainer.style.height = "550px"; // A bit taller than the widget
  iframeContainer.style.zIndex = "999999";
  iframeContainer.style.pointerEvents = "none"; // Allow clicks to pass through the container

  // Create the iframe element
  const iframe = document.createElement("iframe");

  // Construct the URL for the iframe, passing the client key as a parameter.
  iframe.src = `${WIDGET_HOST_URL}?key=${encodeURIComponent(clientKey)}`;

  // Style the iframe to be borderless and fill its container.
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.pointerEvents = "auto"; // The iframe itself should be interactive

  // Append the iframe to its container, and the container to the body.
  iframeContainer.appendChild(iframe);
  document.body.appendChild(iframeContainer);

  console.log(
    `Chat Widget Loader: Successfully loaded React widget for key "${clientKey}".`
  );
})();