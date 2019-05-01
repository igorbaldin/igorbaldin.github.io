// Начало
$( "a" ).click(function( event ) {
    event.preventDefault();
    $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
    }); /*Отмена перехода на верх по клику */
    
// HEADER
(function($){
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);

// SLIDER
$(document).ready(function(){
    $('.next').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');

        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
        }
    });
    $('.prev').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });
})
// Фиксированное меню с якорем
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});

// Фильтр
$(function(){
  $('.toggles a').click(function(){
      var get_id = this.id;
      var get_current = $('.posts .' + get_id);

      $('.post').not(get_current).hide(500);
      get_current.show(500);
  });
  $('#showall').click(function(){
      $('.post').show(500);
  });
});