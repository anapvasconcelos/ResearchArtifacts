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

var hidableElems, facetPlaceholderElems;
var facetButtonClass = "btn-xs btn btn-default";
function initFacets(){
  if(!hidableElems){
    hidableElems = $('.hidable');
    facetPlaceholderElems = $('.facet-placeholder');
    initSelectionFromUrl()
    updateFacets();
  }
}
function reloadFacets(){
  hidableElems = $('.hidable');
  facetPlaceholderElems = $('.facet-placeholder');
  updateFacets();
}
function updateFacets(){
    facetPlaceholderElems.each( function(){
        var current = $(this);
        var sel = current.attr('data-selected-facets');
        var hasSel = typeof(sel) !== 'undefined' && sel.length > 0;
        var facetType = current.data('facet-type');
        var dataAttr = 'data-facet-' + facetType;
        var s = facetRetrievalClasses(facetType);

        //scrape all values, prefixed with optional order (contain duplicates)
        var x = $(s + ' ['+ dataAttr + ']');
        if(s != '*'){
          var parents = $(s).parents('[' + dataAttr +']').addBack('[' + dataAttr +']');
          x = $.merge(parents,x);
        }
        var valArray = x
                      .map( function(){ return this.getAttribute(dataAttr+'-order') + '%%' +this.getAttribute(dataAttr) } );
        //sort values and remove order info
        valArraySorted = $( valArray.sort() )
                         .map( function(){ return this.replace(/([^%]*%%)?(.*)/,'$2'); } );
        
        //For already selected facets, assure they get displayed even when they do not exist in the scraped values
        if( hasSel ){
            var x = $(sel.split('%%%%'))
                    .map( function(){ return this.replace(/%%/g,'') });            
            $.merge(valArraySorted,x);
        } 
        var htmlArr = $(unique(valArraySorted)).map( function(){
                if(this.length < 1){
                    return "";
                }
                var ident = '%%'+ this +'%%';
                var btnClass = facetButtonClass + ' facet-' + ( hasSel && sel.indexOf(ident) > -1);
                return '<div class="' + btnClass + '">' + this + '</div>' }
            );
        var html = htmlArr.get().join('');
        if(html.length < 1){
            html = '<span class="no-facets">Nothing to filter</span>';
        }
        $(this).html( html );
        $(this).children().click(toggleFacet);
    });
}
function facetRetrievalClasses(facettype){
    var filtered = facetPlaceholderElems.filter('[data-selected-facets*="%%"][data-facet-type!="' + facettype + '"]');
    var mapped = filtered.map( function(){ return '.facet-selected-' + $(this).data('facet-type') });
    return '*' + mapped.get().join('');
}

function unique(array) {
    return $.grep(array, function(el, index) {
        return index === $.inArray(el, array);
    });
}

function initSelectionFromUrl(){
    var queryString = window.location.search;
    if(queryString.length){
        facetPlaceholderElems.each( function(){
            var facetType = $(this).data('facet-type');
            var key = encodeURIComponent(facetType);
            var r = new RegExp("(&|\\?)"+key+"=([^\&]*)");
            match = r.exec(queryString);
            if(match != null){
                var val = decodeURIComponent(match[2]);
                var selections = '%%' + val.split('+').join('%%%%') + '%%';
                $(this).attr('data-selected-facets', searchStringUnEscape(selections) );
            }
        } );
        filterFacets();
    }
}

function toggleFacet(event){
    var elemText = event.currentTarget.textContent;
    var facetPlaceholder = $(event.currentTarget).parent('.facet-placeholder');
    var facetType = facetPlaceholder.data('facet-type');
    var currentSel = facetPlaceholder.attr('data-selected-facets');
    var ident = '%%'+elemText+'%%';
    if(!currentSel){
      currentSel = ""
    }
    if( currentSel.indexOf(ident) > -1 ){
        facetPlaceholder.attr('data-selected-facets', currentSel.replace(ident, '') );
    } else {
        var newVal = currentSel + ident;
        facetPlaceholder.attr('data-selected-facets', newVal );
    }
    filterFacets();
    updateFacets();    
}
function searchStringEscape(str) {
	return str.replace("+", "\\plus");
}
function searchStringUnEscape(str) {
	return str.replace("\\plus,", "+");
}
function filterFacets(){
    var newSearchString = document.location.search;
    var classSelector = '*';
    facetPlaceholderElems.filter('[data-selected-facets]').each( function(){
        var type = $(this).data('facet-type');
        var dataSelector = 'data-facet-' + type;
        var myRegexp = /%%([^%]+)%%/g;
        var selectedStr = $(this).attr('data-selected-facets');
        match = myRegexp.exec(selectedStr);
        var selectors = [];
        var matches = []
        if(selectedStr.length > 0){
            while (match != null) {
              matches.push( searchStringEscape(match[1]) );
              selectors.push('[' + dataSelector + '="' + match[1].replace('"','\\"') +'"]');
              match = myRegexp.exec(selectedStr);              
            }
        }
        newSearchString = insertParam2(newSearchString, type, matches.join('+'));
        
        var cl = 'facet-selected-' + type
        hidableElems.removeClass(cl);    
        if(selectors.length){
            var selectorsStr = selectors.join(',');
            var valueHolders = $(selectorsStr);
            valueHolders.closest('.hidable').addClass(cl);
            valueHolders.find('.hidable:not(:has(.hidable))').addClass(cl);
            classSelector += '.'+cl;
        }
    });
    if(newSearchString != document.location.search){
        var newUrl = window.location.protocol
        + "//"
        + window.location.host
        + window.location.pathname
        + newSearchString
        + window.location.hash;
        history.replaceState(null, document.title + " - filtered", newUrl);
    }
    hidableElems.attr('data-is-visible', false);
    if(classSelector != "*"){
        hidableElems.filter(classSelector).attr('data-is-visible', true)
                      .parents('.hidable').attr('data-is-visible', true);
    } else {
        hidableElems.filter(classSelector).attr('data-is-visible', true);
    }
    hidableElems.filter('[data-is-visible!=true]').hide();
    hidableElems.filter('[data-is-visible=true]').show();
}

function insertParam2(searchString, key,value)
{
    key = encodeURIComponent(key); value = encodeURIComponent(value);
    var s = searchString.length ? searchString.substring(1, searchString.length) : "";
    var kvp = value.length ? key+"="+value : "";
    var r = new RegExp("(^|&)"+key+"=[^\&]*");
    s = kvp.length ? s.replace(r,"$1"+kvp) : s.replace(r,"");
    if(kvp.length && s.indexOf(kvp) < 0) {s += (s.length>0 ? '&' : '') + kvp;};

    return "?" + s;
}

$('document').ready( initFacets );

}
/*
     FILE ARCHIVED ON 05:51:38 May 06, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:55:06 Mar 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.511
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.008
  cdx.remote: 6.906
  LoadShardBlock: 381.361 (3)
  PetaboxLoader3.datanode: 347.688 (4)
  load_resource: 637.465
  PetaboxLoader3.resolve: 547.459
*/