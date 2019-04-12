
$(document).ready(function() {

    // Carousel controls
    $('#mycarousel').carousel({ interval: 6000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    })

    // Set modal widgets to default state
    $("#reserveModal").on('shown.bs.modal', function(){
        $("#smokeToggle").focus();
        $("#smokeToggle").toggleClass('active');
        $("#radio2").attr('checked', true);
    });

    // Reserve Table
    $('#reserveTableButton').click(function() {
        $('#reserveModal').modal('show');
    });

    // Login
    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    });
});
