$(function smoothScroll() {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
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
            scrollTop: position - 30
        }, 1000, "swing");
        return false;
    });
})

$(function () {
    // トップに戻る
    let pagetop = $('#page-top');
    pagetop.hide();

    // 700pxスクロールしたら表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // ローダー終了
    function end_loader() {
        $('.Load').fadeOut(800);
    };
    // テキスト表示
    function show_txt() {
        $('.Load img').fadeIn(400);
    };
    // テキスト非表示
    function hide_txt() {
        $('.Load img').fadeOut(400);
    };

    // タイマー処理
    $(window).ready(function () {
        // 処理①
        setTimeout(function () {
            show_txt();
        }, 1000)
        // 処理②
        setTimeout(function () {
            hide_txt();
        }, 3500)
        // 処理③
        setTimeout(function () {
            end_loader();
        }, 4500)
    });
});

window.addEventListener("load", function () {

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);

    const area = document.querySelector(".js-area");
    const wrap = document.querySelector('.js-wrap');
    const items = document.querySelector('.js-item');

    gsap.to(items, {
        x: () => -(items.clientWidth - wrap.clientWidth), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
            trigger: area, //トリガー
            start: "top top", //開始位置
            end: () => `+=${items.clientWidth - wrap.clientWidth}`, //終了位置
            pin: true, //ピン留め
            scrub: true, //スクロール量に応じて動かすがこれがないと横スクロールが一気に終わる
            anticipatePin: 1,
            invalidateOnRefresh: true,
        }
    });
});

window.addEventListener("load", function () {

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);

    const area = document.querySelector(".js-area2");
    const wrap = document.querySelector('.js-wrap2');
    const items = document.querySelector('.js-item2');

    gsap.to(items, {
        x: () => -(items.clientWidth - wrap.clientWidth), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
            trigger: area, //トリガー
            start: "top top", //開始位置
            end: () => `+=${items.clientWidth - wrap.clientWidth}`, //終了位置
            pin: true, //ピン留め
            scrub: true, //スクロール量に応じて動かすがこれがないと横スクロールが一気に終わる
            anticipatePin: 1,
            invalidateOnRefresh: true,
        }
    });
});