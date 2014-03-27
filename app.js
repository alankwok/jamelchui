/*
$(document).bind("mobileinit", function () {
	$.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
});
$(document).on("pageinit", "#page", function() {
	$.event.special.swipe.horizontalDistanceThreshold = 100;
	$.event.special.swipe.verticalDistanceThreshold = 100;
	$(document).on("swiperight", "#page", function(e) {
		if ($.mobile.activePage.jqmData("panel") !== "open") {
			if (e.type === "swiperight") {
				$("#panel").panel("open");				
			}
		}
	});
});
$(document).bind('mobileinit', function() {
	$.mobile.autoInitializePage = false;
	$.mobile.allowCrossDomainPages = true;
	$.support.cors = true;		
});	
//	$.mobile.autoInitializePage = false;  
//	$.mobile.initializePage();
//	$.mobile.changePage('#page');  
*/

//$(document).ready(function() {
//	$.mobile.autoInitializePage = false;
//	$.mobile.allowCrossDomainPages = true;
//	$.support.cors = true;
//  $('a').bind('click', function() {this.blur();});  
//	$.event.special.swipe.horizontalDistanceThreshold = 100;
//	$.event.special.swipe.verticalDistanceThreshold = 100;
//	$(document).on("swiperight", "#page", function(e) {
//		if ($.mobile.activePage.jqmData("panel") !== "open") {
//			if (e.type === "swiperight") {
//				$("#panel").panel("open");				
//			}
//		}
//	});  
//});

//$(document).on('ready', function() {
//	$.mobile.autoInitializePage = false;
//	$.mobile.allowCrossDomainPages = true;
//	$.support.cors = true;
//	alert('Here');
//});

$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    var panel = $.ajax({
      url: 'panel.htm',
      async: false
    }).responseText;
    $('[data-role=header]').before(panel);
  }
});