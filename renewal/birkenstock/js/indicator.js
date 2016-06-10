
// indicator.js

function indi(){

	var indi_btn = $('.indi').find('li');

	indi_btn.on('click',funtion(e){
		e.preventDefault();
		var this = $('this'),
			indexNum = this.index();


		console.log(indexNum);
		$('.bannerBox').animate({'margin-left': -20%},300);

	});
};