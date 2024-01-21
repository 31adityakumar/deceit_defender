// content.js is injected into every page

// Function to check for drip pricing
function detectDripPricing() {
    // Replace this with your logic to check for drip pricing
    // For example, you might look for elements that indicate additional costs
    const additionalCostElements = document.querySelectorAll('.additional-cost');
  
    if (additionalCostElements.length > 0) {
      alert('Drip pricing detected! Additional costs found.');
    }
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "detectDripPricing") {
        detectDripPricing();
      }
    }
  );
  
  // Example: Run the detection function when the page is loaded
  detectDripPricing();
  