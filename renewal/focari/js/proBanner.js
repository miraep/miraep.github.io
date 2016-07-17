
  (function($){
      'use strict';
      
      var banner = $('#minibanner'), //배너
          banLi = banner.find('li'), // banner>li
          banLiFirst = banner.find('li').first(), //banner>li:first-child
          banLiWid = parseInt(banLi.width()), //banner>li 가로 정수값
          banLihei = banner.find('li').height(), //banner>li 세로
          l_btn = $('.mini_left_btn'),
          r_btn = $('.mini_right_btn'),
          
          slideTime = 700, //배너 움직이는 시간
          settingTime = 1100; //슬라이드가 작동되ㅣ도록 하는 시간(버튼)


      
      // 첫번째 이미지 보이기
        banLi.last().clone().prependTo(banner); //banLi 배너내부의 li (하나의 배너부분)

      // slidebtn 버튼클릭
      l_btn.on('click', function(){
          var bannerML = parseInt(banner.css('margin-left'));
          if(bannerML == -banLiWid){
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime, function(){
              banner.css({'margin-left':-banLiWid*10})
            });
         
          }else{
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime)
            var bannerMarginCut = Math.abs( parseInt(banner.css('margin-left') ) ) / $('.ban').find('li').width();
          };
        });
      var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-left'));
            if(bannerML <= -banLiWid*10){
              banner.css({'margin-left':0}).stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime);
            }else{
              banner.stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt(banner.css('margin-left') ) ) / $('.ban').find('li').width();
        });
      }
      rightBtn();
      
      // 자동움직임
      function startBtn(){ settingTime = setInterval('$(".mini_right_btn").click()', 2000) };
      function stopBtn(){	clearInterval( settingTime )};
      startBtn()
      $('.ban').on({mouseenter:stopBtn ,mouseleave:startBtn});
    })(this.jQuery);
    