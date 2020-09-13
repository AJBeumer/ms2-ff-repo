$(document).ready(function(){

    let $depth_1 = $('.depth-1');

    $depth_1.find('p').on('click', function(){
        $('.menu').addClass('show');
        $(this).parents('.depth-1').addClass('show');

    });

    $('.depth-2__first').on('click', function(){
        $('.menu').removeClass('show');
    });

    let $depth_2 = $('.depth-2');

    $depth_2.find('p').on('click', function(){
        $('.menu').addClass('show');
        $(this).parents('.depth-2').addClass('show');

    });

    $('.depth-3__first').on('click', function(){
        $('.menu').removeClass('show');
    });


});