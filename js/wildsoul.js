window.onload = function() {
    //.top roll-circle 둥글게둥글게 강강수월래
    const rolling = document.querySelector("p.rolling");
    rolling.innerHTML = rolling.textContent.replace(/\S/g, "<span>$&</span>")

    const rollFont = document.querySelectorAll('p.rolling > span');
    for(var i = 0; i < rollFont.length; i++){
        rollFont[i].style.transform = "rotate(" + i*10 +"deg)"
    };

    //----main-menu cart num
    var product1 = 0
    const cart = document.querySelector(".menu-container:last-child > li:nth-child(3)");
    //cart.append('(' + product1 +')');

    //lang button
    const langParent = document.querySelector(".menu-container:nth-child(3) > ul:last-child");
    const langEn = document.querySelector(".lang1");
    const langEl = document.querySelector(".lang0");
    langParent.addEventListener("mouseover",function(){
        langEn.classList.add('langhover1');
        langEl.classList.add('langhover0');
        langEl.style.opacity = "1";
        langEl.style.visibility= "visible";
    })
    langParent.addEventListener("mouseout",function(){
        langEl.style.opacity = "0";
        langEl.style.visibility= "hidden";
    });
   

 //--------------슬라이더
    //슬라이딩
    $(function(){
        $.noConflict();
        $("#scroller").simplyScroll({
            auto: true,
            speed: 4,
            frameRate:50,
            pauseOnHover: true,
            pauseOnTouch:true,
        });
        $("#scroller2").simplyScroll({
            speed: 4,
            frameRate: 50,
        });
            
        $("#footerscroller").simplyScroll({
            speed: 3,
            frameRate: 50,
            direction:'backwards',
        });



         //-------프로덕트 마우스 호버-----☆☆☆☆☆☆☆☆☆
         //tweenmax
         var mousehover = $(".mousehover");
         var posX = 0, posY = 0, mouseX = 0, mouseY = 0;
         
         TweenMax.to({}, 0.015, {
             repeat: -1,
             onRepeat: function(){
                TweenMax.set(mousehover, {
                    css: {
                        left: mouseX - 40,
                        top: mouseY - 40
                    }
                });
             },
         });
         $(".swiper-slide .hor-cylind, .swiper-slide .ver-cylind, .firstcard, .secondcard, .thirdcard").mousemove(function(e){
             mouseX = e.pageX;
             mouseY = e.pageY;
         });
         $(".swiper-slide .hor-cylind, .swiper-slide .ver-cylind, .firstcard, .secondcard, .thirdcard").mouseenter(function(e){
            $(".mousehover").addClass("mousehoverOn");
         });
         $(".swiper-slide .hor-cylind, .swiper-slide .ver-cylind, .firstcard, .secondcard, .thirdcard").mouseleave(function(e){
            $(".mousehover").removeClass("mousehoverOn")}) 


        //-----partycards 1st 2nd 3rd-----파티카드
        $(".party-cards > .firstcard").click(function(){
            $(".firstcard").css({
                "transform" : "translate(-222px)",
                "opacity" : 0,
                "visibility": "hidden",
                "transition": ".5s"
            });
            // $(".secondcard").addClass("standcard")
            $(".secondcard").css({
                "transition": ".5s",
                "transform": "translate(0px, 0px) rotate(0deg)"
            });
        })
        $(".party-cards > .secondcard").click(function(){
            $(".secondcard").css({
                "transform" : "translate(-222px)",
                "opacity" : 0,
                "visibility": "hidden",
                "transition": ".5s"
            });
            // $(".secondcard").addClass("standcard")
            $(".thirdcard").css({
                "transition": ".5s",
                "transform": "translate(0px, 0px) rotate(0deg)"
            });
        })
        $(".party-cards > .thirdcard").click(function(){
            $(".thirdcard").css({
                "transform": "translate(120px, 20px) rotate(15deg)",
                "opacity" : "1",
                "visibility" : "visible",
                "transition" : ".5s",
            });
            $(".secondcard").css({
                "transform" : "translate(-120px, 20px) rotate(-15deg)",
                "opacity" : "1",
                "visibility": "visible",
                "transition": ".5s"
            });
            $(".firstcard").css({
                "transform" : "translate(0) rotate(0)",
                "opacity" : "1",
                "visibility": "visible",
                "transition": ".5s"
            });
        })

        var mq = matchMedia("all and (max-width : 600px)");
        mq.media; // = all and max-width: 600px;
        mq.matches; // = true
        if(mq.matches){
            $(".party-cards > .thirdcard").click(function(){
                $(".thirdcard").css({
                    "transform": "translate(40%, 20px) rotate(15deg)",
                    "opacity" : "1",
                    "visibility" : "visible",
                    "transition" : ".5s",
                });
                $(".secondcard").css({
                    "transform" : "translate(-40%, 20px) rotate(-15deg)",
                    "opacity" : "1",
                    "visibility": "visible",
                    "transition": ".5s"
                });
                $(".firstcard").css({
                    "transform" : "translate(0) rotate(0)",
                    "opacity" : "1",
                    "visibility": "visible",
                    "transition": ".5s"
                });
            });
        };


        //purplebtn-------------------------
        $(".conts-wrap2 div.purplebtn:nth-child(3)").click(function(){
            $(".conts-wrap2 > .wrap2-conts1").css("display","block");
            $(".conts-wrap2 > .wrap2-conts2").css("display","none");
            $(".conts-wrap2 div.purplebtn:nth-child(3)").text("●");
            $(".conts-wrap2 div.purplebtn:last-child").text("○");
        })
        $(".conts-wrap2 div.purplebtn:last-child").click(function(){
            $(".conts-wrap2 > .wrap2-conts1").css("display","none");
            $(".conts-wrap2 > .wrap2-conts2").css("display","block");
            $(".conts-wrap2 div.purplebtn:nth-child(3)").text("○");
            $(".conts-wrap2 div.purplebtn:last-child").text("●");
        })



         //-------------스크롤링 백그라운드
        $(window).scroll(function(){

            $(".conts-wrap1").each(function() {
            //아래 이벤트 해설: 타겟부위의 1/3.5 y값만큼 내려간것보다  화면에 보이는 위치값이 커질때 해당 이벤트 실행
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
                //offset은 해당부위가 화면값(0,0)에서부터 얼마나 떨어져있는지. outerHeight는 해당요소의 가장 바깥쪽 길이(마진값제외)
            var buttom_of_window = $(window).scrollTop() + $(window).height();
                //scrollTop은 스크롤했을때 화면에서 y축의 값. height는 화면창의 길이
            
                if(buttom_of_window > bottom_of_element){
                    $(this).css({
                        'backgroundColor': '#ed7b49',
                        'transition' : '.5s',
                    })
                };
            });

            //wrap1-conts2 내용물의 scrolling event-----
            $(".wrap1-conts2 > div, .wrap3-conts1 > div, .wrap3-conts3 > div:last-child > div").each(function(index, item){
                var bottom_of_element4 = $(this).offset().top + $(this).outerHeight() / 3;
                var bottom_of_window4 = $(window).scrollTop() + $(window).height();
               
                if(bottom_of_window4 > bottom_of_element4){
                    $(this).animate({
                        "bottom": "0px",
                        "opacity":"1"
                    },1000);

                    $(this).animate({
                        "right": "0",
                        "opacity": "1",
                    },1000);
                };
            })



            $(".conts-wrap3").each(function() {
                var bottom_of_element2 = $(this).offset().top + $(this).outerHeight() / 4;
                var buttom_of_window2 = $(window).scrollTop() + $(window).height();
            
                if(buttom_of_window2 > bottom_of_element2){
                    $(this).css({
                        'backgroundColor': '#be5a4b',
                        'transition' : '.8s',
                    })
                };

                var bottom_of_element3 = $(this).offset().top + $(this).outerHeight() / 1.5;
                var buttom_of_window3 = $(window).scrollTop() + $(window).height();
                if(buttom_of_window3 > bottom_of_element3){
                    $(this).css({
                        'backgroundColor': '#f4b8d4',
                        'transition' : '.8s',
                    })
                };
            });
        });


        //-----콘텐츠 스크롤업-----
        $(".main-txt > h1").animate({
            "top": "0px",
            "opacity": "1",
        },1000, function(){
            $(".shopbtn").animate({
                "top": "0px",
                "opacity": "1",
            },1000);
        })
            
    });
    

    //arrow btn down
    var goMain = document.querySelector("header > div.arrowbtn");
    goMain.onclick = function(){

        setTimeout(() => {
            
            window.scrollTo({
                left: 0, 
                top: 1100,
            });
           
        }, 500);
       

        console.log(window.scrollY)
    }
    console.log(window.scrollY)

 

 

}