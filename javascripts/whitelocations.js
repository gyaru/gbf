var WhiteLocations = function() {
    function a() { f = !1 }

    function b() { c = [".*mbga.jp", ".*mobage.jp"], e["twitter.com"] = { granbluefantasy: !0, "intent/\\w*": !0 }, e["api.twitter.com"] = d, e["203.104.248.16:13450"] = d, e["cfg.smt.docomo.ne.jp"] = d, e["connect.auone.jp"] = d, e["id.my.softbank.jp"] = d, e["www.webmoney.ne.jp"] = d, e["acs.cafis-paynet.jp"] = d, e["i.mydocomo.com"] = d, e["payment1.smt.docomo.ne.jp"] = d, e["mobage.sc.omtrdc.net"] = d, e["po.id.my.softbank.jp"] = d, e["mobage8.tt.omtrdc.net"] = d, e["j.amoad.com"] = d, e["app-adforce.jp"] = d, e["www.googleadservices.com"] = d, e["s2.nend.net"] = d, e["s.nend.net"] = d, e["spdmg.i-mobile.co.jp"] = d, e["spdeliver.i-mobile.co.jp"] = d, e["spdmg-backend.i-mobile.co.jp"] = d, e["connect.facebook.net"] = d, e["www.facebook.com"] = d, e["public.astrsk.net"] = d, e["d-track.send.microad.jp"] = d, e["ssend.microad.jp"] = d, e["d-cache.microad.jp"] = d, e["login.yahoo.co.jp"] = d, e["auth.login.yahoo.co.jp"] = d, e["docs.yahoo.co.jp"] = d, e["rdsig.yahoo.co.jp"] = d, e["accounts.google.com"] = d, e["accounts.youtube.com"] = d, e["plus.google.com"] = d, e["www.googleapis.com"] = d, e["m.facebook.com"] = d, e["beyondthesky.granbluefantasy.jp"] = d, e["www.famitsu.com"] = d, e["s.famitsu.com"] = d, e["granbluefantasy.jp"] = d, e["support.google.com"] = d, e["orchestra.granbluefantasy.jp"] = d, e["va.pia.jp"] = d, e["pia.jp"] = d }
    var c, d = "all_allow",
        e = [],
        f = !1,
        g = 0,
        h = 6e4;
    return b.isValid = function(i) { b(), i = i.toLowerCase();
        var j = new RegExp("^(https?|http)://([^/]*)/([-a-z\\d%/_.~+]*)*(.*)", "i"),
            k = j.exec(i);
        if (null === k) {
            var l = new RegExp("^data:text/html,chromewebdata", "i"),
                m = l.exec(i);
            return m ? !0 : !1 }
        var n = (k[1], k[2]),
            o = k[3],
            p = k[4];
        if ("ssl.sp.mbga.jp" === n && "_paygent_buy" === o && (f = !0, clearTimeout(g), g = setTimeout(a, h)), f === !0) return !0;
        for (var q in c)
            if (c.hasOwnProperty(q)) {
                var r = new RegExp(c[q], "i");
                if (r.test(n)) return !0 }
        if (!e[n]) return !1;
        if (e[n] === d) return !0;
        if ("undefined" === e[n][o]) return !1;
        for (var s in e[n]) {
            var t = new RegExp(s, "i");
            if (t.test(o)) return !0 }
        return 0 === p.indexOf(e[n][o]) ? !0 : i.indexOf("about:blank") >= 0 }, b }();
