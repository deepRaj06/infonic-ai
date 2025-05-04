// when we run the chrome extension --> background script should run


// S1: 
chrome.runtime.onInstalled.addListener(() => {
    // local stores the current API key but sync storage chrome across all your sessions i.e. sync all of your accounts with 
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
        if(!result.geminiApiKey){
            chrome.tabs.create({ url: "options.html"});
        }
    })
})