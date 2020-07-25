
// Smooth scrolling with anchor links
$("a[href*=\\#]").on("click", function(event){     
    event.preventDefault();
    $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
});

// Scroll into view animations
$(document).ready(function() {

    $('.tooltipped').tooltip();

    $('.scrollspy').scrollSpy();

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


// About Me click event

$(".aboutMe").on("click", function() {
    $(this).addClass("hide");
    
    var newDiv = $("<div>").addClass("newDiv animated fadeIn slower");

    var h5 = $("<h5>").text("Jeffrey is a full-stack web developer student living in Nashville, TN.");
    var h6 = $("<h6>").text("He graduated in 2016 with a BA in Humanities from Florida State University. He loves hanging with his wife, Regan, and goldendoodle, Oliver.");
    var otherh6 = $("<h6>").text("Take a look at some of his recent projects below, and feel free to reach out with the links at the top of the page.");
    var br1 = $("<br>");
    var br2 = $("<br>");
    var br3 = $("<br>");
    var hr = $("<hr>");

    newDiv.append(h5, br1, hr, br2, h6, br3, otherh6);
    $(".attachContent").append(newDiv);
});