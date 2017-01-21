var main = function () {
    $(function() {
        $(".typeSpace").typed({
            strings: ["<p>Hey! ^2000 My name is <b>Jasper Miles</b>, and I'm a full stack web developer from Melbourne, Australia.</p>"],
            typespeed: 1,
            showCursor: false
        });
    });
}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

var scrollToPortfolio = function () {
    $(window).scrollTo(".portfolio", 500);
}

$(document).ready(main);
