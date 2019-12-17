$(function(){
    $(".inner1").on("click", function(){
        let page1 = $("#key-visual1").offset().top;
        $('html,body').animate({scrollTop: page1}, 500);
    });
    $(".inner2").on("click", function(){
        let page2 = $("#block-01").offset().top;
        $('html,body').animate({scrollTop: page2}, 500);
    });
    $(".inner3").on("click", function(){
        let page3 = $("#block-02").offset().top;
        $('html,body').animate({scrollTop: page3}, 500);
    });
    $(".inner4").on("click", function(){
        let page4 = $("#block-03").offset().top;
        $('html,body').animate({scrollTop: page4}, 500);
    }); 
    $(".top").on("click", function(){
        let top = $("#key-visual1").offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
    }); 

    $(window).scroll(function(){
        let skillSet = $("#block-02").offset().top; // ターゲットの位置取得
        let position = skillSet - $(window).height();  // 発火させたい位置
        if($(window).scrollTop() > position){
          $(".box > div").addClass("bar")// 要素が見えたときの動き 
        }else{ 
          // それ以外の動き
        }
    });

    // $(window).on('scroll',function(){

        // let position = $('#block-01').offset().top;
        // // let position = typeStart - $(window).height();  // 発火させたい位置
        // // ここから文字を<span></span>で囲む記述
        // $('.typ').children().andSelf().contents().each(function() {
        //     if ($(window).scrollTop() > position) {
        //         $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        //     }
        // });

        // // ここから一文字ずつフェードインさせる記述
        // $('.typ').css({'opacity':1});
        //     for (let i = 0; i <= $('.typ').children().size(); i++) {
        //         $('.typ').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},50);
        //     };
        // });

        // 波の設定
        $('.container').ripples({
            resolution: 1000
        });
});

