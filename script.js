//Esconde esconde pagina 1 y muestra la 2
var ptsTotal = 0;

//obtener nombre de usuario//
function getName() {
  let name = document.getElementById('username').value;
  //validación de nombre//
  if( name == null || name.length == 0 || /^\s+$/.test(name) ){
    alert('Debes ingresar tu nombre para jugar');
    return false;
  }

  document.getElementById("pagina1").style.display = 'none';
  document.getElementById("pagina2").style.display = 'block';
   //Toma el valor del id name y lo imprime nuevamente en el id bienvenida
  document.getElementById('nombre-usuario').innerHTML = name;

}

//Esconde la pagina 2 y muestra la primera pregunta de la trivia #1

function functionA() {
  document.getElementById("pagina2").style.display = 'none';
  document.getElementById("cielo").style.display = 'block';
}

/*var ptsTotal = 0;*/

function Q1() {
  if (document.getElementById("firstA").checked) {
    ptsTotal += 1;
  }
  document.getElementById("cielo").style.display = "none";
  document.getElementById("sol").style.display = "block";
}
function Q2() {
  if (document.getElementById("secondB").checked) {
    ptsTotal += 1;
  }
  document.getElementById("sol").style.display = "none";
  document.getElementById("madera").style.display = "block";
}
function Q3() {
  if (document.getElementById("thirdA").checked) {
    ptsTotal += 1;
  }

  // Muestra página de respuestas//
  document.getElementById("madera").style.display = "none";
  document.getElementById("final").style.display = "block";
  document.getElementById("resultado").innerHTML =
    "<span>¡Tu puntaje fue " + ptsTotal + "  puntos!</span>";
}
function functionB() {
  document.getElementById("final").style.display = "none";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("pares").style.display = "block";
}
//Establece el total inicial como 0 y tras cada respuesta agrega 1 si es correcta. Se usa style.display para esconder la pregunta previa y mostrar la siguiente

function QC1() {
  if (document.getElementById("primerC").checked) {
    ptsTotal += 1;
  }

  document.getElementById("pares").style.display = "none";
  document.getElementById("primos").style.display = "block";
}
function QC2() {
  if (document.getElementById("segundaC").checked) {
    ptsTotal += 1;
  }
  document.getElementById("primos").style.display = "none";

  document.getElementById("impares").style.display = "block";
}
function QC3() {
  if (document.getElementById("tercerA").checked) {
    ptsTotal += 1;
  }
  //Esconde la ultima pregunta y muestra la ultima página donde se da el resultado total de puntaje

  document.getElementById("impares").style.display = "none";

  document.getElementById("final").style.display = "block";

  document.getElementById("resultado").innerHTML =
    "¡Tu puntaje fue " + ptsTotal + " puntos!";

}

//Volver a las categorías
function backCategories() {
  document.getElementById('pagina2').style.display = 'block';
  document.getElementById('final').style.display = 'none';
}