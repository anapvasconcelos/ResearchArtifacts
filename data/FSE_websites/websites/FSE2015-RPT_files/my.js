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

$(document).ready(function () {

    $('.deadline-past')
        .wrapInner('<span style="color: #474747;">')
        .wrapInner('<span style="color: #940004;text-decoration:line-through">')
        .after('<b>, Deadline is Past!</b>');

    $('.postponed')
        .wrapInner('<span style="color: #474747;">')
        .wrapInner('<span style="color: #940004;text-decoration:line-through">')
        .after('<b>, Postponed!</b>');

    $(function () {

        if ($(".sidebar")[0]) {
            var $sidebar = $(".sidebar"),
                $window = $(window),
                offset = $sidebar.offset(),
                sHeight = $sidebar.height(),
                topPadding = 40,
                containerHeight = $("div.container").height();
            $window.scroll(function () {
                if ($window.scrollTop() > offset.top) {
                    $sidebar.stop().animate({
                        marginTop: Math.min($window.scrollTop() - offset.top + topPadding, containerHeight - sHeight - topPadding)
                    });
                } else {
                    $sidebar.stop().animate({
                        marginTop: 0
                    });
                }
            });
        }

    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        $('a[href=#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            }
        });
    });

    $(function () {
        var header = $("#nav");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 98) {
                header.addClass('affix');
            } else {
                header.removeClass("affix");
            }
        });
    });
});

function toDate(day) {
    var dayArray = day.split("-");
    return new Date(dayArray[0], dayArray[1] - 1, dayArray[2]);
}

function toDateString(day) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var date = toDate(day);
    return monthNames[date.getMonth()] + " " + date.getDate();
}

}
/*
     FILE ARCHIVED ON 17:52:11 Nov 13, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:32 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.447
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 1091.796
  LoadShardBlock: 115.03 (3)
  PetaboxLoader3.datanode: 75.31 (4)
  PetaboxLoader3.resolve: 141.523 (2)
  load_resource: 156.323
*/