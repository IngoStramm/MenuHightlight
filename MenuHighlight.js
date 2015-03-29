/*
*
* Construção HTML do menu:
* ul > li.active > a
*
* Referência: http://www.paulund.co.uk/use-jquery-to-highlight-active-menu-item
*
*/
$(document).ready(function(){

    var url = window.location.href;

	// Array com os selectors dos menus
	var menus = ['#menu-1 a','#menu-2 a'];

	for (var i = menus.length - 1; i >= 0; i--) {
		$(menus[i]).filter(function () {
		    return this.href == url;
		}).parent('li').addClass('active');
	};

	// Marca os links com a classe '.home' se for a Homepage
	if(window.location.origin + '/' == url) {
	    $('li.home').addClass('active');
	}

}); // $(document).ready(