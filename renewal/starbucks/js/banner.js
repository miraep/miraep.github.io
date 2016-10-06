
  (function($){
      'use strict';
      
      var banner = $('.e_ban'), //배너
          banLi = banner.find('li'), // banner>li
          banLiFirst = banner.find('li').first(), //banner>li:first-child
          banLiWid = parseInt(banLi.width()), //banner>li 가로 정수값
          banLihei = banner.find('li').height(), //banner>li 세로
          
          // ind = $('.b_btn'), //indicator
          // indLi = ind.find('li'), //indicator > li
          // indLiFirst = ind.find('li').first(), //indicator >li:first-child

          l_btn = $('.banner_left'),
          r_btn = $('.banner_right'),
          
          
          slideTime = 700, //배너 움직이는 시간
          settingTime = 1100; //슬라이드가 작동되ㅣ도록 하는 시간(버튼)
      
      
      // 인디게이터 크기 활성화
      // indLiFirst.addClass('indWidth');

      
      // 첫번째 이미지 보이기
        banLi.last().clone().prependTo('.e_ban'); //banLi 배너내부의 li (하나의 배너부분)
        // indLi.last().clone().prependTo('.ind'); //indLi 인디케이터의 하나
      
      // 인디게이터 표시 및 위치 이동
      // indLi.on('click', function(){
      //  var $this = $(this),
      //      index = $this.index(),
      //      indexPlus = index - 1,
      //      banLi = banner.find('li'),
      //      banLiWid = banner.find('li').width();
           
      //     $this.addClass('indWidth')
      //          .siblings().removeClass('indWidth');
      //     banner.stop().animate({'margin-left':-banLiWid*index},slideTime,function(){
      //   });
      // });
      
      // slidebtn 버튼클릭
      l_btn.on('click', function(){
          var bannerML = parseInt(banner.css('margin-left'));
          if(bannerML == -banLiWid){
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime, function(){
              banner.css({'margin-left':-banLiWid*9}) //9개니까
            });
            $('.ind li').last().addClass('indWidth').siblings().removeClass('indWidth');
          }else{
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime)
            var bannerMarginCut = Math.abs( parseInt($('.e_ban').css('margin-left') ) ) / $('.e_ban').find('li').width();
             $('.ind li').eq(bannerMarginCut-1).addClass('indWidth').siblings().removeClass('indWidth');
          };
        });
      var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-left'));
            if(bannerML <= -banLiWid*9){
              banner.css({'margin-left':0}).stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime);
            }else{
              banner.stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt($('.e_ban').css('margin-left') ) ) / $('.e_ban').find('li').width();
           $('.ind li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');
        });
      }
      rightBtn();
      
      //인디케이트 지우기
      // indLi = ind.find('li').eq(0);
      // indLi.first().css({'display':'none'});
   
      // 자동움직임
      function startBtn(){ settingTime = setInterval('$(".banner_right").click()', 2000) };
      function stopBtn(){	clearInterval( settingTime )};
      startBtn()
      $('.e_ban').on({mouseenter:stopBtn ,mouseleave:startBtn});
    })(this.jQuery);
    