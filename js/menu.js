$(document).ready(function() {
    //Play an animation back on second click

    let iconMenu = document.querySelector('#menu');

    let animationMenu = bodymovin.loadAnimation({
        container: iconMenu,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "menu-004.json",
    });

    var directionMenu = 1;
    iconMenu.addEventListener('click', (e) => {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
        directionMenu = -directionMenu;
    });
});