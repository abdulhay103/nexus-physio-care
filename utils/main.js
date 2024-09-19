export const nexusUtilsFunction = {
  //   scrollAnimation() {
  //     if (typeof window !== "undefined") {
  //       window.WOW = require("wowjs");
  //     }
  //     new WOW.WOW().init();
  //   },

  preloader() {
    // Select the preloader element
    const preloader = document.querySelector(".preloader");

    // Add the 'loaded' class to the preloader element
    preloader.classList.add("loaded");

    // Delay the fade out by 600 milliseconds
    setTimeout(function () {
      // Fade out the preloader element
      preloader.style.transition = "opacity 0.7s";
      preloader.style.opacity = "0";

      // Remove the preloader element from the DOM after the transition
      preloader.addEventListener("transitionend", function () {
        preloader.style.display = "none";
      });
    }, 600);
  },

  // Custom Mouse Function
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      pointer = document.querySelectorAll(".cursor-pointer"),
      sidebar__toggle = document.querySelectorAll(".sidebar__toggle"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }
              for (let i = 0; i < pointer.length; i++) {
                const element = pointer[i];
                mouseEvent(element);
              }
              for (let i = 0; i < sidebar__toggle.length; i++) {
                const element = sidebar__toggle[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
};
