/* jslint devel : true*/
/* global $, document, window*/
var i, j, sections = [];
$(document).ready(function () {
	'use strict';
	//Fetch all sections and make queue
	sections = $("section.moment");//Tags array
	for ( i = 0 ; i < sections.length ; i++ )
		j = sections[i];
	return sections;
});

// Fetch visible chapter
function getVisibleChapter () {
	for ( i = 0; i<sections.length; i++) {
		if($($(sections[i])).css("display") === "block") break;
	}//got chapter number here
	i = parseInt(i);
	return i;
}

$(window).load(function () {
	//Hide back btn on load
	$("button.trigger-backward").hide();
	
	//Toggle schedule visibility
	$("button.view-all").click(function () {
		$("div.moments-index").toggleClass("show");
	});
	
	//Forward and back btn functions
	$("button.js-trigger").click(function () {
		
		var frwd = $(this).hasClass("trigger-forward");//true for forward
		var visibleChapter = getVisibleChapter();//current chapter visible
		var nextChapter = visibleChapter + 1;
		var prevChapter = visibleChapter - 1;

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
	
	//Explore button
	$("a.js-trigger-forward").click(function(e) {
		e.preventDefault();
		$("button.trigger-backward").show();
		$($(sections[getVisibleChapter() + 1])).fadeIn();
		$($(sections[getVisibleChapter()])).fadeOut();
	});
	
	//Event linnking from schedule page
	$("li.moments").click(function() {
		var nextChapter = parseInt($(this).data("moment").substr(6,8)) + 5;
		var visibleChapter = getVisibleChapter();//current chapter visible
		$("div.moments-index").toggleClass("show");
		$($(sections[visibleChapter])).fadeOut();
		$("button.trigger-backward").show();
		$($(sections[nextChapter])).fadeIn();
	});
	
	//Event linking from url.
	var url = window.location.href;
	if(url.search("#event_") != -1) {
		//Gets the part of url after #event_ as integer.
		var nextChapter = parseInt(url.substr(url.lastIndexOf("_")+1,2));
		if (nextChapter >= 1 && nextChapter <= 9) {
			nextChapter += 4;
			var visibleChapter = getVisibleChapter();//current chapter visible
			$($(sections[visibleChapter])).fadeOut();
			$("button.trigger-backward").show();
			$($(sections[nextChapter])).fadeIn();
		}
	}
});