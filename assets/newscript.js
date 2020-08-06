
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
            };
        });
    });

    // If element is scrolled into view, fade it in. If not in view, fade out.
    // $(window).scroll(function() {
    //     $(".aboutMe").each(function() {
    //         if (isScrolledIntoView(this) === true) {
    //             $(this).removeClass("fadeOut slower").addClass("fadeIn slower");
    //         } else {
    //             $(this).removeClass("fadeIn slower").addClass("fadeOut slower");
    //         };
    //     });
    // });

    // If element is scrolled into view, bounce animation. If not in view, stop bounce.
    // $(window).scroll(function() {
    //     $(".aboutMe-div").each(function() {
    //         if (isScrolledIntoView(this) === true) {
    //             $(this).addClass("pulse delay-2s infinite");
    //         } else {
    //             $(this).removeClass("pulse delay-2s infinite");
    //         };
    //     });
    // });
});


// About Me click event

// $(".aboutMe").hover(function() {
//     $(this).addClass("hide");
    
//     var newDiv = $("<div>").addClass("newDiv animated fadeIn slower");

//     var h5 = $("<h5>").text("Jeffrey is a full-stack web developer living in the Nashville Metropolitan Area.");
//     var h6 = $("<h6>").text("He recently earned a certificate in full-stack development at Vanderbilt University, with an emphasis on the MERN stack. When not coding, he loves hanging with his wife, Regan, and goldendoodle, Oliver.");
//     var otherh6 = $("<h6>").text("Passionate about developing apps using creativity and persistence to help others solve their problems. Take a look at some of his recent projects below, and feel free to reach out with the links at the top of the page.");
//     var br1 = $("<br>");
//     var br2 = $("<br>");
//     var br3 = $("<br>");
//     var hr = $("<hr>");

//     newDiv.append(h5, br1, hr, br2, h6, br3, otherh6);
//     $(".attachContent").append(newDiv);
// }, function() {
//     return
// });

const instance = new Typewriter("#typewriter", {
    strings: ["Hi, my name is Jeffrey.", "I'm a Full Stack Web Developer living in Nashville, TN.", "Scroll down to view some of my recent projects.", "Let's work together! My contacts are at the bottom of this page."],
    autoStart: true,
    loop: true,
});