(function ($) {
	// add your code 

	$('.vegas-slider').vegas({
		transition: ['fade'], // slider transtion
        transitionDuration: 50000,
		slides: [
			{src : '../img/slides/img1.jpg'},
			{src : '../img/slides/img2.jpg'},
			{src : '../img/slides/img3.jpg'},
            {src : '../img/slides/img4.jpg'},
            {src : '../img/slides/img5.jpg'}
		],
        animation: 'kenburns',
        animationDuration: 30000,
        
	});


})(jQuery);