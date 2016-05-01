! function() {
    var a = document.querySelector(".contents"),
        b = new MutationObserver(function(a) { a.forEach(function(a) {
                var b = a.target.className,
                    c = a.addedNodes.length;
                c && "contents" == b && d.call() }) }),
        c = { childList: !0, subtree: !0 },
        d = function() { $("[target='_blank']").removeAttr("target") };
    b.observe(a, c), window.addEventListener("message", function(a) {
        switch (a.data.command) {
            case "sizeS":
                break;
            case "sizeM":
                break;
            case "sizeL":
        } }, !1) }();
