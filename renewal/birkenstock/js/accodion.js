// 아코디언 가로형 만들기

function accodion(ac){
	var acc = ac,
		acc_btn = acc.find('li');

	acc_btn.on('mouseenter', function(){
		var $this = $(this);
		$this.addClass('widthview').removeClass('otherWidth');
		$this.siblings().removeClass('widthview').addClass('otherWidth');
		// acc_btn.find('span').css( {'display' : 'block '} );
	});
	// 아코디언 끝 !

};