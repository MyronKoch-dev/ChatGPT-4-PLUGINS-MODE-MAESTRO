document.getElementById('openButton').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=gpt-4-plugins' });
});
