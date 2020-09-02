$(document).ready(function(){
    $('.slider').slick({
    	arrows:true,
    	dots:true,
    	adaptiveHeight:true,
    	slidesToShow:4,
    	slidesToScroll: 1,
    	speed: 500,
    	easing: 'ease',
    	infinite: true,
    	// initialSlide:0;
    	// autoplay: true,
    	autoplaySpeed: 300,
    	pauseOnFocus:true,
    	pauseOnHover: true,
    	pauseOnDotsHover:true,
    	draggable: true,
    	swipe: true,
    	// touchTreshold: 10,
    	touchMove: true,
    	// waitForAnimate:false,
    	centerMode: false,
    	variableWidth: false,
    	// rows: 1,
    	// slidesPerRow: 1,
    	// vertical: false,
		// verticalSwiping: false,

    });
});