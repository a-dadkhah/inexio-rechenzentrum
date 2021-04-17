console.log("scrits.js is loaded.");

// AA-AVATAR Functions
jQuery(document).on('ready', function() {
    if (jQuery('#aa-avatar').length) {
        var windowHeight = jQuery(window).height();
        var video = jQuery('#aa-avatar-wrapper').attr('data-src');
        var location = jQuery('#aa-avatar').attr('data-location');
        if (video) {
            var newHeight = (windowHeight * 2 / 3) + 15;
            jQuery('#aa-avatar-wrapper').attr('data-height', Math.round(newHeight));
            jQuery('#aa-avatar-video').attr('height', Math.round(newHeight));
            aaAvatarResize();
            jQuery('#aa-avatar').show();
            /* if (location != 'product') {
                jQuery('#aa-avatar').show();
            } else {
                jQuery('#aa-avatar-again').show();
            } */
        }
    }

    jQuery(document).on('click', '.aa-avatar_show-button', function() {
        if (jQuery('#aa-avatar').length) {
            jQuery('#aa-avatar').show();
            jQuery('#aa-avatar-again').hide();
        }
    });

    jQuery(document).on('click', '#aa-avatar-restart', function() {
        if (jQuery('#aa-avatar').length) {
            var vid = document.getElementById("aa-avatar-video");
            vid.currentTime = 0;
        }
    });

    jQuery(document).on('click', '#aa-avatar-volume, #aa-avatar-mute', function() {
        if (jQuery("#aa-avatar-video").prop('muted')) {
            jQuery("#aa-avatar-video").prop('muted', false);
            jQuery("#aa-avatar-mute").hide();
            jQuery("#aa-avatar-volume").show();
        } else {
            jQuery("#aa-avatar-video").prop('muted', true);
            jQuery("#aa-avatar-mute").show();
            jQuery("#aa-avatar-volume").hide();
        }
    });

    jQuery(document).on('click', '#aa-avatar-hide', function() {
        jQuery('#aa-avatar').hide();
        jQuery('#aa-avatar-again').show();
        jQuery("#aa-avatar-video").prop('muted', true);
        jQuery("#aa-avatar-mute").show();
        jQuery("#aa-avatar-volume").hide();

        var vid = document.getElementById("aa-avatar-video");
        vid.currentTime = 0;
    });

    jQuery(document).on('click', '#aa-avatar-again', function() {
        jQuery('#aa-avatar').show();
        jQuery('#aa-avatar-again').hide();
    });
});
jQuery(window).on('resize', function() {
    if (jQuery('#aa-avatar').length) {
        aaAvatarResize();
    }
});

function aaAvatarResize() {
    var windowHeight = jQuery(window).height();
    var windowWidth = jQuery(window).width();
    var headerHeight = jQuery('header').height();
    var offset = jQuery('#aa-avatar-wrapper').offset().top;
    var width = jQuery('#aa-avatar-video').width();
    var maxHeight = Math.round(jQuery('#aa-avatar-wrapper').attr('data-height'));
    var currHeight = jQuery('#aa-avatar-video').height();

    if (windowWidth >= 550) {
        // Desktop & Tablet
        if ((windowHeight - headerHeight) < currHeight) {
            jQuery('#aa-avatar-video').attr('width', '');
            jQuery('#aa-avatar-video').attr('height', (windowHeight - headerHeight));
        } else if ((windowHeight - headerHeight) > currHeight && currHeight > maxHeight) {
            jQuery('#aa-avatar-video').attr('width', '');
            jQuery('#aa-avatar-video').attr('height', maxHeight);
        } else {
            if ((windowHeight - headerHeight) > currHeight && currHeight < maxHeight) {
                jQuery('#aa-avatar-video').attr('width', '');
                jQuery('#aa-avatar-video').attr('height', (windowHeight - headerHeight));
            }
        }
    } else if (windowWidth <= 550) {
        // Mobile
        var sidebarHeight = jQuery('#archiv_side_action').height();
        if ((windowHeight - headerHeight - sidebarHeight) < currHeight) {
            jQuery('#aa-avatar-video').attr('width', '');
            jQuery('#aa-avatar-video').attr('height', (windowHeight - headerHeight - sidebarHeight));
        } else {
            jQuery('#aa-avatar-video').attr('width', windowWidth);
            jQuery('#aa-avatar-video').attr('height', '');
        }

    }
}