//Event listener for deploying and hiding the application on the page
chrome.browserAction.onClicked.addListener(function(tab) { 
    if (tab) {
        chrome.tabs.sendMessage(tab.id, {icon: "click"}, function(response) {     
        });
    }
});