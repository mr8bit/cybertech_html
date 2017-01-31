$(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $(".sidenav").toggleClass('open-side');
        $("body").toggleClass('no-scroll');
    });
    $('.border').click(function () {
        $(this).toggleClass('active');
        document.getElementById("order").value = $(this).data("order")+ " ";
    });
});

