var hp_pagewide_enterprise_586z_banner = [
    { link: "https://store.hp.com/us/en/pdp/hp-pagewide-enterprise-color-flow-mfp-586z", img: "/hp/assets/img/banners/Hp_PageWide_01.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-pagewide-enterprise-color-flow-mfp-586z", img: "/hp/assets/img/banners/PageWide_Pro_477dw_02.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-pagewide-enterprise-color-flow-mfp-586z", img: "/hp/assets/img/banners/LaserJet_Pro_MFP_M428fdw_03.png" }
];
var pagewide_pro_477dw_banner = [
    { link: "https://store.hp.com/us/en/pdp/hp-pagewide-pro-477dw-multifunction-printer", img: "/hp/assets/img/banners/PageWide_Pro_477dw_01.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-pagewide-pro-477dw-multifunction-printer", img: "/hp/assets/img/banners/Color_Laser_MFP_179fwg_03.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-pagewide-pro-477dw-multifunction-printer", img: "/hp/assets/img/banners/Laser_M408dn_03.png" }
];
var laserjet_pro_mfp_m428fdw_banner = [
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-mfp-m428fdw", img: "/hp/assets/img/banners/Hp_PageWide_01.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-mfp-m428fdw", img: "/hp/assets/img/banners/PageWide_Pro_477dw_02.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-mfp-m428fdw", img: "/hp/assets/img/banners/Hp_PageWide_03.png" }
];
var color_laser_mfp_179fwg_banner = [
    { link: "https://store.hp.com/us/en/pdp/hp-color-laser-mfp-179fwg", img: "/hp/assets/img/banners/Hp_PageWide_01.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-color-laser-mfp-179fwg", img: "/hp/assets/img/banners/PageWide_Pro_477dw_02.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-color-laser-mfp-179fwg", img: "/hp/assets/img/banners/Color_Laser_MFP_179fwg_03.png" }
];
var laser_408dn_banner = [
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-m501dn", img: "/hp/assets/img/banners/Hp_PageWide_01.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-m501dn", img: "/hp/assets/img/banners/PageWide_Pro_477dw_02.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-m501dn", img: "/hp/assets/img/banners/Laser_408dn_03.png" }
];
var laser_m408dn_banner = [
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-m501dn", img: "/hp/assets/img/banners/Hp_PageWide_01.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-m501dn", img: "/hp/assets/img/banners/PageWide_Pro_477dw_02.png" },
    { link: "https://store.hp.com/us/en/pdp/hp-laserjet-pro-m501dn", img: "/hp/assets/img/banners/Laser_M408dn_03.png" }
];
var default_banner = [
    { link: "https://store.hp.com/us/en/cv/printers", img: "/hp/assets/img/banners/c05000700_1750x1285.png" }
];


$(document).ready(function() {

    // Scroll to iframe, when clicking on down arrows
    jQuery('#arrows').click(function() {
        console.log("down arrows clicked!");
        jQuery('html, body').animate({
            scrollTop: jQuery("#motordeal-iframe").offset().top
        }, 1000)
    });

    // Scroll to iframe, when clicking on down arrows
    jQuery('#angebote').click(function() {
        console.log("down arrows clicked!");
        jQuery('html, body').animate({
            scrollTop: jQuery("#motordeal-iframe").offset().top
        }, 1000)
    });

});


// Previous and next Navigator Button
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.nav-slide-btn').hide();
}

function hidePrevNextNavigationButtons() {
    if ($(window).width() - $("#second-nav").width() > 0) {
        $('.nav-slide-btn').hide();
    } else {
        $('.nav-slide-btn').show();
    }
}

hidePrevNextNavigationButtons();

$(window).resize(function() {
    hidePrevNextNavigationButtons();

});


/**
 * The function runs a series of actions when a vehicle on pano is selected. (use period)
 *
 * @since      1.0.0
 * @deprecated x.x.x Use new_function_name() instead.
 * @author     Arash Dadkhah
 *
 * @see  Function/class relied on
 * @link URL
 * @global
 *
 * @param String   product           Description.
 *
 * @yield {type} Yielded value description.
 *
 * @return {type} Return value description.
 */

//product selected
function Video2sale(product) {
    showFlotingBottomMenu(product);
    console.log(product);
}

var selectedProduct = null;


$(document).ready(function() {
    $('.carousel').carousel({
        interval: 1800
    })
});

function showFlotingBottomMenu(product) {

    $('#bottomNav').animate({ top: '220px' }, 500);

    var banner_name_array = product.toLowerCase().replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace("-", "_") + "_banner";
    var slide = "";
    var carousel_item = "";
    var carousel_navs =
        '<a class="carousel-control-prev" href="#angebotCarouselIndicators" role="button" data-slide="prev" onclick="$(\'#angebotCarouselIndicators\').carousel(\'prev\')">' +
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
        '</a>' +
        '<a class="carousel-control-next" href="#angebotCarouselIndicators" role="button" data-slide="next" onclick="$(\'#angebotCarouselIndicators\').carousel(\'next\')">' +
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
        '</a>';
    var carousel_indicators =
        '<ol class="carousel-indicators">' +
        '<li data-target="#angebotCarouselIndicators" data-slide-to="0"></li>' +
        '<li data-target="#angebotCarouselIndicators" data-slide-to="1"></li>' +
        '<li data-target="#angebotCarouselIndicators" data-slide-to="2"></li>' +
        '</ol>';

    // $(".carousel-inner").html("");
    if (window[banner_name_array] == undefined || window[banner_name_array].length < 1) {
        slide = '<div class="col-sm-12 col-md-12 col-lg-12 mySlides mySlides-fade">' +

            '<div class="numbertext"></div>' +
            '<a href="' + window[banner_name_array][i].link + '" target="_blank">' +
            '<img id="angebot-banner" class="img-responsive" src="' + default_banner + '" />' +
            '</a>' +
            '<div class="text"></div>' +
            '</div>';
        carousel_item = '<div class="carousel-item active"><img class="d-block w-100" src="' + default_banner + '" alt="HP Color Printer"></div>"';
        $(".carousel-inner").append(carousel_item);
        $(".carousel-control-prev").remove();
        $(".carousel-control-next").remove();
        $(".carousel-indicators").remove();
        console.log("only one banner for this product.");
    }
    if (window[banner_name_array].length > 1) {
        console.log("more than one banner for this product.");

        var active = "active";
        for (var i = 0; i < window[banner_name_array].length; i++) {
            if (i != 0) {
                active = "";
            }
            carousel_item = '<div class="carousel-item ' + active + '"><img class="d-block w-100" src="' + window[banner_name_array][i].img + '" alt="HP Color Printer"/></div>"';
            slide = '<div class="col-sm-12 col-md-12 col-lg-12 mySlides mySlides-fade">' +

                '<div class="numbertext"></div>' +
                '<a href="' + window[banner_name_array][i].link + '" target="_blank">' +
                '<img id="angebot-banner" class="img-responsive" src="' + window[banner_name_array][i].img + '" />' +
                '</a>' +
                '<div class="text"></div>' +
                '</div>';
            // $(".carousel-inner").append(carousel_item);
            $($('.carousel-item')[i]).find("img").attr("src", window[banner_name_array][i].img);

            $(".carousel-inner").attr("data-link", window[banner_name_array][i].link);
        }
        return;

        // var mySlides = document.getElementsByClassName("mySlides");
        // for (var i = 0; i < mySlides.length; i++) {
        //     mySlides[i].style.display = "none";
        //     mySlides[0].style.display = "block";
        // }
        // if (window[banner_name_array].length > 1) {
        //     if ($('.carousel-control-next').length < 1) {
        //         $(".carousel-inner").after(carousel_navs);
        //     }
        //     if ($('.carousel-indicators').length < 1) {
        //         $(".carousel-inner").before(carousel_indicators);
        //     }
        // } else {
        //     $(".carousel-control-prev").remove();
        //     $(".carousel-control-next").remove();
        //     $(".carousel-indicators").remove();
        // }
    }


    selectedProduct = product;

}


$('.carousel-inner').click(function() {
    var url = $(this).attr("data-link");
    window.open(url, "_blank");
});

$('.nav-link').click(function() {

    $("#bottomNav").animate({
        top: '-700px'
    });
});
$('.close-bottomnav').click(function() {

    $("#bottomNav").animate({
        top: '-700px'
    });
});

$('#right-button').hover(function() {
    event.preventDefault();
    $('#second-nav').animate({
        scrollLeft: "+=100px"
    }, "slow");
    console.log("right clicked!");
});

$('#left-button').hover(function() {
    event.preventDefault();
    $('#second-nav').animate({
        scrollLeft: "-=100px"
    }, "slow");
    console.log("left clicked!");
});


$(window).resize(function() {
    setPanoHeight();
});

function setPanoHeight() {
    var header_height = $("#header").height();
    var footer_height = $("#footer").height();
    var window_height = $(window).height();
    $("#pannoscont").height($(window).height() - $("#footer").height() - $(".nav-scroller").height() - $(".navbar").height());
    console.log("Pano height was set to:", $("#pannoscont").height());
}


// Open Lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


$(document).click(function() {

    // Close lightbox if it is opened
    if ($('.ekko-lightbox-container').length) {
        let close_btn = $('.modal-content .close');
        $('.ekko-lightbox-container').append(close_btn);
    }
});


$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});



// Verkaufberatung Modal
var verkaufModal = document.getElementById("verkaufModal");

// Get the button that opens the verkaufModal
// var verkaufBtn = document.getElementById("openverkaufModalBtn");
// var verkaufBtn = document.getElementById("produktchat");

// Get the <span> element that closes the verkaufModal
var verkaufSpan = document.getElementsByClassName("closeVerkaufBtn")[0];

// When the user clicks the button, open the verkaufModal 
function openVideo() {
	var verkaufModal = document.getElementById("verkaufModal");

    verkaufModal.style.display = "block";

    var windowHeight = window.innerHeight;
    var modalHeight = document.getElementsByClassName('verkaufModal-content')[0].offsetHeight;
    document.getElementsByClassName("verkaufModal")[0].style.paddingTop = ((innerHeight / 2) - (modalHeight / 2)) + "px";
    // $('#pagewide-video').get(0).play();
    lockScrollY();
}
// verkaufBtn.onclick = function() {
//     verkaufModal.style.display = "block";
//     lockScrollY();
// }

// When the user clicks on <span> (x), close the verkaufModal
verkaufSpan.onclick = function() {
    verkaufModal.style.display = "none";
    unlockScrollY(); // Unhide Scrollbar on main screen
}

// When the user clicks anywhere outside of the verkaufModal, close it
window.onclick = function(event) {
    console.log("window clicked!", event);

    if (event.target == verkaufModal || verkaufModal.style.display == "block") {
        verkaufModal.style.display = "none";
        unlockScrollY(); // Unhide Scrollbar on main screen
    }
}

$('body').click(function() {
    if (verkaufModal.style.display == "block") {
        verkaufModal.style.display = "none";
        unlockScrollY(); // Unhide Scrollbar on main screen
    }
});

function lockScrollY() {
    // lock scroll position, but retain settings for later
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow-y', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function unlockScrollY() {
    // un-lock scroll position
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
}

// Open the url in a new tab on the current window tab
// function openConfigurator() {
//     var left = ($(window).width() / 2) - (900 / 2),
//         top = ($(window).height() / 2) - (600 / 2),
//         popup = window.open("https://3d.video2sale.com/hp/hp586/", "popup", "width=900, height=600, top=" + top + ", left=" + left);
// }
function openConfigurator() {
    jQuery('.gruveo-call-button-conf').click();
}


$('.dropdown-item').click(function() {
    $('button.navbar-toggler').click();
});

if ($(window).width() < 600) {
    $("#kontakt").css("left", (($(window).width() / 2)));
    $("#videochat").css("left", (($(window).width() / 2) - 55));

}
$(window).resize(function() {
    if ($(window).width() < 600) {
        $("#kontakt").css("left", (($(window).width() / 2)));
        $("#videochat").css("left", (($(window).width() / 2) - 55));

    }

});