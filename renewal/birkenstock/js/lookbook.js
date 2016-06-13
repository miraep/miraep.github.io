// popupGallery.js

function lookbook(){
	var popupli = $('#popupUl').find('li'),
	 	close = $('.close'),
		popup = $('#popupFade');

	popupli.on('click', function(e){
		e.preventDefault();
		
		var thisImg =  $(this).find('a').attr('href');

		popup.fadeIn(100).find('img').attr( {'src': thisImg } );

	});
	close.on('click', function(){
		popup.fadeOut(100);
	});
	popup.on('click', function(){
		popup.fadeOut(100);
	});
};
