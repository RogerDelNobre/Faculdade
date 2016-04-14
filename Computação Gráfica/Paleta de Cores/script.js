$(document).ready(function(){
	$('input').mousemove(function(e){
		if (e.which == 1){
			modifica_hsl();
		}
	});
	$('input').click(function(){
		modifica_hsl();
	});
});

function modifica_hsl(){
	var h = document.getElementById('h').value;
	var s = document.getElementById('s').value;
	var l = document.getElementById('l').value;
	var cor = ('hsl('+h+','+s+'%,'+l+'%)');
	var sat = "-webkit-linear-gradient(left, hsl("+h+", 0%, 50%), hsl("+h+", 10%, 50%), hsl("+h+", 20%, 50%), hsl("+h+", 30%, 50%), hsl("+h+", 40%, 50%), hsl("+h+", 50%, 50%), hsl("+h+", 60%, 50%), hsl("+h+", 70%, 50%), hsl("+h+", 80%, 50%), hsl("+h+", 90%, 50%), hsl("+h+", 100%, 50%))";
	var light = "-webkit-linear-gradient(left, hsl("+h+", 100%, 0%), hsl("+h+", 100%, 10%), hsl("+h+", 100%, 20%), hsl("+h+", 100%, 30%), hsl("+h+", 100%, 40%), hsl("+h+", 100%, 50%), hsl("+h+", 100%, 60%), hsl("+h+", 100%, 70%), hsl("+h+", 100%, 80%), hsl("+h+", 100%, 90%), hsl("+h+", 100%, 100%))";
	$(".saturation").css("background",sat);
	$(".lightness").css("background",light);
	$('.preview').css("background-color", cor);
	document.getElementById("resposta").innerHTML = cor;
}