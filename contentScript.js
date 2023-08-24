console.log('Content script has started.');

// Function to change the dropdown height
function changeDropdownHeight() {
  var dropdown = document.querySelector('.max-h-60');
  if (dropdown) {
    console.log('Dropdown menu found.');
    dropdown.style.maxHeight = (window.innerHeight * 0.5) + 'px'; // 50% of window height
  } else {
    console.log('Dropdown menu not found.');
  }
}

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      changeDropdownHeight();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });

