jQuery(document).ready(function(e) {
    function t(t) {
        var o = n;
        t.each(function() {
            var t = e(this),
                i = t.find(".is-showing").outerWidth(),
                n = r - 100;
            setTimeout(function() {
                t.find(".js-animated-headline").css("width", i)
            }, n), setTimeout(function() {
                t.find(".js-animated-headline").addClass("is-loading")
            }, a), setTimeout(function() {
                s(t.find(".is-showing").eq(0))
            }, o)
        })
    }

    function s(e) {
        var t = o(e),
            r = o(e).outerWidth();
        e.parents(".js-animated-headline").removeClass("is-loading"), i(e, t), setTimeout(function() {
            s(t)
        }, n), setTimeout(function() {
            e.parents(".js-animated-headline").addClass("is-loading")
        }, a), e.parents(".js-animated-headline").css("width", r)
    }
}

}), jQuery(document).ready(function(e) {
    function t(t) {
        var o = n;
        t.each(function() {
            var t = e(this),
                i = t.find(".is-showing").outerWidth(),
                n = r - 100;
            setTimeout(function() {
                t.find(".js-animated-headline").css("width", i)
            }, n), setTimeout(function() {
                t.find(".js-animated-headline").addClass("is-loading")
            }, a), setTimeout(function() {
                s(t.find(".is-showing").eq(0))
            }, o)
        })
    }

    function s(e) {
        var t = o(e),
            r = o(e).outerWidth();
        e.parents(".js-animated-headline").removeClass("is-loading"), i(e, t), setTimeout(function() {
            s(t)
        }, n), setTimeout(function() {
            e.parents(".js-animated-headline").addClass("is-loading")
        }, a), e.parents(".js-animated-headline").css("width", r)
    }

    function o(e) {
        return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
    }

    function i(e, t) {
        e.hasClass("show-on-load") && e.removeClass("show-on-load"), t.hasClass("hide-on-load") && t.removeClass("hide-on-load"), e.removeClass("is-showing").addClass("is-hiding"), t.removeClass("is-hiding").addClass("is-showing")
    }
    var r = 250,
        n = 3800,
        a = n - 3e3;
    setTimeout(function() {
        t(e(".animated-headline"))
    }, r)
}), jQuery(document).ready(function(e) {
  