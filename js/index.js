var main = function () {
    $(function() {
        $(".typeSpace").typed({
            strings: ["^1000 Hi. ^2000 My name is Jasper Miles, and I'm a fullstack web developer from Melbourne, Australia."],
            typespeed: 25
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
