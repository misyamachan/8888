$(function smoothScroll() {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]:not(.menu-nav a)').click(function () {
        // リンクを取得
        let href = $(this).attr("href");
        console.log(href);
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール速度で単位はミリ秒
        $("html, body").animate({
            scrollTop: position
        }, 600, "swing");
        return false;
    });
})

$(function () {
    // トップに戻る
    let pagetop = $('#page-top');
    pagetop.hide();



    // 700pxスクロールしたら表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });



    pagetop.on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});