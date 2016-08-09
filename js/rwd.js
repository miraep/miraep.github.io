    function rwd(){


        
        var winW = parseInt($(window).width()),
            mob_v = 480,
            mob_h = 640,
            tab_v = 768,
            tab_h = 1024,
            pc = 1200,
            body = $('body'),
            btn = $('button');
        // var winT = winW + t;
        
        var dd1 = $('.dd1'),
            dd2 = $('.dd2'),
            dd3 = $('.dd3');


        if(winW <= mob_v){
            
        }else if( (winW > mob_v) && (winW <= mob_h) ){
            
        }else if( (winW > mob_h) && (winW <= tab_v) ){
            
        }else if( (winW > tab_v) && (winW <= tab_h) ){
            
        }else if( (winW > tab_h) && (winW <= pc) ){
            //메뉴나타나기
            $('.btn').on('click', function(){
                var intro_ul = $('.intro').find('ul');
                intro_ul.fadeToggle();
            });

            dd1.on('mouseenter', function(){
                dd1.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd1.on('mouseleave', function(){
                dd1.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });

            dd2.on('mouseenter', function(){
                dd2.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd2.on('mouseleave', function(){
                dd2.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });

            dd3.on('mouseenter', function(){
                dd3.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd3.on('mouseleave', function(){
                dd3.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });

            dd4.on('mouseenter', function(){
                dd4.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd4.on('mouseleave', function(){
                dd4.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });
        }else {
            //메뉴나타나기
            $('.btn').on('click', function(){
                var intro_ul = $('.intro').find('ul');
                intro_ul.fadeToggle();
            });

            dd1.on('mouseenter', function(){
                dd1.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd1.on('mouseleave', function(){
                dd1.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });

            dd2.on('mouseenter', function(){
                dd2.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd2.on('mouseleave', function(){
                dd2.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });

            dd3.on('mouseenter', function(){
                dd3.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd3.on('mouseleave', function(){
                dd3.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });

            dd4.on('mouseenter', function(){
                dd4.find('a').css({'font-size':'2.5rem','font-weight':'bold'})
            });
            dd4.on('mouseleave', function(){
                dd4.find('a').css({'font-size':'2rem','font-weight':'normal'})
            });
        };
    }; // rwd();


            rwd();
            



            var windowWidth = $(window).width();
            $(window).on('resize',function(){
                if(windowWidth != $(window).width()){
                    location.reload();  // 새로고침
                    rwd();
                    return;
                }
            });
            // console.log( rwd(50) );  // 함수를 불러오고 인자값을 넣어줌






        