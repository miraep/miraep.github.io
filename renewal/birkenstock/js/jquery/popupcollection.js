// popupGallery.js

function popupcollection(){
	var ul_li_img = $('#popupUl').find('li').find('img'),
	 	close = $('.close'),
		popup = $('#popupFade');

	ul_li_img.on('click', function(e){
		e.preventDefault();
		var thisImg =  $(this).attr('src'),
		popup.fadeIn(100).find('img').attr({'src': thisImg});

	});
	close.on('click', function(){
		popup.fadeOut(100);
	});
	popup.on('click', function(){
		popup.fadeOut(100);
	});
};
