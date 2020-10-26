var contador=0
function cambiarId (num) {
	for (var i = 0; i <num ; i++) {
		document.getElementById('valor').id="img"+i
		
	};
}


function cambiarIdbtones(num) {
	for (var i = 0; i < num; i++) {
		document.getElementById('boton').id="btn"+i
	};
	for (var i = 0; i <num ; i++) {
		document.getElementById('btn'+i).innerHTML=i
		document.getElementById('btn'+i).value=i
		
		
	};
}


function contar (id) {
	
	document.getElementById(id).src='img/sombra.png'
	document.getElementById(id).onclick=''

	contador++
	document.getElementById("cantidad").innerHTML=contador
	
	
}


function generar(num) {
	texto=""
	
	imagen='<img id="valor" onclick=contar(id) src="img/Koala.jpg" width=150 height=150>'
		
	for (var i = 0; i < num; i++) {
		texto=texto+"  "+imagen	
	};
	document.getElementById("mesa").innerHTML=texto
	cambiarId(num)
}

function generarBotones (num) {
	boton=""
	for (var i = 0; i < num; i++) {
		boton+="  "+'<a id="boton" class="btn btn-primary" style="text-aling:center;"font-size:80px;" id="boton" class="button" value="" onclick="mostrarDato(id)">num</a>'
		
	};
	document.getElementById("botones").innerHTML=boton
	cambiarIdbtones(num)
}

function mostrarDato(dato){
	
	valor=document.getElementById(dato).value
	
	if (valor==contador) {
		
		document.getElementById('mesa').innerHTML='<img id="valor" src="img/correcto.png">'
		
	} else{
		alert('fallaste')
	};
	

}


function star(num){

	generar(num)
	generarBotones(6)
}
