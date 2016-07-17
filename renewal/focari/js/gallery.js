// popupGallery.js

function kind(){
	var thumli = $('.thumnail').find('li'),
		bigImg = $('.imgbox');

	bigImg.html("<img src='./img/kind/1.png'>").find('img')
				.css({'width': 'auto' , 'height': 100+'%'});

	thumli.on('click', function(e){
		e.preventDefault();
		
		var thisImg =  $(this).find('a').attr('data-img');

		bigImg.find('img').attr( {'src': thisImg } );

	});
};
