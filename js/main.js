$(document).ready(function(){
    $(".navbar .navbar-nav .nav-item").click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top -56
        }, 2500);
    });

    //scroll to top button
    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 4000);
    });
});