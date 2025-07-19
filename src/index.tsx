import React from 'react';
import ReactDOM from 'react-dom/client';
import { Widget } from './Widget';

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWidget);
} else {
  initWidget();
}

function initWidget() {
  // Create a root element for the widget
  const rootElement = document.createElement('div');
  rootElement.id = 'chat-widget-root';
  document.body.appendChild(rootElement);

  // Render the React widget
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Widget />);
}
