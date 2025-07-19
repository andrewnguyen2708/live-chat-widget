/**
 * Live Chat Widget Loader - Demo Version
 * This version uses relative paths for local/demo deployment
 */
(() => {
  // Find the script tag that loaded this script
  const thisScript = document.getElementById("ze-snippet");

  if (!thisScript) {
    console.error(
      'Chat Widget Loader: Could not find the script tag with id="ze-snippet".'
    );
    return;
  }

  // Extract the 'key' from the script's src URL
  const urlParams = new URLSearchParams(thisScript.src.split("?")[1]);
  const clientKey = urlParams.get("key");

  if (!clientKey) {
    console.error(
      'Chat Widget Loader: The "key" parameter is missing in the script src.'
    );
    return;
  }

  // Create container div for the iframe
  const iframeContainer = document.createElement("div");
  iframeContainer.id = "live-chat-widget-container";
  iframeContainer.style.position = "fixed";
  iframeContainer.style.bottom = "0";
  iframeContainer.style.right = "0";
  iframeContainer.style.width = "400px";
  iframeContainer.style.height = "550px";
  iframeContainer.style.zIndex = "999999";
  iframeContainer.style.pointerEvents = "none";

  // Create the iframe element
  const iframe = document.createElement("iframe");
  
  // Use relative path for demo
  const scriptPath = thisScript.src.substring(0, thisScript.src.lastIndexOf('/'));
  iframe.src = `${scriptPath}/dist/widget.html?key=${encodeURIComponent(clientKey)}`;

  // Style the iframe
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.pointerEvents = "auto";

  // Append the iframe to its container, and the container to the body
  iframeContainer.appendChild(iframe);
  document.body.appendChild(iframeContainer);

  console.log(
    `Chat Widget Loader: Successfully loaded widget for key "${clientKey}".`
  );
})();