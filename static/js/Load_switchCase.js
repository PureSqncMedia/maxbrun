  
var songurl;

function displayurl(url)
	{
		songurl = url;
	alert("alert the urll yo");
	}
	
$(document).ready(function() {   
    $('.list').click(function () {           
$('#message').load('namesinfo.htm li');
        return false;   
    });
});
    

$(document).ready(function(){  

   
    var sections = $("#menu li");  
	var loading = $("#loading");  
	var content = $("#content"); 
	
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
	    content.slideDown();  
	}; 
	
	    //Manage click events  
	sections.click(function(){  
	    //show the loading bar  
	    showLoading();  
	    //load selected section  
	    switch(this.id){  
	        case "home":  
	            content.slideUp();  
	            content.load("/home/trak/Templates/tdcreative/sections.html #section_home", hideLoading);  
	            break;  
	        case "news":  
	            content.slideUp();  
	            content.load("/home/trak/Templates/tdcreative/sections.html #section_news", hideLoading);  
	            break;  
	        case "interviews":  
	            content.slideUp();  
	            content.load("sections.html #section_interviews", hideLoading);  
	            break;  
	        case "external":  
	            content.slideUp();  
	            content.load("external.html", hideLoading);  
	            break;  
	        default:  
	            //hide loading bar if there is no selected section  
	            hideLoading();  
	            break;  
	    }  
	});  
});    

   

$(document).ready(function(){
	
	var $wrapper=$('#scroller a img');
	  
	
	var leftanimator = function(imgblock) {
	imgblock.animate({left:-310 }, 1000);
	}
	
	var rightanimator = function(imgblock) {
	imgblock.animate({left:0 }, 1000);
	}

	
   
	$(":button[id*=play] " ).button({ icons: {primary:'ui-icon-circle-triangle-e'} });
	$(":button[id*=home] " ).button({ icons: {primary:'ui-icon-home'} });
	$(":button[id*=nav] " ).button({ icons: {primary:'ui-icon-arrowthick-1-ne'} });
	
	//image scroller part
	
	$('.leftarrow').click(function(event){
	leftanimator($wrapper);
	event.preventDefault();
	});
	
	$('.rightarrow').click(function(event){
	rightanimator($wrapper);
	event.preventDefault();
	});
	
	

});
 
