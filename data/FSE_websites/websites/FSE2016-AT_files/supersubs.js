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


/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */

;
(function ($) { // $ will refer to jQuery within this closure

    $.fn.supersubs = function (options) {
        var opts = $.extend({}, $.fn.supersubs.defaults, options);
        // return original object to support chaining
        return this.each(function () {
            // cache selections
            var $$ = $(this);
            // support metadata
            var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
            // get the font size of menu.
            // .css('fontSize') returns various results cross-browser, so measure an em dash instead
            var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
                'padding': 0,
                'position': 'absolute',
                'top': '-999em',
                'width': 'auto'
            }).appendTo($$).width(); //clientWidth is faster, but was incorrect here
            // remove em dash
            $('#menu-fontsize').remove();
            // cache all ul elements
            $ULs = $$.find('ul');
            // loop through each ul in menu
            $ULs.each(function (i) {
                // cache this ul
                var $ul = $ULs.eq(i);
                // get all (li) children of this ul
                var $LIs = $ul.children();
                // get all anchor grand-children
                var $As = $LIs.children('a');
                // force content to one line and save current float property
                var liFloat = $LIs.css('white-space', 'nowrap').css('float');
                // remove width restrictions and floats so elements remain vertically stacked
                var emWidth = $ul.add($LIs).add($As).css({
                    'float': 'none',
                    'width': 'auto'
                })
                        // this ul will now be shrink-wrapped to longest li due to position:absolute
                        // so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
                        .end().end()[0].clientWidth / fontsize;
                // add more width to ensure lines don't turn over at certain sizes in various browsers
                emWidth += o.extraWidth;
                // restrict to at least minWidth and at most maxWidth
                if (emWidth > o.maxWidth) {
                    emWidth = o.maxWidth;
                } else if (emWidth < o.minWidth) {
                    emWidth = o.minWidth;
                }
                emWidth += 'em';
                // set ul to width in ems
                $ul.css('width', emWidth);
                // restore li floats to avoid IE bugs
                // set li width to full width of this ul
                // revert white-space to normal
                $LIs.css({
                    'float': liFloat,
                    'width': '100%',
                    'white-space': 'normal'
                })
                        // update offset position of descendant ul to reflect new width of parent
                        .each(function () {
                            var $childUl = $('>ul', this);
                            var offsetDirection = $childUl.css('left') !== undefined ? 'left' : 'right';
                            $childUl.css(offsetDirection, emWidth);
                        });
            });

        });
    };
    // expose defaults
    $.fn.supersubs.defaults = {
        minWidth: 9, // requires em unit.
        maxWidth: 25, // requires em unit.
        extraWidth: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
    };

})(jQuery); // plugin code ends

}
/*
     FILE ARCHIVED ON 13:41:54 Sep 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:42 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 364.965 (2)
  exclusion.robots: 0.068 (2)
  exclusion.robots.policy: 0.038 (2)
  esindex: 0.03 (2)
  cdx.remote: 146.002 (2)
  LoadShardBlock: 527.066 (6)
  PetaboxLoader3.datanode: 499.257 (8)
  PetaboxLoader3.resolve: 410.048 (3)
  load_resource: 561.622 (2)
*/