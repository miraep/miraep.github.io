//top

function gotop(){
	$('#footerBox').find('button').on('click', function(){
		$('html,body').animate({'scrollTop':0},700);
	});
};