    var url = window.location.href;

    // Array com os selectors dos menus
    var menus = ['.navbar-nav.navbar-right a'];

    for (var i = menus.length - 1; i >= 0; i--) {
        $(menus[i]).filter(function () {
            return this.href == url;
        }).parent('li').addClass('active');
    };

    // Marca o Menu pai quando há submenu
    $('.ancestor .active').parent('ul').parent('.ancestor').addClass('active');

    // Marca os links com a classe '.home' se for a Homepage
    if (window.location.origin + '/' == url) {
        $('li.home').addClass('active');
    }

    // Se não houver
    if (!$('.navbar-nav.navbar-right li').hasClass('active')) {
        $('li.produtos').addClass('active');
    }

    // menu lateral dos produtos

    var sidebar = ['#VertMenu a.list-group-item'];

    for (var i = 0; i < sidebar.length; i++) {
        $(sidebar[i]).filter(function () {
            return this.href == url;
        }).addClass('active').parent('.list-group-submenu').removeClass('collapse').addClass('in').parent('.list-group-submenu').removeClass('collapse').addClass('in').parent('.list-group-submenu').removeClass('collapse').addClass('in');
    }

    // se for a página de um produto
    if (!$('#VertMenu a.list-group').hasClass('active') && $('li.produtos').hasClass('active'))
    {
        for (var i = 0; i < sidebar.length; i++) {
            $(sidebar[i]).filter(function () {
                return (url.indexOf(this.href) > -1);
            }).addClass('active').parent('.list-group-submenu').removeClass('collapse').addClass('in').parent('.list-group-submenu').removeClass('collapse').addClass('in').parent('.list-group-submenu').removeClass('collapse').addClass('in');
        }
    }
