function setMsg(cont) {
    document.getElementById('showList').innerHTML =document.getElementById('showList').innerHTML+  cont +"\n" ;
}
var t;
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
   t=tabs[0].id;
});
document.getElementById('showList').innerHTML = "";
var getBtn = document.getElementById("getBtn");
getBtn.addEventListener("click", function () {
    document.getElementById('showList').innerHTML = "";
    setMsg(chrome.extension.getBackgroundPage().getCon(window.btoa(t).replace(/=/g,"")));
});
