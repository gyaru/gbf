function trackInstall(a) {
    var b = "http://gbf.game.mbga.jp/chrome/manage/install?chrome_id=" + a;
    chrome.browser && chrome.browser.openTab ? chrome.browser.openTab({ url: b }) : window.open(b), chrome.storage.sync.set({ suchTracking: !0 }, function() {}) }

function getRandomToken() {
    var a = new Uint8Array(32);
    crypto.getRandomValues(a);
    for (var b = "", c = 0; c < a.length; ++c) b += a[c].toString(16);
    return b }
chrome.app.runtime.onLaunched.addListener(function() { tracking.call(), getConfig.call() });
var tracking = function() { chrome.storage.sync.get("chromeId", function(a) {
            var b = a.chromeId;
            b ? chrome.storage.sync.get("suchTracking", function(a) {
                var c = a.suchTracking;
                c || trackInstall(b) }) : (b = getRandomToken(), chrome.storage.sync.set({ chromeId: b }, function() { trackInstall(b) })) }) },
    getConfig = function() { navigator.webkitTemporaryStorage.requestQuota(1024, function(a) { window.webkitRequestFileSystem(TEMPORARY, a, function(a) { a.root.getFile("gbf-config.json", { create: !0 }, function(a) { a.file(function(a) {
                        var b = new FileReader;
                        b.onloadend = function(a) {
                            var b = null;
                            a.target.result && (b = JSON.parse(a.target.result)), createWin.call(this, b) }, b.readAsText(a) }) }) }) }) },
    createWin = function(a) {
        var b = 336,
            c = 570;
        a && (b = a.width, c = a.height), chrome.app.window.create("index.html", { bounds: { width: b, height: c }, minWidth: 336, minHeight: 570, maxWidth: 656, resizable: !0 }) };
