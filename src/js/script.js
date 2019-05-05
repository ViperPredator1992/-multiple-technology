$(document).ready(function () {

   $('.menu-nav__link').click(function () {
      $('.menu-nav__link').removeClass('current'); 
      $(this).addClass('current');
   });

    if (screen.width < 992) {
        $(".menu").click(function () {
            if ($(this).find("ul").css("display") == "none") {
                $(this).find("ul").slideDown();
                $(".burger").addClass("burger-open");
            }
            else {
                $(".burger").removeClass("burger-open");
                $(this).find("ul").slideUp();
            }
        });
    }

});