
var currentlyOpen = "main";
var main = function () {
  checkSize();
  $(window).scrollTo(".animate", 1000);
  $(window).on('scroll resize touchmove', check_if_in_view);
  $(function() {
    $(".typeSpace").typed({
      strings: ["<p>Hey! ^2000 My name is <b>Jasper Miles</b>, and I'm a junior software developer from Melbourne, Australia.</p>"],
      typespeed: 1,
      showCursor: false
    });
  });
  $(window).on('resize', function (event) {
    checkSize();
  });

};


function checkSize() {
  if ($(window).width() > 992) {
    $(".aboutText").css("display", "inherit");
  }
  else {
    $(".aboutText").css("display", "none");
  }
}
var showContactForm = function () {
  $("#contactButton").remove();
  $("#contactForm").css("display", "inherit");
  $(window).scrollTo("#contactForm", 1000);
  $("#contactForm").animate({
    opacity: 1
  }, 100);
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
  $(window).scrollTo(".bottomNav", 1000);
  return "main"
}


$(document).ready(main);
