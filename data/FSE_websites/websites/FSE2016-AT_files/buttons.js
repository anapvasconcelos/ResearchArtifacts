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

/*<![CDATA[*/
var $jm = jQuery.noConflict();
$jm(function () {

//Get our elements for faster access and set overlay width
    var div = $jm('div.sc_menu'),
            ul = $jm('ul.sc_menu'),
            ulPadding = 10;

//Get menu width
    var divWidth = div.width();

//Remove scrollbars
    div.css({overflow: 'hidden'});

//Find last image container
    var lastLi = ul.find('li:last-child');

//When user move mouse over menu
    div.mousemove(function (e) {
//As images are loaded ul width increases,
//so we recalculate it each time
        var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;
        var left = (e.pageX - div.offset().left) * (ulWidth - divWidth) / divWidth;
        div.scrollLeft(left);
    });
});
/*]]>*/

}
/*
     FILE ARCHIVED ON 13:41:57 Sep 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:43 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.4 (2)
  exclusion.robots: 0.06 (2)
  exclusion.robots.policy: 0.034 (2)
  esindex: 0.029 (2)
  cdx.remote: 53.537 (2)
  LoadShardBlock: 246.953 (6)
  PetaboxLoader3.datanode: 245.077 (8)
  load_resource: 235.995 (2)
  PetaboxLoader3.resolve: 147.773
*/