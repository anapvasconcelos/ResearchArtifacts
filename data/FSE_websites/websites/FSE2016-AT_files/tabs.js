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

// Tabs
//When page loads...
jQuery('.tabs-wrapper').each(function () {
    jQuery(this).find(".tab_content").hide(); //Hide all content
    if (document.location.hash && jQuery(this).find("ul.tabs li a[href='" + document.location.hash + "']").length >= 1) {
        jQuery(this).find("ul.tabs li a[href='" + document.location.hash + "']").parent().addClass("active").show(); //Activate first tab
        jQuery(this).find(document.location.hash + ".tab_content").show(); //Show first tab content
    } else {
        jQuery(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
        jQuery(this).find(".tab_content:first").show(); //Show first tab content
    }
});

//On Click Event
jQuery("ul.tabs li").click(function (e) {
    jQuery(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
    jQuery(this).addClass("active"); //Add "active" class to selected tab
    jQuery(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

    var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    jQuery(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content

});

jQuery("ul.tabs li a").click(function (e) {
    e.preventDefault();
})

jQuery('#sidebar .tabset').each(function () {
    var menuWidth = jQuery(this).width();
    var menuItems = jQuery(this).find('li').size();
    var itemWidth = (menuWidth / menuItems) - 1;
    var menuItemsExcludingLast = jQuery(this).find('li:not(:last)');
    var menuItemsExcludingLastSize = jQuery(this).find('li:not(:last)').size();

    jQuery(this).css({'width': menuWidth + 'px'});
    jQuery(this).find('li').css({'width': itemWidth + 'px'});

    var menuItemsExcludingLastWidth = ((menuItemsExcludingLast.width() + 1) * menuItemsExcludingLastSize);
    var lastItemSize = menuWidth - menuItemsExcludingLastWidth;

    //jQuery(this).find('li:last').css({'width': lastItemSize +'px'});
});


jQuery('.footer-area .tabset').each(function () {
    var menuWidth = jQuery(this).width();
    var menuItems = jQuery(this).find('li').size();
    var itemWidth = (menuWidth / menuItems) - 1;
    var menuItemsExcludingLast = jQuery(this).find('li:not(:last)');
    var menuItemsExcludingLastSize = jQuery(this).find('li:not(:last)').size();

    jQuery(this).css({'width': menuWidth + 'px'});
    jQuery(this).find('li').css({'width': itemWidth + 'px'});

    var menuItemsExcludingLastWidth = ((menuItemsExcludingLast.width() + 1) * menuItemsExcludingLastSize);
    var lastItemSize = menuWidth - menuItemsExcludingLastWidth;

    //jQuery(this).find('li:last').css({'width': lastItemSize +'px'});
}); 

}
/*
     FILE ARCHIVED ON 14:03:05 Sep 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:49 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 6.345 (2)
  exclusion.robots: 0.075 (2)
  exclusion.robots.policy: 0.046 (2)
  esindex: 0.032 (2)
  cdx.remote: 444.644 (2)
  LoadShardBlock: 213.289 (6)
  PetaboxLoader3.datanode: 190.747 (8)
  PetaboxLoader3.resolve: 361.578 (3)
  load_resource: 477.263 (2)
*/