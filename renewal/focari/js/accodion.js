// 아코디언 가로형 만들기

function accodion(){
	var ac = $('.ac'),
		ac_li = ac.find('li');

	ac_li.on('click', function(){
		var $this = $(this);
		$this.addClass('widthview').removeClass('otherWidth');
		$this.siblings().removeClass('widthview').addClass('otherWidth');
		// acc_btn.find('span').css( {'display' : 'block '} );
	});
	// 아코디언 끝 !

};