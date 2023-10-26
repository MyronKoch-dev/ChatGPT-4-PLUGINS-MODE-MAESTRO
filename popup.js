function addEventListenerOnce(elementId, event, func) {
  var element = document.getElementById(elementId);
  if (element && !element[event + 'ListenerAdded']) {
    element.addEventListener(event, func);
    element[event + 'ListenerAdded'] = true;
  }
}

addEventListenerOnce('openButton', 'click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=gpt-4-plugins' });
});

addEventListenerOnce('openButton4Browsing', 'click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=gpt-4-browsing' });
});

addEventListenerOnce('openButton4CodeInterpreter', 'click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=gpt-4-code-interpreter' });
});

addEventListenerOnce('openButton4Default', 'click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=gpt-4' });
});

addEventListenerOnce('openButton4Dalle', 'click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=gpt-4-dalle' });
});

addEventListenerOnce('openButton35Turbo', 'click', function() {
  chrome.tabs.create({ url: 'https://chat.openai.com/?model=text-davinci-002-render-sha' });
});
