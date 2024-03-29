
!(function(s) {
  var n = s(window),
    o = s("body");
  Waves.init({ duration: 300 }),
    Waves.attach(".btn:not(.btn-badge)", ["waves-button", "waves-light"]),
    feather.replace(),
    (s.createOverlay = function() {
      s(".overlay").length < 1
        ? (o.addClass("no-scroll").append('<div class="overlay"></div>'),
          s(".overlay").addClass("show"))
        : s(".overlay").remove();
    }),
    s('.dropdown-menu a[data-toggle="dropdown"]').on("click", function(e) {
      return (
        s(this)
          .next()
          .hasClass("show") ||
          s(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show"),
        s(this)
          .next(".dropdown-menu")
          .toggleClass("show"),
        s(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function(e) {
            s(".dropdown-submenu .show").removeClass("show");
          }),
        !1
      );
    }),
    s("[data-backround-image]").each(function(e) {
      s(this).css("background", "url(" + s(this).data("backround-image") + ")");
    }),
    n.on("load", function() {
      s(".page-loader").fadeOut(700, function() {
        setTimeout(function() {
          (toastr.options = {
            timeOut: 3e3,
            progressBar: !0,
            showMethod: "slideDown",
            hideMethod: "slideUp",
            showDuration: 200,
            hideDuration: 200
          }),
            toastr.success("Welcome! Kenneth Hune.");
        }, 1e3);
      });
    }),
    n.on("load", function() {
      setTimeout(function() {
        s(".side-menu .side-menu-body ul li a").each(function() {
          var e = s(this);
          e.next("ul").length &&
            (o.hasClass("horizontal-side-menu")
              ? (e.append('<i class="sub-menu-arrow ti-angle-right"></i>'),
                s(".side-menu .side-menu-body > ul > li > a > .sub-menu-arrow")
                  .removeClass("ti-angle-right")
                  .addClass("ti-angle-down"))
              : e.append('<i class="sub-menu-arrow ti-plus"></i>'));
        }),
          s(".side-menu .side-menu-body ul li.open>a>.sub-menu-arrow")
            .removeClass("ti-plus")
            .addClass("ti-minus")
            .addClass("rotate-in");
      }, 200);
    }),
    s(document).on("click", ".sidebar-open", function() {
      return (
        s('[data-toggle="dropdown"]').dropdown("hide"),
        s(".sidebar").toggleClass("show"),
        s.createOverlay(),
        !1
      );
    }),
    s(document).on("click", "*", function(e) {
      ((!s(e.target).is(
        ".sidebar, .sidebar *, .sidebar-open, .sidebar-open *"
      ) &&
        s(".sidebar").hasClass("show")) ||
        (!s(e.target).is(
          ".search-panel-open, .search-panel-open *, nav.navbar .header-body form.search, nav.navbar .header-body form.search *"
        ) &&
          s("nav.navbar .header-body form.search").hasClass("show")) ||
        (!s(e.target).is(
          ".side-menu-open, .side-menu-open *, .side-menu, .side-menu *"
        ) &&
          s(".side-menu").hasClass("show"))) &&
        (s(".sidebar").removeClass("show"),
        s("nav.navbar .header-body form.search").removeClass("show"),
        s(".side-menu").removeClass("show"),
        o.removeClass("no-scroll"),
        s(".overlay").remove());
    }),
    s(document).on("click", ".search-panel-open", function() {
      return (
        s("nav.navbar form.search")
          .addClass("show")
          .find("input:first")
          .focus(),
        s.createOverlay(),
        !1
      );
    }),
    s(document).on("click", ".side-menu-open", function() {
      return (
        s('[data-toggle="dropdown"]').dropdown("hide"),
        s(".side-menu").addClass("show"),
        s.createOverlay(),
        !1
      );
    }),
    window.addEventListener(
      "load",
      function() {
        var e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, function(a) {
          a.addEventListener(
            "submit",
            function(e) {
              !1 === a.checkValidity() &&
                (e.preventDefault(), e.stopPropagation()),
                a.classList.add("was-validated");
            },
            !1
          );
        });
      },
      !1
    );
  var e = s(".table-responsive-stack");
  function a() {
    n.width() < 768
      ? s(".table-responsive-stack").each(function(e) {
          s(this)
            .find(".table-responsive-stack-thead")
            .show(),
            s(this)
              .find("thead")
              .hide();
        })
      : s(".table-responsive-stack").each(function(e) {
          s(this)
            .find(".table-responsive-stack-thead")
            .hide(),
            s(this)
              .find("thead")
              .show();
        });
  }
  e.find("th").each(function(e) {
    s(".table-responsive-stack td:nth-child(" + (e + 1) + ")").prepend(
      '<span class="table-responsive-stack-thead">' +
        s(this).text() +
        ":</span> "
    ),
      s(".table-responsive-stack-thead").hide();
  }),
    e.each(function() {
      var e = 100 / s(this).find("th").length + "%";
      s(this)
        .find("th, td")
        .css("flex-basis", e);
    }),
    a(),
    d(),
    (window.onresize = function(e) {
      a(), d("resize");
    }),
    s(document).on(
      "click",
      ".accordion.custom-accordion .accordion-row a.accordion-header",
      function() {
        var e = s(this);
        return (
          e
            .closest(".accordion.custom-accordion")
            .find(".accordion-row")
            .not(e.parent())
            .removeClass("open"),
          e.parent(".accordion-row").toggleClass("open"),
          !1
        );
      }
    );
  var t,
    i = s(".table-responsive");
  function d(e) {
    "resize" == (e = e || "")
      ? (768 <= n.width() &&
          s(".card-scroll")
            .getNiceScroll()
            .resize(),
        ((!o.hasClass("horizontal-side-menu") && 992 <= n.width()) ||
          (o.hasClass("horizontal-side-menu") && n.width() < 992)) &&
          768 <= n.width() &&
          s(".side-menu>div>ul")
            .getNiceScroll()
            .resize(),
        s(".card").each(function() {
          if (768 <= n.width()) {
            var e = s(this).find(".card-scroll");
            e.length && e.getNiceScroll().resize();
          }
        }),
        s(".sidebar .tab-content .tab-pane").each(function() {
          768 <= n.width() &&
            s(this)
              .find(".tab-pane-body")
              .getNiceScroll()
              .resize();
        }),
        s(".dropdown-menu").each(function() {
          void 0 !== s(".dropdown-menu-body", this)[0] &&
            768 <= n.width() &&
            s(".dropdown-menu-body", this)
              .getNiceScroll()
              .resize();
        }),
        768 <= n.width() &&
          (s(".chat-app .chat-sidebar .chat-sidebar-messages")[0] &&
            s(".chat-app .chat-sidebar .chat-sidebar-messages")
              .getNiceScroll()
              .resize(),
          s(".chat-app .chat-body .chat-body-messages")[0] &&
            s(".chat-app .chat-body .chat-body-messages")
              .getNiceScroll()
              .resize()))
      : (768 <= n.width() &&
          (s(".card-scroll").niceScroll(), s(".table-responsive").niceScroll()),
        ((!o.hasClass("horizontal-side-menu") && 992 <= n.width()) ||
          (o.hasClass("horizontal-side-menu") && n.width() < 992)) &&
          n.on("load", function() {
            !o.hasClass("horizontal-side-menu") &&
              !o.hasClass("icon-side-menu") &&
              768 <= n.width() &&
              s(".side-menu>div>ul").niceScroll();
          }),
        s(".card").each(function() {
          if (768 <= n.width()) {
            var e = s(this).find(".card-scroll");
            e.length && e.niceScroll();
          }
        }),
        s(".sidebar .tab-content .tab-pane").each(function() {
          768 <= n.width() &&
            s(this)
              .find(".tab-pane-body")
              .niceScroll();
        }),
        s(".dropdown-menu").each(function() {
          void 0 !== s(".dropdown-menu-body", this)[0] &&
            768 <= n.width() &&
            s(".dropdown-menu-body", this).niceScroll();
        }),
        768 <= n.width() &&
          (s(".chat-app .chat-sidebar .chat-sidebar-messages")[0] &&
            s(".chat-app .chat-sidebar .chat-sidebar-messages")
              .scrollTop(
                s(".chat-app .chat-sidebar .chat-sidebar-messages").get(0)
                  .scrollHeight,
                -1
              )
              .niceScroll(),
          s(".chat-app .chat-body .chat-body-messages")[0] &&
            s(".chat-app .chat-body .chat-body-messages")
              .scrollTop(
                s(".chat-app .chat-body .chat-body-messages").get(0)
                  .scrollHeight,
                -1
              )
              .niceScroll()));
  }
  if (
    (i.on("show.bs.dropdown", function(e) {
      (t = s(e.target).find(".dropdown-menu")), o.append(t.detach());
      var a = s(e.target).offset();
      t.css({
        display: "block",
        top: a.top + s(e.target).outerHeight(),
        left: a.left,
        width: "184px",
        "font-size": "14px"
      }),
        t.addClass("mobPosDropdown");
    }),
    i.on("hide.bs.dropdown", function(e) {
      s(e.target).append(t.detach()), t.hide();
    }),
    s(document).on(
      "click",
      ".chat-app-wrapper .btn-chat-sidebar-open",
      function() {
        return (
          s(".chat-app-wrapper .chat-sidebar").addClass("chat-sidebar-opened"),
          !1
        );
      }
    ),
    s(document).on("click", "*", function(e) {
      s(e.target).is(
        ".chat-app-wrapper .chat-sidebar, .chat-app-wrapper .chat-sidebar *, .chat-app-wrapper .btn-chat-sidebar-open, .chat-app-wrapper .btn-chat-sidebar-open *"
      ) ||
        s(".chat-app-wrapper .chat-sidebar").removeClass("chat-sidebar-opened");
    }),
    s(document).on("click", ".side-menu ul li a", function() {
      var e = s(this);
      if (e.next("ul").length) {
        var a = e.find(".sub-menu-arrow");
        return (
          a.toggleClass("rotate-in"),
          e.next("ul").toggle(200),
          e
            .parent("li")
            .siblings()
            .find("ul")
            .not(e.parent("li").find("ul"))
            .slideUp(200),
          e
            .next("ul")
            .find("li ul")
            .slideUp(200),
          e
            .next("ul")
            .find("li>a")
            .find(".sub-menu-arrow")
            .removeClass("ti-minus")
            .addClass("ti-plus"),
          e
            .next("ul")
            .find("li>a")
            .find(".sub-menu-arrow")
            .removeClass("rotate-in"),
          e
            .parent("li")
            .siblings()
            .not(e.parent("li").find("ul"))
            .find(">a")
            .find(".sub-menu-arrow")
            .removeClass("ti-minus")
            .addClass("ti-plus"),
          e
            .parent("li")
            .siblings()
            .not(e.parent("li").find("ul"))
            .find(">a")
            .find(".sub-menu-arrow")
            .removeClass("rotate-in"),
          a.hasClass("rotate-in")
            ? setTimeout(function() {
                a.removeClass("ti-plus").addClass("ti-minus");
              }, 200)
            : a.removeClass("ti-minus").addClass("ti-plus"),
          !o.hasClass("horizontal-side-menu") &&
            768 <= n.width() &&
            setTimeout(function(e) {
              s(".side-menu>div>ul")
                .getNiceScroll()
                .resize();
            }, 300),
          !1
        );
      }
    }),
    s("body.icon-side-menu .side-menu").hover(
      function(e) {},
      function(e) {
        e.stopPropagation(),
          s(".side-menu ul").removeAttr("style"),
          s(".side-menu ul li")
            .not(".open")
            .find(">a>.sub-menu-arrow")
            .removeClass("rotate-in")
            .removeClass("ti-minus")
            .addClass("ti-plus");
      }
    ),
    s(document).on("click", ".dropdown-menu", function(e) {
      e.stopPropagation();
    }),
    s("#exampleModal").on("show.bs.modal", function(e) {
      var a = s(e.relatedTarget).data("whatever"),
        n = s(this);
      n.find(".modal-title").text("New message to " + a),
        n.find(".modal-body input").val(a);
    }),
    s('[data-toggle="tooltip"]').tooltip(),
    s('[data-toggle="popover"]').popover(),
    s(".carousel").carousel(),
    o.hasClass("icon-side-menu") &&
      s(".side-menu").hover(function(e) {
        s(".side-menu").on(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function(e) {
            s(".side-menu>div>ul").niceScroll();
          }
        );
      }),
    "object" == typeof CKEDITOR && s("body").hasClass("dark"))
  ) {
    var r = s(".card").css("background-color"),
      c = s("body").css("color");
    CKEDITOR.on("instanceReady", function(e) {
      s("iframe.cke_wysiwyg_frame").each(function(e) {
        var a = s(this)[0],
          n = a.contentDocument || a.contentWindow.document;
        (n.body.style.backgroundColor = r), (n.body.style.color = c);
      });
    });
  }
})(jQuery);
