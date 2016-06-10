
function minislide(miniBanner){
	var m_box = miniBanner,
		m_box_ul = m_box.find('ul'),
		m_box_li = m_box.find('li'),
		m_box_li_width = m_box.find('li').width(),
		m_l_btn = $('.mini_left_btn'),
		m_r_btn = $('.mini_right_btn');

	//왼쪽 클릭
	m_l_btn.on('click', function(){

		//이미지
		var m_li = m_box.find('li');
		m_li.first().stop().animate({'margin-left': m_box_li_width }, 500, function(){
			m_li.css({'margin-left':0})
					.last().prependTo(m_box_ul);
		});

		//텍스트
		var t_li = $('#miniText').find('li');
			t_li.first().stop().animate({'margin-left': t_li.width() }, 500, function(){
			t_li.css({'margin-left':0})
					.last().prependTo( $('#miniText').find('ul') );
		});

	});

	//오른쪽 클릭
	m_r_btn.on('click', function(){

		//이미지
		var m_li = m_box.find('li');
		m_li.first().stop().animate({'margin-left': -m_box_li_width }, 500, function(){
			m_li.css({'margin-left':0})
					.first().appendTo(m_box_ul);
		});

		//텍스트
		var t_li = $('#miniText').find('li');
			t_li.first().stop().animate({'margin-left': -t_li.width() }, 500, function(){
			t_li.css({'margin-left':0})
					.first().appendTo( $('#miniText').find('ul') );
		});
	});

}// slidebanner