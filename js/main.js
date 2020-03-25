// Init ParticlesJS
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded')
})

// Show dropdown menu on hover
$(document).ready(function () {
    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        var navLink = $(this).children(".nav-link");

        dropdownMenu.toggleClass("show");
        dropdownMenu.parent().toggleClass("show");
        navLink.toggleClass("active");
    });
});

$(document).ready(function () {
    $(".ct-js-btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

