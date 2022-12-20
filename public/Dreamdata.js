!(function () {
  window.analytics || (window.analytics = []),
    (window.analytics.methods = [
      "identify",
      "track",
      "trackLink",
      "trackForm",
      "trackClick",
      "trackSubmit",
      "page",
      "pageview",
      "ab",
      "alias",
      "ready",
      "group",
      "on",
      "once",
      "off",
    ]),
    (window.analytics.factory = function (a) {
      return function () {
        var t = Array.prototype.slice.call(arguments);
        return t.unshift(a), window.analytics.push(t), window.analytics;
      };
    });
  for (var a = 0; a < window.analytics.methods.length; a++) {
    var t = window.analytics.methods[a];
    window.analytics[t] = window.analytics.factory(t);
  }
  (analytics.load = function (a) {
    if (!document.getElementById("dreamdata-analytics")) {
      window.__DD_TEMP_ANALYTICS__ = window.analytics;
      var t = document.createElement("script");
      (t.async = !0),
        (t.id = "dreamdata-analytics"),
        (t.type = "text/javascript"),
        (t.src =
          "https://cdn.dreamdata.cloud/scripts/analytics/v1/dreamdata.min.js"),
        t.addEventListener(
          "load",
          function (t) {
            if (analytics && analytics.initialize)
              for (
                analytics.initialize({ "Dreamdata.io": { apiKey: a } });
                window.__DD_TEMP_ANALYTICS__.length > 0;

              ) {
                var i = window.__DD_TEMP_ANALYTICS__.shift(),
                  n = i.shift();
                analytics[n] && analytics[n].apply(analytics, i);
              }
          },
          !1
        );
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(t, i);
    }
  }),
    analytics.load("a6d47f9e-b9b6-402b-a250-b0744090a2b6"),
    analytics.page();
})();
