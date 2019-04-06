$(document).ready(function(){
	
	$("div").hover(function () {
      $(this).effect("bounce", { times:3 }, 300);
	});
	
	$("div").click(
		function () {
 
      $(this).show("blind", { direction: "vertical" }, 1000);
	});
	
	$("button:last").click(function () {
	  $("p:last").fadeToggle("fast", function () {
	$("#log").append("<div>finished</div>");
	  });
	});

   $("a").click(function(event){
     alert("As you can see, the link no longer took you to jquery.com");
     event.preventDefault();
   });
   
	
   
	$("boom ").click(function () {
      $(this).show("explode", { pieces: 16 }, 8000);
	});
	
	$("#accordion a").hover(
	function() {
		elm = $(this);
		spin=setInterval("rword()",80);
			
	},
	function() {
		clearInterval(spin);
		$(this).html(old);
		
	});

      

 });
 
function rword(){
	var len = elm.html().length;
	elm.html(rnum(len));
	}
		
function rnum(stl){
	var chars =".PORDKarT_-"
	var randomstring='';
	for(var i=0; i<stl; i++){
		var rnum = Math.floor(Math.random() *chars.length);
		randomstring += chars.substring(rnum,rnum+1);
			
		}
	return randomstring;
	}
		