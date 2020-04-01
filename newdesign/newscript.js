
// Smooth scrolling with anchor links
$("a[href*=\\#]").on("click", function(event){     
    event.preventDefault();
    $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
});

// Scroll into view animations
$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in from left. If not in view, fade out left.
    $(window).scroll(function() {
        $(".jeff-img").each(function() {
            if (isScrolledIntoView(this) === true) {
            $(this).removeClass("fadeOutLeft").addClass("fadeInLeft");
            } else {
                $(this).removeClass("fadeInLeft").addClass("fadeOutLeft");
            };
        });
    });

    // If element is scrolled into view, fade it in. If not in view, fade out.
    $(window).scroll(function() {
        $(".aboutMe").each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).removeClass("fadeOut slower").addClass("fadeIn slower");
            } else {
                $(this).removeClass("fadeIn slower").addClass("fadeOut slower");
            };
        });
    });

    // If element is scrolled into view, bounce animation. If not in view, stop bounce.
    $(window).scroll(function() {
        $(".aboutMe-div").each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass("pulse delay-2s infinite");
            } else {
                $(this).removeClass("pulse delay-2s infinite");
            };
        });
    });
});

  