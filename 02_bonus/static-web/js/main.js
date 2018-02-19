/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function($) {
  /*---------------------------------------------------- */
  /* Preloader
   ------------------------------------------------------ */

  $(window).load(function() {
    $("#lang-handle").on("click", function(e) {
      $(this)
        .parent()
        .toggleClass("active");
    });

    $(".lang-op").hover(
      function(e) {
        $(this).addClass("active");
      },
      function(e) {
        $(this).removeClass("active");
      }
    );

    // will first fade out the loading animation
    // $("#status").fadeOut("slow");

    // will fade out the whole DIV that covers the website.
    // $("#preloader").delay(100).fadeOut("slow").remove();
    // $("#preloader").remove();

    // $('.js #hero .hero-image img').addClass("animated fadeInUpBig");
    $(".js #hero .buttons a.trial").addClass("animated shake");
    $("#imageGallery").lightSlider({
      autoWidth: true,
      item: 1,
      slideMargin: 0,
      enableDrag: false,
      currentPagerPosition: "left",
      onSliderLoad: function(el) {
        el.lightGallery({
          selector: "#imageGallery .lslide",
          youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 1,
            rel: 0,
            controls: 1
          }
        });
      }
    });
  });

  $(".screen-video, .video-poster").click(function(e) {
    var me = $(this);
    var video = me.hasClass("screen-video") ? me[0] : me.parent().find(".screen-video")[0];
    if (video.paused) {
      $(video)
        .parent()
        .find(".video-poster")
        .hide();
      video.play();
    } else {
      $(video)
        .parent()
        .find(".video-poster")
        .show();
      video.pause();
    }
  });

  var initLeft = $(".fa.active").offset().left - $(".platform-list").offset().left;
  $(".platform-list .arrow").css("left", initLeft);

  $(".fa").click(function() {
    var platform = $(this).attr("data-plat");

    $(".plt").removeClass("active");
    $(".fa").removeClass("active");
    $("." + platform).addClass("active");
    $(this).addClass("active");

    var left = $(this).offset().left - $(".platform-list").offset().left;

    $(".platform-list .arrow").css("left", left);
  });

  /*---------------------------------------------------- */
  /* Mobile Menu
   ------------------------------------------------------ */

  var toggle_button = $("<a>", {
    id: "toggle-btn",
    html: "Menu",
    title: "Menu",
    href: "#"
  });
  var nav_wrap = $("nav#nav-wrap");
  var nav = $("ul#nav");

  /* id JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  nav_wrap.find("a.mobile-btn").remove();
  nav_wrap.prepend(toggle_button);

  toggle_button.on("click", function(e) {
    e.preventDefault();
    nav.slideToggle("fast");
  });

  if (toggle_button.is(":visible")) nav.addClass("mobile");
  $(window).resize(function() {
    if (toggle_button.is(":visible")) nav.addClass("mobile");
    else nav.removeClass("mobile");
  });

  $("ul#nav li a").on("click", function() {
    if (nav.hasClass("mobile")) nav.fadeOut("fast");
  });

  /*----------------------------------------------------*/
  /* FitText Settings
  	------------------------------------------------------ */
  setTimeout(function() {
    $("h1.responsive-headline").fitText(1.2, { minFontSize: "25px", maxFontSize: "100px" });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  	------------------------------------------------------ */
  $(".smoothscroll").on("click", function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
  var sections = $("section"),
    navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function(event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%"
  });

  // $("#mc-embedded-subscribe-form").submit(function(e){
  //     e.preventDefault();
  //     submitSubscribeForm($("#mc-embedded-subscribe-form"));
  // });

  // function submitSubscribeForm($form) {
  //     $.ajax({
  //         type: "GET",
  //         url: $form.attr("action"),
  //         data: $form.serialize(),
  //         cache: false,
  //         dataType: "jsonp",
  //         jsonp: "c", // trigger MailChimp to return a JSONP response
  //         contentType: "application/json; charset=utf-8",

  //         error: function(error){
  //             // According to jquery docs, this is never called for cross-domain JSONP requests
  //         },

  //         success: function(data){
  //             var resultMessage = data.msg || "Sorry. Unable to subscribe. Please try again later."

  //             if (data.result != "success") {
  //                 if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
  //                     resultMessage = "You're already subscribed. Thank you."
  //                 }
  //             } else {
  //                 resultMessage = "Thank you!<br>You must confirm the subscription in your inbox.";
  //             }
  //             console.log(resultMessage);
  //         }
  //     });
  // }

  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top > 10) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  /*----------------------------------------------------*/
  /* FitVids
  	/*----------------------------------------------------*/
  $(".fluid-video-wrapper").fitVids();

  /*----------------------------------------------------*/
  /* Waypoints Animations
   ------------------------------------------------------ */
  $(".js .design").waypoint(
    function() {
      $(".js .design .feature-media").addClass("animated pulse");
    },
    { offset: "bottom-in-view" }
  );

  $(".js .responsive").waypoint(
    function() {
      $(".js .responsive .feature-media").addClass("animated pulse");
    },
    { offset: "bottom-in-view" }
  );

  $(".js .cross-browser").waypoint(
    function() {
      $(".js .cross-browser .feature-media").addClass("animated pulse");
    },
    { offset: "bottom-in-view" }
  );

  $(".js #subscribe").waypoint(
    function() {
      $('.js #subscribe input[type="email"]').addClass("animated fadeInLeftBig show");
      $('.js #subscribe input[type="submit"]').addClass("animated fadeInRightBig show");
    },
    { offset: "bottom-in-view" }
  );

  /*----------------------------------------------------*/
  /* Flexslider
  	/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false,
    touch: true
  });

  $(".flexslider-demo").flexslider({
    namespace: "flex-",
    controlsContainer: ".media-demo",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false,
    touch: true
  });
})(jQuery);
