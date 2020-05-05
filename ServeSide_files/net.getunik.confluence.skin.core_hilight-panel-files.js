WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'net.getunik.confluence.skin.core:hilight-panel-files', location = 'net/getunik/confluence/skin/core/theme/js/includes/jquery.hilight-panel.js' */
AJS.toInit(function(a){jQuery("#inline-dialog-selection-action-panel").livequery(function(){var b=jQuery(this);if(jQuery("#content, #bv-landingpage").size()){if(a(".guCommentBox").size()===0){b.find(".aui-button[data-key='com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment']").remove()}if(b.find(".aui-button").size()===0){b.remove()}}else{b.remove()}});a(".quick-comment-prompt").click(function(){a(".guCommentBox.minimized").removeClass("minimized")})});
}catch(e){WRMCB(e)};