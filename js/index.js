var main = function () {
    $(window).scrollTo(".animate", 10);
    $(window).on('scroll resize touchmove', check_if_in_view);
    $(function() {
        $(".typeSpace").typed({
            strings: ["<span onclick=openNav() class=cursorChange><p>Hey! ^2000 My name is <b>Jasper Miles</b>, and I'm a full stack web developer from Melbourne, Australia.</p></span>"],
            typespeed: 1,
            showCursor: false
        });
    });
    $('.thumb').hover(function(){
	       $(this).find('.caption').css('opacity','1');
    }, function(){
	       $(this).find('.caption').css('opacity','0');
    });



}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("body").style.marginLeft = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
}

var showContactForm = function () {
    $("#contactButton").remove();
    $("#contactForm").css("display", "inherit");
    $(window).scrollTo("#contactForm", 1000);
    $("#contactForm").animate({
        opacity: 1
    }, 100);
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function check_if_in_view() {
  var $animation_elements = $('.animation_element');
  var $window = $(window);
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });
}

var scrollToPortfolio = function () {
    $(window).scrollTo(".portfolio", 1000);
}

$(document).ready(main);
