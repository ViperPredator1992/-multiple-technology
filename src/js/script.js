$(document).ready(function () {

   $('.menu-nav__link').click(function () {
      $('.menu-nav__link').removeClass('current'); 
      $(this).addClass('current');
   });

});