/* jslint devel : true*/
/* global $, document, window*/
var i, j, sections = [], chapter = [], sectionsTitle = [];
$(document).ready(function () {
	'use strict';
	sectionsTitle[0] = "Home";
	sectionsTitle[1] = "Intro";
	sectionsTitle[2] = "Intro 1";
	sectionsTitle[3] = "Intro 2";
	sectionsTitle[4] = "Intro 3";
	sectionsTitle[5] = "Intro 4";
	sectionsTitle[6] = "Event";
	sectionsTitle[7] = "Event";
	sectionsTitle[8] = "Event";
	sectionsTitle[9] = "Event";
	sectionsTitle[10] = "Event";
	sectionsTitle[11] = "Event";
	sectionsTitle[12] = "Event";
	sectionsTitle[13] = "Event";
	sectionsTitle[14] = "Event";
	sectionsTitle[15] = "Event";
	sectionsTitle[16] = "Event";
	sectionsTitle[17] = "Event";
	//Fetch all sections and make queue
	sections = $("section.moment");//Tags array
	for ( i = 0 ; i < sections.length ; i++ ) {
		j = sections[i];
		chapter[i] = parseInt($(j).data("chapter").substr(6,8));//Chapter numbers array
		$("ul.moments-index-list").append("<li data-linkto="+chapter[i]+"><a href='#'>"+sectionsTitle[i]+"</a></li>");
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
	
	$("button.view-all").click(function () {
		$("div.moments-index").toggleClass("show");
	});
	
	$("ul.moments-index-list li").click(function () {
		$("button.trigger-backward").show();
		var linkTo = parseInt($(this).data("linkto"));//chapter number requested
		var sectTo = $(sections[linkTo]);
		$("div.moments-index").toggleClass("show");
		$(sections).not(sectTo).hide();
		sectTo.show();
		//Button visibility correction
		if(linkTo === (sections.length - 1)) {
			$("button.trigger-backward").show();
			$("button.trigger-forward").hide();
		}
		if(linkTo === 0) {
			$("button.trigger-backward").hide();
			$("button.trigger-forward").show();
		}
	});
	
	$("button.js-trigger").click(function () {
		
		var frwd = $(this).hasClass("trigger-forward");//true for forward
		var visibleChapter = getVisibleChapter();//current chapter visible
		var nextChapter = parseInt(visibleChapter + 1);
		var prevChapter = parseInt(visibleChapter - 1);

		if(frwd) {
			$("button.trigger-backward").show();
			$($(sections[nextChapter])).fadeIn();
			$($(sections[visibleChapter])).fadeOut();
			if(nextChapter === (sections.length - 1)) $("button.trigger-forward").hide();
		}
		else {
			$("button.trigger-forward").show();
			$($(sections[prevChapter])).fadeIn();
			$($(sections[visibleChapter])).fadeOut();
			if(prevChapter === 0) $("button.trigger-backward").hide();
		}
	});
});