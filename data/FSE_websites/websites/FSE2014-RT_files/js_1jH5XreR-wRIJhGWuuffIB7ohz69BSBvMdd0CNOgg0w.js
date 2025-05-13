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

// $Id$
(function ($) {

/**
 * Toggles the collapsible region.
 */
Drupal.behaviors.skyCollapsRegionToggle = {
  attach: function (context, settings) {
    $('.collapsible-toggle a, context').click(function() {
      $('#section-collapsible').toggleClass('toggle-active').find('.region-collapsible').slideToggle('fast');
      return false;
    });
  }
}

Drupal.behaviors.skyCollapsMenuToggle = {
  attach: function (context, settings) {
    $('.menu-toggle a, context').click(function() {
      $('#menu-bar').toggleClass('toggle-active').find('nav').slideToggle('fast');
      return false;
    });
  }
}

/**
 * CSS Help for IE.
 * - Adds even odd striping and containers for images in posts.
 * - Adds a .first-child class to the first paragraph in each wrapper.
 * - Adds a prompt containing the link to a comment for the permalink.
 */
Drupal.behaviors.skyPosts = {
  attach: function (context, settings) {
    // Detects IE6-8.
    if (!jQuery.support.leadingWhitespace) {
      $('.article-content p:first-child').addClass('first-child');
      $('.article-content img, context').parent(':not(.field-item, .user-picture)').each(function(index) {
        var stripe = (index/2) ? 'even' : 'odd';
        $(this).wrap('<div class="content-image-' + stripe  + '"></div>');
      });
    }
    // Comment link copy promt.
    $("time span a").click( function() {
      prompt('Link to this comment:', this.href);
      return false;
    });
  }
}

})(jQuery);
;


}
/*
     FILE ARCHIVED ON 17:30:34 Sep 09, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:29 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.439
  exclusion.robots: 0.013
  exclusion.robots.policy: 0.006
  esindex: 0.009
  cdx.remote: 1102.989
  LoadShardBlock: 94.503 (3)
  PetaboxLoader3.datanode: 132.513 (5)
  load_resource: 356.711 (2)
  PetaboxLoader3.resolve: 244.375 (2)
*/