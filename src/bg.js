chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url':'https://hangouts.google.com/'}, function(tab) {
  });
});