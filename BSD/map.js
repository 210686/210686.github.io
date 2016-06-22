$("#zac").hide();
$("#map").hide();
$("#jason").click(function(){
	$("#jason").hide();
	$("#map").fadeIn(2000);
	$("#zac").show();
});

$("#zac").click(function(){
	$("#jason").show();
	$("#map").fadeOut(2000);
	$("#zac").hide();
});