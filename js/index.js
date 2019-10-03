let header = $('header');


$(window).scroll(
    function(){
        if($(document).scrollTop() > 130){
            header.addClass("active");
        }

        else{
            header.removeClass("active");
        }
    }
);
