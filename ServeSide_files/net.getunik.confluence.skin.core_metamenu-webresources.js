WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'net.getunik.confluence.skin.core:metamenu-webresources', location = 'net/getunik/confluence/skin/core/theme/templates/soy/menu.soy' */
// This file was automatically generated from menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.EnterpriseTheme.Menu.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.EnterpriseTheme == 'undefined') { Confluence.Templates.EnterpriseTheme = {}; }
if (typeof Confluence.Templates.EnterpriseTheme.Menu == 'undefined') { Confluence.Templates.EnterpriseTheme.Menu = {}; }


Confluence.Templates.EnterpriseTheme.Menu.demoMenuDialog = function(opt_data, opt_ignored) {
  return '<div><p>' + soy.$$escapeHtml('We noticed that your menu is still empty. Do you want to create a demo menu?') + '</p><p><button class="create-demo-menu aui-button aui-button-primary">' + soy.$$escapeHtml('Yes') + '</button><button id="no-demo-menu" class="aui-button aui-button-link">' + soy.$$escapeHtml('No') + '</button></p></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.EnterpriseTheme.Menu.demoMenuDialog.soyTemplateName = 'Confluence.Templates.EnterpriseTheme.Menu.demoMenuDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'net.getunik.confluence.skin.core:metamenu-webresources', location = 'net/getunik/confluence/skin/core/theme/js/includes/metamenu.js' */
window.EnterpriseTheme=window.EnterpriseTheme||{};window.EnterpriseTheme.MegaMenu=window.EnterpriseTheme.MegaMenu||{};AJS.toInit(function(f){function g(o){var p=f(window).scrollTop(),q=p+f(window).height(),k=o.offset().top,n=k+o.outerHeight(),l=k<p?p:k,m=n>q?q:n;return Math.max(m-l,0)}var d=f("#main");var j=f("#main-footer");i();f(window).on("scroll resize",(function(){i()}));function i(){var k=g(d);var l=g(j);d.attr("visible-height",k);j.attr("visible-height",l)}if(f(".metamenu-empty").length){var e=function(l,k,m){l.empty();l.append(Confluence.Templates.EnterpriseTheme.Menu.demoMenuDialog());m();return false};var c=AJS.InlineDialog(f(".metamenu-empty"),"demoMenuDialog",e,{arrayOffsetX:20,offsetX:20,offsetY:20,width:250,hideDelay:null});c.show()}else{if(typeof(f.fn.dcMegaMenu)!=="undefined"){var b={rowItems:"3",speed:0,effect:"fade",event:"click",fullWidth:false};if(typeof(window.EnterpriseTheme.MegaMenu)!=="undefined"){b=f.extend(b,window.EnterpriseTheme.MegaMenu)}f(".metamenu").each(function(){var k=f(this);var l=f.extend(b,{event:k.data("event")});k.find(".mega-menu").dcMegaMenu(l)})}}var a=function(){AJS.safe.ajax({type:"POST",dataType:"json",data:{},url:Confluence.getContextPath()+"/rest/enterprisetheme/1.0/menu/createdemo",success:function(){location.reload()}})};var h=function(){AJS.safe.ajax({type:"POST",url:Confluence.getContextPath()+"/rest/enterprisetheme/1.0/menu/nodemo",dataType:"json",data:{},success:function(){c.hide()}})};f(".create-demo-menu").click(a);f("#no-demo-menu").click(h)});
}catch(e){WRMCB(e)};