var gallery = function(){

	var imgbox = $('.box'),
		gallery_box = $('#gallery'),
		gallery_a = gallery_box.find('a');

	imgbox.html("<img>");
	imgbox.append('<span>').animate({ 'bottom' : 0 } , 300);

	gallery_a.on('click', function(e){
		e.preventDefault();
		var data_img = $(this).attr("data-img"),
			a_nar = $(this).text();
		// imgbox.html("<img>").attr({'alt','src'});
		imgbox.find('img').animate({'width':50+'%','height':'auto','float':'left'},500)
			  .attr({ 'src' : data_img, 'alt': a_nar });
	});
};