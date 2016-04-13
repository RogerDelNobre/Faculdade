$(document).ready(function(){
	$('input').click(function(){
		var h = document.getElementById('h').value;	
		var s = document.getElementById('s').value;
		var l = document.getElementById('l').value;
		//var a = document.getElementById('a').value;
		var a = 1.0;
		var cor = ('hsla('+h+','+s+'%,'+l+'%,'+a+')');
		var sat = "-webkit-linear-gradient(left, hsla("+h+", 0%, 50%, 1), hsla("+h+", 10%, 50%, 1), hsla("+h+", 20%, 50%, 1), hsla("+h+", 30%, 50%, 1), hsla("+h+", 40%, 50%, 1), hsla("+h+", 50%, 50%, 1), hsla("+h+", 60%, 50%, 1), hsla("+h+", 70%, 50%, 1), hsla("+h+", 80%, 50%, 1), hsla("+h+", 90%, 50%, 1), hsla("+h+", 100%, 50%, 1))";
		var light = "-webkit-linear-gradient(left, hsla("+h+", 100%, 0%, 1), hsla("+h+", 100%, 10%, 1), hsla("+h+", 100%, 20%, 1), hsla("+h+", 100%, 30%, 1), hsla("+h+", 100%, 40%, 1), hsla("+h+", 100%, 50%, 1), hsla("+h+", 100%, 60%, 1), hsla("+h+", 100%, 70%, 1), hsla("+h+", 100%, 80%, 1), hsla("+h+", 100%, 90%, 1), hsla("+h+", 100%, 100%, 1))";
		
		$(".saturation").css("background",sat);
		$(".lightness").css("background",light);
		$('.preview').css("background-color", cor);
	});
});




