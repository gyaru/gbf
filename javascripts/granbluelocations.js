var GranblueLocations = function() {
    function a() { b = [".*gbf.game.mbga.jp"] }
    var b;
    return a.isValid = function(c) { a();
        var d = new RegExp("^(https?|http)://([^/]*)/([-a-z\\d%/_.~+]*)*(.*)", "i");
        if (matches = d.exec(c), null === matches) return !1;
        var e = matches[2];
        for (var f in b)
            if (b.hasOwnProperty(f)) {
                var g = new RegExp(b[f], "i");
                if (g.test(e)) return !0 }
        return !1 }, a }();
