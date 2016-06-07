$(document).ready(function(){

	$('a.location').click(function(e) {
		if ($(this).parent().hasClass('selected')) {
			$(this).parent().children('ul.sub-list').slideUp();
		} else {
			$(this).parent().children('ul.sub-list').slideDown();
		}
		$(this).parent().toggleClass('selected');
	});

	var links = [];
	$('a.page').each(function() {
		links.push(this);
	});

	var pages = [];
	$('li.modal-item').each(function() {
		pages.push(this);
	});

	$('a.page').click(function(e) {
		$('#outer-contain').removeClass('off').removeClass('set-back');
		var index = links.indexOf(this);
		if (index < 0) return false;
		pages.forEach(function (page) { $(page).removeClass('selected'); });
		$(pages[index]).addClass('selected');
		links.forEach(function (link) { $(link).removeClass('selected'); });
		$(links[index]).addClass('selected');
		$('#main-nav').removeClass('open');
	});

	$('#close-modal').click(function(e) {
		$('#outer-contain').addClass('off').addClass('set-back');
		pages.forEach(function (page) { $(page).removeClass('selected'); });
		links.forEach(function (link) { $(link).removeClass('selected'); });
	});

	$('#toggle-menu').click(function(e) {
		$('#main-nav').toggleClass('open');
	});

});

