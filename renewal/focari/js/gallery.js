// popupGallery.js

function kind(){
	var thumli = $('.thumnail').find('li'),
		bigImg = $('.imgbox'),
		kind = $('.kind_list').find('li');
		

	bigImg.html("<img src='./img/kind/1_2.png'>").find('img')
				.css({'height': 100 + '%'});

	thumli.on('click', function(e){
		e.preventDefault();
		
		var thisImg =  $(this).find('a').attr('data-img');

		bigImg.find('img').attr( {'src': thisImg } );

	});
};
