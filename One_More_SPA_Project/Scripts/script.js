$(document).ready(function () {

    $(document).on('scroll', scroller);

    $('a[href^="#"]').on('click', function (e) {

        e.preventDefault();
        $(document).off('scroll');

        $('a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        var moveTo = this.hash;

        $('html,body').stop().animate({ 'scrollTop': $(this.hash).offset().top }, 500, 'swing', function () {
            window.location.hash = moveTo;
            $(document).on('scroll', scroller);            
        });
                
        
       
    });
});


function scroller(e) {
    var scrollerPosition = $(document).scrollTop();

    $('.navbutton a').each(function () {

        var currentLink = $(this);
        var currentAttr = $(this).attr('href');

        if ($(currentAttr).position().top <= scrollerPosition && $(currentAttr).position().top + $(currentAttr).height() > scrollerPosition) {
            currentLink.addClass('active');
            window.loca.hash = currentAttr;
        }
        else
            currentLink.removeClass('active');

    })
};