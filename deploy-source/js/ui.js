$(document).ready(function(){


    /*####################  gnb서브메뉴 아코디언 ####################
    $(".nav-link").on("click", function () {
        $(this).next(".sub-nav").slideToggle();
    });
*/
    $(".navbar-toggler").on("click", function () {
        $(".sub-nav").css({"display":"block"});
    });

    /*#################### container-bundle 아코디언 ####################*/
    $("h3").on("click", function () {
        $(this).next(".content-slide").slideToggle();
        $(this).parent(".content-bundle").toggleClass("no-border-bottom");
        $(this).find(".i-arrow").toggleClass("change-arrow-up");
    });


    /*####################  위로버튼 스크롤에 맞춰 생기게  ####################*/
    bodyHalf = $("body").height()/16; //바디의 중간쯤 스크롤하면 화살표생김

    $(".gotoTop").hide();
    $(window).scroll(function(){

        var nowScroll = $(document).scrollTop();
        if(nowScroll < bodyHalf){
            $(".gotoTop").fadeOut();

        }else{
            $(".gotoTop").fadeIn();
        }

    });

    /*####################  스크롤 맨위로 스르르올라가게  ####################*/
    $(".gotoTop").bind("focus click", function(){

        $("html, body").animate({scrollTop:0},600);
    });


    /*########### 스크롤이 해당영역에 갔을 때 서브메뉴의 글씨색이 바뀜 ############*/
    $(window).scroll(function(){

        var nowScroll = $(document).scrollTop();

        //console.log(nowScroll);
        if (nowScroll >= 0) {
            $('.sub-nav  li a').removeClass('active');
        }
        if (nowScroll >= $('#content-con0').offset().top-300) {
            $('.sub-nav  li a').removeClass('active');
            $('.sub-nav li:eq(0) a').addClass('active');
        }
        if (nowScroll >= $('#content-con1').offset().top-300) {
            $('.sub-nav  li a').removeClass('active');
            $('.sub-nav li:eq(1) a').addClass('active');
        }
        if (nowScroll >= $('#content-con2').offset().top-300) {
            $('.sub-nav  li a').removeClass('active');
            $('.sub-nav li:eq(2) a').addClass('active');
        }
        if (nowScroll >= $('#content-con3').offset().top-300) {
            $('.sub-nav  li a').removeClass('active');
            $('.sub-nav li:eq(3) a').addClass('active');
        }
    });


});

/*########### 서브메뉴 클릭하면 해당영역 찾아감 ############*/
function findArea(seq){
    var offset = $("#content-con" + seq).offset();

    $('html, body').stop().animate({scrollTop : offset.top-138}, 500);
}
