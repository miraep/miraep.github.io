// popupcollection.js

function popupcollection(){
	var popupli_img = $('#popupUl').find('li').find('img'),
	 	close = $('.close'),
		popup = $('#popupFade');

	//이미지를 클릭했을때.
	popupli_img.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		var thisImg =  $this.attr('src');

		popup.fadeIn(100).find('img').attr( { 'src' : thisImg } );
	});
	close.on('click', function(){
		popup.fadeOut(100);
	});
	popup.on('click', function(){
		popup.fadeOut(100);
	});
};
