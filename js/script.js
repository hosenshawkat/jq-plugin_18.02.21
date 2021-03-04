$(document).ready(function(){

// counter;                                                                                                        

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

});


$(document).ready(function(){

// wowjs;                                                                                                        
new WOW().init();
});


$(document).ready(function(){

// slick;                                                                                                        
$('.autoplay').slick({
	 dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

});


$(document).ready(function(){

	// owl carousel
  $('.owl-carousel').owlCarousel();
});


