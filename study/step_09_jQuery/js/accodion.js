// $(document).ready(function(){



// 			 var menu = $("#headerBox").find("li");
// 			 menu.on('click', function(e){
// 			 	e.preventDefault();
// 			 	var $this = $(this),
// 			 			i_index = $(this).index();

// 				$this.addClass('addColor').siblings().removeClass('addColor');
// 			 	// .eq() : 몇번째인지 지정    .nth-child()  : 몇번째인지 지정 
// 			 	// .index() : 몇번째 인지 지정이 아님!!!! 몇번째인지 확인

// 			 	$('#banner').find('li').eq(i_index).addClass('boxWidth').siblings().removeClass('boxWidth').css({'width':'10%', 'overflow': 'hidden'});
//   				// return false;
  				   
// 			 });



// 			// 아코디언 가로 형 만들기 
// 			var acc_btn = $('.accodion_width').find('dt');
			
// 			acc_btn.on('mouseenter', function(){
// 				var $this = $(this);
// 				$this.siblings().animate({'width': '610px'});
// 			}).on('mouseleave', function(){
// 				var $this = $(this),
// 					order_dd = $this.parents('dl').children('dd');

// 				order_dd.animate({'width' : 0 + 'px'});
// 			});




// 		}); //all