var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// FIELDS

jQuery(document).ready(function () {

    // init fields

    if (jQuery('#search-text').val() != '')
        jQuery('#search_label span').hide();

    if (jQuery('#comment-author').val() != '')
        jQuery('#comment-name_label span').hide();

    if (jQuery('#comment-email').val() != '')
        jQuery('#comment-email_label span').hide();

    if (jQuery('#comment-url').val() != '')
        jQuery('#comment-url_label span').hide();

    if (jQuery('#comment-text').val() != '')
        jQuery('#comment-text_label span').hide();

    // on focus

    jQuery('#search_label input').focus(function () {
        jQuery('#search_label span').fadeTo(100, 0.5);

        if (jQuery('#search-text').val() !== '')
            jQuery('#search_label span').hide();
    });

    jQuery('#comment-name_label input').focus(function () {
        jQuery('#comment-name_label span').fadeTo(100, 0.5);

        if (jQuery('#comment-author').val() !== '')
            jQuery('#comment-name_label span').hide();

    });

    jQuery('#comment-email_label input').focus(function () {
        jQuery('#comment-email_label span').fadeTo(100, 0.5);

        if (jQuery('#comment-email').val() !== '')
            jQuery('#comment-email_label span').hide();
    });

    jQuery('#comment-url_label input').focus(function () {
        jQuery('#comment-url_label span').fadeTo(100, 0.5);

        if (jQuery('#comment-url').val() !== '')
            jQuery('#comment-url_label span').hide();
    });

    jQuery('#comment-text_label textarea').focus(function () {
        jQuery('#comment-text_label span').fadeTo(100, 0.5);

        if (jQuery('#comment-text').val() !== '')
            jQuery('#comment-text_label span').hide();
    });

    //on keydown

    jQuery('#search_label input').keydown(function () {
        if (jQuery('#search-text').val() !== '')
            jQuery('#search_label span').hide();
    });

    jQuery('#comment-name_label input').keydown(function () {
        if (jQuery('#comment-author').val() !== '')
            jQuery('#comment-name_label span').hide();
    });
    jQuery('#comment-email_label input').keydown(function () {
        if (jQuery('#comment-email').val() !== '')
            jQuery('#comment-email_label span').hide();

    });

    jQuery('#comment-url_label input').keydown(function () {
        if (jQuery('#comment-url').val() !== '')
            jQuery('#comment-url_label span').hide();

    });

    jQuery('#comment-text_label textarea').keydown(function () {
        if (jQuery('#comment-text').val() !== '')
            jQuery('#comment-text_label span').hide();

    });

    //on click
    jQuery('#search_label').click(function () {
        jQuery('#search-text').trigger('focus');
        if (jQuery('#search-text').val() !== '')
            jQuery('#search_label span').hide();
    });
    jQuery('comment-name_label').click(function () {
        jQuery('#comment-author').trigger('focus');
        if (jQuery('#comment-author').val() !== '')
            jQuery('#comment-name_label span').hide();
    });
    jQuery('comment-email_label').click(function () {
        jQuery('#comment-email').trigger('focus');
        if (jQuery('#comment-email').val() !== '')
            jQuery('#comment-email_label span').hide();
    });
    jQuery('comment-url_label').click(function () {
        jQuery('#comment-url').trigger('focus');
        if (jQuery('#comment-url').val() !== '')
            jQuery('#comment-url_label span').hide();
    });

    jQuery('comment-text_label').click(function () {
        jQuery('#comment-text').trigger('focus');
        if (jQuery('#comment-text').val() !== '')
            jQuery('#comment-text_label span').hide();
    });

    //on blur

    jQuery('#search-text').blur(function () {
        if (jQuery('#search-text').val() == '') {
            jQuery('#search_label span').show();
            jQuery('#search_label span').fadeTo(100, 1);
        }
        if (jQuery('#search-text').val() !== '')
            jQuery('#search_label span').hide();
    });
    jQuery('#comment-author').blur(function () {
        if (jQuery('#comment-author').val() == '') {
            jQuery('#comment-name_label span').show();
            jQuery('#comment-name_label span').fadeTo(100, 1);
        }
        if (jQuery('#comment-author').val() !== '')
            jQuery('#comment-name_label span').hide();
    });
    jQuery('#comment-email').blur(function () {
        if (jQuery('#comment-email').val() == '') {
            jQuery('#comment-email_label span').show();
            jQuery('#comment-email_label span').fadeTo(100, 1);
        }
        if (jQuery('#comment-email').val() !== '')
            jQuery('#comment-email_label span').hide();
    });
    jQuery('#comment-url').blur(function () {
        if (jQuery('#comment-url').val() == '') {
            jQuery('#comment-url_label span').show();
            jQuery('#comment-url_label span').fadeTo(100, 1);
        }
        if (jQuery('#comment-url').val() !== '')
            jQuery('#comment-url_label span').hide();
    });
    jQuery('#comment-text').blur(function () {
        if (jQuery('#comment-text').val() == '') {
            jQuery('#comment-text_label span').show();
            jQuery('#comment-text_label span').fadeTo(100, 1);
        }
        if (jQuery('#comment-text').val() !== '')
            jQuery('#comment-text_label span').hide();
    });
});

// FIELDS

}
/*
     FILE ARCHIVED ON 13:41:51 Sep 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:41 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.354 (2)
  exclusion.robots: 0.058 (2)
  exclusion.robots.policy: 0.032 (2)
  esindex: 0.025 (2)
  cdx.remote: 132.974 (2)
  LoadShardBlock: 306.691 (6)
  PetaboxLoader3.datanode: 255.854 (8)
  PetaboxLoader3.resolve: 443.677 (2)
  load_resource: 442.469 (2)
*/