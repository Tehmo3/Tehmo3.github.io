var open = "main"; //Easier to make global than use jquery... lazy programming :)

var main = function () {
    $(window).scrollTo(".animate", 10);
    $(window).on('scroll resize touchmove', check_if_in_view);

    $(function() {
        $(".typeSpace").typed({
            strings: ["<p>Hey! ^2000 My name is <b>Jasper Miles</b>, and I'm a full stack web developer from Melbourne, Australia.</p>"],
            typespeed: 1,
            showCursor: false
        });
    });

    $('.thumb').hover(function(){
	       $(this).find('.caption').css('opacity','1');
    }, function(){
	       $(this).find('.caption').css('opacity','0');
    });

    $(window).keydown(function (e) {
        open = onPress(e.which, open)
    })
    $(window).on("swiperight", function () {
        console.log("swiperight")
        open = onPress(37, open)
    })
    $(window).on("swipeleft", function () {
        console.log("swiperight")
        open = onPress(39, open)
    })
    $(window).on("swipeup", function () {
        console.log("swiperight")
        open = onPress(40, open)
    })
    $(window).on("swipedown", function () {
        console.log("swiperight")
        open = onPress(38, open)
    })

}

function simulatePress(key) {
    console.log(key, open);
    open = onPress(key, open);
}

var onPress = function (key, lastKey) {
    if (key === 37 && lastKey === "main") {
        lastKey = openLeftNav();
    }
    else if (key === 39 && lastKey === "left") {
        lastKey = closeLeftNav();
    }
    else if (key === 39 && lastKey === "main") {
        lastKey = openRightNav();
    }
    else if (key === 37 && lastKey === "right") {
        lastKey = closeRightNav();
    }
    else if (key === 40 && lastKey === "main") {
        lastKey = openBottomNav();
    }
    else if (key === 38 && lastKey === "bottom") {
        lastKey = closeBottomNav();
    }
    return lastKey;
};

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openLeftNav() {
    document.getElementById("leftSidenav").style.width = "100%";
    document.getElementById("body").style.marginLeft = "100%";
    return "left";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeLeftNav() {
    $(window).scrollTo(".animate", 10);
    document.getElementById("leftSidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    return "main";
}

function openRightNav() {
    document.getElementById("rightSidenav").style.width = "100%";
    document.getElementById("body").style.marginright = "100%";
    return "right";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeRightNav() {
    $(window).scrollTo(".animate", 10);
    document.getElementById("rightSidenav").style.width = "0";
    document.getElementById("body").style.marginright = "0";
    return "main";
}

function openBottomNav() {
    document.getElementById("bottomNav").style.height = "100%";
    document.getElementById("body").style.marginbottom = "100%";
    return "bottom";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeBottomNav() {
    $(window).scrollTo(".animate", 10);
    document.getElementById("bottomNav").style.height = "0";
    document.getElementById("body").style.marginbottom = "0";
    return "main";
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
