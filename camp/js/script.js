$(function(){
    $('.menu>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown('.slidecontainer');
    })
    $('.menu>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    })

    setInterval(function(){
        $('.slidewrap').animate({'margin-left':'-1280'}, function(){
            $('.slide:first').appendTo('.slidewrap')
            $('.slidewrap').css({'margin-left':'0'})
        })
    }, 3000)

    setInterval(function(){
        $('.slidewrap1').animate({'margin-left':'-100vw'}, function(){
            $('.slide1:first').appendTo('.slidewrap1')
            $('.slidewrap1').css({'margin-left':'0'})
        })
    }, 3000)

    $('.menu li a').click(function(e){
        var targetPage = $(this).attr('href'); // 클릭한 링크의 href 값 가져오기
        if (targetPage === './index.html'){ // 홈 클릭 시 원래 화면으로 복귀
            $('.slidecontainer, .slideopacity, .contents').show();
            $('main').hide();
        } else if(!targetPage || targetPage.trim() === ''){
            e.preventDefault();
            $('main, .slidecontainer, .slideopacity, .contents').hide();
        } else{
            e.preventDefault(); // 기본 이동 방지
            $('.slidecontainer, .slideopacity, .contents').hide(); // 기존 콘텐츠 숨기기
            $('main').show().html('<iframe src="' + targetPage + '" scrolling="no" onload="adjustIframeHeight(this)"></iframe>'); // iframe 삽입
        }
        $('footer').show(); // footer 항상 보이기
    })
})

// iframe의 높이를 자동 조정하는 함수
function adjustIframeHeight(iframe){
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}