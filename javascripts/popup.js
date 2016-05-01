function popup(a, b) {
    var c = document.getElementById("popup");
    if ("" === c.innerHTML) {
        var d = '<div class="prt-popup-header">' + a + '</div><div class="prt-popup-body"><div class="prt-popup-info"><div class="txt-popup-message">' + b + '</div></div></div><div class="prt-popup-footer"><div class="button-blue-xxl"></div></div>';
        c.innerHTML = d } else {
        var e = c.querySelector(".prt-popup-header"),
            f = c.querySelector(".txt-popup-message");
        e && (e.innerHTML = a), f && (f.innerHTML = b) }
    var g = document.body,
        h = g.offsetWidth / 2 - 160;
    document.getElementById("protect").setAttribute("style", "display: block;"), c.setAttribute("style", "display: block; top: 40%; left: " + h + "px;"), c.className = "pop-usual popup-in";
    var i = function(a) { a.currentTarget.className = "button-blue-xxl on" },
        j = document.querySelector(".button-blue-xxl");
    j.addEventListener("mousedown", i), j.addEventListener("mouseup", function(a) { a.currentTarget.className = "button-blue-xxl", c.className = "pop-usual popup-out", a.currentTarget.removeEventListener("mousedown", i, !1), a.currentTarget.removeEventListener("mouseup", arguments.callee, !1), setTimeout(function() { c.setAttribute("style", "display: none;"), document.getElementById("protect").setAttribute("style", "display: none;") }, 500) }) }
