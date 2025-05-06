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

$.tablesorter.themes.bootstrap = {
    // these classes are added to the table. To see other table classes
	// available,
    // look here: http://twitter.github.com/bootstrap/base-css.html#tables
    table      : "table table-bordered",
    caption      : 'caption',
    header     : "bootstrap-header", // give the header a gradient background
    footerRow  : "",
    footerCells: "",
    icons      : "", 
    iconSortNone   : "icon-resize-vertical glyphicon glyphicon-sort",
    iconSortAsc    : "icon-chevron-up glyphicon glyphicon-sort-by-attributes",     // includes
																				// classes
																				// for
																				// Bootstrap
																				// v2 &
																				// v3
    iconSortDesc   : "icon-chevron-down glyphicon glyphicon-sort-by-attributes-alt", // includes
																					// classes
																					// for
																					// Bootstrap
																					// v2 &
																					// v3
    active     : "", // applied when column is sorted
    hover      : "", // use custom css here - bootstrap class may not
						// override it
    filterRow  : "", // filter row class
    even       : "", // odd row zebra striping
    odd        : ""  // even row zebra striping
  };
 
  function initTableSorter( elemId, pageSize ){
	  
	  var $table = $("#"+elemId).tablesorter({
	    // this will apply the bootstrap theme if "uitheme" widget is included
	    // the widgetOptions.uitheme is no longer required to be set
	    theme : "bootstrap",
	
	    widthFixed: true,
	
	    headerTemplate : '{content} {icon}', // new in v2.7. Needed to add
												// the bootstrap icon!
	
	    // widget code contained in the jquery.tablesorter.widgets.js file
	    // use the zebra stripe widget if you plan on hiding any rows (filter
		// widget)
	    widgets : [ "uitheme", "filter", "zebra" ],
	
		widgetOptions : {
		  // using the default zebra striping class name, so it actually isn't
			// included in the theme variable above
		  // this is ONLY needed for bootstrap theming if you are using the
			// filter widget, because rows are hidden
		  zebra : ["even", "odd"],		
      filter_external : $("#search" +elemId),
      // include column filters
      filter_columnFilters: true,
      filter_placeholder: { search : 'Search...' },
      filter_saveFilters : true,
      filter_reset: '.reset',
		  
		  filter_columnFilters: true,
	      // extra css class name (string or array) added to the filter element (input or select)
    	  filter_cssFilter: "form-control",
		
		  // set the uitheme widget to use the bootstrap theme class names
		  // this is no longer required, if theme is set
		  // ,uitheme : "bootstrap"
		
		}
	  })
	  .tablesorterPager({
	
	    // target the pager markup - see the HTML block below
	    container: $(".pager" + elemId),
	
	    // target the pager page select dropdown - choose a page
	    cssGoto  : ".pagenum",
	
	    // remove rows from the table to speed up the sort of large tables.
	    // setting this to false, only hides the non-visible rows; needed if you
		// plan to add/remove rows with the pager enabled.
	    removeRows: false,
	
	    // output string - default is '{page}/{totalPages}';
	    // possible variables: {page}, {totalPages}, {filteredPages},
		// {startRow}, {endRow}, {filteredRows} and {totalRows}
	    output: '{startRow} - {endRow} / {filteredRows} ({totalRows})',
	    
	    size: pageSize			
	  });		
}

}
/*
     FILE ARCHIVED ON 17:34:53 Mar 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:55:08 Mar 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.487
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 6.62
  LoadShardBlock: 122.402 (3)
  PetaboxLoader3.datanode: 223.326 (5)
  load_resource: 364.401 (2)
  PetaboxLoader3.resolve: 247.161 (2)
*/