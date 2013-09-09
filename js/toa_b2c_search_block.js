/**
 * @file 
 * This file conteins the necessary javascript for TOA search block.
 */

var funcionCallback = function (data) {
	jQuery('#searcher').whiteSearcher(data);
};

var loadSearcher = function () {
	var url = "http://reservas.emergya.es/searcher.htt";
	var params = {
	  callback: function(data){ funcionCallback(data);},
	  callbackParamName: "searcherCallback",
	  params: {}
	};
	jQuery.jsonp.call(url, params);
};

jQuery(document).ready(function() {
  loadSearcher();
});
