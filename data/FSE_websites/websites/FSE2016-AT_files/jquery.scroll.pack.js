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

(function ($) {
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#backtotop').fadeIn();
                $('#backtotop').stop(true, true).fadeIn(200);
            } else {
                $('#backtotop').fadeOut();
                $('#backtotop').stop(true, true).fadeOut(200);
            }
        });

        $('#backtotop').click(function () {
            $("html, body").animate({scrollTop: 0}, 600);
            $('#backtotop').stop().animate({scrollTop: 0}, 600);
            return false;
        });

    });
})(jQuery);

}
/*
     FILE ARCHIVED ON 13:41:53 Sep 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:43 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.642 (2)
  exclusion.robots: 0.066 (2)
  exclusion.robots.policy: 0.039 (2)
  esindex: 0.029 (2)
  cdx.remote: 144.0 (2)
  LoadShardBlock: 564.815 (6)
  PetaboxLoader3.datanode: 419.484 (8)
  PetaboxLoader3.resolve: 1105.192 (4)
  load_resource: 1038.996 (2)
*/