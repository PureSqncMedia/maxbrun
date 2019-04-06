//icons applications   
$(document).ready(function(){  
$(":button[id*=play] " ).button({ icons: {primary:'ui-icon-circle-triangle-e'} });
$(":button[id*=home] " ).button({ icons: {primary:'ui-icon-home'} });
$(":button[id*=nav] " ).button({ icons: {primary:'ui-icon-arrowthick-1-ne'} });

$("#applenav li" ).button({ icons: {primary:'ui-icon-home'} });
$(":button[id*=nav] " ).button({ icons: {primary:'ui-icon-arrowthick-1-ne'} });
 

 
});  

// td menu popout

$(function() {
	/**
	* for each menu element, on mouseenter, 
	* we enlarge the image, and show both sdt_active span and 
	* sdt_wrap span. If the element has a sub menu (sdt_box),
	* then we slide it - if the element is the last one in the menu
	* we slide it to the left, otherwise to the right
	*/
    $('#sdt_menu > li').bind('mouseenter',function(){
		var $elem = $(this);
		$elem.find('img')
			 .stop(true)
			 .animate({
				'width':'100px',
				'height':'100px',
				'left':'-10px',
				'top':'-20px'
			 },100,'easeOutBack')
			 /**.andSelf()
			 .find('.sdt_wrap')
		     .stop(true)
			 .animate({'top':'140px'},500,'easeOutBack')
			
			 .andSelf()
			 .find('.sdt_active')
		     .stop(true)
			 .animate({'height':'170px'},300,function(){
			var $sub_menu = $elem.find('.sdt_box');
			if($sub_menu.length){
				var left = '170px';
				if($elem.parent().children().length == $elem.index()+1)
					left = '-170px';
				$sub_menu.show().animate({'left':left},200);
			}	
		});**/
	}).bind('mouseleave',function(){
		var $elem = $(this);
		var $sub_menu = $elem.find('.sdt_box');
		if($sub_menu.length)
			$sub_menu.hide().css('left','0px');
		
		$elem.find('.sdt_active')
			 .stop(true)
			 .animate({'height':'0px'},300)
			 .andSelf().find('img')
			 .stop(true)
			 .animate({
				'width':'0px',
				'height':'0px',
				'left':'85px'},400)
			 .andSelf()
			 .find('.sdt_wrap')
			 .stop(true)
			 .animate({'top':'25px'},500);
	});
});


//ajax xrf shit
/*

jQuery(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:)..test(url)); this line is missing .star/.
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});
 * 
 */
/****
$(function() {
		$( "#tabs" ).tabs({
			ajaxOptions: {
				error: function( xhr, status, index, anchor ) {
					$( anchor.hash ).html(
						"Couldn't load this tab. We'll try to fix this as soon as possible. " +
						"If this wouldn't be a demo." );
				}
			}
		});
	});
	
$( document ).ready( function() {
    $( "#searchSubmit" ).click( function() {
        q = $( "#q" ).val();
        $( "#results" ).html( "&nbsp;" ).load( "{% url ajax_user_search %}?q=" + q );
    });
});

$( document ).ajaxStart( function() {
    $( "#spinner" ).show();
}).ajaxStop( function() {
    $( "#spinner" ).hide();
});	
**/

   

//load that never worked
/*

$(document).ready(function(){  

   
    var sections = $("#menu li");  
	var loading = $("#loading");  
	var loaded = $("#loaded"); 
	
		 //show loading bar  
	function showLoading(){  
	    loading  
	        .css({visibility:"visible"})  
	        .css({opacity:"1"})  
	        .css({display:"block"})  
	    ;  
	}  
	//hide loading bar  
	function hideLoading(){  
	    loading.fadeTo(1000, 0);  
	    loaded.slideDown();  
	}; 
	
	    //Manage click events  
	sections.click(function(){  
	    //show the loading bar  
	    showLoading();  
	    //load selected section  
	    switch(this.id){  
	        case "home":  
	            loaded.slideUp();  
	            loaded.load("/home/trak/Templates/tdcreative/sections.html #section_home", hideLoading);  
	            break;  
	        case "news":  
	            loaded.slideUp();  
	            loaded.load("/home/trak/Templates/tdcreative/sections.html #section_news", hideLoading);  
	            break;  
	        case "interviews":  
	            loaded.slideUp();  
	            loaded.load("sections.html #section_interviews", hideLoading);  
	            break;  
	        case "external":  
	            loaded.slideUp();  
	            loaded.load("external.html", hideLoading);  
	            break;  
	        default:  
	            //hide loading bar if there is no selected section  
	            hideLoading();  
	            break;  
	    }  
	});  
});    
 * 
 */
   
