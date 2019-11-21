$(function () {


//Menu opener hamburger

	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order','1');
		$('.menu').toggleClass('menu-opened');
	});

	 // slider

    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 2500);
    });

	// // Animation

      $(window).scroll(function() {
        $('.order__info, .brands__icons').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("fadeInLeft");
            }
    });

        $('.about__wrap, .about__photos, .journal, .wanna__info, .work__item, .travel, .clients').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("fadeInUp");
            }
   		 });
         });

});