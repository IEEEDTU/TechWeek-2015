/* jslint devel : true*/
/* global $, document, window*/
var i, j, sections = [], chapter = [];
$(document).ready(function () {
	'use strict';
	sections = $("section.moment");//Tags array
	for ( i = 0 ; i < sections.length ; i++ ) {
		j = sections[i];
		chapter[i] = parseInt($(j).data("chapter").substr(6,8));//Chapter numbers array
	}
	return chapter, sections;
});

// Fetch visible chapter
function getVisibleChapter () {
	for ( i = 0; i<sections.length; i++) {
		if($($(sections[i])).css("display") === "block") break;
	}//got chapter number here
	return i;
}

$(window).load(function () {
	$("button.trigger-backward").hide();//Hide back btn on load
	
	$("button.js-trigger").click(function () {
		
		var frwd = $(this).hasClass("trigger-forward");//true for forward
		var visibleChapter = getVisibleChapter();//current chapter visible
		var nextChapter = parseInt(visibleChapter + 1);
		var prevChapter = parseInt(visibleChapter - 1);

		if(frwd) {
			$("button.trigger-backward").show();
			$($(sections[nextChapter])).fadeIn();
			$($(sections[visibleChapter])).fadeOut();
			if(nextChapter == 20) $("button.trigger-forward").hide();
		}
		else {
			$("button.trigger-forward").show();
			$($(sections[prevChapter])).fadeIn();
			$($(sections[visibleChapter])).fadeOut();
			if(prevChapter == 0) $("button.trigger-backward").hide();
		}
	});
});