$(document).ready(function(){
		var $url = "";
	  $("#jquery_jplayer_1").jPlayer({
		ready: function () {
		  $(this).jPlayer("setMedia", {
			m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
			oga: "/site_media/{{ song.beatzfile.url }}"
		  });
		},
		swfPath: "/js",
		supplied: "m4a, oga"
	  });
});
