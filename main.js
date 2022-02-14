// Video
var videoMain = document.querySelector('.video_main')
var heightVideoMain = videoMain.clientHeight
$('.list_video').css('height', heightVideoMain);
$(window).resize(function () {
    var heightVideoMain = videoMain.clientHeight
    $('.list_video').css('height', heightVideoMain);
});

// menu all pc
$('.menu_all').click(function () {
    $('.modal_menu_pc').fadeIn('fast');
})
$('.modal_menu_pc_close').click(function () {
    $('.modal_menu_pc').fadeOut('fast');
})


//slide anh
// top
var anhTop = $('.anh_right_top');
anhTop[0].style.display = 'block'
// bot
var anhBot = $('.anh_right_bot');
anhBot[1].style.display = 'block'
var anhImgs = $('.anh_img');
var imgIndex = 0;
anhImgs[imgIndex].style.display = 'block';
function showSlide(imgIndex) {
    $('.anh_img').hide();
    anhImgs[imgIndex].style.display = 'block';

    $('.anh_right_top').hide();
    anhTop[imgIndex].style.display = 'block'

    $('.anh_right_bot').hide();
    if (imgIndex < anhImgs.length - 1) {
        anhBot[imgIndex + 1].style.display = 'block'
    } else {
        anhBot[0].style.display = 'block'
    }
}
$('.anh_btn_down').click(function () {
    if (imgIndex < anhImgs.length - 1) {
        imgIndex += 1;
    } else {
        imgIndex = 0;
    }
    showSlide(imgIndex)
})
$('.anh_btn_up').click(function () {
    if (imgIndex == 0) {
        imgIndex = anhImgs.length - 1;
    } else {
        imgIndex -= 1;
    }
    showSlide(imgIndex)
})
// click vào nội dung ảnh dưới
$('.anh_right_bot').click(function () {
    document.querySelector(".anh_btn_down").click();
})

// check lỗi tràn nội dung
// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
// var d = $(document).scrollTop();
 
// $.each($("div"),function(){
//     p = $(this).position();
//     //vertical
//     if (p.top > h + d || p.top > h - d){
//         console.log($(this))
//     }
//     //horizontal
//     if (p.left < 0 - $(this).width() || p.left > w){
//         console.log($(this))
//     }
// });