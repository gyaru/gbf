function init() {
    var a = 100,
        b = 16,
        c = { size: [{ postMsg: "sizeS", bounds: { width: 320 + b, height: 579 } }, { postMsg: "sizeM", bounds: { width: 480 + b, height: a + 861 < screen.height ? 861 : screen.height - a + 10 } }, { postMsg: "sizeL", bounds: { width: 640 + b, height: a + 1136 < screen.height ? 1136 : screen.height - a + 10 } }] },
        d = chrome.app.window.current(),
        e = d.getBounds();
    window.bW = e.width, window.bH = e.height;
    var f = $("#webview-game");
    f.style.height = e.height - 10 + "px", $("#footer").setAttribute("style", "zoom:" + (bW - 16) / 320 + ";");
    var g = f.attributes.src.value,
        h = function(a) { a.target.className = a.target.className.replace("off", "on") },
        i = function(a) { a.target.className = a.target.className.replace("on", "off") },
        j = ["reload", "mypage", "back"];
    j.forEach(function(a) { $("#footer-" + a).addEventListener("mouseover", h), $("#footer-" + a).addEventListener("mouseout", i) });
    var k = ["s", "m", "l"];
    k.forEach(function(a) { $("#btn-resize-" + a).addEventListener("mouseover", h), $("#btn-resize-" + a).addEventListener("mouseout", i) }), $("#footer-back").addEventListener("click", function() { f.back() }), $("#footer-reload").addEventListener("click", function() { f.reload() }), $("#footer-mypage").addEventListener("click", function() { f.attributes.src.value = g + "?_=" + (new Date).getTime() + "#mypage" }), $("#btn-resize-s").addEventListener("click", function() { d.setBounds(c.size[0].bounds) }), $("#btn-resize-m").addEventListener("click", function() { d.setBounds(c.size[1].bounds) }), $("#btn-resize-l").addEventListener("click", function() { d.setBounds(c.size[2].bounds) }), d.onBoundsChanged.addListener(onBoundsChanged), wvInit.call(this, f, "sizeS") }
window.timerResize = !1, window.bW = window.bH = null, window.onload = init;
var $ = function(a) {
        return document.querySelector(a) },
    wvInit = function(a, b) {
        var c = chrome.runtime.getManifest(),
            d = c && c.version,
            e = window.navigator.userAgent,
            f = "12016007",
            g = function() {
                return "Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SBM003SH Build/S4040) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1; ChromeApp" }();
        a.setUserAgentOverride(g), chrome.storage.sync.get("chromeId", function(a) { chromeTid = a.chromeId }), d && a.request.onBeforeSendHeaders.addListener(function(a) {
            return a.requestHeaders.push({ name: "X-ChromeApp", value: "1" }, { name: "X-ChromeApp-Version", value: d }, { name: "X-ChromeApp-User-Agent", value: e }, { name: "X-ChromeApp-ID", value: f }, { name: "X-ChromeApp-TID", value: chromeTid }), { requestHeaders: a.requestHeaders } }, { urls: ["<all_urls>"] }, ["blocking", "requestHeaders"]), a.addEventListener("loadstart", function(b) {
            var c = b.url;
            if (b.isTopLevel && !GranblueLocations.isValid(c) && !WhiteLocations.isValid(c)) { a.stop();
                var d = "次のページへは移動できません",
                    e = "PC版からの移動が制限されているページの為<br />このボタンからのページ移動はできません。<br /><br />Inaccessible Screen<br />The button you tapped leads to a screen that can't be accessed from a computer.";
                popup(d, e) } }), a.addEventListener("loadcommit", function(b) { GranblueLocations.isValid(b.url) && (a.insertCSS({ file: "stylesheets/override.css" }), a.executeScript({ file: "javascripts/jquery-2.0.3.min.js" })) }), a.addEventListener("contentload", function() { a.executeScript({ file: "javascripts/create-touch.js" }), a.executeScript({ file: "javascripts/app-override.js" }), a.contentWindow.postMessage({ command: b }, "*") }), $("#appVer").innerHTML = "Ver. " + c.version },
    onBoundsChanged = function() { timerResize !== !1 && clearTimeout(timerResize), timerResize = setTimeout(function() {
            var a = chrome.app.window.current().getBounds(),
                b = a.width,
                c = a.height;
            if (window.bW != b || window.bH != c) { window.bW = b, window.bH = c;
                var d = { width: bW, height: bH };
                setConfig.call(this, JSON.stringify(d, null, " "));
                var e = $("#webview-game"),
                    f = b - 16;
                $("#footer").setAttribute("style", "zoom:" + f / 320 + ";"), e.style.height = c - 10 + "px", e.reload() } }, 200) },
    setConfig = function(a) { navigator.webkitTemporaryStorage.requestQuota(1024, function(b) { window.webkitRequestFileSystem(TEMPORARY, b, function(b) { b.root.getFile("gbf-config.json", { create: !0 }, function(b) { b.createWriter(function(b) { b.onwriteend = function() { b.onwriteend = null;
                            var c = new Blob([a], { type: "application/json" });
                            b.write(c) }, b.onerror = function(a) {}, b.truncate(0) }) }) }) }) };
