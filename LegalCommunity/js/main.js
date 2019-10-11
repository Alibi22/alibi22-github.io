$(function(){

    $('.slider__inner, .news__slider-inner').slick({
    infinite: false,       
    prevArrow: "<button type='button' class='slick-btn slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-btn slick-next'></button>"
    
    });

    $('select').styler();

    $('#headerBtnMenu').on('click', function(){
        $('.menu ul').slideToggle();
    });

});