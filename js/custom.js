/* jslint devel : true*/
/* global $, document, window*/
var i, j, sections = [];
var url = window.location.href;
var obj = {
	"urls": [
		{
			"linkfrom": "programming",
			"linkto": 5
		},
		{
			"linkfrom": "robotics",
			"linkto": 6
		},
		{
			"linkfrom": "oss",
			"linkto": 7
		},
		{
			"linkfrom": "webd",
			"linkto": 8
		},
		{
			"linkfrom": "solidworks",
			"linkto": 9
		},
		{
			"linkfrom": "animation",
			"linkto": 10
		},
		{
			"linkfrom": "wattack",
			"linkto": 11
		},
		{
			"linkfrom": "designing",
			"linkto": 12
		},
		{
			"linkfrom": "dip",
			"linkto": 13
		}
		  ]
};

$(document).ready(function () {
	'use strict';
	//Fetch all sections and make queue
	sections = $("section.moment"); //Tags array
	//Event linking from url.	
	if (url.search("#") != -1) {
		console.log(url);
		var eventurl = url.slice(url.lastIndexOf("#") + 1); // Gets the part of url after #.
		var flag = false; //To check if eventurl is among the events.
		for (i = 0; i < 9; i++) {
			if (obj.urls[i].linkfrom === eventurl) {
				flag = true; //event found.
				break;
			}
		}
		if (flag) {
			var nextChapter = obj.urls[i].linkto; //Get desired chapter number.
			var visibleChapter = getVisibleChapter();
			$($(sections[visibleChapter])).fadeOut();
			$("button.trigger-backward").show();
			$($(sections[nextChapter])).fadeIn(function() {
					updateMaxHeight(nextChapter-5)
			});
		}
	}
	else {
		$("button.trigger-backward").hide();	
	}
	return sections;
});

// Fetch visible chapter
function getVisibleChapter() {
	for (i = 0; i < sections.length; i++) {
		if ($($(sections[i])).css("display") === "block") break;
	} //got chapter number here
	i = parseInt(i);
	return i;
}

//Update hash
function updateHash(upcoming) {
	if (upcoming <= 13 && upcoming >= 5) {
		var nobj = {
			"title": "",
			"hash": "#" + obj.urls[upcoming - 5].linkfrom
		}
		history.pushState(nobj, nobj.title, nobj.hash);
	} else
		history.pushState({}, " ", " ");
}

//Update event description box height
function updateMaxHeight(i) {
		if (document.body.getBoundingClientRect().width <=700) {
	while (($(window).height() - ($($(".datevenue")[i]).offset().top + $($(".datevenue")[i]).height())) / $(window).height() > 0.12) {
		console.log("running while");
		if ($(".eventDesc")[i].scrollHeight < parseInt(($($(".eventDesc")[i]).css("maxHeight")).substr(0,3))) {
				console.log("breaking");
				break;
		}
		$($(".eventDesc")[i]).css("maxHeight", "+=1");
	}
		}
}
$(window).load(function () {
	//Toggle schedule visibility
	$("button.view-all").click(function () {
		$("div.moments-index").toggleClass("show");
	});

	//Forward and back btn functions
	$("button.js-trigger").click(function () {

		var frwd = $(this).hasClass("trigger-forward"); //true for forward
		var visibleChapter = getVisibleChapter(); //current chapter visible
		var nextChapter = visibleChapter + 1;
		var prevChapter = visibleChapter - 1;

		if (frwd) {
			$("button.trigger-backward").show();
			$($(sections[nextChapter])).fadeIn();
			$($(sections[visibleChapter])).fadeOut();
			updateHash(nextChapter);
			updateMaxHeight(nextChapter - 5);
			if (nextChapter === (sections.length - 1)) $("button.trigger-forward").hide();
		} else {
			$("button.trigger-forward").show();
			$($(sections[prevChapter])).fadeIn();
			$($(sections[visibleChapter])).fadeOut();
			updateHash(prevChapter);
			updateMaxHeight(prevChapter - 5);
			if (prevChapter === 0) $("button.trigger-backward").hide();
		}
	});

	//Explore button
	$("a.js-trigger-forward").click(function (e) {
		e.preventDefault();
		$("button.trigger-backward").show();
		$($(sections[getVisibleChapter() + 1])).fadeIn();
		$($(sections[getVisibleChapter()])).fadeOut();
	});

	//Event linnking from schedule page
	$("li.moments").click(function () {
		var nextChapter = parseInt($(this).data("moment").substr(6, 8)) + 5;
		var visibleChapter = getVisibleChapter(); //current chapter visible
		$("div.moments-index").toggleClass("show");
		$("button.trigger-backward").show();
		$($(sections[visibleChapter])).fadeOut();
		$($(sections[nextChapter])).fadeIn(function() {
			updateHash(nextChapter);
			updateMaxHeight(nextChapter - 5);	
		});
	});

});

$(window).resize(function() {
		console.log("resized");
		updateMaxHeight(getVisibleChapter()-5);
})