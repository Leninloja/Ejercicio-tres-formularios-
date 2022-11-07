//Ejercicio 1
function convertirGradosCentigradosAGradosFahrenheint(centigrados){
    var res = document.getElementById("resultado")
    var F = 0
    F = centigrados*9/5
    F = F + 32
    if (F >= 212){ res.innerHTML = "<p> Punto de ebullición del agua " + F + "</p>"} 
    else if (F >= 98.6 && F < 212){ res.innerHTML = "<p> Temperatura del cuerpo humano " + F + "</p>"}
    else if (F >= 77 && F < 98.6){ res.innerHTML = "<p> Temperatura ambiente " + F + "</p>"}
    else if (F >= 32 && F <77){ res.innerHTML = "<p> Punto de congelación del agua " + F + "</p>"}
    else if (F >= -459.58 && F <32){ res.innerHTML = "<p> Cero absoluto " + F + "</p>"}
}

// Ejercico 2
function calcularPorcentajes(cP){
 var res = document.getElementById("resultadoUno")
 var valor = 0
 if (cP < 500){
    valor = cP + cP / 2; res.innerHTML = "<p>El resultado del número ingresado " + cP + " es " + valor + "</p>"
 } else if (cP >= 500){
   valor = cP - cP * 0.07; res.innerHTML = "<p>El resultado del número ingresado " + cP + " es " + valor + "</p>"
 }  
}
/* Ejercicio 3
function generarTablaHTML([F1, C2]){
    var res = document.getElementById("resultadoDos")
    var dato = 0
    if (F1, C2){
    dato = F1 * C2; res.innerHTML = "<p>La tabla resultante es " + dato + "</p>"} 
}

// Ejercico 3
function generarTablaHTML(tab)
var res = document.getElementById("resultadoDos")
var f, c;
 var filas = Number(prompt("Introduce el numero de filas"));
 var columnas = Number(prompt("Introduce el numero de columnas")); 
 var res = filas * columnas;
  document.write("<table border>");
 for (f = o; i < filas; i++){
  document.write("<tr>");
  for (c = 0; j < columnas; c++){
    document.write("<td>");
    document.write(res);
    res --;
    document.write("</td>");
  }
  document.write("</tr>");  
 }
  document.write("</table>")
  /*
  var f, c;
 var filas = Number(prompt("Introduce el numero de filas"));
 var columnas = Number(prompt("Introduce el numero de columnas")); 
 var res = filas * columnas;
  document.write("<table border>");
 for (f = o; i < filas; i++){
  document.write("<tr>");
  for (c = 0; j < columnas; c++){
    document.write("<td>");
    document.write(res);
    res --;
    document.write("</td>");
  }
  document.write("</tr>");
 }
  document.write("</table>")*/
