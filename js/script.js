jQuery(document).ready(function(){
	/* tabs switching */
	$('.projects__link').click(function(){
        var tab_id = $(this).attr('data-tab');
        
		$('.projects__link').removeClass('projects__link-active');
		$('.projects__content').removeClass('projects__content-active');

		$(this).addClass('projects__link-active');
		$("#"+tab_id).addClass('projects__content-active');
    });
    


    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        breakpoints: {
            // when window width is <= 320px
            575: {
              slidesPerView: 1
            },
            // when window width is <= 480px
            767: {
              slidesPerView: 2
            },
            // when window width is <= 640px
            991: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }
      })
});