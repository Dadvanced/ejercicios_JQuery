$(document).ready(function() {
	$("#adornar").on("click", bolas); //añade bolas al clickar el botón	
	contador = 0;
	bolasCreadas = 0;

	$("#mover").on("click", sacudir);
})


function bolas() {
	$("#eliminadas").text(0);
	bolasCreadas++; //aumenta el contador que lleva las bolas que hemos creado
	contador++; //lo usaremos para añadir un ID a la bolita
	var numMin = 191; //número mínimo que tomará el ejeX de la bolita
	var numMax = 191; //número máximo que tomará el ejeX de la bolita
	var bola = $("<div></div>").attr("id", "bolita"+contador).addClass("bolita"); //creamos la bola y le añadimos clase e ID
	$("#creadas").text(bolasCreadas);

	$("#juego").append(bola); //añadimos la bola al documento
	var topBolita = parseInt(Math.random()*330); //la altura de la bolita será aleatoria


	//con este bucle vamos a aumentar el tamaño del ejeY de la bolita según su altura
	for (var i = 0; i <= parseInt(topBolita); i++) {
		if ((i > 0) && (i % 2 == 0)) { //cada 2 pixeles aumenta en 1 el nummMax y el numMin del ejeX de la bolita
			numMin--;
			numMax++;
		}
	}

	var leftBolita = parseInt(Math.random()*(numMax-numMin)) + numMin; //posicion aleatoria de la bolita en el eje horizontal

	$("#bolita"+contador).css({left: leftBolita, top: (topBolita)}); //una vez añadida la bola (y no antes) modificamos el eje X de la bola
}

function sacudir() {
	$("#eliminadas").text(bolasCreadas); //muestra el total de las bolas creadas como bolas eliminadas
	bolasCreadas = 0; //resetea el contador de bolas creadas
	$("#creadas").text(bolasCreadas); //resetea el contador de bolas creadas

	//creamos el efecto de sacudida con éste bucle
	for (var i = 0; i <= 5; i++) {
		$("#arbol").animate({left:  '+=10px'}, 100);
		$("#arbol").animate({left:  '-=10px'}, 100);
	}

	$(".bolita").animate({top: 360}, 500); //las bolas caen a la base del árbol
	$(".bolita").fadeOut(); //hace desaparecer todas las bolas creadas con un fundido
	//$(".bolita").remove(); //elimina todas las bolas creadas
}
