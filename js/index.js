var main = function () {
    wait(5000);
    $(function() {
        $(".typeSpace").typed({
            strings: ["Hi."],
            typespeed: 0
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
