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
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;
(function ($) {
    "use strict";

    var methods = (function () {
        // private properties and methods go here
        var c = {
            bcClass: 'sf-breadcrumb',
            menuClass: 'sf-js-enabled',
            anchorClass: 'sf-with-ul',
            menuArrowClass: 'sf-arrows'
        },
        ios = (function () {
            var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (ios) {
                // iOS clicks only bubble as far as body children
                $(window).load(function () {
                    $('body').children().on('click', $.noop);
                });
            }
            return ios;
        })(),
                wp7 = (function () {
                    var style = document.documentElement.style;
                    return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
                })(),
                toggleMenuClasses = function ($menu, o) {
                    var classes = c.menuClass;
                    if (o.cssArrows) {
                        classes += ' ' + c.menuArrowClass;
                    }
                    $menu.toggleClass(classes);
                },
                setPathToCurrent = function ($menu, o) {
                    return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
                            .addClass(o.hoverClass + ' ' + c.bcClass)
                            .filter(function () {
                                return ($(this).children(o.popUpSelector).hide().show().length);
                            }).removeClass(o.pathClass);
                },
                toggleAnchorClass = function ($li) {
                    $li.children('a').toggleClass(c.anchorClass);
                },
                toggleTouchAction = function ($menu) {
                    var touchAction = $menu.css('ms-touch-action');
                    touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                    $menu.css('ms-touch-action', touchAction);
                },
                applyHandlers = function ($menu, o) {
                    var targets = 'li:has(' + o.popUpSelector + ')';
                    if ($.fn.hoverIntent && !o.disableHI) {
                        $menu.hoverIntent(over, out, targets);
                    } else {
                        $menu
                                .on('mouseenter.superfish', targets, over)
                                .on('mouseleave.superfish', targets, out);
                    }
                    var touchevent = 'MSPointerDown.superfish';
                    if (!ios) {
                        touchevent += ' touchend.superfish';
                    }
                    if (wp7) {
                        touchevent += ' mousedown.superfish';
                    }
                    $menu
                            .on('focusin.superfish', 'li', over)
                            .on('focusout.superfish', 'li', out)
                            .on(touchevent, 'a', o, touchHandler);
                },
                touchHandler = function (e) {
                    var $this = $(this),
                            $ul = $this.siblings(e.data.popUpSelector);

                    if ($ul.length > 0 && $ul.is(':hidden')) {
                        $this.one('click.superfish', false);
                        if (e.type === 'MSPointerDown') {
                            $this.trigger('focus');
                        } else {
                            $.proxy(over, $this.parent('li'))();
                        }
                    }
                },
                over = function () {
                    var $this = $(this),
                            o = getOptions($this);
                    clearTimeout(o.sfTimer);
                    $this.siblings().superfish('hide').end().superfish('show');
                },
                out = function () {
                    var $this = $(this),
                            o = getOptions($this);
                    if (ios) {
                        $.proxy(close, $this, o)();
                    } else {
                        clearTimeout(o.sfTimer);
                        o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
                    }
                },
                close = function (o) {
                    o.retainPath = ($.inArray(this[0], o.$path) > -1);
                    this.superfish('hide');

                    if (!this.parents('.' + o.hoverClass).length) {
                        o.onIdle.call(getMenu(this));
                        if (o.$path.length) {
                            $.proxy(over, o.$path)();
                        }
                    }
                },
                getMenu = function ($el) {
                    return $el.closest('.' + c.menuClass);
                },
                getOptions = function ($el) {
                    return getMenu($el).data('sf-options');
                };

        return {
            // public methods
            hide: function (instant) {
                if (this.length) {
                    var $this = this,
                            o = getOptions($this);
                    if (!o) {
                        return this;
                    }
                    var not = (o.retainPath === true) ? o.$path : '',
                            $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                            speed = o.speedOut;

                    if (instant) {
                        $ul.show();
                        speed = 0;
                    }
                    o.retainPath = false;
                    o.onBeforeHide.call($ul);
                    $ul.stop(true, true).animate(o.animationOut, speed, function () {
                        var $this = $(this);
                        o.onHide.call($this);
                    });
                }
                return this;
            },
            show: function () {
                var o = getOptions(this);
                if (!o) {
                    return this;
                }
                var $this = this.addClass(o.hoverClass),
                        $ul = $this.children(o.popUpSelector);

                o.onBeforeShow.call($ul);
                $ul.stop(true, true).animate(o.animation, o.speed, function () {
                    o.onShow.call($ul);
                });
                return this;
            },
            destroy: function () {
                return this.each(function () {
                    var $this = $(this),
                            o = $this.data('sf-options'),
                            $hasPopUp;
                    if (!o) {
                        return false;
                    }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    // remove event handlers
                    $this.off('.superfish').off('.hoverIntent');
                    // clear animation's inline display style
                    $hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
                        return style.replace(/display[^;]+;?/g, '');
                    });
                    // reset 'current' path classes
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sf-options');
                });
            },
            init: function (op) {
                return this.each(function () {
                    var $this = $(this);
                    if ($this.data('sf-options')) {
                        return false;
                    }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                            $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);

                    $this.data('sf-options', o);

                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    applyHandlers($this, o);

                    $hasPopUp.not('.' + c.bcClass).superfish('hide', true);

                    o.onInit.call(this);
                });
            }
        };
    })();

    $.fn.superfish = function (method, args) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
        }
    };

    $.fn.superfish.defaults = {
        popUpSelector: 'ul,.sf-mega', // within menu context
        hoverClass: 'sfHover',
        pathClass: 'overrideThisToUse',
        pathLevels: 1,
        delay: 0,
        animation: {height: 'show'},
        animationOut: {opacity: 'hide'},
        speed: "fast",
        speedOut: "fast",
        cssArrows: true,
        disableHI: false,
        onInit: $.noop,
        onBeforeShow: $.noop,
        onShow: $.noop,
        onBeforeHide: $.noop,
        onHide: $.noop,
        onIdle: $.noop,
        onDestroy: $.noop
    };

    // soon to be deprecated
    $.fn.extend({
        hideSuperfishUl: methods.hide,
        showSuperfishUl: methods.show
    });

})(jQuery);

jQuery(document).ready(function ($) {
    $('ul.nav-menu, ul.woocommerce-menu').supersubs({
        maxWidth: 25, // requires em unit.
        extraWidth: 0						// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
    }).superfish({
        hoverClass: 'nav-hover', // the class applied to hovered list items 
        //	pathClass:		'overideThisToUse',		// the class you have applied to list items that lead to the current page 
        pathLevels: 1, // the number of levels of submenus that remain open or are restored using pathClass 
        delay: 100, // the delay in milliseconds that the mouse can remain outside a submenu without it closing 
        animation: {height: 'show'}, // an object equivalent to first parameter of jQuery�s .animate() method 
        speed:  'normal',
        speedOut: 1, // speed of the animation. Equivalent to second parameter of jQuery�s .animate() method 
        autoArrows: true, // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
        disableHI: false					// set to true to disable hoverIntent detection 
        //	onInit:			function(){},			// callback function fires once Superfish is initialised � 'this' is the containing ul 
        //	onBeforeShow:	function(){},			// callback function fires just before reveal animation begins � 'this' is the ul about to open 
        //  callback function fires after a sub-menu has closed � 'this' is the ul that just closed 
    }); 
});

}
/*
     FILE ARCHIVED ON 13:41:55 Sep 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:10:42 May 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.31 (2)
  exclusion.robots: 0.051 (2)
  exclusion.robots.policy: 0.029 (2)
  esindex: 0.028 (2)
  cdx.remote: 22.628 (2)
  LoadShardBlock: 177.714 (6)
  PetaboxLoader3.datanode: 239.591 (8)
  load_resource: 319.6 (2)
  PetaboxLoader3.resolve: 216.703 (2)
*/