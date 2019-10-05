
//Navbar Animation On Scroll
(function(){
    let header = $('header');
    let win = $(window);
    let classShowMenu = 'scroll-show-menu';
    let classHideMenu = 'scroll-hide-menu';
    
    let prevScroll = win.scrollTop();
    
    $(window).on('scroll', function(){
    
    
    
    if(win.scrollTop()>100){
        let currentScroll = win.scrollTop();
    
        if(prevScroll > currentScroll){
            
    
            if(header.hasClass(classHideMenu)){
                header.removeClass(classHideMenu);
                header.addClass(classShowMenu);
            }
            
        }
        else{
            header.addClass(classHideMenu);
        }
    
        prevScroll = currentScroll;
    }
    else{
        if(header.hasClass(classShowMenu)){
            header.removeClass(classShowMenu);
        }
        else if(header.hasClass(classHideMenu)){
            header.removeClass(classHideMenu);
        }
    }
})

}());


//Change Navbar Item

let itemMenu = $('.menu-item');
let menu = $('.menu');
function changeMenuItem(){
    
    itemMenu.click(
    function(){
        
        itemMenu.removeClass('active-menu');
        $(this).addClass('active-menu');
    }
    )
}

changeMenuItem();

console.log(itemMenu);