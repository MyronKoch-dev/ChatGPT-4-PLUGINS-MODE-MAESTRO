console.log('Content script has started.');

// Function to change the dropdown height
function changeDropdownHeight() {
  var dropdown = document.querySelector('#__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.flex-1.overflow-hidden > div > div > div.px-2.relative.w-full.flex.flex-col.h-full.py-2.md\\:py-6 > div > div.relative.w-full.md\\:w-1\\/2.lg\\:w-1\\/3.xl\\:w-1\\/4 > div');
  if (dropdown) {
    console.log('Dropdown menu found.');
    dropdown.style.maxHeight = (window.innerHeight * 0.8) + 'px'; // 80% of window height
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
