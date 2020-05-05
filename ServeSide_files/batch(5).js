WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'net.getunik.confluence.skin.core:header-left-search-resources', location = 'net/getunik/confluence/skin/core/theme/js/includes/header-left-search.js' */
AJS.toInit(function(d){var b=d("#quick-search-query");var e=b.parents("li:first");var c="search-focus";var a="search-hover";b.focusin(function(){e.addClass(c);f()}).focusout(function(){e.removeClass(c);f()}).hover(function(){e.addClass(a);f()},function(){e.removeClass(a);f()});var f=function(){if(e.hasClass(c)||e.hasClass(a)){e.addClass("active-search-field")}else{e.removeClass("active-search-field")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'net.getunik.confluence.skin.core:skins.bernina', location = 'net/getunik/confluence/skin/core/theme/js/skins/bernina.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var c=b("#main-header .page-metadata, #content.view > .page-metadata");if(!a.DarkFeatures.isEnabled("bv.skin.core.page-metadata.no.hover")&&a.params.pageId){var d=b("#main-header , #content.view > .page-metadata");d.hover(function(){c.stop().animate({opacity:1},"fast")},function(){c.stop().animate({opacity:0},"fast")})}else{c.css({opacity:1})}})});
}catch(e){WRMCB(e)};