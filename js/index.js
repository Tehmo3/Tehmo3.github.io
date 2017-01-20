var main = function () {
    $(function() {
        $(".typeSpace").typed({
            strings: ["^1000 Hi. ^2000 My name is Jasper Miles,<br /> and I'm a full stack web developer from Melbourne, Australia."],
            typespeed: 25,
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

$(document).ready(main);
