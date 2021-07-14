$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".my-navbar").addClass("active-nav");
    } else {
        $(".my-navbar").removeClass("active-nav");
    }
});
// word change
(function(){
    var words = [
        "Forntend Developer",
        "<span>I'm Minhaj</span>",
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2000);
      
})();
// skill bar
// var offsetTop = $('#skills').offset().top;
// $(window).scroll(function() {
// var height = $(window).height();
// if($(window).scrollTop()+height > offsetTop) {
// jQuery('.about-me__content__bar').each(function(){
//   jQuery(this).find('.about-me__content__bar-bar').animate({
//     width:jQuery(this).attr('data-percent')
//   },2000);
// });
// }
// });
// star loop

var startIcon = document.getElementById('circle');
for (var i = 0; i < 10 ; i++) {
    startIcon.innerHTML += '<i class=\'fa fa-star icon\' aria-hidden=\'true\'></i>';
};

// click to load more
$(function () {
    $(".portfolio__cols").slice(0, 6).show();
    $("body").on('click touchstart', '#loadMore', function (e) {
        e.preventDefault();
        $(".portfolio__cols:hidden").slice(0, 3).slideDown();
        if ($(".portfolio__cols:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});

// testimonial
$('#testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText : ["<i class='fa fa-chevron-left icon'></i>","<i class='fa fa-chevron-right icon'></i>"],
    responsive:{
        0:{
            items:1
        },
    }
})
