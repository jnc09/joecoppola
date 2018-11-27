$(document).ready(function(){

    <!-- Change Color on Scrolled-->
    $(window).scroll(function(x){
        $('nav').toggleClass('shrink', $(this).scrollTop() > 660);
        $('.navbar').removeClass('shadow', $(this).scrollTop() > 525);
    });
    <!-- Card Project Hover -->
    // $('.card-projects').hover(
    //     function () {
    //         $(this).animate({
    //             marginTop: "-=1%",
    //         }, 200);
    //     },
    //
    //     function () {
    //         $(this).animate({
    //             marginTop: "0%"
    //         }, 200);
    //     }
    // )
    // <!-- Mouse-Over Projects -->
    // $('.card-projects').mouseover(function(m){
    //     $('.card-img-overlay').toggleClass('project-overlay');
    // })
    <!-- Smooth Scrolling -->
    let scrollLink = $('.scroll');

    scrollLink.click(function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 750)
    });
    let a = function () {
        100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    };
});

window.sr = ScrollReveal();

sr.reveal('.bottom', {
    duration: 1500,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('.top', {
    duration: 1500,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.side-img', {
    duration: 1500,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.side-text', {
    duration: 1500,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.strengths', {
    duration: 3000,
    distance: '0'
});
sr.reveal('.connect-icon', {
    duration: 1500,
    distance: 0
})
sr.reveal('.proj1', {
    duration: 1500,
    origin: 'right',
    distance: '800px'
});

sr.reveal('.proj2', {
    duration: 1500,
    origin: 'left',
    distance: '800px'
});