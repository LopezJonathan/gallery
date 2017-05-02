// JavaScript Document
$(function () {
	"use strict";
	$('[data-fancybox]').fancybox({
		image: {
			protect: true
		}
	});

	$("a[rel=blkink]").fancybox();
	$("a[rel=clrink]").fancybox();
});