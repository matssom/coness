// import StickyHeader from './modules/StickyHeader';
// import MobileMenu from './modules/MobileMenu';

import $ from 'jquery';

// MobileMenu
$("#menu-button").click(function () {
	$("#mobile-menu").css("display","block");
});

// Overlay
$(".overlay-btn").click(function() {
	var id = $(this).attr("id");
	$("#overlay-" + id).css("display","block");
});

$(document).mouseup(function(e) 
{
    var container = $(".overlay");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.css("display","none");
    }
});