$(document).ready(function(){
  centraVentana();
  muestraVentana();
  //Agregamos el evento "click" del div: ventanaPopup1Cerrar
  $("#ventanaPopup1Cerrar").click(function(){
    ocultaVentana();
  });
  //Agregamos el evento "click" del div: ventanaPopup1Fondo
  $("#ventanaPopup1Fondo").click(function(){
    ocultaVentana();
  });

function centraVentana() {
  //Obtenemos ancho y alto del navegador, y alto y ancho de la popUp
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var popupHeight = $("#ventanaPopup1").height();
  var popupWidth = $("#ventanaPopup1").width();
  //centering
  $("#ventanaPopup1").css({
    "position": "absolute",
    "top": windowHeight/2-popupHeight/2,
    "left":windowWidth/2-popupWidth/2
  });
 
  //Solo se necesita para IE6
  $("#ventanaPopup1Fondo").css({
    "height": windowHeight
  });
}
 
function ocultaVentana() {
  $("#ventanaPopup1Fondo").fadeOut("slow");
  $("#ventanaPopup1").fadeOut("slow");
}
 
function muestraVentana() {
  $("#ventanaPopup1Fondo").css({
    "opacity": "0.5"
  });
  $("#ventanaPopup1Fondo").fadeIn("slow");
  $("#ventanaPopup1").fadeIn("slow");
}

$.fn.cycle.defaults.timeout = 7000;
$('#s6').cycle({ 
    fx:     'fade', 
    timeout: 7000, 
    delay:  -2000 
});
});