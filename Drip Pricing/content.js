function detectDripPricing() {
 
  

    const potentialDripElements = document.querySelectorAll('.price-breakdown, .additional-cost, .total-price');
  
    if (potentialDripElements.length > 0) {
      alert('Potential drip pricing detected! Check for additional costs.');
    }
  }
  
  
  const observer = new MutationObserver(detectDripPricing);

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "detectDripPricing") {
        detectDripPricing();
      }
    }
  );

  detectDripPricing();
  