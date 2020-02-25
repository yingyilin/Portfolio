$(document).ready(function() {



    ///arrow-top
    $("#arrow-top").click(function(event) {
        $(window).scrollTop(0);
    });


    ///resume照片hover效果


    $(".highlight").mouseenter(function(event) {
        $(".profile").css('opacity', '1');
    });

    $(".highlight").mouseleave(function(event) {
        $(".profile").css('opacity', '0');
    });




    ///手機版menu
    $(".circle").click(function(event) {
        $(".float-menu").toggle();

    });


    //animsition翻頁動畫
    $(".animsition").animsition({
        inClass: 'fade-in-up-sm',
        outClass: 'fade-out-up-sm',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) { window.location.href = url; }
    });

    new TypeIt(".typing", {
            speed: 50,
            startDelay: 900


        })
        .type("Hello, I am Lauren,")
        .pause(500)
        .break()
        .options({ deleteSpeed: 75 })
        .type("a Taiwan based <b>Graphic Design</b>")
        .delete(14)
        .options({ speed: 75 })
        .pause(500)
        .type("<b>UI/UX Designer.</b>")
        .go();



    //Play an animation back on second click

    let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
        container: iconMenu,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/menu.json"
    });

    var directionMenu = 1;
    iconMenu.addEventListener('click', (e) => {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
        directionMenu = -directionMenu;
    });







});