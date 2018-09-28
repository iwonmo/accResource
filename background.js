/**
 * onBeforeSendHeaders Hook
 */
var con = {};


/**
 * http 请求事件
 */
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {

        var varUrl = details.url;
        if (varUrl.substr(-4).toLowerCase() == ".mp3" || varUrl.substr(-4).toLowerCase() == ".mp4") {
            var tabId=window.btoa(details.tabId).replace(/=/g,"");
            con[tabId]=con[tabId] + details.url + "\n";
        }
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]);

function getCon(t) {
    return con[t];
}

