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

/**
* @version	$Id: rokmediaqueries.js 3895 2012-09-25 04:02:54Z rhuk $
* @author		RocketTheme http://www.rockettheme.com
* @copyright Copyright (C) 2007 - 2013 RocketTheme, LLC
* @license	http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
*/

((function(){
///*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
// matchMedia polyfill
window.matchMedia = window.matchMedia || window.msMatchMedia || (function(doc, undefined){
		var bool,
			docElem = doc.documentElement,
			refNode = docElem.firstElementChild || docElem.firstChild,
			// fakeBody required for <FF4 when executed in <head>
			fakeBody = doc.createElement('body'),
			div = doc.createElement('div');

		div.id = 'mq-test-1';
		div.style.cssText = "position:absolute;top:-100em";
		fakeBody.style.background = "none";
		fakeBody.appendChild(div);

		return function(q){
			div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';

			docElem.insertBefore(fakeBody, refNode);
			bool = div.offsetWidth == 42;
			docElem.removeChild(fakeBody);

			return {
				matches: bool,
				media: q,
				addListener: function(fn){
					if (!Browser.ie9 && !window.opera) return "";

					if (window.retrieve('rokmediaqueries:listener:' + q.replace(/[a-z]|[(|)|:|\s|-]/gi, ''), false)) return;

					window.store('rokmediaqueries:listener:' + q.replace(/[a-z]|[(|)|:|\s|-]/gi, ''), true);
					window[window.addListener ? 'addListener' : 'attachEvent']('resize', function(){
						var sizes = {}, length = 0, winSize, passed = false;
						q.replace(/(\w+-?\w+)\s?:\s?(\d+){1,}/g, function(match, p1, p2, p3, offset, string){
							sizes[p1] = p2;
							length++;
						});
						if (!length) return;
						else if (length == 1){
							winSize = window.getSize();
							passed = false;
							Object.each(sizes, function(size, dimension){
								if (dimension == 'min-width') passed += winSize.x >= size;
								else if (dimension == 'max-width') passed += winSize.x <= size;
								else if (dimension == 'width') passed += winSize.x == size;
							});
						} else if (length > 1) {
							winSize = window.getSize();
							passed = true;
							Object.each(sizes, function(size, dimension){
								if (dimension == 'min-width') passed *= winSize.x >= size;
								else if (dimension == 'max-width') passed *= winSize.x <= size;
								else if (dimension == 'width') passed *= winSize.x == size;
							});
						}

						if (passed) return fn.call(fn, q);
					});

				}
			};
		};

	})(document);

})());

((function(win, doc){

	if (typeof RokMediaQueries != 'undefined') return;

	var RokMediaQuery = new Class({
		Implements: [Events, Options],
		options: {
			/*
				onChange: function(query){},
			*/
			queries: [
				'(min-width: 1200px)',
				'(min-width: 960px) and (max-width: 1199px)',
				'(min-width: 768px) and (max-width: 959px)',
				'(min-width: 481px) and (max-width: 767px)',
				'(max-width: 480px)'
			]
		},
		initialize: function(options){
			this.setOptions(options);
			this.queries = this.options.queries;
			this.queriesEvents = {};
			this.timers = [];

			for (var i = this.queries.length - 1; i >= 0; i--) {
				var media = win.matchMedia(this.queries[i]);
				media.addListener(this._fireEvent.bind(this, this.queries[i]));
				this.queriesEvents[this.queries[i]] = [];
			}
		},

		on: function(query, funct){
			if (query == 'every'){
				for (var i = this.queries.length - 1; i >= 0; i--) this._addOnMatch(this.queries[i], funct);
			} else {
				this._addOnMatch(query, funct);
			}
		},

		add: function(query){
			if (!this.queries.contains(query)){
				var media;
				this.queries.push(query);
				media = win.matchMedia(query);
				media.addListener(this._fireEvent.bind(this, query));
			}

			if (!this.queriesEvents[query]) this.queriesEvents[query] = [];
		},

		getQuery: function(){
			var current = "";

			for (var i = this.queries.length - 1; i >= 0; i--) {
				if (win.matchMedia(this.queries[i]).matches){
					current = this.queries[i];
					break;
				}
			}

			return current;
		},

		/* private methods */
		_fireEvent: function(query){
			if (!win.matchMedia(query).matches || !Object.getLength(this.queriesEvents) || !this.queriesEvents[query]) return;

			for (var i = this.queriesEvents[query].length - 1; i >= 0; i--) {
				//this.queriesEvents[query][i].delay(5, this, query);
				this.queriesEvents[query][i](query);
			}
		},

		_addOnMatch: function(query, funct){
			this.add(query);
			this.queriesEvents[query].push(funct);
		}
	});

	win.RokMediaQueries = new RokMediaQuery();

})(window, document));


}
/*
     FILE ARCHIVED ON 00:23:49 Mar 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:21:58 Mar 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.974
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 8.869
  LoadShardBlock: 1262.031 (3)
  PetaboxLoader3.datanode: 214.094 (5)
  PetaboxLoader3.resolve: 1549.089 (4)
  load_resource: 532.436 (2)
*/