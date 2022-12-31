window.addEventListener("load", function () {

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);

    const area = document.querySelector(".js-area");
    const wrap = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;

    //横幅を指定
    gsap.set(wrap, { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });

    gsap.to(items, {
        xPercent: -100 * (num - 1), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
            trigger: area, //トリガー
            start: "top top", //開始位置
            end: "bottom top", //終了位置
            pin: true, //ピン留め
            scrub: true, //スクロール量に応じて動かすがこれがないと横スクロールが一気に終わる
        }
    });
});

window.addEventListener("load", function () {

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);

    const area2 = document.querySelector(".js-area2");
    const wrap2 = document.querySelector(".js-wrap2");
    const items2 = document.querySelectorAll(".js-item2");
    const num2 = items2.length;

    //横幅を指定
    gsap.set(wrap2, { width: num2 * 100 + "%" });
    gsap.set(items2, { width: 150 / num2 + "%" });

    gsap.to(items2, {
        xPercent: -100, //x方向に移動させる
        ease: "none",
        scrollTrigger: {
            trigger: area2, //トリガー
            start: "top top", //開始位置
            end: "bottom top", //終了位置
            pin: true, //ピン留め
            scrub: true, //スクロール量に応じて動かすがこれがないと横スクロールが一気に終わる
        }
    });
});