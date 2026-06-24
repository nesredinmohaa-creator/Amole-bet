// Vercel Speed Insights Integration
// This script injects Vercel Speed Insights tracking for performance monitoring
// Documentation: https://vercel.com/docs/speed-insights/quickstart

(function() {
  'use strict';
  
  // Initialize Speed Insights queue
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };

  // Only inject in production (when deployed to Vercel)
  // Speed Insights will be automatically configured via Vercel environment variables
  if (typeof window !== 'undefined') {
    // Load the Speed Insights script from Vercel's CDN
    // The script path is automatically configured when deployed to Vercel
    var script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/speed-insights/script.js';
    
    // Handle script load errors gracefully
    script.onerror = function() {
      console.info('Speed Insights: Script not loaded. This is expected in local development.');
    };
    
    document.head.appendChild(script);
  }
})();
